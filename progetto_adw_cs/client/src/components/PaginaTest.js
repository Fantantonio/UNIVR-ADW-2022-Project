import { useEffect, useState } from "react";
import Axios from "axios";
import RispostaSingola from "./RispostaSingola";
import PaginaFineTest from "./PaginaFineTest";
import { useQuery } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';
import { GET_DOMANDA, GET_DOMANDE_OF_TEST, GET_RISPOSTA } from "../gql/Query";
import { resultKeyNameFromField } from "@apollo/client/utilities";



const PaginaTest = ({setPage, userRole, userId, nomeTest, dataTest, flagOrdineCasuale, flagDomandeNumerate}) => {
    
    const [selectError, setSelectError] = useState("");
    const [usertest, setUserTest] = useState(undefined);
    const [question, setQuestion] = useState(undefined);
    const [isLoading, setLoading] = useState(true);
    const [answers, setAnswers] = useState([]);
    const [isFirstInstance, setFirstInstance] = useState(false);
    const [isTestCompleted, setTestCompleted] = useState(false);
    const [numeratedQuestion, setNumeratedQuestion] = useState([]);

 
    let flagDomandeNumerateCasted = (flagDomandeNumerate ==='true');
    let flagCasted = (flagOrdineCasuale === 'true');

    function refreshPage() {
        window.location.reload();
      }

    // Mostra l'errore in caso ci sia
    const showSelectError = () => {
        let content = <></>;
        if (selectError !== "") {
            content =
                <>
                <div className="alert alert-danger mt-3" role="alert">
                    {selectError}
                </div>
                </>;
        }
        return content;
    }

    // Mischia un array randomicamente
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    // Get all data question from "nome" and add them to question in SetQuestionAux
    const queryApollo = () => {
        return new Promise((resolve, reject) => {
            resolve(getLazyResults({variables: {nome:usertest.nome_ultima_domanda}}));
      
        })

    }

    const queryRisposte = () => {
        return new Promise((resolve, reject) => {      
            resolve(getLazyRisposte({variables: {idDomanda:usertest.nome_ultima_domanda}}));
           
        })
    }

    const queryDomandeTest = () => {
        return new Promise((resolve, reject) => {      
            resolve(getLazyDomandeTest({ variables: {datatest: dataTest, nometest: nomeTest}} ));
           
        })
    }

    // Serve per ottenere tutti i dati della domanda dal nome, renderizzarli o passarli a risposta
    const SetQuestionAux = () => {
        let questionList = [];
        let arrayDomanda = [];
        let arrayDomandeNumerated_temp = [];

        // TODO: function that get all question data from "nome" and add them to question
        queryApollo().then(result => { 

            setQuestion(result.data.getDomanda);
            queryRisposte().then(rest => {
 
                if(!isFirstInstance){

                    queryDomandeTest().then(result =>{
   
                        questionList = result.data.getDomandeOfTest;
                        arrayDomanda = Object.values(questionList);
                        
        
                        arrayDomanda.forEach((question) => {
                            arrayDomandeNumerated_temp.push(question.domanda.nome); //ArrayTemporaneo per lo useSet in modo da utilizzarlo nel render
                    
                        });

                        setNumeratedQuestion(arrayDomandeNumerated_temp);
       
                    })    
                  
                }

                setAnswers(rest.data.getRisposta);
                setLoading(false);

            })
          
        })

    }


    // TODO: necessiti di una API che prenda il test e controlli ordineCasuale prima di lanciare questo
    const GenerateQuestionsOrder = (flagOrdineCasuale) => {
        return new Promise((resolve, reject) => {  
            let questionList = [];
            let questionOrder = "1";
            let questionRandomOrder = "1";
            let arrayDomanda = [];
            let arrayDomandeNumerated_temp = [];
            /*
            // TODO: get all questions and order them in a [] accordingly to Test ordineCasuale
            // usa x.data.getDomandeOfTest per passarlo a shuffle        */


            queryDomandeTest().then(result =>{
   
                questionList = result.data.getDomandeOfTest;
                arrayDomanda = Object.values(questionList);
                

                arrayDomanda.forEach((question) => {
                    arrayDomandeNumerated_temp.push(question.domanda.nome); //ArrayTemporaneo per lo useSet in modo da utilizzarlo nel render
                    questionOrder += `,${question.domanda.nome}`;
                });

                setNumeratedQuestion(arrayDomandeNumerated_temp);

                if(!flagOrdineCasuale){              
                    // sarebbe così ",Dom 1,Dom 2,..." => lo rende così "Dom 1,Dom 2,..."
                    questionOrder = questionOrder.substring(1);
                    questionOrder = questionOrder.substring(1);

                    resolve(questionOrder);
                
                }else{
                    // collect all domande from each data and save them in questionList

                    if (arrayDomanda.length > 0) {
                        shuffle(arrayDomanda);

                        arrayDomanda.forEach((question) => {
                            questionRandomOrder += `,${question.domanda.nome}`;
                        });

                        // sarebbe così ",Dom 1,Dom 2,..." => lo rende così "Dom 1,Dom 2,..."
                        questionRandomOrder = questionRandomOrder.substring(1);
                        questionRandomOrder = questionRandomOrder.substring(1);

                        resolve(questionRandomOrder);
                    }
                    else {
                        return "";}
                }

            })  
        })
    }

    const getNextQuestion = () => {
        let splitted = usertest.ordine_domande.split(",");
        let index = splitted.indexOf(usertest.nome_ultima_domanda);
        // se c'è una domanda successiva
        if (index < splitted.length - 1) {
            return splitted[index + 1];
        } else {
            return false;
        }
    }

    // Fa il PUT dopo il click su conferma
    const updateTest = () => {
        //console.log("UPDATING...");
        if (document.querySelector('input[type=radio]:checked') !== null) {
            let idRispostaData = document.querySelector('input[type=radio]:checked').value;
            let idRisposteDate = `${idRispostaData}`;
            let nomeUltimaDomanda = getNextQuestion();

            // Se c'è una domanda successiva
            if (nomeUltimaDomanda !== false) {
                if (usertest.id_risposte_date !== "") {
                    idRisposteDate = `${usertest.id_risposte_date},${idRispostaData}`;
                }
                Axios.put("http://localhost:5000/usertest", {
                    params: {
                        id: usertest.id,
                        nomeUltimaDomanda: nomeUltimaDomanda,
                        ordineDomande: usertest.ordine_domande,
                        idRisposteDate: idRisposteDate
                    }
                }).then((response) => {
                    if (response.data.err) {
                        console.error(response.data.message);
                    } else {
                        setSelectError("");
                        setLoading(true);
                        userTestGet();
                       
                    }
                });
            } // Altrimenti modifica lo stato della pagina con quella PaginaFineTest
            else {
                if (usertest.id_risposte_date !== "") {
                    idRisposteDate = `${usertest.id_risposte_date},${idRispostaData}`;
                }
                Axios.put("http://localhost:5000/usertest", {
                    params: {
                        id: usertest.id,
                        nomeUltimaDomanda: nomeUltimaDomanda,
                        ordineDomande: usertest.ordine_domande,
                        idRisposteDate: idRisposteDate
                    }
                }).then((response) => {
                    if (response.data.err) {
                        console.error(response.data.message);
                    } else {
                        setPage("PaginaFineTest");    
                    }
                });

            }
        } else {
            setSelectError("Almeno una risposta deve essere selezionata.");
        }
    }

    // Fa il GET del test e ottiene {id, id_utente, nome_test, data_test, nome_ultima_domanda, ordine_domande, id_risposte_date}
    const userTestGet = () => {
        return new Promise((resolve, reject) => {

        Axios.get("http://localhost:5000/usertest", {
            params: {
                userId: userId,
                nomeTest: nomeTest,
                dataTest: dataTest
            }
        }).then((response) => {
            if (response.data.message) {
                console.error(response.data.message);
            } else {
                // Qui si entra solo la prima volta
                if (response.data.nome_ultima_domanda === "false") {
                    setTestCompleted(true);
                }

                if (response.data.ordine_domande === "") {
                    setFirstInstance(true);
                    // Genera l'ordine e lo salva in usertest
                    let ordineDomande = [];

                    GenerateQuestionsOrder(flagCasted).then(result => {
                    ordineDomande= result;
                
                    Axios.put("http://localhost:5000/usertest", {
                        params: {
                            id: response.data.id,
                            nomeUltimaDomanda: ordineDomande.split(",")[0],
                            ordineDomande: ordineDomande,
                            idRisposteDate: ""
                        }
                    }).then((response) => {
                        if (response.data.err) {
                            console.error(response.data.message);
                        } else {
                            setSelectError("");
                            userTestGet();
                        }
                    }); 
                
                });
                }
                setUserTest(response.data);
                SetQuestionAux();
                resolve(response.data);  
 
            }
        })})
    }
    

    let nome;
    let idDomanda;
    
    const  [getLazyDomandeTest, datiDomandeTest] =  useLazyQuery(GET_DOMANDE_OF_TEST, { variables: {datatest: dataTest, nometest: nomeTest}});
    const  [getLazyResults, datiDomanda]  = useLazyQuery(GET_DOMANDA, {variables: {nome}});
    const  [getLazyRisposte, datiRisposta]  = useLazyQuery(GET_RISPOSTA, {variables: {idDomanda}});

    useEffect(() => {
        userTestGet().then(ris =>{
            setUserTest(ris);
           
        })

    }, []);
    let flag =true;
    useEffect(() =>{
        if(typeof usertest != 'undefined'){
            SetQuestionAux();
        }
    }, [usertest])

    if(isTestCompleted){
        return  <div className="App">Test completato...</div>;

    }

    if(isLoading){
        return  <div className="App">Loading...</div>;
    } 
    return (
        <>
                <div className="card my-4">
                    <div className="card-body">
                    <h5 className="card-title" id="test-domanda" value={`${usertest.nome_ultima_domanda}`}>{flagDomandeNumerateCasted ? '(' + (numeratedQuestion.indexOf(usertest.nome_ultima_domanda) + 1 )+ '/' + numeratedQuestion.length + ')' : "" } {usertest.nome_ultima_domanda}</h5>
                    <p className="card-text">{question.testo}</p>
                
                        <hr />
                        
                        <RispostaSingola
                            question={answers} flagOrdineCasualeRisposte={question.ordinecasuale} flagRisposteNumerate={question.risposteconnumero}
                        />
                        
                        {showSelectError()}
                        <hr />

                        <button className="btn btn-success" onClick={updateTest}>Conferma</button>
                    </div>
                </div>
        </>
        
    )
}

// TODO: ricordati domandeConNumero (index dell'array ordinato o meno => puoi anche fare una cosa del tipo (n° domanda in array / n° di dimande totali per il test che equivale al length))


export default PaginaTest
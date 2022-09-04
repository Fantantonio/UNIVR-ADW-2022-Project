import { useEffect, useState } from "react";
import Axios from "axios";
import RispostaSingola from "./RispostaSingola";
import PaginaFineTest from "./PaginaFineTest";
import { useQuery } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';
import { GET_DOMANDA, GET_DOMANDE_OF_TEST, GET_RISPOSTA } from "../gql/Query";
import { resultKeyNameFromField } from "@apollo/client/utilities";


const PaginaTest = ({setPage, userRole, userId, nomeTest, dataTest}) => {
    
    const [selectError, setSelectError] = useState("");
    const [usertest, setUserTest] = useState(undefined);
    const [question, setQuestion] = useState(undefined);
    const [isLoading, setLoading] = useState(true);
    const [answers, setAnswers] = useState([]);
    
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


    const queryApollo = () => {
        return new Promise((resolve, reject) => {
            resolve(getLazyResults({variables: {nome:usertest.nome_ultima_domanda}}));
      
        })

    }

    const queryRisposte = () => {
        return new Promise((resolve, reject) => {
            console.log("Dentro Query Risposte");
       
            resolve(getLazyRisposte({variables: {idDomanda:usertest.nome_ultima_domanda}}));
           
        })
    }



    // Serve per ottenere tutti i dati della domanda dal nome, renderizzarli o passarli a risposta
    const SetQuestionAux = () => {
        console.log("Sono dentro Question AuX!!!!");
        console.log(usertest.nome_ultima_domanda);
        console.log("Dentro Aux, Before query");
        // TODO: function that get all question data from "nome" and add them to question
        queryApollo().then(result => { 
            console.log("Print Result LazyQuery");
            console.log(result.data);
            setQuestion(result.data.getDomanda);
            queryRisposte().then(rest => {
           //     console.log("Risposta per domanda");
           //     console.log(rest.data.getRisposta);
                setAnswers(rest.data.getRisposta);
                setLoading(false);
            })
          
        })

    }


    // TODO: necessiti di una API che prenda il test e controlli ordineCasuale prima di lanciare questo
    const GenerateQuestionsOrder = () => {
        let questionList = [];
        let questionOrder = "1";

        /*
        // TODO: get all questions and order them in a [] accordingly to Test ordineCasuale
        // usa x.data.getDomandeOfTest per passarlo a shuffle
        

        console.log(data);

        */
        console.log("Before query");
        let arrayDomanda = [];

        questionList = domandeQuery.data.getDomandeOfTest;
        arrayDomanda = Object.values(questionList);
        console.log("Before Shuffle");
        console.log(arrayDomanda);

        // collect all domande from each data and save them in questionList

        if (arrayDomanda.length > 0) {
            shuffle(arrayDomanda);
            console.log("After Shuffle");
            console.log(arrayDomanda);

            arrayDomanda.forEach((question) => {
                console.log("Question");
                console.log(question.domanda.nome);
                questionOrder += `,${question.domanda.nome}`;
            });

            // sarebbe così ",Dom 1,Dom 2,..." => lo rende così "Dom 1,Dom 2,..."
            questionOrder = questionOrder.substring(1);
            questionOrder = questionOrder.substring(1);
            console.log("ordineDomande prima del return");
            console.log(questionOrder);
            return questionOrder;
        }
        else {
            return "";
        }
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
        console.log("UPDATING...");
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
                        userTestGet();
                    }
                });
            } // Altrimenti modifica lo stato della pagina con quella PaginaFineTest
            else {
                setPage("PaginaFineTest");
            }
        } else {
            setSelectError("Almeno una risposta deve essere selezionata.");
        }
    }

    // Fa il GET del test e ottiene {id, id_utente, nome_test, data_test, nome_ultima_domanda, ordine_domande, id_risposte_date}
    const userTestGet = () => {
        return new Promise((resolve, reject) => {
        console.log("GETTING TEST...");


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
                console.log("CHECKING TEST DATA...");
                console.log(response);
                // Qui si entra solo la prima volta
                if (response.data.ordine_domande === null) {
                    console.log("QUESTIONS ORDER HAS TO BE GENERATED...");
                    
                    // Genera l'ordine e lo salva in usertest
                    let ordineDomande = [];
                    ordineDomande= GenerateQuestionsOrder();
                    console.log("Ordine Domande");
                    console.log(ordineDomande);
                    //response.data.ordine_domande = ordineDomande;
                
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


                }
                
                resolve(response.data);  
 
            }
        })})
    }
    
 
    console.log(dataTest);
    console.log(nomeTest);
    const  domandeQuery  = useQuery(GET_DOMANDE_OF_TEST, { variables: {datatest: dataTest, nometest: nomeTest}});
   // console.log(domandeQuery.loading);
    console.log(domandeQuery.data);
    let nome;
    let idDomanda;
    
    const  [getLazyResults, datiDomanda]  = useLazyQuery(GET_DOMANDA, {variables: {nome}});
    const  [getLazyRisposte, datiRisposta]  = useLazyQuery(GET_RISPOSTA, {variables: {idDomanda}});

    useEffect(() => {
        userTestGet().then(ris =>{
            console.log("Dati Risposta ottenuti:");
            console.log(ris);
            setUserTest(ris);
            console.log(usertest);
        })

    }, []);

    useEffect(() =>{
        if(typeof usertest != 'undefined'){
            console.log("UserTest setted correctly");
            console.log(usertest);
            SetQuestionAux();
        }
    }, [usertest])

    if(isLoading){
        return  <div className="App">Loading...</div>;
    } 
    return (
        <>
            {domandeQuery.data &&
            <>
                <div className="card my-4">
                    <div className="card-body">
                    <h5 className="card-title" id="test-domanda" value={`${usertest.nome_ultima_domanda}`}>{usertest.nome_ultima_domanda}</h5>
                    <p className="card-text">{question.testo}</p>
                
                        <hr />
                        {console.log("Dentro Render")}
                        {console.log(answers)}
                        <RispostaSingola
                            question={answers}
                        />
                        
                        {showSelectError()}
                        <hr />

                        <button className="btn btn-success" onClick={updateTest}>Conferma</button>
                    </div>
                </div>
            </>}
        
        {domandeQuery.loading &&
            <div className="alert alert-info" role="alert">
                Attendi il caricamento dei dati!
            </div>
        }
        {domandeQuery.error &&
            <div className="alert alert-danger" role="alert">
                Errore: {domandeQuery.error}
            </div>
        }


       
        </>
    )
}

// TODO: ricordati domandeConNumero (index dell'array ordinato o meno => puoi anche fare una cosa del tipo (n° domanda in array / n° di dimande totali per il test che equivale al length))

/*
<div className="card my-4">
    <div className="card-body">
        <h5 className="card-title" id="test-domanda" value={`${usertest.nome_ultima_domanda}`}>{usertest.nome_ultima_domanda}</h5>
        <p className="card-text">{question.testo}</p>
        
        <hr />

        <RispostaSingola
            question={question}
        />
        
        {showSelectError()}
        <hr />

        <button className="btn btn-success" onClick={updateTest}>Conferma</button>
    </div>
</div>
*/


export default PaginaTest
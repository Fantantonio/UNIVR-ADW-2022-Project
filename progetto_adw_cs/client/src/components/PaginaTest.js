import { useEffect, useState } from "react";
import Axios from "axios";
import RispostaSingola from "./RispostaSingola";
import PaginaFineTest from "./PaginaFineTest";
import { useQuery } from '@apollo/client';
import { GET_DOMANDA, GET_DOMANDE_OF_TEST } from "../gql/Query";


const PaginaTest = ({setPage, userRole, userId, nomeTest, dataTest}) => {
    
    const [selectError, setSelectError] = useState("");
    const [usertest, setUserTest] = useState(undefined);
    const [question, setQuestion] = useState(undefined);

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


    // Serve per ottenere tutti i dati della domanda dal nome, renderizzarli o passarli a risposta
    const SetQuestionAux = () => {
        let nome = usertest.nome_ultima_domanda;
        // TODO: function that get all question data from "nome" and add them to question
        //const { data, loading, error } = useQuery(GET_DOMANDA, {variables: {nome}});
        //console.log(data);
        //setQuestion({testo: "bla bla bla"});
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
        
        // collect all domande from each data and save them in questionList

        if (questionList.length > 0) {
            shuffle(questionList);
            console.log(questionList);

            questionList.forEach((question) => {
                questionOrder += `,${question}`;
            });

            // sarebbe così ",Dom 1,Dom 2,..." => lo rende così "Dom 1,Dom 2,..."
            questionOrder = questionOrder.substring(1);

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
                // Qui si entra solo la prima volta
                if (response.data.ordine_domande === "") {
                    console.log("QUESTIONS ORDER HAS TO BE GENERATED...");
                    
                    // Genera l'ordine e lo salva in usertest
                    let ordineDomande = [];

                    //console.log(data);

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
                setUserTest(response.data);
                //SetQuestionAux();
            }
        });
    }
    
    // x al posto di { data, loading, error }
    const x = useQuery(GET_DOMANDE_OF_TEST, {
        variables: {datatest: dataTest, nometest: nomeTest}
      });
    //const { data, loading, error } = useQuery(GET_DOMANDE_OF_TEST, {datatest: "2020-07-07", nometest: "Basi di Dati - II appello laboratorio"});
    console.log(x.loading);
    console.log(x.error);

    useEffect(() => {
        userTestGet();
    }, []);

    return (
        <>
            ciao
            {x.data && <>{console.log(x.data.getDomandeOfTest)}</>}
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
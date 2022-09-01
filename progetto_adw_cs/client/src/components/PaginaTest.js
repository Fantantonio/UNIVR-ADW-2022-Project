import { useEffect, useState } from "react";
import Axios from "axios";
import RispostaSingola from "./RispostaSingola";
import PaginaFineTest from "./PaginaFineTest";


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
    const setQuestionAux = () => {
        // TODO: function that get all question data from "nome" and add them to question
        setQuestion({testo: "bla bla bla"});
    }


    const generateQuestionsOrder = () => {
        let questionList = [];
        let questionOrder = "";

        // TODO: get all questions and order them in a [] accordingly to Test ordineCasuale

        if (questionList > 0) {
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
                    let ordineDomande = generateQuestionsOrder();

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
                setQuestionAux();
            }
        });
    }
    
    useEffect(() => {
        userTestGet();
    }, []);

    return (
        <>
        <div className="card my-4">
            <div className="card-body">
                <h5 className="card-title" id="test-domanda" value={usertest.nome_ultima_domanda}>{usertest.nome_ultima_domanda}</h5>
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
        </>
    )
}

export default PaginaTest
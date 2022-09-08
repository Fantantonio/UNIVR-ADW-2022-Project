import React from 'react'
import RiassuntoDomandaRisposta from './RiassuntoDomandaRisposta'
import Axios from "axios";
import { useState } from 'react';

const PaginaFineTest = ({setPage, userRole, userId,nomeTest, dataTest}) => {
    const [questionSummary, setQuestionSummary] = useState([]);
    const [answersSummary, setAnswersSummary] = useState([]);
    const [isLoading2, setLoading2] = useState(true);



  // Fa il GET del test e ottiene {id, id_utente, nome_test, data_test, nome_ultima_domanda, ordine_domande, id_risposte_date}
  Axios.get("http://localhost:5000/usertest", {
    params: {
        userId: userId,
        nomeTest: nomeTest,
        dataTest: dataTest
    }}).then((response) => {
    if (response.data.message) {
        console.error(response.data.message);
    } else{
      //console.log(response.data.id_risposte_date);
      let test;
      setAnswersSummary(response.data.id_risposte_date);
      setQuestionSummary(response.data.ordine_domande);
      setLoading2(false);
    }})

 if(isLoading2){
      return  <div className="App">Loading...</div>;
    } else{ 
 return (
    <>
    <div className="card my-4">
        <div className="card-body">
            <RiassuntoDomandaRisposta answer={answersSummary} question={questionSummary} />
         
            

            <button className="btn btn-success" onClick={() => setPage("PaginaIniziale")}>Torna alla pagina iniziale</button>
        </div>
    </div>
    </>
  )
}
}
export default PaginaFineTest
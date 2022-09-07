import React, { useEffect, useState } from 'react'
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_ALL_DOMANDE, GET_ALL_RISPOSTE, GET_DOMANDA, GET_DOMANDE_OF_TEST, GET_RISPOSTA } from "../gql/Query";
import { TypeOrFieldNameRegExp } from '@apollo/client/cache/inmemory/helpers';


const RiassuntoDomandaRisposta = ({answer, question}) => {
  const { data, error } = useQuery(GET_ALL_DOMANDE);
  const  queryAnswer = useQuery(GET_ALL_RISPOSTE);
 
  const [isLoading1, setLoading1] = useState(true);
  const [contenuto, setContenuto] = useState();
  
  let splittedAnswer = answer.split(",");
  let splittedQuestion = question.split(",");
  let testoDomande = [];
  let testoRisposta = [];
  let rispostaCorretta = [];

  let content = [];
  let nomeDomanda;
 
  console.log("Dentro RiassuntoDmandaRisposta");

  const getSummary = () =>{

      for (let i = 0; i < splittedAnswer.length; i += 1) {
          nomeDomanda=splittedQuestion[i];
          let rispostaCorretta = "";
          data.tutteDomande.map((domanda, index) => {
            if(domanda.nome === nomeDomanda){
              testoDomande.push(domanda.testo);
            }
          })


          queryAnswer.data.tutteRisposte.map((risposta, index) => {
            if(risposta.id === splittedAnswer[i]){
              testoRisposta.push(risposta.testo);
            }
            
            if(risposta.domanda.nome === nomeDomanda && risposta.punteggio == 1){
              //rispostaCorretta.push(risposta.testo);
              rispostaCorretta += `${risposta.testo} `;
            }
          })


          content.push(
            <>
            <h5 className="card-title">{splittedQuestion[i]}</h5>
            <p className="card-text">{testoDomande[i]}</p>
            <p className="h6">Risposta corretta:</p>
            <p className="card-text">{rispostaCorretta}</p>
            <p className="h6">Risposta data:</p>
            <p className="card-text">{testoRisposta[i]}</p>
            <hr />
            </>
            );
      }
  
      setLoading1(false);
      setContenuto(content);
      return content;

}

  useEffect(() => {
    console.log("Dentro USEFFECT");
    console.log(data);
    console.log(queryAnswer.data);
    if (error){
      console.log('error');
    }
    if (data && queryAnswer.data != undefined) {
      console.log(queryAnswer);
      console.log("Prima di getSummary")
      getSummary();
      console.log("dentro riassunto");}
  }, [data, queryAnswer]);

  
  if(isLoading1){
    return  <div className="App">Loading...</div>;}
  else{
    return(
      <>
        {contenuto}  
      </>
    )}

}

export default RiassuntoDomandaRisposta

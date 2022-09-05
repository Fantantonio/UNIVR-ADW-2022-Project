import React, { useEffect, useState } from 'react'
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_ALL_DOMANDE, GET_ALL_RISPOSTE, GET_DOMANDA, GET_DOMANDE_OF_TEST, GET_RISPOSTA } from "../gql/Query";
import { TypeOrFieldNameRegExp } from '@apollo/client/cache/inmemory/helpers';


const RiassuntoDomandaRisposta = ({answer, question}) => {
  
  const { data, error } = useQuery(GET_ALL_DOMANDE);
  const  queryAnswer = useQuery(GET_ALL_RISPOSTE);
  const [isLoading, setLoading] = useState(true);
  const [contenuto, setContenuto] = useState();
  
  let splittedAnswer = answer.split(",");
  let splittedQuestion = question.split(",");
  let testoDomande = [];
  let testoRisposta = [];

  let content = [];
  let nomeDomanda;
 

  const getSummary = () =>{

      for (let i = 0; i < splittedAnswer.length; i += 1) {
          nomeDomanda=splittedQuestion[i];

          data.tutteDomande.map((domanda, index) => {
            if(domanda.nome === nomeDomanda){
              testoDomande.push(domanda.testo);
            }
          })


          queryAnswer.data.tutteRisposte.map((risposta, index) => {
            if(risposta.id === splittedAnswer[i]){
              testoRisposta.push(risposta.testo);
            }
          })


          content.push(
            <>
            <h5 className="card-title">{splittedQuestion[i]}</h5>
            <p className="card-text">{testoDomande[i]}</p>
            <p className="h6">Risposta corretta:</p>
            <p className="card-text">Risposta corretta</p>
            <p className="h6">Risposta data:</p>
            <p className="card-text">{testoRisposta[i]}</p>
            <hr />
            </>
            );
      }
  
      setLoading(false);
      setContenuto(content);
      return content;

}

  useEffect(() => {
    if (error){
      console.log('error');
    }
    if (data && queryAnswer) {
      getSummary();
      console.log("dentro riassunto");}
  }, [error, data]);

  
  if(isLoading){
    return  <div className="App">Loading...</div>;}
  else{
    return(
      <>
        {contenuto}  
      </>
    )}

}

export default RiassuntoDomandaRisposta

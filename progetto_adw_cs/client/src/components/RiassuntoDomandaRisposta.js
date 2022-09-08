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
  let punteggioTotaleTest=0;
  let punteggioConseguito=0;

  let punteggioDomanda=0;
  let punteggioRisposta=0

  let content = [];
  let nomeDomanda;
 

  const getSummary = () =>{

      for (let i = 0; i < splittedAnswer.length; i += 1) {
          nomeDomanda=splittedQuestion[i];
          let rispostaCorretta = "";
          data.tutteDomande.map((domanda, index) => {
            if(domanda.nome === nomeDomanda){
              testoDomande.push(domanda.testo);
              punteggioTotaleTest=punteggioTotaleTest+domanda.punti;
              punteggioDomanda = domanda.punti;
            //  console.log(punteggioTotaleTest);
            }
          })


          queryAnswer.data.tutteRisposte.map((risposta, index) => {
            if(risposta.id === splittedAnswer[i]){
              testoRisposta.push(risposta.testo);
              punteggioRisposta = risposta.punteggio;             
            }
            
            if(risposta.domanda.nome === nomeDomanda && risposta.punteggio == 1){
              //rispostaCorretta.push(risposta.testo);
              rispostaCorretta += `${risposta.testo} `;
            }
          })

          punteggioConseguito = punteggioConseguito + (punteggioDomanda * punteggioRisposta);

          content.push(
            <>
            <h5 className="card-title">{splittedQuestion[i]}</h5>
            <p className="card-text">{testoDomande[i]}</p>
            <p className="h6">Risposta corretta:</p>
            <p className="card-text">{rispostaCorretta}</p>
            <p className="h6">Risposta data:</p>
            <p className="card-text">{testoRisposta[i]}</p>
            <p className="h6">Punteggio conseguito:</p>
            <p className="card-text">{punteggioDomanda * punteggioRisposta}/{punteggioDomanda}</p>
            <hr />
            </>
            );
      }

      content.push(<>
      <p className="h6">Totale Punteggio:</p>
      <p className="card-text">{punteggioConseguito}/{punteggioTotaleTest}</p> 
      </>
      );

      setLoading1(false);
      setContenuto(content);
      return content;

}

  useEffect(() => {
    if (error){
      console.log('error');
    }
    if (data && queryAnswer.data != undefined) {
      getSummary();
      }
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

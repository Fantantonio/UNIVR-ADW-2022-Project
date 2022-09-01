import React, { Component } from 'react'
import { GET_LAST_DOMANDA } from '../gql/Query'
import { useQuery } from '@apollo/client';
import { useCallback, useState } from "react";
import { ADD_DOMANDA, ADD_RISPOSTA } from '../gql/Mutation';
import { useMutation } from '@apollo/client';
import { nominalTypeHack } from 'prop-types';

export const PaginaCreaDomanda = () => {

   // let testoRisposta, punteggioRisposta;

 

    const[ rispostaList, setRispostaList] = useState([{ testoRisposta:'', punteggioRisposta:'' }]);


    const handleServiceChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...rispostaList];
        list[index][name] = value;
        setRispostaList(list);
    }

    const handleRispostaAdd = () => {
        setRispostaList([...rispostaList, { testoRisposta:'', punteggioRisposta:'' }]);
    }

    
    const [creaDomanda] = useMutation(ADD_DOMANDA);
    const [creaRisposta] = useMutation(ADD_RISPOSTA);
    let testo, punti, ordinecasuale, risposteconnumero;
    const { data, loading, error } =  useQuery(GET_LAST_DOMANDA);
    let temp;
 
 
 
    { data.tutteDomande.map((domanda, index) => {
            temp=domanda;

        })
    }

   console.log(temp.nome);
   var lines = temp.nome.split(/\s+/);

   var result = parseInt(lines[1])
   result=result+1;
   var suffix = result.toString();
   var prefix = "Domanda ";
   var nome;
   nome = "" + prefix + suffix;
   
   console.log(nome);

 

   const [isCheckedOrdineCasuale, setIsSubscribed1] = useState(false);
   const [isCheckedDomandeNumero, setIsSubscribed2] = useState(false);

   const handleChangeOrdineCasuale = () => {
       setIsSubscribed1(current1 => !current1);
       console.log("ordine casuale " + ordinecasuale.value)
   }
   
   const handleChangeDomandeNumero = () => {
       setIsSubscribed2(current2 => !current2);
       console.log("domande con numero " + risposteconnumero.value)
   }


    return (
        <>
        {data &&

        <div className="card my-4">
            <div className="card-body">
                <form onSubmit={ e => {
                    e.preventDefault();
                  creaDomanda({ variables: {nome:nome, testo:testo.value, punti:punti.value, ordinecasuale:ordinecasuale.value, risposteconnumero:risposteconnumero.value}});
                    console.log("Domanda Creata!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            //      let temp1 = parseFloat(risposte.punteggioRisposta);
            //      creaRisposta({ variables: { testo:risposte.testoRisposta, punteggio:temp1, idDomanda:nome }})
            //      punteggioRisposta = parseFloat(punteggioRisposta);
            //        
            //      console.log(typeof temp1);
                    for (let n of rispostaList){
                            let temp1 = parseFloat(n.punteggioRisposta);
                            console.log("Creazione risposta******************");
                  
            //               console.log("nomeeee domanda!!!!!!!!!!!!!:" + temp.nome)
            //                let temp2 = nome.toString();
                         
                           creaRisposta({ variables: { testo:n.testoRisposta, punteggio:temp1, idDomanda:nome}})
                        }
                }}>
                    <p className="h6">Sezione domanda</p>
                    <div className="mb-3">
                        <label htmlFor="crea-domanda-testo" className="form-label">Testo della domanda</label>
                        <input type="text" className="form-control"  aria-describedby="crea-domanda-test-help" ref= { value => testo = value} id="testo" />
                        <div id="crea-domanda-test-help" className="form-text">Inserisci qui il testo della domanda.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="crea-domanda-punti" className="form-label">Punti della domanda</label>
                        <input type="number" className="form-control"  aria-describedby="crea-domanda-punti-help"  ref= { value => punti = value} id="punti" />
                        <div id="crea-domanda-punti-help" className="form-text">I punti della domanda sono calcolati automaticamente sommando il numero di risposte corrette.</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" aria-describedby="crea-domanda-ordine-casuale-help"  value={isCheckedOrdineCasuale} onChange={handleChangeOrdineCasuale} ref= { value => ordinecasuale = value}  id="ordinecasuale" />
                        <label className="form-check-label" htmlFor="crea-domanda-ordine-casuale">Risposte in ordine casuale</label>
                        <div id="crea-domanda-ordine-casuale-help" className="form-text">Attiva il checkbox per mostrare le risposte in ordine casuale durante il test.</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" aria-describedby="crea-domanda-risposte-numerate-help"  value={isCheckedDomandeNumero} onChange={handleChangeDomandeNumero} ref= { value => risposteconnumero = value}  id="risposteconnumero" />
                        <label className="form-check-label" htmlFor="crea-domanda-risposte-numerate">Risposte numerate</label>
                        <div id="crea-domanda-risposte-numerate-help" className="form-text">Attiva il checkbox per mostrare il numero delle risposte durante il test.</div>
                    </div>

                    <hr></hr>
                    <p className="h6">Sezione risposte</p>
                    <div className="alert alert-warning" role="alert">
                    Devi inserire almeno due risposte. Per inserire più risposte utilizza il bottone "Aggiungi risposta".
                    </div>
                    <div id="crea-domanda-aggiungi-risposta-wrapper">
                      
                      {rispostaList.map((singleRisposta, index) => (
                       
                         <div key = {index} className = "risposte">
                         <div className="input-group">
                             <div className="input-group-text">
                                 <input id={`crea-risposta-corretta-${index}`} className="form-check-input mt-0 w15em h15em" type="checkbox" value="" aria-label={`Attiva questo checkbox se la risposta ${index} è corretta.`} aria-describedby={`crea-risposta-corretta-${index}-help`} />
                             </div>
                             <input type="text" name="testoRisposta" className="form-control" aria-label={`Inserisci qui il testo della risposta ${index}.`} placeholder={`Inserisci qui il testo della risposta ${index}`} onChange = { e => handleServiceChange(e,index)} /> 
                             <input type="number" name="punteggioRisposta" className="form-control" aria-label={`Inserisci qui il punteggio della risposta ${index}.`} placeholder={`Inserisci qui il punteggio della risposta ${index}` }  onChange = { e => handleServiceChange(e,index)}  />
                         </div>
                         <div id={`crea-risposta-corretta-${index}-help`} className="form-text mb-3">Attiva il checkbox se la risposta {index} è corretta.</div>
                         {rispostaList.length -1 === index &&
                                     <button type="button" className="btn btn-primary" onClick={handleRispostaAdd} >Aggiungi risposta</button>
                         }
             
                        </div>
                         
                      ))}




                    </div>
                   

                    <hr></hr>

                    <div className="alert alert-info" role="alert">
                        Seleziona "Conferma e Continua" per confermare l'attuale domanda e continuare con una nuova domanda; seleziona "Termina" per uscire dalla compilazione senza salvare la domanda attuale. 
                    </div>
                    <button type="submit" id="crea-domanda-conferma" className="btn btn-success me-1">Conferma e Continua</button>
                    <button type="button" className="btn btn-danger">Termina</button>
                </form>
            </div>
        </div>
        }   
        
        {loading &&
            <div className="alert alert-info" role="alert">
                Attendi il caricamento dei dati!
            </div>
        }
        {error &&
            <div className="alert alert-danger" role="alert">
                Errore: {error}
            </div>
        }
        </>

    )
  
}

export default PaginaCreaDomanda
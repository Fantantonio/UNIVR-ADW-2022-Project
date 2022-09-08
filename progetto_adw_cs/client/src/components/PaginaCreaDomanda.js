import React, { Component } from 'react'
import { GET_LAST_DOMANDA } from '../gql/Query'
import { useQuery } from '@apollo/client';
import { useCallback, useState, useEffect } from "react";
import { ADD_DOMANDA, ADD_RISPOSTA } from '../gql/Mutation';
import { useMutation } from '@apollo/client';
import { nominalTypeHack } from 'prop-types';

const PaginaCreaDomanda = ({setPage}) => {

    const[ rispostaList, setRispostaList] = useState([{ testoRisposta:'', punteggioRisposta:'' }]);
    const [isCheckedOrdineCasuale, setIsSubscribed1] = useState(false);
    const [isCheckedDomandeNumero, setIsSubscribed2] = useState(false);
    const [nome, setnome] = useState();
    const [creaDomanda] = useMutation(ADD_DOMANDA);
    const [creaRisposta] = useMutation(ADD_RISPOSTA);
    const [isLoading, setLoading] = useState(true);
    let testo, punti, ordinecasuale, risposteconnumero;
    const { data, loading, error } =  useQuery(GET_LAST_DOMANDA);
    let temp;
    let prova;
    let idDomanda;


    const [areRisposteSelected, setAreRisposteSelected] = useState(false);

    const showRisposteError = () => {
        let content = <></>;
        if (areRisposteSelected) {
            content =
                <>
                <div className="alert alert-danger" role="alert">
                    Crea almeno due risposte!
                </div>
                </>;
        }
        return content;
    }


    const handleServiceChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...rispostaList];
        list[index][name] = value;
        setRispostaList(list);}


    const handleRispostaAdd = () => {
        setRispostaList([...rispostaList, { testoRisposta:'', punteggioRisposta:'' }]);}


    const handleChangeOrdineCasuale = () => {
        setIsSubscribed1(current1 => !current1);
      
    }
    
    const handleChangeDomandeNumero = () => {
        setIsSubscribed2(current2 => !current2);

    }


    const getLastDomanda = () => {

        data.tutteDomande.map((domanda, index) => {
            temp=domanda; })
    
        //Prendo l'ultimo nome domanda nel DB e lo incremento di uno per la generazione sequenziale del nome
  
        var lines = temp.nome.split(/\s+/);
        var result = parseInt(lines[1])
        result=result+1;
        var suffix = result.toString();
        var prefix = "Domanda ";
        var nome;
        nome = "" + prefix + suffix;
        setnome(nome);
        setLoading(false)
    }
    
    useEffect(() => {
        if (error){
          console.log('error');
        }
        if (data) {
          getLastDomanda();
          console.log("getLastDomanda");}
      }, [error, data]);

    
    if(isLoading){
    return  <div className="App">Loading...</div>;}
    else{
    
        return (
            <>

            <div className="card my-4">
                <div className="card-body">
                    <form onSubmit={ e => {
                        e.preventDefault();
                        
                        if(rispostaList.length >= 2){
                            creaDomanda({ variables: {nome:nome, testo:testo.value, punti:punti.value, ordinecasuale:ordinecasuale.value, risposteconnumero:risposteconnumero.value}}).then(result => {   
                            for (let n of rispostaList){
                                    let temp1 = parseFloat(n.punteggioRisposta);
                                    idDomanda=nome;
                                    creaRisposta({ variables: { testo:n.testoRisposta, punteggio:temp1, idDomanda:idDomanda}})}})
                        }
                        else{
                            setAreRisposteSelected(true);
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
                                <input type="text" name="testoRisposta" className="form-control" aria-label={`Inserisci qui il testo della risposta ${index}.`} placeholder={`Inserisci qui il testo della risposta ${index}`} onChange = { e => handleServiceChange(e,index)} /> 
                                <input type="number" name="punteggioRisposta" className="form-control" min="0" max="1" step="0.1" aria-label={`Inserisci qui il punteggio della risposta ${index}.`} placeholder={`Inserisci qui il punteggio della risposta ${index}` }  onChange = { e => handleServiceChange(e,index)}  />
                            </div>
                            <div id={`crea-risposta-corretta-${index}-help`} className="form-text mb-3">Attiva il checkbox se la risposta {index} è corretta.</div>
                            {rispostaList.length -1 === index &&
                                        <button type="button" className="btn btn-primary" onClick={handleRispostaAdd} >Aggiungi risposta</button>
                            }
                
                            </div>  
                        ))}
                        </div>
                    
                        <hr></hr>

                        {showRisposteError()}

                        <div className="alert alert-info" role="alert">
                            Seleziona "Conferma e Continua" per confermare l'attuale domanda e continuare con una nuova domanda; seleziona "Termina" per uscire dalla compilazione senza salvare la domanda attuale. 
                        </div>
                        <button type="submit" id="crea-domanda-conferma" className="btn btn-success me-1">Conferma e Continua</button>
                        <button type="button" className="btn btn-danger" onClick={() => setPage("PaginaIniziale")}>Termina</button>
                    </form>
                </div>
            </div>
            
            

            </>

        )}
  
}

export default PaginaCreaDomanda

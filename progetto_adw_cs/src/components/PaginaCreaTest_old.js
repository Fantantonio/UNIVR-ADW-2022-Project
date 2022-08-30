/*
import { useMutation } from '@apollo/client';
import React, { Component } from 'react'


class PaginaCreaTest extends Component {
   
   state = {
    nomeTest: '',
    dataTest: '',
    ordineCasuale: '',
    domandeNumerate: ''
   }



   getValue = (event) => {
    //console.log('Event:', event.target.value);

    const name = event.target.name;
    const  value = event.target.value;
    this.setState({ [name]: value });
   }


   handleSubmit = (event) => {
    event.preventDefault(); //stop reloading
    addTest({});
    
    const nomeTest = this.state.nomeTest;
    const dataTest = this.state.dataTest;
    console.log('data on Submit: ', dataTest);
    console.log('nome on Submit: ', nomeTest);
    //TODO
   } 


  render() {
    console.log('State: ', this.state);
    return (
        <>
        <div className="card my-4">
            <div className="card-body">

                <form>
                    <div className="mb-3">
                        <label htmlFor="crea-test-nome" className="form-label" id="nome-del-test">Nome del test</label>
                        <input type="nomeTest" className="form-control" id="crea-test-nome" aria-describedby="crea-test-nome-help" onChange = {this.getValue} name = 'nomeTest' />
                        <div id="crea-test-nome-help" className="form-text">Inserisci qui il nome del test.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="crea-test-data" className="form-label">Data del test</label>
                        <input type="date" className="form-control" id="crea-test-data" aria-describedby="crea-test-data-help" onChange = {this.getValue} name = 'dataTest' />
                        <div id="crea-test-data-help" className="form-text">Inserire la data del test.</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="crea-test-ordine-casuale" aria-describedby="crea-test-ordine-casuale-help" onChange = {this.getValue} name = 'ordineCasuale' />
                        <label className="form-check-label" htmlFor="crea-test-ordine-casuale">Domande in ordine casuale</label>
                        <div id="crea-test-ordine-casuale-help" className="form-text">Attiva il checkbox per mostrare le domande in ordine casuale durante il test.</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="crea-test-domande-numerate" aria-describedby="crea-test-domande-numerate-help"  onChange = {this.getValue} name = 'domandeNumerate'/>
                        <label className="form-check-label" htmlFor="crea-test-domande-numerate">Risposte numerate</label>
                        <div id="crea-test-domande-numerate-help" className="form-text">Attiva il checkbox per mostrare il numero delle domande durante il test.</div>
                    </div>
                    <p className="card-text">Seleziona le domande dalla lista qui sotto</p>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="crea-test-domanda-1" />
                        <label className="form-check-label" htmlFor="crea-test-domanda-1">Domanda 1</label>
                    </div>
                    <div className="mt-4">
                        <button type="submit" id="crea-test-conferma" className="btn btn-success me-1" onClick = {this.handleSubmit}>Conferma</button>
                        <button type="button" className="btn btn-danger">Annulla</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
  }
}

const ADD_TEST = gql`
mutation addDomanda($nome:String!, $data:String!, $ordinecasuale:Boolean, $domandeNumerate:Boolean) {
    addDomanda(domanda: { nome:$nome, data:$data, ordinecasuale:$ordinecasuale, domandeNumerate:$domandeNumerate}){
      nome,
      data,
      ordinecasuale
      domandeconnumero
    }
   
  }
` 

export default PaginaCreaTest*/
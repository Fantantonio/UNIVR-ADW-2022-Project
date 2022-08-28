import React, { Component } from 'react'

class PaginaCreaTest extends Component {

  render() {
    return (
        <>
        <div className="card my-4">
            <div className="card-body">

                <form>
                    <div className="mb-3">
                        <label htmlFor="crea-test-nome" className="form-label">Nome del test</label>
                        <input type="text" className="form-control" id="crea-test-nome" aria-describedby="crea-test-nome-help" />
                        <div id="crea-test-nome-help" className="form-text">Inserisci qui il nome del test.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="crea-test-data" className="form-label">Data del test</label>
                        <input type="date" className="form-control" id="crea-test-data" aria-describedby="crea-test-data-help" />
                        <div id="crea-test-data-help" className="form-text">Inserire la data del test.</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="crea-test-ordine-casuale" aria-describedby="crea-test-ordine-casuale-help" />
                        <label className="form-check-label" htmlFor="crea-test-ordine-casuale">Domande in ordine casuale</label>
                        <div id="crea-test-ordine-casuale-help" className="form-text">Attiva il checkbox per mostrare le domande in ordine casuale durante il test.</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="crea-test-domande-numerate" aria-describedby="crea-test-domande-numerate-help" />
                        <label className="form-check-label" htmlFor="crea-test-domande-numerate">Risposte numerate</label>
                        <div id="crea-test-domande-numerate-help" className="form-text">Attiva il checkbox per mostrare il numero delle domande durante il test.</div>
                    </div>
                    <p className="card-text">Seleziona le domande dalla lista qui sotto</p>
                    <div className="input-group">
                        <div className="input-group-text">
                        <input id="crea-risposta-punteggio-1" className="form-check-input mt-0 w15em h15em" type="checkbox" value="" aria-label="Attiva questo checkbox se la risposta 1 è corretta." aria-describedby="crea-risposte-punteggio-1-help"/>
                        </div>
                        <input type="text" id="crea-risposta-testo-1" className="form-control" aria-label="Inserisci qui il testo della risposta 1." placeholder="Inserisci qui il testo della risposta 1" />
                    </div>
                    <div className="mt-4">
                        <button type="submit" id="crea-test-conferma" className="btn btn-success me-1">Conferma</button>
                        <button type="button" className="btn btn-danger">Annulla</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
  }
}

export default PaginaCreaTest
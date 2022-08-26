import React, { Component } from 'react'

class PaginaCreaDomanda extends Component {

  render() {
    return (
        <>
        <div className="card my-4">
            <div className="card-body">

                <form>
                    <p className="h6">Sezione domanda</p>
                    <div className="mb-3">
                        <label htmlFor="crea-domanda-testo" className="form-label">Testo della domanda</label>
                        <input type="text" className="form-control" id="crea-domanda-testo" aria-describedby="crea-domanda-test-help" />
                        <div id="crea-domanda-test-help" className="form-text">Inserisci qui il testo della domanda.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="crea-domanda-punti" className="form-label">Punti della domanda</label>
                        <input type="number" className="form-control" id="crea-domanda-punti" aria-describedby="crea-domanda-punti-help" disabled />
                        <div id="crea-domanda-punti-help" className="form-text">I punti della domanda sono calcolati automaticamente sommando il numero di risposte corrette.</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="crea-domanda-ordine-casuale" aria-describedby="crea-domanda-ordine-casuale-help" />
                        <label className="form-check-label" htmlFor="crea-domanda-ordine-casuale">Risposte in ordine casuale</label>
                        <div id="crea-domanda-ordine-casuale-help" className="form-text">Attiva il checkbox per mostrare le risposte in ordine casuale durante il test.</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="crea-domanda-risposte-numerate" aria-describedby="crea-domanda-risposte-numerate-help" />
                        <label className="form-check-label" htmlFor="crea-domanda-risposte-numerate">Risposte numerate</label>
                        <div id="crea-domanda-risposte-numerate-help" className="form-text">Attiva il checkbox per mostrare il numero delle risposte durante il test.</div>
                    </div>

                    <hr></hr>

                    <p className="h6">Sezione risposte</p>
                    <div className="alert alert-warning" role="alert">
                    Devi inserire almeno due risposte. Per inserire più risposte utilizza il bottone "Aggiungi risposta".
                    </div>
                    <div className="input-group">
                        <div className="input-group-text">
                        <input id="crea-risposta-punteggio-1" className="form-check-input mt-0 w15em h15em" type="checkbox" value="" aria-label="Attiva questo checkbox se la risposta 1 è corretta." aria-describedby="crea-risposte-punteggio-1-help"/>
                        </div>
                        <input type="text" id="crea-risposta-testo-1" className="form-control" aria-label="Inserisci qui il testo della risposta 1." placeholder="Inserisci qui il testo della risposta 1" />
                    </div>
                    <div id="crea-domanda-risposte-numerate-help" className="form-text mb-3">Attiva il checkbox se la risposta 1 è corretta.</div>

                    <a className="btn btn-primary">Aggiungi risposta</a>

                    <hr></hr>

                    <div className="alert alert-info" role="alert">
                        Seleziona "Conferma e Continua" per confermare l'attuale domanda e continuare con una nuova domanda; seleziona "Termina" per uscire dalla compilazione senza salvare la domanda attuale. 
                    </div>
                    <button type="submit" id="crea-domanda-conferma" className="btn btn-success me-1">Conferma e Continua</button>
                    <a className="btn btn-danger">Termina</a>
                </form>
            </div>
        </div>
        </>
    )
  }
}

export default PaginaCreaDomanda
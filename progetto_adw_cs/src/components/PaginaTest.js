import React from "react";
import RispostaSingola from "./RispostaSingola";

// TODO: qui fare la chiamata a tutte le domande dato il test
// salvare le domande in un array di stato
// salvare la domanda attuale in un array di stato
// abilitare il salvataggio in cache?

const PaginaTest = () => {
    return (
        <>
        <div className="card my-4">
            <div className="card-body">
                <h5 className="card-title">Domanda 1</h5>
                <p className="card-text">Bla bla bla.</p>
                
                <hr />

                <RispostaSingola />
                
                <hr />

                <button className="btn btn-success">Conferma</button>
            </div>
        </div>
        </>
    )
}

export default PaginaTest
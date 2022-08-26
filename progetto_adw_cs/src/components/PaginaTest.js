import React, { Component } from "react";
import RispostaSingola from "./RispostaSingola";
import RispostaMultipla from "./RispostaMultipla";

class PaginaTest extends Component {
    render() {
        return (
            <>
            <div className="card my-4">
                <div className="card-body">
                    <h5 className="card-title">Domanda 1</h5>
                    <p className="card-text">Bla bla bla.</p>
                    
                    <hr />

                    <RispostaSingola />


                    <RispostaMultipla />
                    
                    <hr />

                    <button className="btn btn-success">Conferma</button>
                </div>
            </div>
            </>
        )
    }
}

export default PaginaTest
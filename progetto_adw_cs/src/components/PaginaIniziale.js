import React, { Component } from "react";

import TabellaTest from './TabellaTest';

class PaginaIniziale extends Component {
    render() {
        return (
            <>
            <div className="text-center my-4">
                <button className="btn btn-lg btn-primary me-1 mb-1">
                    Nuovo Test
                </button>
                <button className="btn btn-lg btn-primary ms-1 mb-1">
                    Nuova Domanda
                </button>
            </div>

            <TabellaTest />
            </>
        )
    }
}

export default PaginaIniziale
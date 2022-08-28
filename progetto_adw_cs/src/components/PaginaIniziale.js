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



            <div className="card">
                <h5 className="card-header">Lista dei test</h5>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover table-sm">
                            <thead>
                                <tr>
                                <th scope="col" className="text-start">Data</th>
                                <th scope="col" className="text-center">Nome</th>
                                <th scope="col" className="text-center">Ordine Casuale</th>
                                <th scope="col" className="text-center">Domande Numerate</th>
                                <th scope="col" className="text-end">Inizia il test</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                            {
                                this.props.tests.map((test, index) => (
                                    <TabellaTest 
                                        key={index}
                                        data={test.data}
                                        nome={test.nome}
                                        ordine_casuale={test.ordinecasuale}
                                        domande_numerate={test.domandeconnumero}
                                    />
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default PaginaIniziale
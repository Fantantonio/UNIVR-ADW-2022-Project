import React from "react";

import TabellaTest from './TabellaTest';

import { useQuery } from '@apollo/client';
import { GET_ALL_TEST } from "../gql/Query";

const PaginaIniziale = ({setPage}) => {

    const { data, loading, error } = useQuery(GET_ALL_TEST);
    

    return (
        <>
        {data &&
            <>
            <div className="text-center my-4">
                <button className="btn btn-lg btn-primary me-1 mb-1" onClick={() => setPage("PaginaCreaTest")}>
                    Nuovo Test
                </button>
                <button className="btn btn-lg btn-primary ms-1 mb-1" onClick={() => setPage("PaginaCreaDomanda")}>
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
                                data.tuttiTest.map((test, index) => (
                                    <TabellaTest 
                                        setPage={setPage}
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

export default PaginaIniziale
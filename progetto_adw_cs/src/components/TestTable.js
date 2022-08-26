import React, { Component } from "react";

class TestTable extends Component {
    render() {
        return (
            <div className="card">
                <h5 className="card-header">Lista dei test</h5>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover table-sm">
                            <thead>
                                <tr>
                                <th scope="col" className="text-start">#</th>
                                <th scope="col" className="text-start">Data</th>
                                <th scope="col" className="text-center">Nome</th>
                                <th scope="col" className="text-center">Ordine Casuale</th>
                                <th scope="col" className="text-center">Domande Numerate</th>
                                <th scope="col" className="text-end">Inizia il test</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                <tr>
                                <th className="text-start" scope="row">1</th>
                                <td className="text-start">2022-01-12</td>
                                <td className="text-center">Esame 1</td>
                                <td className="text-center">false</td>
                                <td className="text-center">true</td>
                                <td className="text-end">
                                    <a href="#">Inizia</a>
                                </td>
                                </tr>
                                <tr>
                                <th className="text-start" scope="row">2</th>
                                <td className="text-start">2022-06-04</td>
                                <td className="text-center">Esame 2</td>
                                <td className="text-center">false</td>
                                <td className="text-center">false</td>
                                <td className="text-end">
                                    <a href="#">Inizia</a>
                                </td>
                                </tr>
                                <tr>
                                <th className="text-start" scope="row">3</th>
                                <td className="text-start">2022-08-25</td>
                                <td className="text-center">Esame 3</td>
                                <td className="text-center">true</td>
                                <td className="text-center">false</td>
                                <td className="text-end">
                                    <a href="#">Inizia</a>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default TestTable
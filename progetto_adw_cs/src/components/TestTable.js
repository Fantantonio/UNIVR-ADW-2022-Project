import React from "react";

function TestTable() {
    return (
        <div class="card">
            <h5 class="card-header">Lista dei test</h5>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-sm">
                        <thead>
                            <tr>
                            <th scope="col" class="text-start">#</th>
                            <th scope="col" class="text-start">Data</th>
                            <th scope="col" class="text-center">Nome</th>
                            <th scope="col" class="text-center">Ordine Casuale</th>
                            <th scope="col" class="text-center">Domande Numerate</th>
                            <th scope="col" class="text-end">Inizia il test</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <tr>
                            <th class="text-start" scope="row">1</th>
                            <td class="text-start">2022-01-12</td>
                            <td class="text-center">Esame 1</td>
                            <td class="text-center">false</td>
                            <td class="text-center">true</td>
                            <td class="text-end">
                                <a href="#">Inizia</a>
                            </td>
                            </tr>
                            <tr>
                            <th class="text-start" scope="row">2</th>
                            <td class="text-start">2022-06-04</td>
                            <td class="text-center">Esame 2</td>
                            <td class="text-center">false</td>
                            <td class="text-center">false</td>
                            <td class="text-end">
                                <a href="#">Inizia</a>
                            </td>
                            </tr>
                            <tr>
                            <th class="text-start" scope="row">3</th>
                            <td class="text-start">2022-08-25</td>
                            <td class="text-center">Esame 3</td>
                            <td class="text-center">true</td>
                            <td class="text-center">false</td>
                            <td class="text-end">
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

export default TestTable
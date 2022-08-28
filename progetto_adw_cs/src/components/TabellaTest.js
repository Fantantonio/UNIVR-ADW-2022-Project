import React, { Component } from "react";
import RerturnTest from "./ReturnTest";
import { GET_TEST } from "../gql/Query";
import { useQuery } from '@apollo/client'




class FillTable extends Component{

    render() {
 
        var heading = ['Name', 'City', 'Course'];
        
        var body =
            [['Kapil', 'Jaipur', 'MCA'],
            ['Aakash', 'Hisar', 'Btech'],
            ['Mani', 'Ranchi', 'MSc'],
            ['Yash', 'Udaipur', 'Mtech']
            ];
        return (
            <div >
                <TabellaTest heading={heading} body={body} />,
            </div>
        );
    }
}



class TabellaTest extends Component {
    render() {
        var heading = this.props.heading;
        var body = this.props.body;
        return (          
            <div className="card">
                <h5 className="card-header">Lista dei test</h5>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover table-sm">
                            <thead>
                                <tr>
                             {heading.map(head => <th>{head}</th>)}
                                <th scope="col" className="text-start">#</th>
                                <th scope="col" className="text-start">Data</th>
                                <th scope="col" className="text-center">Nome</th>
                                <th scope="col" className="text-center">Ordine Casuale</th>
                                <th scope="col" className="text-center">Domande Numerate</th>
                                <th scope="col" className="text-end">Inizia il test</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                            {body.map(row => <TableRow row={row} />)}
                                <tr>
                              
                                <th className="text-start" scope="row">1</th>
                                <td className="text-start">2022-03-02</td>
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

                        <script>alert(1)</script>
                    </div>
                </div>
            </div>
        )
    }


}

class TableRow extends Component {
    render() {
        var row = this.props.row;
        return (
            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
    }
}
  
/*
//const { loading, error, data } = useQuery(GET_TEST);
var data = [["22-07-2022", "App", "true", "fals"]]

function loadTableData(items) {
    
    const table = document.getElementById("table-group-divider");
    items.forEach( item => {
      let row = table.insertRow();
      let date = row.insertCell(0);
      date.innerHTML = item.date;
      let name = row.insertCell(1);
      name.innerHTML = item.name;
    });
  }

loadTableData(data);
*/

//export default TabellaTest
export default FillTable
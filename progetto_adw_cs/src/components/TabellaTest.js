import React, { Component } from "react";

class TabellaTest extends Component {
    render() {
        return (
            <>
            <tr>
                <td className="text-start">{this.props.data}</td>
                <td className="text-center">{this.props.nome}</td>
                <td className="text-center">{this.props.ordine_casuale.toString()}</td>
                <td className="text-center">{this.props.domande_numerate.toString()}</td>
                <td className="text-end">
                    <button type="button" className="btn btn-sm btn-primary" href="#">Inizia</button>
                </td>
            </tr>
            </>
        )
    }
}

export default TabellaTest
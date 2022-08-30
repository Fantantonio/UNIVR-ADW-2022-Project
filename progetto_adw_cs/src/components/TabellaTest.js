import React from "react";

const TabellaTest = ({setPage, data, nome, ordine_casuale, domande_numerate}) => {
    return (
        <>
        <tr>
            <td className="text-start">{data}</td>
            <td className="text-center">{nome}</td>
            <td className="text-center">{ordine_casuale.toString()}</td>
            <td className="text-center">{domande_numerate.toString()}</td>
            <td className="text-end">
                <button type="button" className="btn btn-sm btn-primary" onClick={() => setPage("PaginaTest")}>Inizia</button>
            </td>
        </tr>
        </>
    )
}

export default TabellaTest
import { useState } from "react";
import Axios from "axios";

const TabellaTest = ({setPage, userId, nomeTest, setNomeTest, dataTest, setDataTest, data, nome, ordine_casuale, domande_numerate}) => {
    

    const userTestInit = () => {
        setNomeTest(nome);
        setDataTest(data);
        Axios.post("http://localhost:5000/usertest", {
            userId: userId,
            nomeTest: nomeTest,
            dataTest: dataTest,
        }).then((response) => {
            if (response.data.message) {
                console.error(response.data.message);
            } else {
                setPage("PaginaTest");
            }
        });
    }


    return (
        <>
        <tr>
            <td className="text-start">{data}</td>
            <td className="text-center">{nome}</td>
            <td className="text-center">{ordine_casuale.toString()}</td>
            <td className="text-center">{domande_numerate.toString()}</td>
            <td className="text-end">
                <button type="button" className="btn btn-sm btn-primary" onClick={() => {
                        userTestInit();
                    }
                }>Inizia</button>
            </td>
        </tr>
        </>
    )
}

export default TabellaTest
import { useState } from "react";
import Axios from "axios";
export const exportedVariable=false;

const TabellaTest = ({setPage, userId, nomeTest, setNomeTest, dataTest, setDataTest, data, nome, flagOrdineCasuale, setFlagOrdine, flagDomandeNumerate, setFlagDomande,ordine_casuale, domande_numerate}) => {
     

    const userTestInit = () => {
        setFlagOrdine(ordine_casuale.toString());
        setFlagDomande(domande_numerate.toString());
        setNomeTest(nome);
        setDataTest(data);
        Axios.post("http://localhost:5000/usertest", {
            userId: userId,
            nomeTest: nome,
            dataTest: data,
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
                <button type="button" className="btn btn-sm btn-primary" aria-label={`Data: ${data}, Nome: ${nome}, Ordine casuale: ${ordine_casuale.toString()}, Domande Numerate: ${domande_numerate.toString()}`} onClick={() => {
                        userTestInit();
                    }
                }>Inizia</button>
            </td>
        </tr>
        </>
    )
}

export default TabellaTest;


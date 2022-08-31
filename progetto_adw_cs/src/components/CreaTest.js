import { useMutation } from '@apollo/client';
import { GET_ALL_DOMANDE } from '../gql/Query';
import { ADD_TEST }  from  '../gql/Mutation';
import { ADD_INTEST }  from  '../gql/Mutation';
import { useQuery } from '@apollo/client';
import { useCallback, useState } from "react";


const CreaTest = () => {
    let nome, dataTest, ordinecasuale, domandeconnumero;
 
    const [createTest] = useMutation(ADD_TEST);
    const [createInTest] = useMutation(ADD_INTEST);
    const { data, loading, error } = useQuery(GET_ALL_DOMANDE);
  
    const [isCheckedOrdineCasuale, setIsSubscribed1] = useState(false);
    const [isCheckedDomandeNumero, setIsSubscribed2] = useState(false);

    const handleChangeOrdineCasuale = () => {
        setIsSubscribed1(current2 => !current2);
       
        console.log("ordine casuale " + ordinecasuale.value)
    }
    
    const handleChangeDomandeNumero = () => {
        setIsSubscribed2(current1 => !current1);
        console.log("domande con numero " + domandeconnumero.value)
    }

    const [domande, setDomande] = useState([]);  

    let toggleValue = useCallback((event, id) => {
       if (event.target.checked) {
         setDomande(value => [...value, id])
       } else {
         setDomande(value => value.filter(it => it !== id))
       }
    }, [setDomande])

    console.log(domande);
    return (
        <>
        {data &&
        <div className="card my-4">
            <div className="card-body">
                <form onSubmit={ e => {
                    e.preventDefault();
                    createTest({ variables: {nome:nome.value, dataTest:dataTest.value, ordinecasuale:ordinecasuale.value, domandeconnumero:domandeconnumero.value}});
                    for (let n of domande){
                    createInTest({ variables: {idDomanda:n, dataTest:dataTest.value, nomeTest:nome.value }});}}
                }>
                    <div className="mb-3">
                        <label htmlFor="crea-test-nome" className="form-label" id="nome-del-test">Nome del test</label>
                        <input type="nomeTest" className="form-control" aria-describedby="crea-test-nome-help" ref= { value => nome = value} id="nome"/>
                        <div id="crea-test-nome-help" className="form-text">Inserisci qui il nome del test.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="crea-test-data" className="form-label">Data del test</label>
                        <input type="date" className="form-control" aria-describedby="crea-test-data-help" ref= { value => dataTest = value} id="dataTest" />
                        <div id="crea-test-data-help" className="form-text">Inserire la data del test.</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" aria-describedby="crea-test-ordine-casuale-help" value={isCheckedOrdineCasuale} onChange={handleChangeOrdineCasuale} ref= { value => domandeconnumero = value}  id="ordinecasuale" />
                        <label className="form-check-label" htmlFor="crea-test-ordine-casuale">Domande in ordine casuale</label>
                        <div id="crea-test-ordine-casuale-help" className="form-text">Attiva il checkbox per mostrare le domande in ordine casuale durante il test.</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" aria-describedby="crea-test-domande-numerate-help" value={isCheckedDomandeNumero} onChange={handleChangeDomandeNumero} ref= { value => ordinecasuale = value}  id="domandeconnumero"/>
                        <label className="form-check-label" htmlFor="crea-test-domande-numerate">Risposte numerate</label>
                        <div id="crea-test-domande-numerate-help" className="form-text">Attiva il checkbox per mostrare il numero delle domande durante il test.</div>
                    </div>
                    <p className="card-text">Seleziona le domande dalla lista qui sotto</p>
                    {
                                data.tutteDomande.map((domanda, index) =>{
                                    return(
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="crea-test-domanda-1" onChange={(e) => toggleValue(e, domanda.nome)}    />
                                            <label className="form-check-label" htmlFor="crea-test-domanda-1">{domanda.testo}</label>
                                        </div>)

                                })
                    }
                 <div className="mt-4">
                        <button type="submit" id="crea-test-conferma" className="btn btn-success me-1">Conferma</button>
                        <button type="button" className="btn btn-danger">Annulla</button>
                    </div>
                </form>
            </div>
        </div>
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


  export default CreaTest
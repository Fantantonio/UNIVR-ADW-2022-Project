import { useState } from "react";
import { GET_RISPOSTA } from "../gql/Query";
import { useQuery } from '@apollo/client';


const RispostaSingola = ({question}) => {

 //   const  {data, loading, error}  = useQuery(GET_RISPOSTA, { variables: {idDomanda:question.nome}});
    const [answers, setAnswers] = useState([]);
//    console.log("Dentro risposta");
//    console.log(question.nome);
    const getAnswers = () => {
 //       console.log("Dentro risposta");
  //      console.log(data.getRisposta);

 //       console.log(data);
        // TODO: get the answers from question.nome and then set the order and numero according to question data.
 //       setAnswers(data.getRisposta); 
        let content = [];
        let i =0;
/*
        {
            data.getRisposta.map((risposta, index) =>{
                content.push(
                    <>
                    <input className="form-check-input" type="radio" id="risposta1" />
                    <label className="form-check-label" htmlFor="crea-test-domanda-1">
                        {risposta.testo}
                    </label><br></br><br></br>
                    </>)

            })
        }
        
*/
        /*
        for (let i = 0; i < answers.length; i += 1) {
            content.push(
                <>
                <input className="form-check-input" type="radio" name={`risposta-${answers[i].id}`} id={`risposta-${answers[i].id}`} value={`${answers[i].id}`} />
                <label className="form-check-label" htmlFor={`risposta-${answers[i].id}`}>
                    {answers[i].testo}
                </label>
                </>
            );
       }*/
        return content;
    }

    return (
        <>
        { getAnswers() }
        </>
    )
}
    
export default RispostaSingola
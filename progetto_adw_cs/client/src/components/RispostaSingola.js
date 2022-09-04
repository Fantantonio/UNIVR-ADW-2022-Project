import { useState } from "react";
import { GET_RISPOSTA } from "../gql/Query";
import { useQuery } from '@apollo/client';


const RispostaSingola = ({question}) => {

    const getAnswers = () => {
          console.log("Dentro risposta");
          console.log(question);

        // TODO: get the answers from question.nome and then set the order and numero according to question data.
        // setAnswers(data.getRisposta); 
        let content = [];
        let i =0;

        
        for (let i = 0; i < question.length; i += 1) {
            content.push(
                <>
                <input className="form-check-input" type="radio" name={`risposta-${question[i].id}`} id={`risposta-${question[i].id}`} value={`${question[i].id}`} />
                <label className="form-check-label" htmlFor={`risposta-${question[i].id}`}>
                    {question[i].testo}
                </label><br></br>
                </>
            );
       }
        return content;
    }

    return (
        <>
        { getAnswers() }
        </>
    )
}
    
export default RispostaSingola
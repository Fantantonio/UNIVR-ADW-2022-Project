import { useState } from "react";
import { GET_RISPOSTA } from "../gql/Query";
import { useQuery } from '@apollo/client';


const RispostaSingola = ({question, flagOrdineCasualeRisposte, flagRisposteNumerate }) => {

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }


    // TODO: get the answers from question.nome and then set the order and numero according to question data.
    // setAnswers(data.getRisposta);
    const getAnswers = () => {
        console.log("Dentro risposta");
        console.log(question);
        let arrayRisposte = []; 
        let content = [];
      

        console.log("Prima di tutto");
        console.log(question);
        arrayRisposte = Object.values(question);
        
        if(flagOrdineCasualeRisposte){
            shuffle(arrayRisposte);
            for (let i = 0; i < arrayRisposte.length; i += 1) {
                content.push(
                    <>
                    <input className="form-check-input" type="radio" name={`risposta-${arrayRisposte[i].id}`} id={`risposta-${arrayRisposte[i].id}`} value={`${arrayRisposte[i].id}`} />
                    <label className="form-check-label" htmlFor={`risposta-${arrayRisposte[i].id}`}>
                     {flagRisposteNumerate ? '_' + arrayRisposte[i].id + ') ' + arrayRisposte[i].testo: arrayRisposte[i].testo}
                    </label><br></br>
                    </>
                );
           }
        }else{
            for (let i = 0; i < question.length; i += 1) {
                content.push(
                    <>
                    <input className="form-check-input" type="radio" name={`risposta-${question[i].id}`} id={`risposta-${question[i].id}`} value={`${question[i].id}`} />
                    <label className="form-check-label" htmlFor={`risposta-${question[i].id}`}>
                     {flagRisposteNumerate ? '_' + question[i].id + ') ' + question[i].testo: question[i].testo}
                    </label><br></br>
                    </>
                );
           }
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
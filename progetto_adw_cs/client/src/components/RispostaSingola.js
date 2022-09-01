import { useState } from "react";

const RispostaSingola = ({question}) => {

    const [answers, setAnswers] = useState([]);

    const getAnswers = () => {
        // TODO: get the answers from question.nome and then set the order and numero according to question data.
        let content = [];
        for (let i = 0; i < answers.length; i += 1) {
            content.push(
                <>
                <input className="form-check-input" type="radio" name={`risposta-${answers[i].id}`} id={`risposta-${answers[i].id}`} value={`${answers[i].id}`} />
                <label className="form-check-label" htmlFor={`risposta-${answers[i].id}`}>
                    {answers[i].testo}
                </label>
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
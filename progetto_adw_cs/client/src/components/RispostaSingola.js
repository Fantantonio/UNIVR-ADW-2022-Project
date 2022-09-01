import { useState } from "react";

const RispostaSingola = ({question}) => {

    const [answers, setAnswers] = useState([]);

    const getAnswers = () => {
        // TODO: get the answers from question.nome and then set the order and numero according to question data.
    }

    return (
        <>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="1" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Risposta 1
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="2" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
                Risposta 2
            </label>
        </div>
        </>
    )
}
    
export default RispostaSingola
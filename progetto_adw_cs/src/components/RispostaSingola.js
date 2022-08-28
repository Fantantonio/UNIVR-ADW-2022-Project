import React, { Component } from "react";
import ReturnRisposta from "./RerturnRisposta";

class RispostaSingola extends Component {
    render() {
        return (
            <>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <ReturnRisposta />
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Risposta 2
                </label>
            </div>
            </>
        )
    }
}
    
export default RispostaSingola
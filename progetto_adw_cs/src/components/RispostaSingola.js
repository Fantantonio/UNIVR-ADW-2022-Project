import React, { Component } from "react";

class RispostaSingola extends Component {
    render() {
        return (
            <>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Risposta 1
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
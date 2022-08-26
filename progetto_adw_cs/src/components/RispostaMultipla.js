import React, { Component } from "react";

class RispostaMultipla extends Component {
    render() {
        return (
            <>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Risposta 1
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Risposta 2
                </label>
            </div>
            </>
        )
    }
}
    
export default RispostaMultipla
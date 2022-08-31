import React from "react";

export const ListaDomande = ({nome,testo}) => {
    

    return (
        <>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="crea-test-domanda-1" />
            <label className="form-check-label" htmlFor="crea-test-domanda-1">{testo}</label>
        </div>
        </>
    )
}


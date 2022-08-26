import React, { Component } from "react";

class PaginaFile extends Component {
    render() {
        return (
            <>
            <div className="card my-4">
                <div className="card-body">

                    <form>
                        
                        <div className="mb-3">
                            <label htmlFor="login-nome-utente" className="form-label">Nome utente</label>
                            <input type="text" className="form-control" id="login-nome-utente" aria-describedby="login-nome-utente-help" aria-autocomplete="username" autoComplete="username" />
                            <div id="login-nome-utente-help" className="form-text">Inserisci qui il tuo nome utente.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="login-password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="login-password" aria-describedby="login-password-help" aria-autocomplete="password" autoComplete="password" />
                            <div id="login-password-help" className="form-text">Inserisci qui la tua password.</div>
                        </div>
                    </form>

                    <button className="btn btn-success">Login</button>
                </div>
            </div>
            </>
        )
    }
}

export default PaginaFile
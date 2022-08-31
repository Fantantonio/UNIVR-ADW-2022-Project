import React, { useState } from "react";
import Axios from "axios";


const PaginaLogin = ({setPage, setIsLogged, setUserRole}) => {

    // Manage login error alert
    const [loginError, setLoginError] = useState("");

    const showLoginError = () => {
        let content = <></>;
        if (loginError !== "") {
            content =
                <>
                <div className="alert alert-danger" role="alert">
                    {loginError}
                </div>
                </>;
        }
        return content;
    }


    // Manage login behaviour
    const [nomeutente, setNomeutente] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        Axios.post("http://localhost:5000/login", {
            nomeutente: nomeutente,
            password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginError(response.data.message);
            } else {
                Axios.get("http://localhost:5000/login").then((response) => {
                    setIsLogged(response.data.isLogged);
                    setUserRole(response.data.userRole);
                });
                setPage("PaginaIniziale");
            }
        });
    }

    return (
        <>
        <div className="card my-4">
            <div className="card-body">

                <form>
                    
                    <div className="mb-3">
                        <label htmlFor="login-nome-utente" className="form-label">Nome utente</label>
                        <input type="text" className="form-control" id="login-nome-utente" aria-describedby="login-nome-utente-help" aria-autocomplete="both" autoComplete="username" onChange={(event) => {
                            setNomeutente(event.target.value);
                        }} />
                        <div id="login-nome-utente-help" className="form-text">Inserisci qui il tuo nome utente.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="login-password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="login-password" aria-describedby="login-password-help" aria-autocomplete="both" autoComplete="password" onChange={(event) => {
                            setPassword(event.target.value);
                        }} />
                        <div id="login-password-help" className="form-text">Inserisci qui la tua password.</div>
                    </div>
                </form>

                {showLoginError()}

                <button className="btn btn-success" onClick={login}>Login</button>
            </div>
        </div>
        </>
    )
}


export default PaginaLogin
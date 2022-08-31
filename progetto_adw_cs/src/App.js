import { Component } from "react";
import "bootstrap/dist/js/bootstrap";
import BarraNavigazione from './components/BarraNavigazione';
import PaginaIniziale from './components/PaginaIniziale';
import PaginaTest from './components/PaginaTest';
import PaginaFineTest from './components/PaginaFineTest';
import PaginaCreaDomanda from './components/PaginaCreaDomanda';
import PaginaCreaTest from './components/PaginaCreaTest';

//import { PaginaCreaTest } from "./components/PaginaCreaTest";

import './styles/App.css';


import { useQuery, gql } from '@apollo/client';
import { GET_ALL_TEST } from "./gql/Query";
import TabellaTest from "./components/TabellaTest";
import CreaTest from "./components/CreaTest";



const App = () => {

  const { data, loading, error } = useQuery(GET_ALL_TEST);


  return (
    <>
    <div className="App">
          <BarraNavigazione />
          <hr className="m-0"></hr>
          
          <div className="container mt-4">
            <CreaTest />
          
          </div>
    
    
    </div>
  </>
  )

  /*
  return (
    <>
      {data &&
        <div className="App">

          <BarraNavigazione />
          <hr className="m-0"></hr>
          
          <div className="container mt-4">
            <PaginaIniziale 
              tests={data.tuttiTest}
            />
          </div>
      </div>}
      {loading &&
        <div className="alert alert-info" role="alert">
          Attendi il caricamento dei dati!
        </div>}
      {error &&
        <div className="alert alert-danger" role="alert">
          Errore: {error}
        </div>}
    </>
  );*/
}

export default App;
import { Component, useState } from "react";
import "bootstrap/dist/js/bootstrap";
import BarraNavigazione from './components/BarraNavigazione';
import PaginaIniziale from './components/PaginaIniziale';
import PaginaTest from './components/PaginaTest';
import PaginaFineTest from './components/PaginaFineTest';
import PaginaCreaDomanda from './components/PaginaCreaDomanda';
import PaginaCreaTest from './components/PaginaCreaTest';
import './styles/App.css';


import { useQuery, gql } from '@apollo/client';
import { GET_ALL_TEST } from "./gql/Query";



const App = () => {

  const [user_role, setUserRole] = useState(true);
  const [page, setPage] = useState("PaginaIniziale");
  const setStatePage = (page_name) => {
    setPage(page_name);
  }

  return (
    <>
      <div className="App">
        <BarraNavigazione />
        <hr className="m-0"></hr>
        
        <div className="container mt-4">
          {page === "PaginaIniziale" &&
            <PaginaIniziale 
              setStatePage={setStatePage}
            />
          }
          {page === "PaginaTest" &&
            <PaginaTest
              page={page}
            />
          }
        </div>
      </div>
    </>
  );
}

export default App;

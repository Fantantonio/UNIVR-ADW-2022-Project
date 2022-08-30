import { useState } from "react";
import "bootstrap/dist/js/bootstrap";
import BarraNavigazione from './components/BarraNavigazione';
import PaginaIniziale from './components/PaginaIniziale';
import PaginaTest from './components/PaginaTest';
import PaginaFineTest from './components/PaginaFineTest';
import PaginaCreaDomanda from './components/PaginaCreaDomanda';
import PaginaCreaTest from './components/PaginaCreaTest';
import './styles/App.css';


const App = () => {

  //const [user_role, setUserRole] = useState(true);
  const [page, setPage] = useState("PaginaIniziale");

  
  /*
  const closeNavbar = () => {
    const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
    let offcanvas = document.getElementById('offcanvasDarkNavbar');
    let bootstrap_offcanvas = new bootstrap.Offcanvas(offcanvas);
    bootstrap_offcanvas.hide();
  }
  */

  return (
    <>
      <div className="App">
        <BarraNavigazione
          setPage={setPage}
        />
        <hr className="m-0"></hr>
        
        <div className="container mt-4">
          {page === "PaginaIniziale" &&
            <PaginaIniziale
              setPage={setPage}
            />
          }
          {page === "PaginaTest" &&
            <PaginaTest
              setPage={setPage}
            />
          }
          {page === "PaginaFineTest" &&
            <PaginaFineTest
              setPage={setPage}
            />
          }
          {page === "PaginaCreaTest" &&
            <PaginaCreaTest
              setPage={setPage}
            />
          }
          {page === "PaginaCreaDomanda" &&
            <PaginaCreaDomanda
              setPage={setPage}
            />
          }
        </div>
      </div>
    </>
  );
}

export default App;

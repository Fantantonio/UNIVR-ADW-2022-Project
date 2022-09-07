import { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap";
import Axios from "axios";
import BarraNavigazione from './components/BarraNavigazione';
import PaginaIniziale from './components/PaginaIniziale';
import PaginaTest from './components/PaginaTest';
import PaginaFineTest from './components/PaginaFineTest';
import PaginaCreaDomanda from './components/PaginaCreaDomanda';
import PaginaCreaTest from './components/PaginaCreaTest';
import PaginaLogin from './components/PaginaLogin';
import './styles/App.css';


const App = () => {

  Axios.defaults.withCredentials = true;


  const [isLogged, setIsLogged] = useState(false);
  const [userRole, setUserRole] = useState(undefined);
  const [userId, setUserId] = useState(undefined);
  const [nomeTest, setNomeTest] = useState(undefined);
  const [dataTest, setDataTest] = useState(undefined);
  const [page, setPage] = useState("PaginaIniziale");
  const [flagOrdineCasuale, setFlagOrdine] = useState();
  const [flagDomandeNumerate, setFlagDomande] = useState();


  useEffect(() => {
    Axios.get("http://localhost:5000/login").then((response) => {
      setIsLogged(response.data.isLogged);
      setUserRole(response.data.userRole);
      setUserId(response.data.userId);
    });
  }, []);



  return (
    <>
      <div className="App">
        <BarraNavigazione
          setPage={setPage}
        />
        <hr className="m-0"></hr>
        
        <div className="container mt-4">
          {!isLogged &&
            <PaginaLogin
              setPage={setPage}
              setIsLogged={setIsLogged}
              setUserRole={setUserRole}
              setUserId={setUserId}
            />
          }
          {(isLogged && page === "PaginaIniziale") &&
            <PaginaIniziale
              setPage={setPage}
              userRole={userRole}
              userId={userId}
              nomeTest={nomeTest}
              setNomeTest={setNomeTest}
              dataTest={dataTest}
              setDataTest={setDataTest}
              flagOrdineCasuale={flagOrdineCasuale}
              setFlagOrdine={setFlagOrdine}
              flagDomandeNumerate={flagDomandeNumerate}
              setFlagDomande={setFlagDomande}
            />
          }
          {(isLogged && page === "PaginaTest") &&
            <PaginaTest
              setPage={setPage}
              userRole={userRole}
              userId={userId}
              nomeTest={nomeTest}
              dataTest={dataTest}
              flagOrdineCasuale={flagOrdineCasuale}
              flagDomandeNumerate={flagDomandeNumerate}
            />
          }
          {(isLogged && page === "PaginaFineTest") &&
            <PaginaFineTest
              setPage={setPage}
              userRole={userRole}
              userId={userId}
              nomeTest={nomeTest}
              dataTest={dataTest}
            />
          }
          {(isLogged && userRole === 0 && page === "PaginaCreaTest") &&
            <PaginaCreaTest
              setPage={setPage}
            />
          }
          {(isLogged && userRole === 0 && page === "PaginaCreaDomanda") &&
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

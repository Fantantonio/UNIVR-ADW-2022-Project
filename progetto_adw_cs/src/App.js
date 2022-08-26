import { Component } from "react";
import "../node_modules/bootstrap/dist/js/bootstrap";
import BarraNavigazione from './components/BarraNavigazione';
import PaginaIniziale from './components/PaginaIniziale';
import PaginaTest from './components/PaginaTest';
import PaginaFineTest from './components/PaginaFineTest';
import PaginaCreaDomanda from './components/PaginaCreaDomanda';
import PaginaCreaTest from './components/PaginaCreaTest';
import './styles/App.css';

class App extends Component {
  state = {
    test: [

    ]
  }


  render() {
    return (
      <div className="App">
        <BarraNavigazione />
        <hr className="m-0"></hr>
        
        <div className="container mt-4">

          <PaginaCreaTest />

        </div>
      </div>
    );
  }
}

export default App;

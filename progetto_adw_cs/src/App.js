import { Component } from "react";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Navbar from './components/Navbar';
import TestTable from './components/TestTable';
import './styles/App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Navbar />
      <hr className="m-0"></hr>
      
      <div className="container mt-4">

        <div className="text-center my-4">
          <button className="btn btn-lg btn-primary me-1 mb-1">
            Nuovo Test
          </button>
          <button className="btn btn-lg btn-primary ms-1 mb-1">
            Nuova Domanda
          </button>
        </div>

        <TestTable />
      </div>
    </div>
  );}
}

export default App;

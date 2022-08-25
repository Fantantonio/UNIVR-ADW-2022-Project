import "../node_modules/bootstrap/dist/js/bootstrap";
import Navbar from './components/Navbar';
import TestTable from './components/TestTable';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr class="m-0"></hr>
      
      <div class="container mt-4">

        <div class="text-center my-4">
          <button class="btn btn-lg btn-primary me-1 mb-1">
            Nuovo Test
          </button>
          <button class="btn btn-lg btn-primary ms-1 mb-1">
            Nuova Domanda
          </button>
        </div>

        <TestTable />
      </div>
    </div>
  );
}

export default App;
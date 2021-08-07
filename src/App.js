import logo from './logo.svg';
import './App.css';

//componentes

import "./components/NavBar";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      
      
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi react app (Mi primera)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;

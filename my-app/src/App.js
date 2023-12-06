import logo from './sero1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h3>리액트 환영</h3>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://www.w3schools.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          w3schools
        </a>
      </header>
    </div>
  );
}

export default App;

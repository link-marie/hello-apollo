import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <div className="env">
        <p>REACT_APP_CUSTOM_ENV_VAR value is "{process.env.REACT_APP_CUSTOM_ENV_VAR}"</p>
        <p>REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN value is "{process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}"</p>
      </div>
    </div>
  );
}

export default App;

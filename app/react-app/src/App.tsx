import React from 'react';
import './App.css';
import Etrobo2024 from './components/etrobo2024'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>ETロボコン2024 走行ログ可視化ツール</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ソースコードはこちら
        </a>
      </header>
      <Etrobo2024 />
    </div>
  );
}

export default App;

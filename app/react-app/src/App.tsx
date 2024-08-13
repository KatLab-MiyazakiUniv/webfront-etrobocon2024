import React from 'react';
import './App.css';
import RunLogChart from './components/RunLogChart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>ETロボコン2024 走行ログ可視化ツール</p>
        <a
          className="App-link"
          href="https://github.com/KatLab-MiyazakiUniv/webfront-etrobocon2024"
          target="_blank"
          rel="noopener noreferrer"
        >
          ソースコードはこちら
        </a>
      </header>
      <div style={{ padding: '5% 5%' }}>
        <RunLogChart />
      </div>
    </div>
  );
}

export default App;

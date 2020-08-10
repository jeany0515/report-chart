import React from 'react';
import academy from './images/academy.png'
import oocl from './images/OOCL_logo.svg'
import afs from './images/afs_logo2.png'
import './App.css';
import Charts from './component/Charts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={afs} alt="logo" width='100px' align='right' />
        <img src={academy} alt="logo" height='200px' />
        <img src={oocl} alt="logo" height='100px' />
        <h1 style={{ color: 'white' }}>
          2020 OOCL ITA AFS Bootcamp 报告
        </h1>
        <h6 style={{ color: 'white' }}>
          7月20日 - 8月14日
        </h6>
      </header>
      <Charts />
      <div style={{ background: "white" }}>
        <p >©ThoughtWorks 2020 Commercial in Confidence</p>
      </div>
    </div>
  );
}

export default App;

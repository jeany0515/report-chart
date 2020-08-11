import React from 'react';
import academy from './images/academy.png'
import customer from './images/customer_logo.svg'
import afs from './images/afs_logo2.png'
import './App.css';
import Charts from './component/Charts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={afs} alt="logo" width='160px' style={{ paddingTop: '10px' }} />
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          2020 OOCL ITA AFS Bootcamp 报告
        </h1>
        <h6 style={{ color: 'white', textAlign: 'center' }}>7月20日 - 8月14日</h6>
        <div style={{ textAlign: "right" }}>
          <img src={customer} alt="logo" height='40px' style={{ marginRight: '20px' }} />
          <img src={academy} alt="logo" height='56px' />
        </div>
      </header>
      <Charts />
      <div style={{ background: "white" }}>
        <p >©ThoughtWorks 2020 Commercial in Confidence</p>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import thoughtworks from './thoughtworks.png'
import afs from './afs.png'
import './App.css';
import Charts from './component/Charts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={afs} alt="logo" width='100px' align='right' />
        <img src={thoughtworks} alt="logo" height='100px' />
        <h1 style={{ color: 'white' }}>
          2020 XXXX AFS Bootcamp 报告
        </h1>
        <h6 style={{ color: 'white' }}>
          5月1日 - 5月29日
        </h6>
      </header>
      <Charts />
    </div>
  );
}

export default App;

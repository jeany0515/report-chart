import React from 'react';
import logo from './logo.svg';
import './App.css';
import OverviewChart from './component/OverviewChart'
import 'antd/dist/antd.css';
import FourAbilitiesChart from './component/FourAbilitiesChart';
import AbilityRadarChart from './component/AbilityRadarChart';
import HomeworkQualityTrendChart from './component/HomeworkQualityTrendChart';
import HomeworkQualityChart from './component/HomeworkQualityChart';
import HomeworkScoreChart from './component/HomeworkScoreChart';
import PersonDetailChart from './component/PersonDetailChart';
import AllRankingChart from './component/AllRankingChart';
import HomeworkQualityRankingChart from './component/HomeworkQualityRankingChart';
import AbilityRankingChart from './component/AbilityRankingChart';

function App() {
  return (
    <div className="App">
      <OverviewChart />
      <FourAbilitiesChart/>
      <AbilityRankingChart/>
      <AbilityRadarChart/>
      <HomeworkQualityTrendChart/>
      <HomeworkQualityRankingChart/>
      <HomeworkQualityChart/>
      <HomeworkScoreChart/>
      <PersonDetailChart/>
      <AllRankingChart/>
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
    </div>
  );
}

export default App;

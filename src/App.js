import React from 'react';
import thoughtworks from './thoughtworks.png'
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
import { Divider } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={thoughtworks} alt="logo" />
        <p>
          2020 AFS 报告
        </p>
      </header>
      <OverviewChart />
      <Divider/>
      <FourAbilitiesChart/>
      <Divider/>
      <AbilityRankingChart/>
      <Divider/>
      <AbilityRadarChart/>
      <Divider/>
      <HomeworkQualityTrendChart/>
      <Divider/>
      <HomeworkQualityRankingChart/>
      <Divider/>
      <HomeworkQualityChart/>
      <Divider/>
      <HomeworkScoreChart/>
      <Divider/>
      <PersonDetailChart/>
      <Divider/>
      <AllRankingChart/>
    </div>
  );
}

export default App;

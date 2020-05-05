import React from 'react';
import thoughtworks from './thoughtworks.png'
import './App.css';
import OverviewChart from './component/OverviewChart'
import 'antd/dist/antd.css';
import FourAbilitiesChart from './component/FourAbilitiesChart';
import HomeworkScoreChart from './component/HomeworkScoreChart';
import AllRankingChart from './component/AllRankingChart';
import HomeworkQualityRankingChart from './component/HomeworkQualityRankingChart';
import AbilityRankingChart from './component/AbilityRankingChart';
import { Divider } from 'antd';
import PersonalGroupChart from './component/PersonalGroupChart';

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
      <AllRankingChart/>
      <Divider/>
      <HomeworkQualityRankingChart/>
      <Divider/>
      <HomeworkScoreChart/>
      <Divider/>
      <PersonalGroupChart/>
      <Divider/>
    </div>
  );
}

export default App;

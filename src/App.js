import React from 'react';
import thoughtworks from './thoughtworks.png'
import afs from './afs.png'
import './App.css';
import OverviewLevelChart from './component/OverviewLevelChart'
import 'antd/dist/antd.css';
import OverviewAbilitiesChart from './component/OverviewAbilitiesChart';
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
        <img src={afs} alt="logo" width='100px' align='right'/>
        <img src={thoughtworks} alt="logo" height='100px'/>
        <h1 style={{color: 'white'}}>
          2020 XXXX AFS Bootcamp 报告
        </h1>
      </header>
      <OverviewLevelChart />
      <Divider />
      <OverviewAbilitiesChart />
      <Divider />
      <AbilityRankingChart />
      <Divider />
      <AllRankingChart />
      <Divider />
      <HomeworkQualityRankingChart />
      <Divider />
      <HomeworkScoreChart />
      <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
      以下是每个学员的详细统计报表
    </Divider>
      <PersonalGroupChart />
      <Divider />
    </div>
  );
}

export default App;

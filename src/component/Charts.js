import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OverviewLevelChart from './OverviewLevelChart'
import 'antd/dist/antd.css';
import OverviewAbilitiesChart from './OverviewAbilitiesChart';
import HomeworkScoreChart from './HomeworkScoreChart';
import AllRankingChart from './AllRankingChart';
import HomeworkQualityRankingChart from './HomeworkQualityRankingChart';
import AbilityRankingChart from './AbilityRankingChart';
import { Divider } from 'antd';
import PersonalGroupChart from './PersonalGroupChart';
import DataService from '../service/DataService';

export default class Charts extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        let trainees = DataService.getTraineesData()
        return (
            <div>
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
                {
                    trainees.map((trainee) => (
                        <PersonalGroupChart key={trainee.name} name={trainee.name} />
                    ))
                }
                <Divider />
            </div>
        )
    }
}

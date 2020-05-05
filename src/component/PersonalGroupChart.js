import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HomeworkQualityChart from './HomeworkQualityChart';
import PersonDetailChart from './PersonDetailChart';
import AbilityRadarChart from './AbilityRadarChart';
import HomeworkQualityTrendChart from './HomeworkQualityTrendChart';
import { Divider } from 'antd';

export default class PersonalGroupChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <AbilityRadarChart />
                <Divider />
                <HomeworkQualityTrendChart />
                <Divider />
                <HomeworkQualityChart />
                <Divider />
                <PersonDetailChart />
            </div>
        )
    }
}

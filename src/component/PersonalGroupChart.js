import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HomeworkQualityChart from './HomeworkQualityChart';
import PersonDetailRadarChart from './PersonDetailRadarChart';
import AbilityRadarChart from './AbilityRadarChart';
import HomeworkQualityTrendChart from './HomeworkQualityTrendChart';
import { Divider, Col, Row } from 'antd';

export default class PersonalGroupChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h1>张三的详细报表</h1>
                <AbilityRadarChart />
                <Divider />
                <Row>
                    <Col flex="820px">
                        <HomeworkQualityTrendChart />
                    </Col>
                    <Col flex="820px">
                        <HomeworkQualityChart />
                    </Col>
                </Row>
                <Divider />
                <PersonDetailRadarChart />
            </div>
        )
    }
}

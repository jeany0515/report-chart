import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OverviewLevelChart from './OverviewLevelChart'
import 'antd/dist/antd.css';
import OverviewAbilitiesChart from './OverviewAbilitiesChart';
import HomeworkScoreChart from './HomeworkScoreChart';
import AllRankingChart from './AllRankingChart';
import HomeworkQualityRankingChart from './HomeworkQualityRankingChart';
import AbilityRankingChart from './AbilityRankingChart';
import { Divider, Card, Row, Col } from 'antd';
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
                <Divider />
                <OverviewLevelChart />
                <Divider />
                <OverviewAbilitiesChart />
                <Divider />
                <AbilityRankingChart />
                <Divider />
                <AllRankingChart />
                <Divider />
                <Row>
                    <Col flex="820px" style={{ padding: "10px" }}>
                        <HomeworkQualityRankingChart />
                    </Col>
                    <Col flex="820px" style={{ padding: "10px" }}>
                        <HomeworkScoreChart />
                    </Col>
                </Row>
                <div style={{ background: "#ececec", padding: "30px" }}>
                    {
                        trainees.map((trainee) => (
                            <Row style={{ margin: "25px" }}>
                                <Col span={24}>
                                    <Card title={trainee.name + "的详细报告"} description="This is the description" bordered={true}>
                                        <PersonalGroupChart key={trainee.name} name={trainee.name} />
                                    </Card>
                                </Col>
                            </Row>
                        ))
                    }
                </div>
            </div>
        )
    }
}

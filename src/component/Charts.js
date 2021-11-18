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

class Charts extends Component {

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
                    <Col flex="810px" style={{ padding: "10px" }}>
                        <HomeworkQualityRankingChart />
                    </Col>
                    <Col flex="810px" style={{ padding: "10px" }}>
                        <HomeworkScoreChart />
                    </Col>
                </Row>
                <div style={{ background: "#ececec", padding: "30px" }}>
                    {
                        trainees.map((trainee) => (
                            <Row style={{ margin: "25px" }}>
                                <Col span={24}>
                                    <Card title={trainee.name + this.context.messages.detail_report} description="This is the description" bordered={true}>
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

Charts.contextTypes = {
    messages: PropTypes.object.isRequired
};

export default Charts;

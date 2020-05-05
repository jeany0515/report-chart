import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TraineeHomeworkQualityChart from './TraineeHomeworkQualityChart';
import TraineePersonDetailRadarChart from './TraineePersonDetailRadarChart';
import TraineeAbilityRadarChart from './TraineeAbilityRadarChart';
import TraineeHomeworkQualityTrendChart from './TraineeHomeworkQualityTrendChart';
import { Divider, Col, Row } from 'antd';

export default class PersonalGroupChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}的详细报表</h1>
                <p>包括该学员各维度总体能力的能力图统计，每次作业质量按时间顺序的走势图，学员所有作业质量得分的分布，以及各维度的每一项的详细得分。</p>
                <TraineeAbilityRadarChart name={this.props.name}/>
                <Divider />
                <Row>
                    <Col flex="820px">
                        <TraineeHomeworkQualityTrendChart name={this.props.name}/>
                    </Col>
                    <Col flex="820px">
                        <TraineeHomeworkQualityChart name={this.props.name}/>
                    </Col>
                </Row>
                <Divider />
                <TraineePersonDetailRadarChart name={this.props.name}/>
            </div>
        )
    }
}

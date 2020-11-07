import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TraineeHomeworkQualityChart from './TraineeHomeworkQualityChart';
import TraineePersonDetailRadarChart from './TraineePersonDetailRadarChart';
import TraineeAbilityRadarChart from './TraineeAbilityRadarChart';
import TraineeHomeworkQualityTrendChart from './TraineeHomeworkQualityTrendChart';
import { Divider, Col, Row } from 'antd';
import { FormattedMessage } from "react-intl";
import TraineePositionChart from './TraineePositionChart';

export default class PersonalGroupChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div style={{ backgroundColor: "white" }}>
                <p><FormattedMessage id='detail_report_des' /></p>
                <Divider />
                <TraineePositionChart name={this.props.name} />
                <Divider />
                <Row>
                    <Col flex="500px" style={{ padding: "10px" }}>
                        <TraineeAbilityRadarChart name={this.props.name} />
                    </Col>
                    <Col flex="500px" style={{ padding: "10px" }}>
                        <TraineeHomeworkQualityTrendChart name={this.props.name} />
                    </Col>
                    <Col flex="500px" style={{ padding: "10px" }}>
                        <TraineeHomeworkQualityChart name={this.props.name} />
                    </Col>
                </Row>
                <Divider />
                <TraineePersonDetailRadarChart name={this.props.name} />
            </div>
        )
    }
}

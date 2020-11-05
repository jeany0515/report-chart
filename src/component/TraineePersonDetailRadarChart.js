import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import DataService from '../service/DataService';
import {
    TECHNOLOGY,
    LEARNING,
    COMPREHENSION,
    COMMUNICATION,
    TECH_BEHAVIORS,
    LEARN_BEHAVIORS,
    COMMUNICATION_BEHAVIORS,
    COMPREHENSION_BEHAVIORS
} from "../constants/constants";
import {FormattedMessage} from "react-intl";

 class TraineePersonDetailRadarChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    renderRadarChart(containerId, data) {
        const { DataView } = DataSet;
        const dv = new DataView().source(data);
        dv.transform({
            type: 'fold',
            fields: ["score"], // 展开字段集
            key: 'user', // key字段
            value: 'score', // value字段
        });

        const chart = new Chart({
            container: containerId,
            autoFit: true,
            height: 500,
        });
        chart.data(dv.rows);
        chart.scale('score', {
            min: 0,
            max: 40,
        });
        chart.coordinate('polar', {
            radius: 0.8,
        });
        chart.tooltip(false);
        chart.axis('item', {
            line: null,
            tickLine: null,
            grid: {
                line: {
                    style: {
                        lineDash: null,
                    },
                },
            },
        });
        chart.axis('score', {
            line: null,
            tickLine: null,
            grid: {
                line: {
                    type: 'line',
                    style: {
                        lineDash: null,
                    },
                },
            },
        });

        chart
            .line()
            .position('item*score')
            .color('user')
            .size(2);
        chart
            .point()
            .position('item*score')
            .color('user')
            .shape('circle')
            .size(4)
            .style({
                stroke: '#fff',
                lineWidth: 1,
                fillOpacity: 1,
            });
        chart
            .area()
            .position('item*score')
            .color('user');
        chart.render();
    }

    translateBehaviors(behaviors, LanguageMap) {
        return behaviors.map(item => {
            return { item: this.context.messages[LanguageMap[item.item]], score: item.score }
        })
    }

    componentDidMount() {
        this.renderRadarChart(this.props.name + "techDetail", this.translateBehaviors(DataService.getTraineeDetailData(this.props.name, TECHNOLOGY), TECH_BEHAVIORS))
        this.renderRadarChart(this.props.name + "learnDetail", this.translateBehaviors(DataService.getTraineeDetailData(this.props.name, LEARNING), LEARN_BEHAVIORS))
        this.renderRadarChart(this.props.name + "comprehensionDetail", this.translateBehaviors(DataService.getTraineeDetailData(this.props.name, COMPREHENSION), COMPREHENSION_BEHAVIORS))
        this.renderRadarChart(this.props.name + "communicationDetail", this.translateBehaviors(DataService.getTraineeDetailData(this.props.name, COMMUNICATION), COMMUNICATION_BEHAVIORS))
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}<FormattedMessage id='detail_dimension_score'/></h1>
                <Row >
                    <Col flex="750px">
                        <h2><FormattedMessage id='technical_skills'/></h2>
                        <div id={this.props.name + "techDetail"}></div>
                    </Col>
                    <Col flex="750px">
                        <h2><FormattedMessage id='learning_ability'/></h2>
                        <div id={this.props.name + "learnDetail"}></div>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col flex="750px">
                        <h2><FormattedMessage id='comprehension'/></h2>
                        <div id={this.props.name + "comprehensionDetail"}></div>
                    </Col>
                    <Col flex="750px">
                        <h2><FormattedMessage id='communication'/></h2>
                        <div id={this.props.name + "communicationDetail"}></div>
                    </Col>
                </Row>
            </div >
        )
    }
}

TraineePersonDetailRadarChart.contextTypes = {
    messages: PropTypes.object.isRequired
};

export default TraineePersonDetailRadarChart;
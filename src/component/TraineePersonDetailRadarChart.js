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
    COMMUNICATION
} from "../constants/constants";

export default class TraineePersonDetailRadarChart extends Component {
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
        chart.tooltip({
            shared: true,
            showCrosshairs: true,
            crosshairs: {
                line: {
                    style: {
                        lineDash: [4, 4],
                        stroke: '#333'
                    }
                }
            }
        });
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

    componentDidMount() {
        this.renderRadarChart(this.props.name + "techDetail", DataService.getTraineeDetailData(this.props.name, TECHNOLOGY))
        this.renderRadarChart(this.props.name + "learnDetail", DataService.getTraineeDetailData(this.props.name, LEARNING))
        this.renderRadarChart(this.props.name + "comprehensionDetail", DataService.getTraineeDetailData(this.props.name, COMPREHENSION))
        this.renderRadarChart(this.props.name + "communicationDetail", DataService.getTraineeDetailData(this.props.name, COMMUNICATION))
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}各维度能力详细得分</h1>
                <Row >
                    <Col flex="750px">
                        <h2>技术能力</h2>
                        <div id={this.props.name + "techDetail"}></div>
                    </Col>
                    <Col flex="750px">
                        <h2>学习能力</h2>
                        <div id={this.props.name + "learnDetail"}></div>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col flex="750px">
                        <h2>理解能力</h2>
                        <div id={this.props.name + "comprehensionDetail"}></div>
                    </Col>
                    <Col flex="750px">
                        <h2>沟通能力</h2>
                        <div id={this.props.name + "communicationDetail"}></div>
                    </Col>
                </Row>
            </div >
        )
    }
}

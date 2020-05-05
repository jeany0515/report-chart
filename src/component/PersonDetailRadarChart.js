import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import DataService from '../service/DataService';

export default class PersonDetailRadarChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    renderRadarChart(containerId, data, name) {
        const { DataView } = DataSet;
        const dv = new DataView().source(data);
        dv.transform({
            type: 'fold',
            fields: [name], // 展开字段集
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
            max: 20,
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
        this.renderRadarChart('techDetail', DataService.getTraineeDetailData('张三', 'tech'), "张三")
        this.renderRadarChart('learnDetail', DataService.getTraineeDetailData('张三', 'learn'), "张三")
        this.renderRadarChart('comprehensionDetail', DataService.getTraineeDetailData('张三', 'comprehension'), "张三")
        this.renderRadarChart('communicationDetail', DataService.getTraineeDetailData('张三', 'communication'), "张三")
    }

    render() {
        return (
            <div>
                <h1>张三各维度能力详细得分</h1>
                <Row >
                    <Col flex="820px">
                        <h2>技术能力</h2>
                        <div id="techDetail"></div>
                    </Col>
                    <Col flex="820px">
                        <h2>学习能力</h2>
                        <div id="learnDetail"></div>
                    </Col>
                </Row>
                <Divider/>
                <Row>
                    <Col flex="820px">
                        <h2>理解能力</h2>
                        <div id="comprehensionDetail"></div>
                    </Col>
                    <Col flex="820px">
                        <h2>沟通能力</h2>
                        <div id="communicationDetail"></div>
                    </Col>
                </Row>
            </div >
        )
    }
}

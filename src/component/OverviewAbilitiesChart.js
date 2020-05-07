import { Chart } from '@antv/g2';
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DataService from '../service/DataService';
import {
    TECHNOLOGY,
    LEARNING,
    COMPREHENSION,
    COMMUNICATION
} from "../constants/constants";

export default class OverviewAbilitiesChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    renderChart(containerId, data, title) {
        const chart = new Chart({
            container: containerId,
            autoFit: true,
            height: 500,
        });
        chart.data(data);
        chart.scale('percent', {
            formatter: (val) => {
                val = val * 100 + '%';
                return val;
            },
        });
        chart.coordinate('theta', {
            radius: 0.75,
            innerRadius: 0.6,
        });
        chart.tooltip({
            showTitle: false,
            showMarkers: false,
            itemTpl: '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
        });
        chart
            .annotation()
            .text({
                position: ['50%', '50%'],
                content: title,
                style: {
                    fontSize: 14,
                    fill: '#8c8c8c',
                    textAlign: 'center',
                }
            });
        chart
            .interval()
            .adjust('stack')
            .position('percent')
            .color('item')
            .label('percent', (percent) => {
                return {
                    content: (data) => {
                        return `${data.item}: ${percent * 100}%`;
                    },
                };
            })
            .tooltip('item*percent', (item, percent) => {
                percent = percent * 100 + '%';
                return {
                    name: item,
                    value: percent,
                };
            });

        chart.interaction('element-active');

        chart.render();
    }

    componentDidMount() {
        
        this.renderChart('tech', DataService.getOverviewAbilitiesData(TECHNOLOGY), '技术能力')
        this.renderChart('learn', DataService.getOverviewAbilitiesData(LEARNING), '学习能力')
        this.renderChart('comprehension', DataService.getOverviewAbilitiesData(COMPREHENSION), '理解能力')
        this.renderChart('communication', DataService.getOverviewAbilitiesData(COMMUNICATION), '沟通能力')
    }

    render() {
        return (
            <div>
                <h1>学员能力总揽</h1>
                <p>所有学员分不同维度的统计结果</p>
                <Row >
                    <Col flex="820px">
                        <div id="tech"></div>
                    </Col>
                    <Col flex="820px">
                        <div id="learn"></div>
                    </Col>
                </Row>
                <Row>
                    <Col flex="820px">
                        <div id="comprehension"></div>
                    </Col>
                    <Col flex="820px">
                        <div id="communication"></div>
                    </Col>
                </Row>
            </div >
        )
    }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

const techData = [
    { item: 'Outstanding', count: 40, percent: 0.4 },
    { item: 'Good', count: 21, percent: 0.21 },
    { item: 'Competent', count: 17, percent: 0.17 },
    { item: 'Developing', count: 13, percent: 0.13 },
    { item: 'Mariginal', count: 9, percent: 0.09 },
];

const learnData = [
    { item: 'Outstanding', count: 2, percent: 0.1 },
    { item: 'Good', count: 10, percent: 0.4 },
    { item: 'Competent', count: 5, percent: 0.2 },
    { item: 'Developing', count: 3, percent: 0.2 },
    { item: 'Mariginal', count: 1, percent: 0.1 },
];

const comprehensionData = [
    { item: 'Outstanding', count: 2, percent: 0.1 },
    { item: 'Good', count: 10, percent: 0.4 },
    { item: 'Competent', count: 5, percent: 0.2 },
    { item: 'Developing', count: 3, percent: 0.2 },
    { item: 'Mariginal', count: 1, percent: 0.1 },
];

const communicationData = [
    { item: 'Outstanding', count: 2, percent: 0.1 },
    { item: 'Good', count: 10, percent: 0.4 },
    { item: 'Competent', count: 5, percent: 0.2 },
    { item: 'Developing', count: 3, percent: 0.2 },
    { item: 'Mariginal', count: 1, percent: 0.1 },
];

export default class FourAbilitiesChart extends Component {
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
        // 辅助文本
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
        this.renderChart('tech', techData, '技术能力')
        this.renderChart('learn', learnData, '学习能力')
        this.renderChart('comprehension', comprehensionData, '理解能力')
        this.renderChart('communication', communicationData, '沟通能力')
    }

    render() {
        return (
            <div>
                <h1>学员能力总揽</h1>
                <Row >
                    <Col flex="auto">
                        <div id="tech"></div>
                    </Col>
                    <Col flex="auto">
                        <div id="learn"></div>
                    </Col>
                </Row>
                <Row>
                    <Col flex="auto">
                        <div id="comprehension"></div>
                    </Col>
                    <Col flex="auto">
                        <div id="communication"></div>
                    </Col>
                </Row>
            </div >
        )
    }
}

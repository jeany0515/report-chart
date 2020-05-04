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

    renderTechChart() {
        // Step 1: 创建 Chart 对象
        const chart = new Chart({
            container: 'tech',
            autoFit: true,
            height: 500,
        });
        chart.coordinate('theta', {
            radius: 0.75,
        });

        chart.data(techData);

        chart.scale('percent', {
            formatter: (val) => {
                val = val * 100 + '%';
                return val;
            },
        });

        chart.tooltip({
            showTitle: false,
            showMarkers: false,
        });

        chart
            .interval()
            .position('percent')
            .color('item')
            .label('percent', {
                content: (data) => {
                    return `${data.item}: ${data.percent * 100}%`;
                },
            })
            .adjust('stack');

        chart.interaction('element-active');

        chart.render();
    }

    renderLearnChart() {
        // Step 1: 创建 Chart 对象
        const chart = new Chart({
            container: 'learn',
            autoFit: true,
            height: 500,
        });
        chart.coordinate('theta', {
            radius: 0.75,
        });

        chart.data(learnData);

        chart.scale('percent', {
            formatter: (val) => {
                val = val * 100 + '%';
                return val;
            },
        });

        chart.tooltip({
            showTitle: false,
            showMarkers: false,
        });

        chart
            .interval()
            .position('percent')
            .color('item')
            .label('percent', {
                content: (data) => {
                    return `${data.item}: ${data.percent * 100}%`;
                },
            })
            .adjust('stack');

        chart.interaction('element-active');

        chart.render();
    }

    renderComprehensionChart() {
        // Step 1: 创建 Chart 对象
        const chart = new Chart({
            container: 'comprehension',
            autoFit: true,
            height: 500,
        });
        chart.coordinate('theta', {
            radius: 0.75,
        });

        chart.data(comprehensionData);

        chart.scale('percent', {
            formatter: (val) => {
                val = val * 100 + '%';
                return val;
            },
        });

        chart.tooltip({
            showTitle: false,
            showMarkers: false,
        });

        chart
            .interval()
            .position('percent')
            .color('item')
            .label('percent', {
                content: (data) => {
                    return `${data.item}: ${data.percent * 100}%`;
                },
            })
            .adjust('stack');

        chart.interaction('element-active');

        chart.render();
    }

    renderCommunicationChart() {
        // Step 1: 创建 Chart 对象
        const chart = new Chart({
            container: 'communication',
            autoFit: true,
            height: 500,
        });
        chart.coordinate('theta', {
            radius: 0.75,
        });

        chart.data(communicationData);

        chart.scale('percent', {
            formatter: (val) => {
                val = val * 100 + '%';
                return val;
            },
        });

        chart.tooltip({
            showTitle: false,
            showMarkers: false,
        });

        chart
            .interval()
            .position('percent')
            .color('item')
            .label('percent', {
                content: (data) => {
                    return `${data.item}: ${data.percent * 100}%`;
                },
            })
            .adjust('stack');

        chart.interaction('element-active');

        chart.render();
    }

    componentDidMount() {
        this.renderTechChart()
        this.renderLearnChart()
        this.renderComprehensionChart()
        this.renderCommunicationChart()
    }

    render() {
        return (
            <div>
                <div>学员能力总揽</div>
                <Row >
                    <Col flex="auto">
                        <div>
                            <div>技术能力总揽</div>
                            <div id="tech"></div>
                        </div>
                    </Col>
                    <Col flex="auto">
                        <div>
                            <div>学习能力总揽</div>
                            <div id="learn"></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col flex="auto">
                        <div>
                            <div>理解能力总揽</div>
                            <div id="comprehension"></div>
                        </div>
                    </Col>
                    <Col flex="auto">
                        <div>
                            <div>理解能力总揽</div>
                            <div id="communication"></div>
                        </div>
                    </Col>
                </Row>
            </div >
        )
    }
}

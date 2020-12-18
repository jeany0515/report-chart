import { Chart } from '@antv/g2';
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { uniq } from 'lodash';
import DataService from '../service/DataService';
import {
    TECHNOLOGY,
    LEARNING,
    COMPREHENSION,
    COMMUNICATION,
    COLOR_MAP
} from "../constants/constants";
import { FormattedMessage } from "react-intl";

class OverviewAbilitiesChart extends Component {

    renderChart(containerId, data, title) {
        const chart = new Chart({
            container: containerId,
            autoFit: true,
            height: 500,
        });
        chart.data(data);
        chart.scale('percent', {
            formatter: (val) => {
                return (val * 100).toFixed(2) + '%';
            },
        });
        chart.coordinate('theta', {
            radius: 0.75,
            innerRadius: 0.6,
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

        const colors = uniq(data.map(item => item.item)).map(cat => COLOR_MAP[cat])
        chart
            .interval()
            .adjust('stack')
            .position('percent')
            .color('item', colors)
            .label('percent', (percent) => {
                return {
                    content: (content) => {
                        return `${content.item}: ${(percent * 100).toFixed(2)}%`;
                    },
                };
            })
            .tooltip(false);

        chart.render();
    }

    componentDidMount() {

        this.renderChart('tech', DataService.getOverviewAbilitiesData(TECHNOLOGY), this.context.messages.technical_skills)
        this.renderChart('learn', DataService.getOverviewAbilitiesData(LEARNING), this.context.messages.learning_ability)
        this.renderChart('comprehension', DataService.getOverviewAbilitiesData(COMPREHENSION), this.context.messages.comprehension)
        this.renderChart('communication', DataService.getOverviewAbilitiesData(COMMUNICATION), this.context.messages.communication)
    }

    render() {
        return (
            <div>
                <h1><FormattedMessage id='ability_overview' /></h1>
                <p><FormattedMessage id='dimension_results' /></p>
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

OverviewAbilitiesChart.contextTypes = {
    messages: PropTypes.object.isRequired
};

export default OverviewAbilitiesChart;

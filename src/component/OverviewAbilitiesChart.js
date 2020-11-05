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
import {FormattedMessage} from "react-intl";

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
                        return `${data.item}: ${parseInt(percent * 100)}%`;
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
                <h1><FormattedMessage id='ability_overview'/></h1>
                <p><FormattedMessage id='dimension_results'/></p>
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

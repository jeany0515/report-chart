import React, { Component } from 'react'
import { Chart } from '@antv/g2';
import { Row, Col } from 'antd';
import { maxBy, uniq } from 'lodash';
import DataService from '../service/DataService';
import {
    TECHNOLOGY,
    LEARNING,
    COMPREHENSION,
    COMMUNICATION,
    COLOR_MAP
} from "../constants/constants";
import {FormattedMessage} from "react-intl";

export default class AbilityRankingChart extends Component {
    renderAbilityRankingChart(containerId, data, levelName) {
        const chart = new Chart({
            container: containerId,
            autoFit: true,
            height: 800,
            // padding: [20, 0, 50, 100],
        });
        chart.data(data);
        const max = maxBy(data, d => d.score).score
        chart.scale({
            score: {
                max: max + 20,
                min: 0,
                alias: levelName,
            },
        });
        chart.axis('name', {
            tickLine: null,
            line: null,
        });
        chart.axis('score', {
            label: null,
            title: {
                offset: 30,
                style: {
                    fontWeight: 300,
                },
            },
            grid: null,
        });
        chart.legend(false);
        chart.coordinate('rect').transpose();
        chart.tooltip(false);

        const colors = uniq(data.map(item => item.cat)).map(cat => COLOR_MAP[cat])

        chart
            .interval()
            .position('name*score')
            .color('cat', colors)
            .size(26)
            .label('score', {
                style: {
                    fill: '#8d8d8d',
                },
                offset: 10,
                content: (originData) => {
                    return (originData.score);
                },
            });

        chart.render();
    }

    componentDidMount() {
        this.renderAbilityRankingChart('techRanking', DataService.getAbilityRankingData(TECHNOLOGY), TECHNOLOGY);
        this.renderAbilityRankingChart('learnRanking', DataService.getAbilityRankingData(LEARNING), LEARNING);
        this.renderAbilityRankingChart('comprehensionRanking', DataService.getAbilityRankingData(COMPREHENSION), COMPREHENSION);
        this.renderAbilityRankingChart('communicationRanking', DataService.getAbilityRankingData(COMMUNICATION), COMMUNICATION);
    }

    render() {
        return (
            <div>
                <h1><FormattedMessage id="ability_ranking"/></h1>
                <p><FormattedMessage id="dimensional_ranking"/></p>
                <Row >
                    <Col flex="820px" style={{ padding: "10px" }}>
                        <div>
                            <h2><FormattedMessage id="technical_ranking"/></h2>
                            <div id="techRanking"></div>
                        </div>
                    </Col>
                    <Col flex="820px" style={{ padding: "10px" }}>
                        <div>
                            <h2><FormattedMessage id='learning_ranking'/></h2>
                            <div id="learnRanking"></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col flex="820px">
                        <div>
                            <h2><FormattedMessage id='comprehension_ranking'/></h2>
                            <div id="comprehensionRanking"></div>
                        </div>
                    </Col>
                    <Col flex="820px">
                        <div>
                            <h2><FormattedMessage id='communication_ranking'/></h2>
                            <div id="communicationRanking"></div>
                        </div>
                    </Col>
                </Row>
            </div >
        )
    }
}

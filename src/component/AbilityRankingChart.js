import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

export default class AbilityRankingChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    renderAbilityRankingChart(containerId, data, levelName) {
        const chart = new Chart({
            container: containerId,
            autoFit: true,
            height: 800,
            padding: [20, 0, 50, 100],
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

        chart.interaction('element-active');

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
                <h1>学员能力排名</h1>
                <p>所有学员不同维度能力的排名结果</p>
                <Row >
                    <Col flex="820px">
                        <div>
                            <h2>技术能力排名</h2>
                            <div id="techRanking"></div>
                        </div>
                    </Col>
                    <Col flex="820px">
                        <div>
                            <h2>学习能力排名</h2>
                            <div id="learnRanking"></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col flex="820px">
                        <div>
                            <h2>理解能力排名</h2>
                            <div id="comprehensionRanking"></div>
                        </div>
                    </Col>
                    <Col flex="820px">
                        <div>
                            <h2>沟通能力排名</h2>
                            <div id="communicationRanking"></div>
                        </div>
                    </Col>
                </Row>
            </div >
        )
    }
}

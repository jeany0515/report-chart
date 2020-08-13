import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataService from '../service/DataService';
import { uniq } from 'lodash';
import { COLOR_MAP } from "../constants/constants";

export default class AllRankingChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {

        const data = DataService.getAllRankingData()
        const chart = new Chart({
            container: 'allRanking',
            autoFit: true,
            height: 800,
            padding: [20, 0, 50, 200],
        });
        chart.data(data);
        chart.scale({
            score: {
                max: 2000,
                min: 0,
                alias: '总排名',
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

    render() {
        return (
            <div style={{ margin: "50px" }}>
                <h1>总排名</h1>
                <p>所有学员总体能力得分的综合排名</p>
                <p>（技术能力和学习能力权重是3，理解能力和沟通能力权重是2）</p>
                <div id='allRanking'>
                </div>
            </div>
        )
    }
}

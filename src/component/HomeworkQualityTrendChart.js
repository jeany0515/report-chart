import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataService from '../service/DataService';

export default class HomeworkQualityTrendChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {
        const chart = new Chart({
            container: 'homework',
            autoFit: true,
            height: 500,
        });

        chart.data(DataService.getTraineeHomeworkQualityTrendData('张三'));
        chart.scale({
            year: {
                range: [0, 1],
            },
            value: {
                min: 0,
                nice: true,
            },
        });

        chart.tooltip({
            showCrosshairs: true, // 展示 Tooltip 辅助线
            shared: true,
        });

        chart.line().position('year*value').label('value');
        chart.point().position('year*value');

        chart.render();
    }

    render() {
        return (
            <div>
                <h1>每次作业质量走势图</h1>
                <div id="homework">
                </div>
            </div>
        )
    }
}

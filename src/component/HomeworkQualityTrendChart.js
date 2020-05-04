import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';

const data = [
    { year: '概念图', value: 1 },
    { year: 'Pos machine', value: 3 },
    { year: 'OO Step', value: 2 },
    { year: 'FizzBuzz', value: 3 },
    { year: 'GuessNumber', value: 5 },
    { year: 'ParkingBoy', value: 4 },
    { year: 'Restful API', value: 3 },
    { year: 'Spring employee', value: 4 },
    { year: 'React Counter', value: 5 },
    { year: 'React Multi Counter', value: 5 },
    { year: 'React Todo list', value: 5 },
];

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

        chart.data(data);
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
                <div>每次作业走势图</div>
                <div id="homework">
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
const data = [
    { item: 'Outstanding', count: 40, percent: 0.4 },
    { item: 'Good', count: 21, percent: 0.21 },
    { item: 'Competent', count: 17, percent: 0.17 },
    { item: 'Developing', count: 13, percent: 0.13 },
    { item: 'Mariginal', count: 9, percent: 0.09 },
];

export default class OverviewLevelChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {
        // Step 1: 创建 Chart 对象
        const chart = new Chart({
            container: 'c1',
            autoFit: true,
            height: 500,
        });
        chart.coordinate('theta', {
            radius: 0.75,
        });

        chart.data(data);

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

    render() {
        return (
            <div>
                <h1>学员等级总揽</h1>
                <div id="c1"></div>
            </div>
        )
    }
}

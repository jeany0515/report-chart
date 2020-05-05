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

export default class HomeworkQualityChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {
        const chart = new Chart({
            container: 'quality',
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
                content: '张三作业质量概览',
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

    render() {
        return (
            <div>
                <h1>学员作业质量总揽</h1>
                <div id="quality"></div>
            </div>
        )
    }
}

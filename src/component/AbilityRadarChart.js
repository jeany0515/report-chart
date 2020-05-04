import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';

const data = [
    { item: '学习能力', a: 40 },
    { item: '技术能力', a: 36 },
    { item: '理解能力', a: 27 },
    { item: '沟通能力', a: 13 }
];

export default class AbilityRadarChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {
        const { DataView } = DataSet;
        const dv = new DataView().source(data);
        dv.transform({
            type: 'fold',
            fields: ['a'], // 展开字段集
            key: 'user', // key字段
            value: 'score', // value字段
        });

        const chart = new Chart({
            container: 'radar',
            autoFit: true,
            height: 500,
        });
        chart.data(dv.rows);
        chart.scale('score', {
            min: 0,
            max: 40,
        });
        chart.coordinate('polar', {
            radius: 0.8,
        });
        chart.tooltip({
            shared: true,
            showCrosshairs: true,
            crosshairs: {
                line: {
                    style: {
                        lineDash: [4, 4],
                        stroke: '#333'
                    }
                }
            }
        });
        chart.axis('item', {
            line: null,
            tickLine: null,
            grid: {
                line: {
                    style: {
                        lineDash: null,
                    },
                },
            },
        });
        chart.axis('score', {
            line: null,
            tickLine: null,
            grid: {
                line: {
                    type: 'line',
                    style: {
                        lineDash: null,
                    },
                },
            },
        });

        chart
            .line()
            .position('item*score')
            .color('user')
            .size(2);
        chart
            .point()
            .position('item*score')
            .color('user')
            .shape('circle')
            .size(4)
            .style({
                stroke: '#fff',
                lineWidth: 1,
                fillOpacity: 1,
            });
        chart
            .area()
            .position('item*score')
            .color('user');
        chart.render();
    }

    render() {
        return (
            <div>
                <div>学员能力图</div>
                <div id="radar">
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';
import DataService from '../service/DataService';

export default class AbilityRadarChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    renderRadarChart(data, name) {
        const { DataView } = DataSet;
        const dv = new DataView().source(data);
        dv.transform({
            type: 'fold',
            fields: [name], // 展开字段集
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

    componentDidMount() {
        this.renderRadarChart(DataService.getTraineeAbiltiyRadarData('张三'), "张三")
    }

    render() {
        return (
            <div>
                <h1>学员能力图</h1>
                <div id="radar">
                </div>
            </div>
        )
    }
}

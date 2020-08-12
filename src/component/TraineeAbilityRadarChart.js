import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';
import DataService from '../service/DataService';

export default class TraineeAbilityRadarChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    renderRadarChart(data, name, containerId) {
        const { DataView } = DataSet;
        const dv = new DataView().source(data);
        dv.transform({
            type: 'fold',
            fields: ['score'], // 展开字段集
            key: 'user', // key字段
            value: 'score', // value字段
        });

        const chart = new Chart({
            container: containerId,
            autoFit: true,
            height: 500,
        });
        chart.data(dv.rows);
        chart.scale('score', {
            min: 0,
            max: 240,
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
        this.renderRadarChart(DataService.getTraineeAbiltiyRadarData(this.props.name), this.props.name, this.props.name + "ability")
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}的能力图</h1>
                <div id={this.props.name + "ability"}>
                </div>
            </div>
        )
    }
}

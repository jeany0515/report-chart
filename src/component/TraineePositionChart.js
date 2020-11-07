import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataService from '../service/DataService';
import { FormattedMessage } from "react-intl";

class TraineePositionChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    renderPositionChart(data, containerId) {
        const chart = new Chart({
            container: containerId,
            autoFit: true,
            height: 70,
        });
        chart.legend(false); // 不展示图例

        const ranges = data.ranges;
        const view = chart.createView({
            region: {
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 1,
                    y: 1
                }
            },
            padding: [15, 120, 10]
        });
        view.data([data]);
        view.scale({
            actual: {
                min: 0,
                max: ranges[4],
            },
            target: {
                min: 0,
                max: ranges[4],
            }
        });
        view.coordinate().transpose();
        view.axis('target', false);
        view.axis('actual', {
            position: 'right'
        });
        view.point()
            .position('title*target')
            .color('#square')
            .shape('line')
            .size(15)
            .style({
                lineWidth: 3
            });

        // Marginal
        view.annotation().region({
            start: ['start', 0],
            end: ['end', ranges[0]],
            style: {
                fill: '#da7462',
                fillOpacity: 0.85
            }
        });
        // Developing
        view.annotation().region({
            start: ['start', ranges[0]],
            end: ['end', ranges[1]],
            style: {
                fill: '#face1d',
                fillOpacity: 0.85
            }
        });
        // Competent
        view.annotation().region({
            start: ['start', ranges[1]],
            end: ['end', ranges[2]],
            style: {
                fill: '#687795',
                fillOpacity: 0.85
            }
        });
        // Good
        view.annotation().region({
            start: ['start', ranges[2]],
            end: ['end', ranges[3]],
            style: {
                fill: '#83d7ae',
                fillOpacity: 0.85
            }
        });
        // Outstanding
        view.annotation().region({
            start: ['start', ranges[3]],
            end: ['end', ranges[4]],
            style: {
                fill: '#2194ff',
                fillOpacity: 0.85
            }
        });
        chart.legend({
            custom: true,
            items: [
                {
                    value: 'Marginal',
                    name: 'Marginal',
                    marker: { symbol: 'square', style: { fill: '#da7462', r: 5 } }
                },
                {
                    value: 'Developing',
                    name: 'Developing',
                    marker: { symbol: 'square', style: { fill: '#face1d', r: 5 } }
                },
                {
                    value: 'Competent',
                    name: 'Competent',
                    marker: { symbol: 'square', style: { fill: '#687795', r: 5 } }
                },
                {
                    value: 'Good',
                    name: 'Good',
                    marker: { symbol: 'square', style: { fill: '#83d7ae', r: 5 } }
                },
                {
                    value: 'Outstanding',
                    name: 'Outstanding',
                    marker: { symbol: 'square', style: { fill: '#2194ff', r: 5 } }
                },
                {
                    value: this.context.messages.current_score,
                    name: this.context.messages.current_score,
                    marker: { symbol: 'line', style: { stroke: '#262626', r: 5 } }
                }
            ]
        });

        chart.removeInteraction('legend-filter'); // 自定义图例，移除默认的分类图例筛选交互
        chart.render();
    }

    componentDidMount() {
        const data = { title: 'Woody', subtitle: '', ranges: [1, 2, 3, 4, 5], actual: 0, target: 4.4 }
        this.renderPositionChart(data, this.props.name + "position")
    }

    render() {
        return (
            <div>
                <h3><FormattedMessage id='position_description' /></h3>
                <div id={this.props.name + "position"}>
                </div>
            </div>
        )
    }
}

TraineePositionChart.contextTypes = {
    messages: PropTypes.object.isRequired
};

export default TraineePositionChart;
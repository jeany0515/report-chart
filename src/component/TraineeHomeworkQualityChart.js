import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataService from '../service/DataService';
import {FormattedMessage} from "react-intl";

class TraineeHomeworkQualityChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {
        const chart = new Chart({
            container: this.props.name + "quality",
            autoFit: true,
            height: 500,
        });
        chart.data(DataService.getTraineeHomeworkQualityData(this.props.name));
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
        chart.tooltip(false);
        // 辅助文本
        chart
            .annotation()
            .text({
                position: ['50%', '50%'],
                content: this.props.name + this.context.messages.homework_chart,
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
                        return `${data.item}: ${parseInt(percent * 100)}%`;
                    },
                };
            })

        chart.render();
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}<FormattedMessage id='homework_chart'/></h1>
                <div id={this.props.name + "quality"}></div>
            </div>
        )
    }
}

TraineeHomeworkQualityChart.contextTypes = {
    messages: PropTypes.object.isRequired
};

export default TraineeHomeworkQualityChart;

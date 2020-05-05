import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataService from '../service/DataService';

export default class OverviewLevelChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {
        const chart = new Chart({
            container: 'c1',
            autoFit: true,
            height: 500,
        });
        chart.coordinate('theta', {
            radius: 0.75,
        });

        chart.data(DataService.getOverviewLevelData());

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

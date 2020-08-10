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
                val = parseInt(val * 100) + '%';
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
                    return `${data.item}: ${parseInt(data.percent * 100)}%`;
                },
            })
            .adjust('stack');

        chart.interaction('element-active');

        chart.render();
    }

    render() {
        return (
            <div>
                <h1>学员等级总览</h1>
                <p>根据学员整体表现情况统计的结果</p>
                <div id="c1"></div>
            </div>
        )
    }
}

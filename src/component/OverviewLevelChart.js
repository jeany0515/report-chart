import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataService from '../service/DataService';
import {FormattedMessage} from "react-intl";

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

        chart.tooltip(false);

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

        chart.render();
    }

    render() {
        return (
            <div>
                <h1><FormattedMessage id='level_overview'/></h1>
                <p><FormattedMessage id='level_overview_des'/></p>
                <div id="c1"></div>
            </div>
        )
    }
}

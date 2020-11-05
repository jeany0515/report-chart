import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import { Chart } from '@antv/g2';
import DataService from '../service/DataService';
import { uniq } from 'lodash';
import { COLOR_MAP } from "../constants/constants";

class AllRankingChart extends Component {
    componentDidMount() {
        const data = DataService.getAllRankingData()
        const chart = new Chart({
            container: 'allRanking',
            autoFit: true,
            height: 800,
        });
        chart.data(data);
        chart.scale({
            score: {
                max: 1100,
                min: 0,
                alias: this.context.messages.overall_ranking,
            },
        });
        chart.axis('name', {
            tickLine: null,
            line: null,
        });
        chart.axis('score', {
            label: null,
            title: {
                offset: 30,
                style: {
                    fontWeight: 300,
                },
            },
            grid: null,
        });
        chart.legend(false);
        chart.coordinate('rect').transpose();
        chart.tooltip(false)

        const colors = uniq(data.map(item => item.cat)).map(cat => COLOR_MAP[cat])

        chart
            .interval()
            .position('name*score')
            .color('cat', colors)
            .size(26)
            .label('score', {
                style: {
                    fill: '#8d8d8d',
                },
                offset: 10,
                content: (originData) => {
                    return (originData.score);
                },
            });

        chart.render();
    }

    render() {
        return (
            <div style={{ margin: "50px" }}>
                <h1>
                    <FormattedMessage id="overall_ranking"/>
                </h1>
                <p><FormattedMessage id="comprehensive_ranking"/></p>
                <p>（ <FormattedMessage id="overall_ranking_des"/> ）</p>
                <div id='allRanking'>
                </div>
            </div>
        )
    }
}

AllRankingChart.contextTypes = {
    messages: PropTypes.object.isRequired
};

export default AllRankingChart;

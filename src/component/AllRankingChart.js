import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataService from '../service/DataService';

export default class AllRankingChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {
        const chart = new Chart({
            container: 'allRanking',
            autoFit: true,
            height: 500,
        });

        chart.data(DataService.getAllRankingData());
        chart.scale('score', { nice: true });
        chart.coordinate().transpose();
        chart.tooltip({
            showMarkers: false
        });
        chart.interaction('active-region');
        chart.interval()
        .position('name*score')
        .label('score', {
            offset: -10,
            content: (data) => {
              return data.score;
            }
          })
          .color('#34a853');
        chart.render();
    }

    render() {
        return (
            <div>
                <h1>总排名</h1>
                <p>所有学员总体能力得分的综合排名</p>
                <div id='allRanking'>
                </div>
            </div>
        )
    }
}

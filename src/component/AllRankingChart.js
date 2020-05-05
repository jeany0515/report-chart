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
        chart.scale('population', { nice: true });
        chart.coordinate().transpose();
        chart.tooltip({
            showMarkers: false
        });
        chart.interaction('active-region');
        chart.interval()
        .position('country*population')
        .label('population', {
            offset: -10,
            content: (data) => {
              return data.population;
            }
          })
          .color('#34a853');
        chart.render();
    }

    render() {
        return (
            <div>
                <h1>总排名</h1>
                <div id='allRanking'>
                </div>
            </div>
        )
    }
}

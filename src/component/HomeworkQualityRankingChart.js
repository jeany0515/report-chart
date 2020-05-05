import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataService from '../service/DataService';

export default class HomeworkQualityRankingChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {
        const chart = new Chart({
            container: 'qualityRanking',
            autoFit: true,
            height: 500,
        });

        chart.data(DataService.getHomeworkQualityRankingData());
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
          .color('#37d9f0') ;
        chart.render();
    }

    render() {
        return (
            <div>
                <h1>作业质量排名</h1>
                <p>所有学员的作业质量得分排名结果</p>
                <div id='qualityRanking'>
                </div>
            </div>
        )
    }
}

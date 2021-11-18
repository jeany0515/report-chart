import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataService from '../service/DataService';
import {FormattedMessage} from "react-intl";

export default class HomeworkQualityRankingChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {
        const chart = new Chart({
            container: 'qualityRanking',
            autoFit: true,
            height: 300,
        });

        chart.data(DataService.getHomeworkQualityRankingData());
        chart.scale('score', { nice: true });
        chart.coordinate().transpose();
        chart.tooltip(false);
        chart.interval()
        .position('name*score')
        .label('score', {
            offset: -10,
            content: (data) => {
              return data.score;
            }
          })
          .color('#37d9f0') ;
        chart.render();
    }

    render() {
        return (
            <div style={{margin: "30px"}}>
                <h1><FormattedMessage id='homework_ranking'/></h1>
                <p><FormattedMessage id='all_homework_ranking'/></p>
                <div id='qualityRanking'>
                </div>
            </div>
        )
    }
}

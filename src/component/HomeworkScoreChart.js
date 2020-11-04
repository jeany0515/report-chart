import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataService from '../service/DataService';
import {FormattedMessage} from "react-intl";

export default class HomeworkScoreChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {
        const chart = new Chart({
            container: 'score',
            autoFit: true,
            height: 500,
        });

        chart.data(DataService.getHomeworkScoreData());
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
          .color('#a3e043');
        chart.render();
    }

    render() {
        return (
            <div style={{margin: "50px"}}>
                <h1><FormattedMessage id='platform_score_ranking'/></h1>
                <p><FormattedMessage id='platform_score_ranking_des'/></p>
                <div id='score'>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import { Row, Col } from 'antd';
import DataService from '../service/DataService';

export default class AbilityRankingChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    renderAbilityRankingChart(containerId, data) {
        const chart = new Chart({
            container: containerId,
            autoFit: true,
            height: 500,
        });

        chart.data(data);
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
          });
        chart.render();
    }

    componentDidMount() {
        this.renderAbilityRankingChart('techRanking', DataService.getAbilityRankingData('tech'));
        this.renderAbilityRankingChart('learnRanking', DataService.getAbilityRankingData('learn'));
        this.renderAbilityRankingChart('comprehensionRanking', DataService.getAbilityRankingData('comprehension'));
        this.renderAbilityRankingChart('communicationRanking', DataService.getAbilityRankingData('communication'));
    }

    render() {
        return (
            <div>
                <h1>学员能力排名</h1>
                <p>所有学员不同维度能力的排名结果</p>
                <Row >
                    <Col flex="820px">
                        <div>
                            <h2>技术能力排名</h2>
                            <div id="techRanking"></div>
                        </div>
                    </Col>
                    <Col flex="820px">
                        <div>
                            <h2>学习能力排名</h2>
                            <div id="learnRanking"></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col flex="820px">
                        <div>
                            <h2>理解能力排名</h2>
                            <div id="comprehensionRanking"></div>
                        </div>
                    </Col>
                    <Col flex="820px">
                        <div>
                            <h2>沟通能力排名</h2>
                            <div id="communicationRanking"></div>
                        </div>
                    </Col>
                </Row>
            </div >
        )
    }
}

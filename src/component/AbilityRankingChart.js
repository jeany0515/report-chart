import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import { Row, Col } from 'antd';

const techData = [
    { country: '李是', population: 5 },
    { country: '李你好', population: 13 },
    { country: '李不是', population: 15 },
    { country: '李看空', population: 20 },
    { country: '李不能', population: 23 },
    { country: '李哈哈', population: 26 },
    { country: '李还是', population: 26 },
    { country: '李好', population: 29 },
    { country: '李他', population: 30 },
    { country: '李和为', population: 34 },
    { country: '李地方', population: 35 },
    { country: '李七', population: 37 },
    { country: '赵六', population: 40 },
    { country: '王五', population: 42 },
    { country: '张三', population: 45 },
    { country: '李四', population: 50 },
];

const learnData = [
    { country: '李是', population: 5 },
    { country: '李你好', population: 13 },
    { country: '李不是', population: 15 },
    { country: '李看空', population: 20 },
    { country: '李不能', population: 23 },
    { country: '李哈哈', population: 26 },
    { country: '李还是', population: 26 },
    { country: '李好', population: 29 },
    { country: '李他', population: 30 },
    { country: '李和为', population: 34 },
    { country: '李地方', population: 35 },
    { country: '李七', population: 37 },
    { country: '赵六', population: 40 },
    { country: '王五', population: 42 },
    { country: '张三', population: 45 },
    { country: '李四', population: 50 },
];

const compreData = [
    { country: '李是', population: 5 },
    { country: '李你好', population: 13 },
    { country: '李不是', population: 15 },
    { country: '李看空', population: 20 },
    { country: '李不能', population: 23 },
    { country: '李哈哈', population: 26 },
    { country: '李还是', population: 26 },
    { country: '李好', population: 29 },
    { country: '李他', population: 30 },
    { country: '李和为', population: 34 },
    { country: '李地方', population: 35 },
    { country: '李七', population: 37 },
    { country: '赵六', population: 40 },
    { country: '王五', population: 42 },
    { country: '张三', population: 45 },
    { country: '李四', population: 50 },
];

const commuData = [
    { country: '李是', population: 5 },
    { country: '李你好', population: 13 },
    { country: '李不是', population: 15 },
    { country: '李看空', population: 20 },
    { country: '李不能', population: 23 },
    { country: '李哈哈', population: 26 },
    { country: '李还是', population: 26 },
    { country: '李好', population: 29 },
    { country: '李他', population: 30 },
    { country: '李和为', population: 34 },
    { country: '李地方', population: 35 },
    { country: '李七', population: 37 },
    { country: '赵六', population: 40 },
    { country: '王五', population: 42 },
    { country: '张三', population: 45 },
    { country: '李四', population: 50 },
];

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
        chart.interval().position('country*population');
        chart.render();
    }

    componentDidMount() {
        this.renderAbilityRankingChart('techRanking', techData);
        this.renderAbilityRankingChart('learnRanking', learnData);
        this.renderAbilityRankingChart('comprehensionRanking', compreData);
        this.renderAbilityRankingChart('communicationRanking', commuData);
    }

    render() {
        return (
            <div>
                <div>学员能力总揽</div>
                <Row >
                    <Col flex="auto">
                        <div>
                            <div>技术能力排名</div>
                            <div id="techRanking"></div>
                        </div>
                    </Col>
                    <Col flex="auto">
                        <div>
                            <div>学习能力排名</div>
                            <div id="learnRanking"></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col flex="auto">
                        <div>
                            <div>理解能力排名</div>
                            <div id="comprehensionRanking"></div>
                        </div>
                    </Col>
                    <Col flex="auto">
                        <div>
                            <div>沟通能力排名</div>
                            <div id="communicationRanking"></div>
                        </div>
                    </Col>
                </Row>
            </div >
        )
    }
}

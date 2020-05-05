import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';

const data = [
    { country: '李是', population: 650 },
    { country: '李你好', population: 699 },
    { country: '李不是', population: 700 },
    { country: '李看空', population: 732 },
    { country: '李不能', population: 750 },
    { country: '李哈哈', population: 789 },
    { country: '李还是', population: 799 },
    { country: '李好', population: 821 },
    { country: '李他', population: 840 },
    { country: '李是啊', population: 870 },
    { country: '李地方', population: 900 },
    { country: '李七', population: 902 },
    { country: '赵六', population: 1000 },
    { country: '王五', population: 1100 },
    { country: '李四', population: 1220 },
    { country: '张三', population: 1320 },
];

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

    render() {
        return (
            <div>
                <div>总排名</div>
                <div id='allRanking'>
                </div>
            </div>
        )
    }
}

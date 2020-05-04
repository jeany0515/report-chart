import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';

const techData1 = [
    { item: '每次练习都有写测试', 张三: 20 },
    { item: '代码设计符合OO思想', 张三: 15 },
    { item: '每次练习都能做到职责单一', 张三: 10 },
    { item: '有较快的编码速度完成练习', 张三: 14 },
    { item: '能通过搜集信息快速定位问题', 张三: 16 },
    { item: '能独立使用新框架(Spring/React等)完成练习', 张三: 7 },
    { item: '能快速定位解决bug或问题', 张三: 17 },
    { item: '代码编写满足clean code', 张三: 12 }
];

export default class PersonDetailChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    renderRadarChart(data, name) {
        const { DataView } = DataSet;
        const dv = new DataView().source(data);
        dv.transform({
            type: 'fold',
            fields: [name], // 展开字段集
            key: 'user', // key字段
            value: 'score', // value字段
        });

        const chart = new Chart({
            container: 'techDetail',
            autoFit: true,
            height: 500,
        });
        chart.data(dv.rows);
        chart.scale('score', {
            min: 0,
            max: 20,
        });
        chart.coordinate('polar', {
            radius: 0.8,
        });
        chart.tooltip({
            shared: true,
            showCrosshairs: true,
            crosshairs: {
                line: {
                    style: {
                        lineDash: [4, 4],
                        stroke: '#333'
                    }
                }
            }
        });
        chart.axis('item', {
            line: null,
            tickLine: null,
            grid: {
                line: {
                    style: {
                        lineDash: null,
                    },
                },
            },
        });
        chart.axis('score', {
            line: null,
            tickLine: null,
            grid: {
                line: {
                    type: 'line',
                    style: {
                        lineDash: null,
                    },
                },
            },
        });

        chart
            .line()
            .position('item*score')
            .color('user')
            .size(2);
        chart
            .point()
            .position('item*score')
            .color('user')
            .shape('circle')
            .size(4)
            .style({
                stroke: '#fff',
                lineWidth: 1,
                fillOpacity: 1,
            });
        chart
            .area()
            .position('item*score')
            .color('user');
        chart.render();
    }

    componentDidMount() {
        this.renderRadarChart(techData1, "张三")
    }

    render() {
        return (
            <div>
                <div>张三技术能力详细得分</div>
                <div id="techDetail">
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';

const techData = [
    { item: '每次练习都有写测试', 张三: 20 },
    { item: '代码设计符合OO思想', 张三: 15 },
    { item: '每次练习都能做到职责单一', 张三: 10 },
    { item: '有较快的编码速度完成练习', 张三: 14 },
    { item: '能通过搜集信息快速定位问题', 张三: 16 },
    { item: '能独立使用新框架(Spring/React等)完成练习', 张三: 7 },
    { item: '能快速定位解决bug或问题', 张三: 17 },
    { item: '代码编写满足clean code', 张三: 12 }
];

const learnData = [
    { item: '每次练习都能小步提交', 张三: 20 },
    { item: '每次练习都能TDD', 张三: 15 },
    { item: '能积极参与code review', 张三: 20 },
    { item: '坚持每日写总结', 张三: 14 },
    { item: '能借助常见的工具帮助自己独立解决问题', 张三: 16 },
    { item: '能独立上手新工具和框架', 张三: 20 },
    { item: '能熟练使用IDE的快捷键', 张三: 17 },
    { item: '每次练习都有持续重构', 张三: 12 }
];

const compreData = [
    { item: '每次练习之前都做Tasking', 张三: 20 },
    { item: '能接受别人的反馈并改进', 张三: 15 },
    { item: '每次练习都做到需求澄清', 张三: 10 },
    { item: '能理解每次练习的需求', 张三: 18 },
    { item: '能发现他人代码中的问题', 张三: 16 },
    { item: '能理解新知识', 张三: 20 },
    { item: '能使用有业务意义的git commit', 张三: 17 },
    { item: '能使用有业务意义的代码命名', 张三: 18 }
];

const commuData = [
    { item: '能积极帮助其他组员解决问题', 张三: 20 },
    { item: '能积极参与小组内讨论', 张三: 15 },
    { item: '能清楚表达自己的观点或问题', 张三: 19 },
    { item: '能积极参与showcase', 张三: 14 },
    { item: '能积极回答问题', 张三: 16 },
    { item: '能积极寻求帮助', 张三: 2 },
    { item: '能积极给出Code Review反馈', 张三: 17 },
    { item: '能积极分享观点、技能', 张三: 16 }
];

export default class PersonDetailChart extends Component {
    static propTypes = {
        prop: PropTypes
    }

    renderRadarChart(containerId, data, name) {
        const { DataView } = DataSet;
        const dv = new DataView().source(data);
        dv.transform({
            type: 'fold',
            fields: [name], // 展开字段集
            key: 'user', // key字段
            value: 'score', // value字段
        });

        const chart = new Chart({
            container: containerId,
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
        this.renderRadarChart('techDetail', techData, "张三")
        this.renderRadarChart('learnDetail', learnData, "张三")
        this.renderRadarChart('comprehensionDetail', compreData, "张三")
        this.renderRadarChart('communicationDetail', commuData, "张三")
    }

    render() {
        return (
            <div>
                <h1>张三各维度能力详细得分</h1>
                <Row >
                    <Col flex="820px">
                        <h2>技术能力</h2>
                        <div id="techDetail"></div>
                    </Col>
                    <Col flex="820px">
                        <h2>学习能力</h2>
                        <div id="learnDetail"></div>
                    </Col>
                </Row>
                <Divider/>
                <Row>
                    <Col flex="820px">
                        <h2>理解能力</h2>
                        <div id="comprehensionDetail"></div>
                    </Col>
                    <Col flex="820px">
                        <h2>沟通能力</h2>
                        <div id="communicationDetail"></div>
                    </Col>
                </Row>
            </div >
        )
    }
}

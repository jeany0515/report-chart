import data from '../data/data.json'
import {
    DEFAULT_OUTSTANDING_LINE,
    DEFAULT_GOOD_LINE,
    DEFAULT_COMPETENT_LINE,
    DEFAULT_DEVELOPING_LINE,
    TECH_OUTSTANDING_LINE,
    TECH_GOOD_LINE,
    TECH_COMPETENT_LINE,
    TECH_DEVELOPING_LINE,
    LEARN_OUTSTANDING_LINE,
    LEARN_GOOD_LINE,
    LEARN_COMPETENT_LINE,
    LEARN_DEVELOPING_LINE,
    COMPREHENSION_OUTSTANDING_LINE,
    COMPREHENSION_GOOD_LINE,
    COMPREHENSION_COMPETENT_LINE,
    COMPREHENSION_DEVELOPING_LINE,
    COMMUNICATION_OUTSTANDING_LINE,
    COMMUNICATION_GOOD_LINE,
    COMMUNICATION_COMPETENT_LINE,
    COMMUNICATION_DEVELOPING_LINE,
    TECHNOLOGY,
    LEARNING,
    COMPREHENSION,
    OUTSTANDING,
    GOOD,
    COMPETENT,
    DEVELOPING,
    MARGINAL
} from "../constants/constants";

class DataService {
    static getTraineesData() {
        return data.学习平台积分.map((trainee) => {
            return { name: trainee.名字 };
        })
    }

    static getOverviewLevelData() {
        const allScores = data.总分.map(trainee => {
            return trainee.总分
        })
        return this.getPercentData(allScores,
            DEFAULT_OUTSTANDING_LINE,
            DEFAULT_GOOD_LINE,
            DEFAULT_COMPETENT_LINE,
            DEFAULT_DEVELOPING_LINE)
    }

    static getPercentData(scores,
        outstandingLine,
        goodLine,
        competentLine,
        developingLine) {
        const outstanding = scores.filter(score => score > outstandingLine).length
        const good = scores.filter(score => score > goodLine && score < outstandingLine).length
        const competent = scores.filter(score => score > competentLine && score < goodLine).length
        const developing = scores.filter(score => score > developingLine && score < competentLine).length
        const marginal = scores.filter(score => score < developingLine).length
        return [
            { item: OUTSTANDING, percent: outstanding / scores.length },
            { item: GOOD, percent: good / scores.length },
            { item: COMPETENT, percent: competent / scores.length },
            { item: DEVELOPING, percent: developing / scores.length },
            { item: MARGINAL, percent: marginal / scores.length },
        ];
    }

    static getOverviewAbilitiesData(category) {
        if (category === TECHNOLOGY) {
            const techSocres = data.总分.map(trainee => {
                return trainee.技术能力
            })
            return this.getPercentData(techSocres,
                TECH_OUTSTANDING_LINE,
                TECH_GOOD_LINE,
                TECH_COMPETENT_LINE,
                TECH_DEVELOPING_LINE)
        } else if (category === LEARNING) {
            const learningSocres = data.总分.map(trainee => {
                return trainee.学习能力
            })
            return this.getPercentData(learningSocres,
                LEARN_OUTSTANDING_LINE,
                LEARN_GOOD_LINE,
                LEARN_COMPETENT_LINE,
                LEARN_DEVELOPING_LINE)
        } else if (category === COMPREHENSION) {
            const comprehensionSocres = data.总分.map(trainee => {
                return trainee.理解能力
            })
            return this.getPercentData(comprehensionSocres,
                COMPREHENSION_OUTSTANDING_LINE,
                COMPREHENSION_GOOD_LINE,
                COMPREHENSION_COMPETENT_LINE,
                COMPREHENSION_DEVELOPING_LINE)
        }
        const communicationSocres = data.总分.map(trainee => {
            return trainee.沟通能力
        })
        return this.getPercentData(communicationSocres,
            COMMUNICATION_OUTSTANDING_LINE,
            COMMUNICATION_GOOD_LINE,
            COMMUNICATION_COMPETENT_LINE,
            COMMUNICATION_DEVELOPING_LINE)
    }

    static getAbilityRankingData(category) {
        if (category === TECHNOLOGY) {
            const techScores = data.总分.map(trainee => {
                return { name: trainee.名字, score: parseInt(trainee.技术能力) }
            })
            techScores.sort(function (a, b) { return a.score - b.score })
            return techScores
        } else if (category === LEARNING) {
            const learnScores = data.总分.map(trainee => {
                return { name: trainee.名字, score: parseInt(trainee.学习能力) }
            })
            learnScores.sort(function (a, b) { return a.score - b.score })
            return learnScores
        } else if (category === COMPREHENSION) {
            const compreScores = data.总分.map(trainee => {
                return { name: trainee.名字, score: parseInt(trainee.理解能力) }
            })
            compreScores.sort(function (a, b) { return a.score - b.score })
            return compreScores
        }
        const commuScores = data.总分.map(trainee => {
            return { name: trainee.名字, score: parseInt(trainee.沟通能力) }
        })
        commuScores.sort(function (a, b) { return a.score - b.score })
        return commuScores
    }

    static getAllRankingData() {
        return [
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
    }

    static getHomeworkQualityRankingData() {
        const qualities = data.作业质量.map(quality => {
            return { name: quality.名字, score: parseInt(quality.总分) }
        })
        qualities.sort(function (a, b) { return a.score - b.score })
        return qualities
    }

    static getHomeworkScoreData() {
        return data.学习平台积分.map((trainee) => {
            return { name: trainee.名字, score: trainee.平台积分 }
        })
    }

    static getTraineeAbiltiyRadarData(name) {
        if (name === '张三') {
            return [
                { item: '学习能力', 张三: 30 },
                { item: '技术能力', 张三: 36 },
                { item: '理解能力', 张三: 27 },
                { item: '沟通能力', 张三: 23 }
            ];
        }
        return [
            { item: '学习能力', 李四: 10 },
            { item: '技术能力', 李四: 36 },
            { item: '理解能力', 李四: 37 },
            { item: '沟通能力', 李四: 33 }
        ];
    }

    static getTraineeHomeworkQualityTrendData(name) {
        if (name === '张三') {
        }
        return [
            { year: '概念图', value: 1 },
            { year: 'Pos machine', value: 3 },
            { year: 'OO Step', value: 2 },
            { year: 'FizzBuzz', value: 3 },
            { year: 'GuessNumber', value: 5 },
            { year: 'ParkingBoy', value: 4 },
            { year: 'Restful API', value: 3 },
            { year: 'Spring employee', value: 4 },
            { year: 'React Counter', value: 5 },
            { year: 'React Multi Counter', value: 5 },
            { year: 'React Todo list', value: 5 },
        ];
    }

    static getTraineeHomeworkQualityData(name) {
        if (name === '张三') {
        }
        return [
            { item: 'Outstanding', count: 40, percent: 0.4 },
            { item: 'Good', count: 21, percent: 0.21 },
            { item: 'Competent', count: 17, percent: 0.17 },
            { item: 'Developing', count: 13, percent: 0.13 },
            { item: 'Mariginal', count: 9, percent: 0.09 },
        ];
    }

    static getTraineeDetailData(name, category) {
        if (name === '张三') {
        }
        if (category === 'tech') {
            return [
                { item: '每次练习都有写测试', score: 20 },
                { item: '代码设计符合OO思想', score: 15 },
                { item: '每次练习都能做到职责单一', score: 10 },
                { item: '有较快的编码速度完成练习', score: 14 },
                { item: '能通过搜集信息快速定位问题', score: 16 },
                { item: '能独立使用新框架(Spring/React等)完成练习', score: 7 },
                { item: '能快速定位解决bug或问题', score: 17 },
                { item: '代码编写满足clean code', score: 12 }
            ];
        } else if (category === 'learn') {
            return [
                { item: '每次练习都能小步提交', score: 20 },
                { item: '每次练习都能TDD', score: 15 },
                { item: '能积极参与code review', score: 20 },
                { item: '坚持每日写总结', score: 14 },
                { item: '能借助常见的工具帮助自己独立解决问题', score: 16 },
                { item: '能独立上手新工具和框架', score: 20 },
                { item: '能熟练使用IDE的快捷键', score: 17 },
                { item: '每次练习都有持续重构', score: 12 }
            ];
        } else if (category === 'comprehension') {
            return [
                { item: '每次练习之前都做Tasking', score: 20 },
                { item: '能接受别人的反馈并改进', score: 15 },
                { item: '每次练习都做到需求澄清', score: 10 },
                { item: '能理解每次练习的需求', score: 18 },
                { item: '能发现他人代码中的问题', score: 16 },
                { item: '能理解新知识', score: 20 },
                { item: '能使用有业务意义的git commit', score: 17 },
                { item: '能使用有业务意义的代码命名', score: 18 }
            ];
        }
        return [
            { item: '能积极帮助其他组员解决问题', score: 20 },
            { item: '能积极参与小组内讨论', score: 15 },
            { item: '能清楚表达自己的观点或问题', score: 19 },
            { item: '能积极参与showcase', score: 14 },
            { item: '能积极回答问题', score: 16 },
            { item: '能积极寻求帮助', score: 2 },
            { item: '能积极给出Code Review反馈', score: 17 },
            { item: '能积极分享观点、技能', score: 16 }
        ];
    }
}

export default DataService
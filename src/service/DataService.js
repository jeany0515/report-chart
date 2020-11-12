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
    MARGINAL,
    TECH_BEHAVIORS,
    LEARN_BEHAVIORS,
    COMPREHENSION_BEHAVIORS,
    COMMUNICATION_BEHAVIORS
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
        const outstanding = scores.filter(score => score >= outstandingLine).length
        const good = scores.filter(score => score >= goodLine && score < outstandingLine).length
        const competent = scores.filter(score => score >= competentLine && score < goodLine).length
        const developing = scores.filter(score => score >= developingLine && score < competentLine).length
        const marginal = scores.filter(score => score < developingLine).length
        const percentLevels = []
        if (outstanding !== 0) {
            percentLevels.push({ item: OUTSTANDING, percent: outstanding / scores.length })
        }
        if (good !== 0) {
            percentLevels.push({ item: GOOD, percent: good / scores.length })
        }
        if (competent !== 0) {
            percentLevels.push({ item: COMPETENT, percent: competent / scores.length })
        }
        if (developing !== 0) {
            percentLevels.push({ item: DEVELOPING, percent: developing / scores.length })
        }
        if (marginal !== 0) {
            percentLevels.push({ item: MARGINAL, percent: marginal / scores.length })
        }
        return percentLevels
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
                const score = parseInt(trainee.技术能力)
                const category = this.getLevelName(score, TECH_OUTSTANDING_LINE, TECH_GOOD_LINE, TECH_COMPETENT_LINE, TECH_DEVELOPING_LINE)
                return { name: trainee.名字, score: score, cat: category }
            })
            techScores.sort(function (a, b) { return a.score - b.score })
            return techScores
        } else if (category === LEARNING) {
            const learnScores = data.总分.map(trainee => {
                const score = parseInt(trainee.学习能力)
                const category = this.getLevelName(score, LEARN_OUTSTANDING_LINE, LEARN_GOOD_LINE, LEARN_COMPETENT_LINE, LEARN_DEVELOPING_LINE)
                return { name: trainee.名字, score: score, cat: category }
            })
            learnScores.sort(function (a, b) { return a.score - b.score })
            return learnScores
        } else if (category === COMPREHENSION) {
            const compreScores = data.总分.map(trainee => {
                const score = parseInt(trainee.理解能力)
                const category = this.getLevelName(score, COMPREHENSION_OUTSTANDING_LINE, COMPREHENSION_GOOD_LINE, COMPREHENSION_COMPETENT_LINE, COMPREHENSION_DEVELOPING_LINE)
                return { name: trainee.名字, score: score, cat: category }
            })
            compreScores.sort(function (a, b) { return a.score - b.score })
            return compreScores
        }
        const commuScores = data.总分.map(trainee => {
            const score = parseInt(trainee.沟通能力)
            const category = this.getLevelName(score, COMMUNICATION_OUTSTANDING_LINE, COMMUNICATION_GOOD_LINE, COMMUNICATION_COMPETENT_LINE, COMMUNICATION_DEVELOPING_LINE)
            return { name: trainee.名字, score: score, cat: category }
        })
        commuScores.sort(function (a, b) { return a.score - b.score })
        return commuScores
    }

    static getLevelName(score, outstandingLine, goodLine, competentLine, developingLine) {
        let category = OUTSTANDING
        if (parseInt(score) >= outstandingLine) {
            category = OUTSTANDING
        } else if (parseInt(score) >= goodLine) {
            category = GOOD
        } else if (parseInt(score) >= competentLine) {
            category = COMPETENT
        } else if (parseInt(score) >= developingLine) {
            category = DEVELOPING
        } else {
            category = MARGINAL
        }
        return category
    }

    static getAllRankingData() {
        const totalScores = data.总分.map(trainee => {
            let category = OUTSTANDING
            if (parseInt(trainee.总分) >= DEFAULT_OUTSTANDING_LINE) {
                category = OUTSTANDING
            } else if (parseInt(trainee.总分) >= DEFAULT_GOOD_LINE) {
                category = GOOD
            } else if (parseInt(trainee.总分) >= DEFAULT_COMPETENT_LINE) {
                category = COMPETENT
            } else if (parseInt(trainee.总分) >= DEFAULT_DEVELOPING_LINE) {
                category = DEVELOPING
            } else {
                category = MARGINAL
            }
            return { name: trainee.名字, score: parseInt(trainee.总分), cat: category }
        })
        totalScores.sort(function (first, second) { return first.score - second.score })
        return totalScores
    }

    static getHomeworkQualityRankingData() {
        const qualities = data.作业质量.map(quality => {
            return { name: quality.Name, score: parseInt(quality.Total) }
        })
        qualities.sort(function (a, b) { return a.score - b.score })
        return qualities
    }

    static getHomeworkScoreData() {
        const scores = data.学习平台积分.map((trainee) => {
            return { name: trainee.名字, score: trainee.平台积分 }
        })
        scores.sort(function (a, b) { return a.score - b.score })
        return scores
    }

    static getTraineeAbiltiyRadarData(name) {
        const trainee = data.总分.filter(trainee => trainee.名字 === name)[0]
        return [
            { item: 'Technical Ability', score: parseInt(trainee.技术能力) },
            { item: 'Learning Ability', score: parseInt(trainee.学习能力) },
            { item: 'Comprehension Ability', score: parseInt(trainee.理解能力) },
            { item: 'Communication Ability', score: parseInt(trainee.沟通能力) }
        ];
    }

    static getTraineeHomeworkQualityTrendData(name) {
        const trainee = data.作业质量.filter(trainee => trainee.Name === name)[0]
        const homeworkNames = Object.keys(trainee)
        homeworkNames.splice(homeworkNames.indexOf('Name'), 1)
        homeworkNames.splice(homeworkNames.indexOf('Total'), 1)
        return homeworkNames.map(name => {
            return { item: name, value: parseInt(trainee[name]) }
        })
    }

    static getTraineeHomeworkQualityData(name) {
        const trainee = data.作业质量.filter(trainee => trainee.Name === name)[0]
        const homeworkNames = Object.keys(trainee)
        homeworkNames.splice(homeworkNames.indexOf('Name'), 1)
        homeworkNames.splice(homeworkNames.indexOf('Total'), 1)
        const allScores = homeworkNames.map(name => parseInt(trainee[name]))
        const outstanding = allScores.filter(score => score === 10 || score === 9).length
        const good = allScores.filter(score => score === 8 || score === 7).length
        const competent = allScores.filter(score => score === 6 || score === 5).length
        const developing = allScores.filter(score => score === 4 || score === 3).length
        const marginal = allScores.filter(score => score === 2 || score === 1).length
        const result = []
        if (outstanding !== 0) {
            result.push({ item: OUTSTANDING, percent: outstanding / allScores.length })
        }
        if (good !== 0) {
            result.push({ item: GOOD, percent: good / allScores.length })
        }
        if (competent !== 0) {
            result.push({ item: COMPETENT, percent: competent / allScores.length })
        }
        if (developing !== 0) {
            result.push({ item: DEVELOPING, percent: developing / allScores.length })
        }
        if (marginal !== 0) {
            result.push({ item: MARGINAL, percent: marginal / allScores.length })
        }
        return result
    }

    static getTraineeDetailData(name, category) {
        const allScores = data[name].map(item => {
            return { item: item.行为, score: parseInt(item.各项总分) }
        })
        if (category === TECHNOLOGY) {
            return allScores.filter(score => Object.keys(TECH_BEHAVIORS).includes(score.item))
        } else if (category === LEARNING) {
            return allScores.filter(score => Object.keys(LEARN_BEHAVIORS).includes(score.item))
        } else if (category === COMPREHENSION) {
            return allScores.filter(score => Object.keys(COMPREHENSION_BEHAVIORS).includes(score.item))
        }
        return allScores.filter(score => Object.keys(COMMUNICATION_BEHAVIORS).includes(score.item))
    }

    static getCurrentScore(name) {
        const trainee = data.总分.filter(item => item.名字 === name)[0]

        // 由于图表是0-5的range，而我们的分数是1200-3200的range，所以在这里做了一个映射转换。因为图表用1200-3200的range显示会有问题。
        const score = (parseInt(trainee.总分) - 1200) / 400 
        
        return { title: trainee.名字, subtitle: '', ranges: [1, 2, 3, 4, 5], actual: 0, target: score }
    }
}

export default DataService
class DataService {
    static getOverviewLevelData() {
        return [
            { item: 'Outstanding', count: 40, percent: 0.4 },
            { item: 'Good', count: 21, percent: 0.21 },
            { item: 'Competent', count: 17, percent: 0.17 },
            { item: 'Developing', count: 13, percent: 0.13 },
            { item: 'Mariginal', count: 9, percent: 0.09 },
        ];
    }

    static getOverviewAbilitiesData(category) {
        if (category === 'tech') {
            return [
                { item: 'Outstanding', count: 40, percent: 0.4 },
                { item: 'Good', count: 21, percent: 0.21 },
                { item: 'Competent', count: 17, percent: 0.17 },
                { item: 'Developing', count: 13, percent: 0.13 },
                { item: 'Mariginal', count: 9, percent: 0.09 },
            ];
        } else if (category === 'learn') {
            return [
                { item: 'Outstanding', count: 2, percent: 0.1 },
                { item: 'Good', count: 10, percent: 0.4 },
                { item: 'Competent', count: 5, percent: 0.2 },
                { item: 'Developing', count: 3, percent: 0.2 },
                { item: 'Mariginal', count: 1, percent: 0.1 },
            ];
        } else if (category === 'comprehension') {
            return [
                { item: 'Outstanding', count: 2, percent: 0.1 },
                { item: 'Good', count: 10, percent: 0.4 },
                { item: 'Competent', count: 5, percent: 0.2 },
                { item: 'Developing', count: 3, percent: 0.2 },
                { item: 'Mariginal', count: 1, percent: 0.1 },
            ];
        }
        return [
            { item: 'Outstanding', count: 2, percent: 0.1 },
            { item: 'Good', count: 10, percent: 0.4 },
            { item: 'Competent', count: 5, percent: 0.2 },
            { item: 'Developing', count: 3, percent: 0.2 },
            { item: 'Mariginal', count: 1, percent: 0.1 },
        ];
    }

    static getAbilityRankingData(category) {
        if (category === 'tech') {
            return [
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
        } else if (category === 'learn') {
            return [
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
        } else if (category === 'comprehension') {

            return [
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
        }
        return [
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
        return [
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
    }
}

export default DataService
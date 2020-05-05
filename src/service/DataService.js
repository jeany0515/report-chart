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
}

export default DataService
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
}

export default DataService
/// STRATEGY DESIGN PATTERN

interface SortStrategy {
    sort: () => void;
}

class MergeSortStrategy implements SortStrategy {
    sort() {
        console.log("Will Sort With MergeSort!");
    }
}

class QuickSortStrategy implements SortStrategy {
    sort() {
        console.log("Will Sort With QuickSort!");
    }
}



class Sorter {

    private sortStrategy: SortStrategy;

    constructor() {
        this.sortStrategy = new QuickSortStrategy(); // Default Strategy
    }

    setSortStrategy(sortStrategy: SortStrategy) {
        this.sortStrategy = sortStrategy;
    }

    sort() {
        this.sortStrategy.sort();
    }

}

//// RUN
const sorter = new Sorter();
sorter.setSortStrategy(new QuickSortStrategy());
sorter.sort();
sorter.setSortStrategy(new MergeSortStrategy());
sorter.sort();

import {sumWithScan} from "./scan";

describe('.scan', () => {

    it('should return sum of given array with scan', () => {
        expect(sumWithScan([1, 2, 3])).toEqual(6);
    });

});

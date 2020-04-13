import {ex1} from "./map";

describe( '.map',() => {
    it('should map raw array and return new array with +1 for every element', () => {
        expect(ex1([1, 2, 3])).toEqual([2, 3, 4])
    })
});

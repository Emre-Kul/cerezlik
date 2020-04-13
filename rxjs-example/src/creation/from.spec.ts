import {fromArr, fromMap, fromPromise, fromString} from "./from";


describe('.from' , () => {

    it('should return arr using from', () => {
        expect(fromArr([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should return promise using from', () => {
        const prom = new Promise((r) => r('hii'));
        expect(fromPromise(prom)).toEqual(prom);
    });

    it('should return map as arr using from', () => {
        const m = new Map();
        m.set('a', 1);
        m.set('b', 2);
        m.set('c', 3);
        expect(fromMap(m)).toEqual(['a', 1, 'b', 2, 'c', 3]);
    });

    it('should return char of string using from', () => {
        expect(fromString('emre')).toEqual(['e', 'm', 'r', 'e']);
    });

});

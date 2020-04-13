import {ex1} from "./mapTo";


describe('.mapTo', () => {

    it('should mapTo emre if input is dummy string', () => {
        expect(ex1('Dumy str input')).toEqual('emre');
    });

    it('should mapTo emre if input is dummy array', () => {
        expect(ex1([2, 3])).toEqual('emre');
    });


});

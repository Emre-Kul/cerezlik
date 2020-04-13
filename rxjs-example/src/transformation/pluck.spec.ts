import {ex1} from "./pluck";


describe('.pluck', () => {

    it("it should extract names from name, surname obj", () => {
        const inp = [{ name: 'a', surname: 'b'}, { name: 'c', surname: 'd'}];
        const out = ['a', 'c'];
        expect(ex1(inp)).toEqual(out);
    });

});

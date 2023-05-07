import { retornaArreglo } from "../../src/bases/07-deses-arr";


describe('Pruebas en 07-dese-arr', () => {

    test('Debe de retornar un string y un número', () => {

        const [ letters, numbers ] = retornaArreglo();

        expect( letters ).toBe('ABC');
        expect( numbers ).toBe(123);

        expect( typeof letters ).toBe('string');
        expect( typeof numbers ).toBe('number');

        expect(letters).toEqual( expect.any(String) );

    });

});



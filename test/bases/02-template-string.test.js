import { getSaludo } from '../../src/bases/02-template-string';

describe( 'Pruebas en 02-template-string', () => {

    test('getSaludo debe de retornar "Hola JC"', () => {
        
        const name = 'JC';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }`);

    })

})



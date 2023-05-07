import { getHeroeById, getHeroeByOwner } from '../../src/bases/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });

    // Tarea:
    test('getHeroeByOwner debe de regresar heroes de DC', () => {

        // Debe de retornar un arreglo con los héroes de DC
        // length === 3
        // toEqual al arreglo filtrado
        const owner = 'DC';
        const heroeOwner = getHeroeByOwner(owner);

        expect( heroeOwner.length ).toBe(3);    
        expect( heroeOwner ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
        
            
        // debe de retornar un arreglo con los héroes de Marvel
        // length === 2

    });

});



/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas con <FirstApp />', () => {

    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo';

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render( <FirstApp title={ title } /> );
        // expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el mensaje "Hola, Soy Goku"', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('Debe de mostrar el título en un h1', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toBe(title);
    });

    test('Debe de mostrar el subtítulo envíado por Props', () => {

        render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle } />
        );

        expect( screen.getByText(subTitle) ).toBeTruthy();

    })

});




import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState( value );

    const aumentar = () => {
        setCounter(counter + 1);
    }

    const reducir = () => {
        setCounter(counter - 1);
    }

    const resetear = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>

            <button onClick={ aumentar }>
                +1
            </button>
            <button onClick={ reducir }>
                -1
            </button>
            <button aria-label='btn-reset' onClick={ resetear }>
                Reset
            </button>

        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}


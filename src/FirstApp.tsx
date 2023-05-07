import PropTypes from 'prop-types';

/*
const getResult = () => {
    return 4 + 4;
}

interface Props {
    title: string;
    subTitle: string;
    name: string;
}
*/

export const FirstApp = ({ title, subTitle, name }) => {

    return (
        <>
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'JC',
    subTitle: 'No hay Subtitulo'
    // title: 'No hay título',
}


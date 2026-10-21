import PropTypes from 'prop-types';

export default function Item({marca = 'Faltou a marca', ano_lancamento = 2000}) {
    return (
        <ul>
            <li>{marca} - {ano_lancamento}</li>
        </ul>
    );
}

Item.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number,
};
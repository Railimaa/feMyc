import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './style';
import arrow from '../../assets/icons/arrow.svg';

export function PageHeader({ title, path }) {
  return (
    <Container>
      <Link to={path}>
        <img src={arrow} alt="Back" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string.isRequired,
};

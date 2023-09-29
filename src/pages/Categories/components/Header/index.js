import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Container } from './style';

export function Header({ qtyOfCategories }) {
  return (
    <Container>
      <strong>
        {qtyOfCategories}
        {qtyOfCategories === 1 ? ' categoria' : ' categorias'}
      </strong>

      <Link to="/newCategory">
        Nova categoria
      </Link>
    </Container>
  );
}

Header.propTypes = {
  qtyOfCategories: PropTypes.number.isRequired,
};

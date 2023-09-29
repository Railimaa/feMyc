import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import edit from '../../../../assets/icons/edit.svg';
import trash from '../../../../assets/icons/trash.svg';
import { Container } from './style';

export function Card({ categories, handleOpenModal }) {
  return (
    <Container>
      <div className="info">
        <div className="contact-name">
          <small>{categories.name}</small>
        </div>
      </div>

      <div className="actions">
        <Link to={`/editCategories/${categories.id}`}>
          <img src={edit} alt="Editar" />
        </Link>

        <button type="button" onClick={() => handleOpenModal(categories)}>
          <img src={trash} alt="Delete" />
        </button>
      </div>
    </Container>
  );
}

Card.propTypes = {
  categories: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleOpenModal: PropTypes.func,
};

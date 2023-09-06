import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { memo } from 'react';

import arrow from '../../../../assets/icons/arrow.svg';
import edit from '../../../../assets/icons/edit.svg';
import trash from '../../../../assets/icons/trash.svg';

import { ListHeader, Card } from './style';

function ContactsList({
  filteredContacts, orderBy, onToogleOrderBy, onDeleteContact,
}) {
  return (
    <>
      {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={onToogleOrderBy}>
            <span>Ordenar</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category.name && (
                <small>{contact.category.name}</small>
              )}
            </div>

            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Editar" />
            </Link>

            <button type="button" onClick={() => onDeleteContact(contact)}>
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}
    </>
  );
}

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string,
    }),
  })).isRequired,

  orderBy: PropTypes.string.isRequired,
  onToogleOrderBy: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default memo(ContactsList);

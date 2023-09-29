/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';

import { Container } from './style';

import emptyBox from '../../../../assets/images/empty-box.svg';

export default function EmptyList({ description }) {
  return (
    <Container>
      <img src={emptyBox} alt="Not found contact" />

      <div className="description">
        {description && (
          <p>
            Você ainda não tem nenhuma categoria cadastrada!
            Clique no botão <strong>”Nova categoria”</strong> à cima
            para cadastrar a seu primeiro!
          </p>
        )}
      </div>

      {!description && (
        <p>
          Você ainda não tem nenhum contato cadastrado!
          Clique no botão <strong>”Novo contato”</strong> à cima
          para cadastrar o seu primeiro!
        </p>
      )}
    </Container>
  );
}

EmptyList.propTypes = {
  description: PropTypes.string,
};

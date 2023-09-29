import PropTypes from 'prop-types';

import { Container } from './style';
import sad from '../../../../assets/images/sad.svg';
import Button from '../../../../components/Button';

export default function ErrorStatus({ onTryAgain, title }) {
  return (
    <Container>
      <img src={sad} alt="SadError" />
      <div className="details">
        <strong>
          Ocorreu um erro ao obter
          {' '}
          {title === 'contatos' ? 'seus' : 'suas'}
          {' '}
          {title}
          !
        </strong>

        <Button type="button" onClick={onTryAgain}>Tentar novamente</Button>
      </div>
    </Container>
  );
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

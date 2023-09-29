import PropTypes from 'prop-types';
import Input from '../../Input';
import Button from '../Button';
import { Form } from './style';
import { useCategoryForm } from './useCategoryForm';

export function CategoryForm({ buttonLabel, placeholder, onSubmit }) {
  const {
    name,
    isLoading,
    setName,
    handleSubmit,
  } = useCategoryForm(onSubmit);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Input
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder={placeholder}
      />

      <div className="button">
        <Button
          disabled={!name}
          isLoading={isLoading}
          type="submit"
        >
          {buttonLabel}
        </Button>
      </div>
    </Form>
  );
}

CategoryForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import { useState } from 'react';

export function useCategoryForm(onSubmit) {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    await onSubmit({ name });

    setIsLoading(false);
  }

  return {
    isLoading,
    handleSubmit,
    setName,
    name,
  };
}

useCategoryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

import { CategoryForm } from '../../components/CategoryForm';
import { PageHeader } from '../../components/PageHeader';
import { useNewCategory } from './useNewCategory';

export function NewCategory() {
  const { handleSubmit } = useNewCategory();

  return (
    <>
      <PageHeader title="Nova categoria" path="/categories" />

      <CategoryForm
        buttonLabel="Criar"
        onSubmit={handleSubmit}
        placeholder="Nome"
      />
    </>
  );
}

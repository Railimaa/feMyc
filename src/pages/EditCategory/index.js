import { CategoryForm } from '../../components/CategoryForm';
import { PageHeader } from '../../components/PageHeader';
import { useEditCatregory } from './useEditCategory';

export function EditCategory() {
  const {
    handleSubmit,
  } = useEditCatregory();

  return (
    <>
      <PageHeader
        title="Editar categoria"
        path="/categories"
      />

      <CategoryForm
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
        placeholder="Novo nome"
      />
    </>
  );
}

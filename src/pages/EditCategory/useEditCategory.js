import { useParams } from 'react-router-dom';
import CategoriesService from '../../services/CategoriesService';
import toast from '../../utils/toast';

export function useEditCatregory() {
  const { id } = useParams();

  async function handleSubmit(category) {
    try {
      await CategoriesService.update(id, category);

      toast({
        text: 'Categoria editada com sucesso!',
        type: 'success',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar a categoria!',
      });
    }
  }

  return {
    handleSubmit,
  };
}

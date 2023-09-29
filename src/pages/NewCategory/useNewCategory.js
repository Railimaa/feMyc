import CategoriesService from '../../services/CategoriesService';
import toast from '../../utils/toast';

export function useNewCategory() {
  async function handleSubmit(category) {
    try {
      await CategoriesService.createCategory(category);

      toast({
        text: 'Categoria criada com sucesso!',
        type: 'success',
      });
    } catch {
      toast({
        text: 'Erro ao criar categoria!',
        type: 'danger',
      });
    }
  }

  return {
    handleSubmit,
  };
}

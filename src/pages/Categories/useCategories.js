import { useCallback, useEffect, useState } from 'react';
import CategoriesService from '../../services/CategoriesService';
import toast from '../../utils/toast';

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDeleteCategory, setIsLoadingDeleteCategory] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [categoryIsBegninEdited, setCategoryIsBegninEdited] = useState(null);
  const [hasError, setHasError] = useState(false);

  function handleOpenModal(category) {
    setCategoryIsBegninEdited(category);
    setModalOpen(true);
  }

  function handleCLoseModal() {
    setCategoryIsBegninEdited(null);
    setModalOpen(false);
  }

  async function handleDeleteCategory() {
    try {
      setIsLoadingDeleteCategory(true);

      await CategoriesService.deleteCategory(categoryIsBegninEdited.id);

      setCategories((prevState) => prevState.filter(
        (category) => category.id !== categoryIsBegninEdited.id,
      ));

      handleCLoseModal();

      toast({
        text: 'Categoria deletada com sucesso!',
        type: 'success',
      });
    } catch {
      toast({
        text: 'Erro ao deletar categoria!',
        type: 'danger',
      });
      handleCLoseModal();
    } finally {
      setIsLoadingDeleteCategory(false);
    }
  }

  const loadCategories = useCallback(async () => {
    try {
      setIsLoading(true);

      setHasError(false);

      const categoriesList = await CategoriesService.listCategories();

      setCategories(categoriesList);
    } catch {
      setHasError(true);
      setCategories([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  function handleTryAgain() {
    loadCategories();
  }

  return {
    categories,
    isLoading,
    loadCategories,
    modalOpen,
    categoryIsBegninEdited,
    isLoadingDeleteCategory,
    handleCLoseModal,
    handleOpenModal,
    handleDeleteCategory,
    hasError,
    handleTryAgain,
  };
}

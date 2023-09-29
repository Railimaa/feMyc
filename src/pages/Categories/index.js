import { Loader } from '../../components/Loader';
import { Container } from './style';
import { useCategories } from './useCategories';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { PageHeader } from '../../components/PageHeader';
import { Modal } from '../../components/Modal';
import EmptyList from '../Home/components/EmptyList';
import ErrorStatus from '../Home/components/ErrorStatus';

export function Categories() {
  const {
    categories,
    isLoading,
    modalOpen,
    categoryIsBegninEdited,
    handleCLoseModal,
    handleOpenModal,
    isLoadingDeleteCategory,
    handleDeleteCategory,
    hasError,
    handleTryAgain,
  } = useCategories();

  const hasCategories = categories.length > 0;

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <PageHeader path="/" />

      {hasError && (
        <ErrorStatus onTryAgain={handleTryAgain} title="categorias" />
      )}

      {(!hasError && !isLoading) && (
      <>
        <Header qtyOfCategories={categories.length} />

        {!hasCategories && (
          <EmptyList
            description
          />
        )}

        {hasCategories && (
          categories.map((category) => (
            <Card
              key={category.id}
              categories={category}
              handleOpenModal={handleOpenModal}
            />
          ))
        )}

        <Modal
          danger
          visible={modalOpen}
          isLoading={isLoadingDeleteCategory}
          title={`Tem certeza que deseja remover a categoria "${categoryIsBegninEdited?.name}" ?`}
          cancelLabel="Cancelar"
          confirmLabel="Deletar"
          onCancel={handleCLoseModal}
          onConfirm={handleDeleteCategory}
        >
          <p>Esta ação não pode ser desfeita!</p>
        </Modal>
      </>
      )}

    </Container>
  );
}

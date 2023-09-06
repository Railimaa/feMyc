/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-alert */
/* eslint-disable no-nested-ternary */

import {
  Container,
} from './style';

import { Loader } from '../../components/Loader';
import { Modal } from '../../components/Modal';

import useHome from './useHome';

import InputSearch from './components/InputSearch';
import Header from './components/Header';
import ErrorStatus from './components/ErrorStatus';
import EmptyList from './components/EmptyList';
import SearchNotFound from './components/SearchNotFounder';
import ContactsList from './components/ContactsList';

export default function Home() {
  const {
    isLoading,
    isLoadingDelete,
    isDeleteModalVisible,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    contacts,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    handleTryAgain,
    filteredContacts,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  const hasContacts = contacts.length > 0 && !hasError;
  const isListEmpty = !isLoading && contacts.length < 1;
  const isSearchEmpty = hasContacts && filteredContacts.length < 1;

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      )}

      <Header
        hasError={hasError}
        qtyOfContacts={contacts.length}
        qtyOfFilteredContacts={filteredContacts.length}
      />

      {hasError && (
        <ErrorStatus onTryAgain={handleTryAgain} />
      )}

      {!hasError && (
      <>
        {isListEmpty && (
          <EmptyList />
        )}

        {isSearchEmpty && (
          <SearchNotFound searchTerm={searchTerm} />
        )}

        <ContactsList
          filteredContacts={filteredContacts}
          orderBy={orderBy}
          onToogleOrderBy={handleToggleOrderBy}
          onDeleteContact={handleDeleteContact}
        />

        <Modal
          danger
          visible={isDeleteModalVisible}
          isLoading={isLoadingDelete}
          title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}" ?`}
          cancelLabel="Cancelar"
          confirmLabel="Deletar"
          onCancel={handleCloseDeleteModal}
          onConfirm={handleConfirmDeleteContact}
        >
          <p>Esta ação não pode ser desfeita!</p>
        </Modal>

      </>
      )}
    </Container>
  );
}

// SOP -> Same Origin Policy -> Política de mesma origem
// CORS -> Cross-Origin Resource Sharing -> Compartilhamento de recursos entre origens diferentes
// Origem: protocolo://dominio:porta

// Saída: http://localhost:3000
// Entrada: http:localhost:3001

// preflight -> Pré-voô
// OPTIONS 'http://localhost:3001/contacts'

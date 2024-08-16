import {
  CreateContactController,
  DeleteContactController,
  GetContactsController,
  UpdateContactController,
} from "../../controllers/contact/index.js";
import {
  PostgresCreateContactRepository,
  PostgresDeleteContactRepository,
  PostgresGetContactsRepository,
  PostgresUpdateContactRepository,
} from "../../repositories/postgres/contact/index.js";
import {
  CreateContactUseCase,
  DeleteContactUseCase,
  GetContactsUseCase,
  UpdateContactUseCase,
} from "../../use-cases/contact/index.js";

export const makeCreateContactController = () => {
  const createContactRepository = new PostgresCreateContactRepository();
  const createContactUseCase = new CreateContactUseCase(
    createContactRepository
  );
  const createContactController = new CreateContactController(
    createContactUseCase
  );

  return createContactController;
};

export const makeGetContactsController = () => {
  const getContactsRepository = new PostgresGetContactsRepository();
  const getContactsUseCase = new GetContactsUseCase(getContactsRepository);
  const getContactsController = new GetContactsController(getContactsUseCase);

  return getContactsController;
};

export const makeUpdateContactController = () => {
  const updateContactRepository = new PostgresUpdateContactRepository();
  const updateContactUseCase = new UpdateContactUseCase(
    updateContactRepository
  );
  const updateContactController = new UpdateContactController(
    updateContactUseCase
  );

  return updateContactController;
};

export const makeDeleteContactController = () => {
  const deleteContactRepository = new PostgresDeleteContactRepository();
  const deleteContactUseCase = new DeleteContactUseCase(
    deleteContactRepository
  );
  const deleteContactController = new DeleteContactController(
    deleteContactUseCase
  );

  return deleteContactController;
};

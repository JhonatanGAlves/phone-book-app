import { CreateContactController } from "../../controllers/contact/index.js";
import { PostgresCreateContactRepository } from "../../repositories/postgres/contact/index.js";
import { CreateContactUseCase } from "../../use-cases/contact/index.js";

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

import {
  checkIfIdIsValid,
  invalidIdResponse,
  notFoundResponse,
  ok,
  serverError,
} from "../helpers/index.js";

export class DeleteContactController {
  constructor(deleteContactUseCase) {
    this.deleteContactUseCase = deleteContactUseCase;
  }

  async execute(httpRequest) {
    try {
      const contactId = httpRequest.params.contactId;
      const isValidId = checkIfIdIsValid(contactId);

      if (!isValidId) {
        return invalidIdResponse();
      }

      const contactDeletedById = await this.deleteContactUseCase.execute(
        contactId
      );

      if (!contactDeletedById) {
        return notFoundResponse();
      }

      return ok(contactDeletedById);
    } catch (error) {
      console.log(error);
      return serverError();
    }
  }
}

import { ZodError } from "zod";

import { updateContactSchema } from "../../schemas/contact.js";
import {
  checkIfIdIsValid,
  invalidIdResponse,
  badRequest,
  ok,
  serverError,
} from "../helpers/index.js";

export class UpdateContactController {
  constructor(updateContactUseCase) {
    this.updateContactUseCase = updateContactUseCase;
  }

  async execute(httpRequest) {
    const params = httpRequest.body;

    try {
      const contactId = httpRequest.params.contactId;
      const isValidId = checkIfIdIsValid(contactId);

      if (!isValidId) {
        return invalidIdResponse();
      }

      await updateContactSchema.parseAsync(params);

      const updatedContact = await this.updateContactUseCase.execute(
        contactId,
        params
      );

      return ok(updatedContact);
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest({
          message: error.errors[0].message,
        });
      }

      console.error(error);
      return serverError();
    }
  }
}

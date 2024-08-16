import { ZodError } from "zod";

import { badRequest, created, serverError } from "../helpers/index.js";
import { createContactSchema } from "../../schemas/index.js";

export class CreateContactController {
  constructor(createContactUseCase) {
    this.createContactUseCase = createContactUseCase;
  }

  async execute(httpRequest) {
    try {
      const params = httpRequest.body;

      await createContactSchema.parseAsync(params);

      const createdContact = await this.createContactUseCase.execute({
        ...params,
      });

      return created(createdContact);
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

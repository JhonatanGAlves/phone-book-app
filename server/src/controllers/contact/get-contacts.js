import { ok } from "../helpers/index.js";

export class GetContactsController {
  constructor(getContactsUseCase) {
    this.getContactsUseCase = getContactsUseCase;
  }

  async execute() {
    try {
      const contacts = await this.getContactsUseCase.execute();

      return ok(contacts);
    } catch (error) {
      console.error(error);

      return serverError();
    }
  }
}

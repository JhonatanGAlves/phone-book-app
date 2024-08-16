import { v4 as uuidv4 } from "uuid";

export class CreateContactUseCase {
  constructor(dbCreateContactRepository) {
    this.dbCreateContactRepository = dbCreateContactRepository;
  }

  async execute(createContactParams) {
    const contactId = uuidv4();
    const Contact = {
      ...createContactParams,
      id: contactId,
    };

    const createdContact = await this.dbCreateContactRepository.execute(
      Contact
    );

    return createdContact;
  }
}

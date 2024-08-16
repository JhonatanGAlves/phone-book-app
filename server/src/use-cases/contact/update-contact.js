export class UpdateContactUseCase {
  constructor(dbUpdateContactRepository) {
    this.dbUpdateContactRepository = dbUpdateContactRepository;
  }

  async execute(contactId, updateContactParams) {
    const contact = {
      ...updateContactParams,
    };

    const updatedContact = await this.dbUpdateContactRepository.execute(
      contactId,
      contact
    );
    return updatedContact;
  }
}

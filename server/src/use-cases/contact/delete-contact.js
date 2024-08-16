export class DeleteContactUseCase {
  constructor(dbDeleteContactRepository) {
    this.dbDeleteContactRepository = dbDeleteContactRepository;
  }

  async execute(contactId) {
    const contactDeletedById = await this.dbDeleteContactRepository.execute(
      contactId
    );
    return contactDeletedById;
  }
}

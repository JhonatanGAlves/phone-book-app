export class GetContactsUseCase {
  constructor(dbGetContactsRepository) {
    this.dbGetContactsRepository = dbGetContactsRepository;
  }

  async execute() {
    const contacts = await this.dbGetContactsRepository.execute();
    return contacts;
  }
}

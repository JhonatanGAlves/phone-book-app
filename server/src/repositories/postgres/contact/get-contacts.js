import { prisma } from "../../../../../prisma/prisma.js";

export class PostgresGetContactsRepository {
  async execute() {
    const contacts = await prisma.contact.findMany();
    return contacts;
  }
}

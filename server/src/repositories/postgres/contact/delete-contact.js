import { prisma } from "../../../../../prisma/prisma.js";

export class PostgresDeleteContactRepository {
  async execute(contactId) {
    try {
      return await prisma.contact.delete({
        where: {
          id: contactId,
        },
      });
    } catch (error) {
      return null;
    }
  }
}

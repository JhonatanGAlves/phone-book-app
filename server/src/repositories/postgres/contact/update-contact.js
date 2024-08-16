import { prisma } from "../../../../../prisma/prisma.js";

export class PostgresUpdateContactRepository {
  async execute(contactId, updateContactParams) {
    return await prisma.contact.update({
      where: {
        id: contactId,
      },
      data: updateContactParams,
    });
  }
}

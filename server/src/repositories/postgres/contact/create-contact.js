import { prisma } from "../../../../../prisma/prisma.js";

export class PostgresCreateContactRepository {
  async execute(createContactParams) {
    const { id, first_name, last_name, phone_number } = createContactParams;

    const contact = await prisma.contact.create({
      data: {
        id,
        first_name,
        last_name,
        phone_number,
      },
    });

    return contact;
  }
}

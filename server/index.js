import express from "express";

import {
  makeCreateContactController,
  makeDeleteContactController,
  makeGetContactsController,
  makeUpdateContactController,
} from "./src/factories/controllers/contact.js";

const app = express();

app.use(express.json());

app.post("/api/contacts", async (request, response) => {
  const createContactController = makeCreateContactController();
  const { statusCode, body } = await createContactController.execute(request);

  return response.status(statusCode).send(body);
});

app.get("/api/contacts/all", async (request, response) => {
  const getContactsController = makeGetContactsController();
  const { statusCode, body } = await getContactsController.execute();

  return response.status(statusCode).send(body);
});

app.patch("/api/contacts/update/:contactId", async (request, response) => {
  const updateContactController = makeUpdateContactController();
  const { statusCode, body } = await updateContactController.execute(request);

  return response.status(statusCode).send(body);
});

app.delete("/api/contacts/delete/:contactId", async (request, response) => {
  const deleteContactController = makeDeleteContactController();
  const { statusCode, body } = await deleteContactController.execute(request);

  return response.status(statusCode).send(body);
});

app.listen(process.env.PORT, async () =>
  console.log(`Listening on port ${process.env.PORT}`)
);

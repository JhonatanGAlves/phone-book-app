import express from "express";
import { makeCreateContactController } from "./src/factories/controllers/contact.js";

const app = express();

app.use(express.json());

app.post("/api/contacts", async (request, response) => {
  const createContactController = makeCreateContactController();
  const { statusCode, body } = await createContactController.execute(request);

  return response.status(statusCode).send(body);
});

app.listen(process.env.PORT, async () =>
  console.log(`Listening on port ${process.env.PORT}`)
);

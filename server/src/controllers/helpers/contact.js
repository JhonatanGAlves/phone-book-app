import { notFound } from "./http.js";

export const notFoundResponse = () => {
  return notFound({
    message: "Contact not found.",
  });
};

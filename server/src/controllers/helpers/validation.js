import validator from "validator";

export const checkIfIdIsValid = (id) => validator.isUUID(id);

export const invalidIdResponse = () => {
  return generateBadRequest("The provided ID is not valid.");
};

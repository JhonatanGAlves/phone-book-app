import { z } from "zod";

export const createContactSchema = z.object({
  first_name: z
    .string({
      required_error: "First name is required.",
    })
    .trim()
    .min(1, {
      message: "First name is required.",
    }),
  last_name: z
    .string({
      required_error: "Last name is required.",
    })
    .trim()
    .min(1, {
      message: "Last name is required",
    }),
  phone_number: z
    .string({
      required_error: "Phone number is required.",
    })
    .trim()
    .min(1, {
      message: "Phone number is required",
    }),
});

export const updateContactSchema = createContactSchema.partial().strict({
  message: "Some provided field is not allowed.",
});

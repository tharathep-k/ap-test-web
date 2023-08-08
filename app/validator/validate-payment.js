import Joi from "joi";

const paymentSchema = Joi.object({
  housenumber: Joi.string()
    .trim()
    .required()
    .pattern(/^[0-9]/)
    .messages({
      "string.empty": "*",
    }),
  moo: Joi.string()
    .trim()
    .required()
    .pattern(/^[0-9]/)
    .messages({
      "string.empty": "*",
    }),
  province: Joi.string().trim().required().messages({
    "string.empty": "*",
  }),
  district: Joi.string().trim().required().messages({
    "string.empty": "*",
  }),
  subdistrict: Joi.string().trim().required().messages({
    "string.empty": "*",
  }),
  code: Joi.string()
    .trim()
    .required()
    .pattern(/^[0-9]{5}$/)
    .messages({
      "string.empty": "*",
    }),
}).unknown(true);

export default function paymentRegister(input) {
  const { error } = paymentSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
}

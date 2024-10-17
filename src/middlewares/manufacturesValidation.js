const { z } = require("zod");
const { BadRequestError } = require("../utils/request");

exports.validateCreateManufacture = (req, res, next) => {
  const validateBody = z.object({
    name: z.string().min(1, "Manufacture name is required"),
    country: z.string().min(1, "Country is required"),
  });

  const result = validateBody.safeParse(req.body);
  if (!result.success) {
    throw new BadRequestError(result.error.errors);
  }

  next();
};

exports.validateGetManufactureById = (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  const result = validateParams.safeParse(req.params);
  if (!result.success) {
    throw new BadRequestError(result.error.errors);
  }

  next();
};

exports.validateUpdateManufacture = (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  const validateBody = z.object({
    name: z.string().optional(),
    country: z.string().optional(),
  });

  const resultParams = validateParams.safeParse(req.params);
  if (!resultParams.success) {
    throw new BadRequestError(resultParams.error.errors);
  }

  const resultBody = validateBody.safeParse(req.body);
  if (!resultBody.success) {
    throw new BadRequestError(resultBody.error.errors);
  }

  next();
};

exports.validateDeleteManufactureById = (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  const result = validateParams.safeParse(req.params);
  if (!result.success) {
    throw new BadRequestError(result.error.errors);
  }

  next();
};

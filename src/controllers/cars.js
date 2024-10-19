const carsService = require("../services/cars");
const { successResponse } = require("../utils/response");
const { NotFoundError } = require("../utils/request");

exports.getCars = async (req, res, next) => {
  const data = await carsService.getCars(req);
  if (!data.length) {
    throw new NotFoundError(`Cars data not found`);
  }
  successResponse(res, data, `Successfully fetched cars`);
};

exports.getCarsById = async (req, res, next) => {
  const data = await carsService.getCarsById(req.params.id);
  if (!data) {
    throw new NotFoundError(`Cars not found`);
  }
  successResponse(res, data, `Successfully fetched cars`);
};

exports.addCars = async (req, res, next) => {
  const data = await carsService.addCars(req.parsedBody, req.files?.image);
  successResponse(res, data, `Successfully added cars`);
};

exports.updateCars = async (req, res, next) => {
  const data = await carsService.updateCars(
    req.params.id,
    req.parsedBody,
    req.files?.image
  );
  if (!data) {
    throw new NotFoundError(`Cars id not found`);
  }
  successResponse(res, data, `Successfully updated cars`);
};

exports.deleteCars = async (req, res, next) => {
  const data = await carsService.deleteCars(req.params.id);
  if (!data) {
    throw new NotFoundError(`Cars id not found`);
  }
  successResponse(res, data, `Successfully deleted cars`);
};

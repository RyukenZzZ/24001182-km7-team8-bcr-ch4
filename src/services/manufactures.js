const manufactureRepository = require("../repositories/manufactures");
const { NotFoundError, InternalServerError } = require("../utils/request");

exports.getManufactures = async () => {
  const manufactures = await manufactureRepository.getManufactures();
  return manufactures;
};

exports.getManufactureById = async (id) => {
  const manufacture = await manufactureRepository.getManufactureById(id);
  if (!manufacture) {
    throw new NotFoundError("Manufacture not found!");
  }
  return manufacture;
};

exports.createManufacture = async (data) => {
  const newManufacture = await manufactureRepository.createManufacture(data);
  if (!newManufacture) {
    throw new InternalServerError("Failed to create manufacture!");
  }
  return newManufacture;
};

exports.updateManufacture = async (id, data) => {
  const existingManufacture = await manufactureRepository.getManufactureById(
    id
  );
  if (!existingManufacture) {
    throw new NotFoundError("Manufacture not found!");
  }

  const updatedManufacture = await manufactureRepository.updateManufacture(
    id,
    data
  );
  if (!updatedManufacture) {
    throw new InternalServerError("Failed to update manufacture!");
  }

  return updatedManufacture;
};

exports.deleteManufactureById = async (id) => {
  const existingManufacture = await manufactureRepository.getManufactureById(
    id
  );
  if (!existingManufacture) {
    throw new NotFoundError("Manufacture not found!");
  }

  const deletedManufacture = await manufactureRepository.deleteManufactureById(
    id
  );
  if (!deletedManufacture) {
    throw new InternalServerError("Failed to delete manufacture!");
  }

  return deletedManufacture;
};

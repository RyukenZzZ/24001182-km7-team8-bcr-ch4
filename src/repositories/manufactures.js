const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");

const prisma = new PrismaClient();

exports.getManufactures = async () => {
  const manufactures = await prisma.manufactures.findMany();

  // Convert BigInt fields to string for safe serialization
  const serializedManufactures = JSONBigInt.stringify(manufactures);
  return JSONBigInt.parse(serializedManufactures);
};

exports.getManufactureById = async (id) => {
  const manufacture = await prisma.manufactures.findFirst({
    where: { id: id },
  });

  // Convert BigInt fields to string for safe serialization
  const serializedManufacture = JSONBigInt.stringify(manufacture);
  return JSONBigInt.parse(serializedManufacture);
};

exports.createManufacture = async (data) => {
  const newManufacture = await prisma.manufactures.create({
    data,
  });

  // Convert BigInt fields to string for safe serialization
  const serializedManufacture = JSONBigInt.stringify(newManufacture);
  return JSONBigInt.parse(serializedManufacture);
};

exports.updateManufacture = async (id, data) => {
  const updatedManufacture = await prisma.manufactures.update({
    where: { id: id },
    data,
  });

  // Convert BigInt fields to string for safe serialization
  const serializedManufacture = JSONBigInt.stringify(updatedManufacture);
  return JSONBigInt.parse(serializedManufacture);
};

exports.deleteManufactureById = async (id) => {
  const deletedManufacture = await prisma.manufactures.delete({
    where: { id: id },
  });

  // Convert BigInt fields to string for safe serialization
  const serializedManufacture = JSONBigInt.stringify(deletedManufacture);
  return JSONBigInt.parse(serializedManufacture);
};

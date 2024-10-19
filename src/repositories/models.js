const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");

const prisma = new PrismaClient();

exports.getModels = async (name) => {
    // Define Query
    let query = {
        include: {
            manufactures: true,
        },
    };

    let orQuery =[];
    if(name){
        orQuery.push({
            name: {contains: name, mode: "insensitive"},
        });
    }

    if(orQuery.length > 0) {
        query.where = {
            ...query.where,
            OR: orQuery,
        };
    }

    // find by query
    const searchedModels = await prisma.models.findMany(query);

    // Convert BigInt fields to string for safe serialization
    const serializedModels = JSONBigInt.stringify(searchedModels);
    return JSONBigInt.parse(serializedModels);
}

exports.getModelById = async (id) => {
    // find Model by id
    const model = await prisma.models.findFirst({
        where: {
            id: id,
        },
        include: {
            manufactures: true,
        },
    });

    // Convert BigInt fields to string for safe serialization
    const serializedModels = JSONBigInt.stringify(model);
    return JSONBigInt.parse(serializedModels);
};

exports.createModel = async (data) => {
    const newModel = await prisma.models.create({
        data,
        include: {
            manufactures: true,
        },
    });

    // Convert BigInt fields to string for safe serialization
    const serializedModels = JSONBigInt.stringify(newModel);
    return JSONBigInt.parse(serializedModels);    
};

exports.updateModel = async (id, data) => {
    
    const updatedModel = await prisma.models.update({
        where: {
            id: id, // ID dari model yang ingin diperbarui
        },
        data,
        include: {
            manufactures: true, // Sertakan relasi jika perlu
        },
    });    

    // Convert BigInt fields to string for safe serialization
    const serializedModels = JSONBigInt.stringify(updatedModel);
    return JSONBigInt.parse(serializedModels);    
};

exports.deleteModelById = async (id) => {
    const deletedModel = await prisma.models.delete({
        where: {id},
        include: {
            manufactures: true,
        },
    });

    // Convert BigInt fields to string for safe serialization
    const serializedModels = JSONBigInt.stringify(deletedModel);
    return JSONBigInt.parse(serializedModels);    
};

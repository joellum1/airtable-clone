import { prisma } from "@/lib/prisma";

export const getBases = async () => {
    const bases = await prisma.base.findMany();
    // return Response.json(bases);
    return JSON.stringify(bases);
};

export const getTables = async () => {
    const tables = await prisma.table.findMany();
    return JSON.stringify(tables);
}

export const getFields = async () => {
    const fields = await prisma.field.findMany();
    return JSON.stringify(fields);
}

export const getRecords = async () => {
    const records = await prisma.record.findMany();
    return JSON.stringify(records);
}

try {
    const bases = await getBases();
    console.log(`bases: ${bases}`);

    const tables = await getTables();
    console.log(`tables: ${tables}`);

    const fields = await getFields();
    console.log(`fields: ${fields}`);

    const records = await getRecords();
    console.log(`records: ${records}`);
} catch (e) {
    console.log(`error: ${e}`);
} finally {
    await prisma.$disconnect();
};
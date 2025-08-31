import { prisma } from "@/lib/prisma";

// route - api/tables?baseId=<baseId>

// list all tables in a base
export const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url);
    const baseId = searchParams.get("baseId");

    if (!baseId || typeof baseId !== "string") {
        return Response.json(
            { error: "baseId variable needs to be a non-empty string" },
            { status: 400 }
        );
    }
    
    const tables = await prisma.table.findMany({
        where: { baseId }
    });

    return Response.json(tables);
};

// create new table in a base
export const POST = async (req: Request) => {
    const { searchParams } = new URL(req.url);
    const baseId = searchParams.get("baseId");

    if (!baseId || typeof baseId !== "string") {
        return Response.json(
            { error: "baseId variable needs to be a non-empty string" },
            { status: 400 }
        );
    }

    const numTables = await prisma.table.count({
        where: { baseId },
    });

    const name = `Table ${numTables + 1}`;
    const newTable = await prisma.table.create({
        data: { baseId, name }
    });

    return Response.json(newTable);
};


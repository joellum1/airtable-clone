import { prisma, type FieldType } from "@/lib/prisma";

// route - api/field?tableId=<tableId>

interface PostRequestBody {
    tableId: string;
    name?: string;
    type: FieldType;
} 

// list all fields in a table
export const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url);
    const tableId = searchParams.get("tableId");

    if (!tableId || typeof tableId !== "string") {
        return Response.json(
            { error: "tableId variable needs to be a non-empty string" },
            { status: 400 }
        );
    }
    
    const fields = await prisma.field.findMany({
        where: { tableId }
    });

    return Response.json(fields);
};

// create new field in a table
export const POST = async (req: Request) => {
    const body = await req.json() as PostRequestBody;
    const { tableId, name, type } = body;

    if (!tableId || typeof tableId !== "string") {
        return Response.json(
            { error: "tableId variable needs to be a non-empty string" },
            { status: 400 }
        );
    }

    const prevPosition = await prisma.field.count({
        where: { tableId },
    });

    const newField = await prisma.field.create({
        data: { 
            tableId, 
            name: name ?? undefined, 
            type, 
            position: prevPosition + 1  // 1-indexed
        }
    });

    return Response.json(newField);
};


import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

// route - api/record?tableId=<tableId>

interface PostRequestBody {
    tableId: string;
    data?: Prisma.JsonObject | null;
}

// list all records in a table
export const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url);
    const tableId = searchParams.get("tableId");

    if (!tableId || typeof tableId !== "string") {
        return Response.json(
            { error: "tableId variable needs to be a non-empty string" },
            { status: 400 }
        );
    }
    
    const records = await prisma.record.findMany({
        where: { tableId }
    });

    return Response.json(records);
};

// create new record in a table
export const POST = async (req: Request) => {
    const body = await req.json() as PostRequestBody;
    const { tableId, data } = body;

    if (!tableId || typeof tableId !== "string") {
        return Response.json(
            { error: "tableId variable needs to be a non-empty string" },
            { status: 400 }
        );
    }

    const prevPosition = await prisma.record.count({
        where: { tableId },
    });

    const newRecord = await prisma.record.create({
        data: {
            tableId, 
            data: data ?? {},
            position: prevPosition + 1  // 1-indexed
        }
    });

    return Response.json(newRecord);
};

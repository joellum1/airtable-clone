import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

// route - api/record/:id

interface PatchRequestBody {
    data?: Prisma.JsonObject | null;
    position?: number | null
}

// retrieve a record
export const GET = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const record = await prisma.record.findUnique({
        where: { id }
    })

    return Response.json(record);
};

// update a record
export const PATCH = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const body = await req.json() as PatchRequestBody;
    const { data, position } = body;

    const updatedRecord = await prisma.record.update({
        where: { id },
        data: {  
            data: data ?? undefined,
            position: position ?? undefined
        }
    });

    return Response.json(updatedRecord);
};

// deleting a record
export const DELETE = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const res = await prisma.record.delete({
        where: { id }
    });

    return Response.json(res);
};

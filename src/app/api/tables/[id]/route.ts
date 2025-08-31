import { prisma } from "@/lib/prisma";

// route - api/tables/:id

interface PatchRequestBody {
    name?: string;
}

// retrieve table by id
export const GET = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const table = await prisma.table.findUnique({
        where: { id }
    });

    return Response.json(table);
};

// update table information
export const PATCH = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const body = await req.json() as PatchRequestBody;
    const { name } = body;

    const updatedTable = await prisma.table.update({
        where: { id },
        data: { name }
    });

    return Response.json(updatedTable);
};

// delete table by id
export const DELETE = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const res = await prisma.table.delete({
        where: { id }
    });

    return Response.json(res);
};
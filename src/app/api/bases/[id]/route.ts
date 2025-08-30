import { prisma } from "@/lib/prisma";

// route - api/bases/:id

// retrieve base by id
export const GET = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const base = await prisma.base.findUnique({
        where: { id }
    });
    return Response.json(base);
};

// update base information
export const PATCH = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const { name } = await req.json();
    const updatedBase = await prisma.base.update({
        where: { id },
        data: { name }
    });
    return Response.json(updatedBase);
};

// delete base by id
export const DELETE = async (req: Request, { params }: { params: Promise<{ id: String }> }) => {
    const { id } = await params;
    const res = await prisma.base.delete({
        where: { id }
    });
    return Response.json(res);
};
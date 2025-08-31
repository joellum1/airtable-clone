import { prisma, FieldType } from "@/lib/prisma";

// route - api/field/:id

interface PatchRequestBody {
    name: string;
    type: FieldType;
    specs?: Record<string, any> | null;
}

// update a field
export const PATCH = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const body = await req.json() as PatchRequestBody;
    const { name, type, specs } = body;

    const updatedField = await prisma.field.update({
        where: { id },
        data: { 
            name, 
            type, 
            specs: specs ?? undefined
        }
    });

    return Response.json(updatedField);
};

// delete a field
export const DELETE = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const res = await prisma.field.delete({
        where: { id }
    });

    return Response.json(res);
};
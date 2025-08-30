import { prisma } from "@/lib/prisma";

// route - api/bases

// list all bases
export const GET = async () => {
    const bases = await prisma.base.findMany();
    return Response.json(bases);
};

// create new base with default configurations
export const POST = async () => {
    const newBase = await prisma.base.create({
        data: {}
    });
    return Response.json(newBase);
};
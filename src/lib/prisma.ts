import { PrismaClient, type FieldType } from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined;
}

// create new prisma client if doesn't already exist
export const prisma = globalThis.prisma ?? new PrismaClient();

export { type FieldType };   // re-exporting for cleanliness
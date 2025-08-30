import { PrismaClient } from '@prisma/client';

declare global {
    interface globalThis {
        prisma?: PrismaClient;
    }
}

// create new prisma client if doesn't already exist
export const prisma = globalThis.prisma || new PrismaClient();
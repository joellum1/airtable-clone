import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const tableRouter = createTRPCRouter({
    getAll: protectedProcedure
        .input(z.object({ baseId: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.db.table.findMany({
                where: { baseId: input.baseId }
            });
        }),

    getById: protectedProcedure
        .input(z.object({ id: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.db.table.findUnique({
                where: { id: input.id }
            });
        }),

    create: protectedProcedure
        .input(z.object({ baseId: z.string(), name: z.string().min(1) }))
        .mutation(async ({ ctx, input }) => {
            const numTables = await ctx.db.table.count({
                where: { baseId: input.baseId }
            });
            const name = `Table ${numTables + 1}`;

            return ctx.db.table.create({
                data: {
                    baseId: input.baseId,
                    name: name
                }
            });
        }),

    update: protectedProcedure
        .input(z.object({ id: z.string(), name: z.string().min(1) }))
        .mutation(({ ctx, input }) => {
            return ctx.db.table.update({
                where: { id: input.id },
                data: { name: input.name }
            });
        }),

    delete: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.db.table.delete({
                where: { id: input.id }
            });
        })
});
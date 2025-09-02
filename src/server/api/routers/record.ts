import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

const JsonSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.null(),
  z.record(z.any()), // Allows nested objects
  z.array(z.any()), // Allows arrays
]).nullable();

export const recordRouter = createTRPCRouter({
    getAll: protectedProcedure
        .input(z.object({ tableId: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.db.record.findMany({
                where: { tableId: input.tableId },
                orderBy: { position: "asc" }
            });
        }),

    getById: protectedProcedure
        .input(z.object({ id: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.db.record.findUnique({
                where: { id: input.id }
            });
        }),

    create: protectedProcedure
        .input(z.object({ tableId: z.string(), data: JsonSchema.optional() }))
        .mutation(async ({ ctx, input }) => {
            const numRecords = await ctx.db.record.count({
                where: { tableId: input.tableId }
            });
            const position = numRecords + 1;

            return ctx.db.record.create({
                data: {
                    tableId: input.tableId,
                    data: input.data ?? {},
                    position: position
                }
            });
        }),

    update: protectedProcedure
        .input(z.object({ id: z.string(), data: JsonSchema.optional(), position: z.number().optional() }))
        .mutation(({ ctx, input }) => {
            return ctx.db.record.update({
                where: { id: input.id },
                data: { 
                    data: input.data ?? undefined,
                    position: input.position ?? undefined
                }
            });
        }),

    delete: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.db.record.delete({
                where: { id: input.id }
            });
        })
});
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const cellRouter = createTRPCRouter({
    getByCol: protectedProcedure
        .input(z.object({ fieldId: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.db.cell.findMany({
                where: { fieldId: input.fieldId },
                orderBy: { row: "asc" }
            });
        }),

    getByRow: protectedProcedure
        .input(z.object({ row: z.number(), tableId: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.db.cell.findMany({
                where: { 
                    row: input.row,
                    field: { tableId: input.tableId }
                }
            });
        }),

    create: protectedProcedure
        .input(z.object({ row: z.number(), fieldId: z.string(), value: z.string().optional() }))
        .mutation(({ ctx, input }) => {
            return ctx.db.cell.create({
                data: {
                    row: input.row,
                    fieldId: input.fieldId,
                    value: input.value ?? null
                }
            });
        }),

    update: protectedProcedure
        .input(z.object({ id: z.string(), value: z.string().optional() }))
        .mutation(({ ctx, input }) => {
            return ctx.db.cell.update({
                where: { id: input.id },
                data: { 
                    value: input.value ?? undefined
                }
            });
        }),

    delete: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.db.cell.delete({
                where: { id: input.id }
            });
        })
});
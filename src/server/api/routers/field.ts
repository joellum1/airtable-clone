import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

const FieldTypeSchema = z.enum(["TEXT", "NUMBER"]);

export const fieldRouter = createTRPCRouter({
    getAll: protectedProcedure
        .input(z.object({ tableId: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.db.field.findMany({
                where: { tableId: input.tableId },
                orderBy: { position: "asc" }
            });
        }),

    getById: protectedProcedure
        .input(z.object({ id: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.db.field.findUnique({
                where: { id: input.id }
            });
        }),

    create: protectedProcedure
        .input(z.object({ tableId: z.string(), name: z.string().min(1).optional(), type: FieldTypeSchema}))
        .mutation(async ({ ctx, input }) => {
            const numFields = await ctx.db.field.count({
                where: { tableId: input.tableId }
            });
            const position = numFields + 1;

            const newField = await ctx.db.field.create({
                data: {
                    tableId: input.tableId,
                    name: input.name ?? undefined,
                    type: input.type,
                    position: position
                }
            });

            // retrieve all rows and add cells to them
            const existingRows = await ctx.db.cell.findMany({
                where: { field: { tableId: input.tableId } },
                select: { row: true },
                distinct: ["row"],
            });

            // add empty cells for each row
            if (existingRows.length > 0) {
                await ctx.db.cell.createMany({
                    data: existingRows.map((r) => ({
                        row: r.row,
                        fieldId: newField.id,
                        value: null,
                    })),
                });
            }

            return newField
        }),

    update: protectedProcedure
        .input(z.object({ id: z.string(), name: z.string().min(1), type: FieldTypeSchema, specs: JsonSchema.optional() }))
        .mutation(({ ctx, input }) => {
            return ctx.db.field.update({
                where: { id: input.id },
                data: { 
                    name: input.name,
                    type: input.type,
                    specs: input.specs ?? undefined
                }
            });
        }),

    delete: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.db.field.delete({
                where: { id: input.id }
            });
        })
});
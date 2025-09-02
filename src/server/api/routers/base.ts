import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const baseRouter = createTRPCRouter({
    getAll: protectedProcedure
        .query(({ ctx }) => {
            return ctx.db.base.findMany();
        }),

    getById: protectedProcedure
        .input(z.object({ id: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.db.base.findUnique({
                where: { id: input.id }
            });
        }),

    create: protectedProcedure
        .input(z.object({ name: z.string().min(1) }))
        .mutation(({ ctx, input }) => {
            return ctx.db.base.create({
                data: {
                    name: input.name
                }
            });
        }),

    update: protectedProcedure
        .input(z.object({ id: z.string(), name: z.string().min(1) }))
        .mutation(({ ctx, input }) => {
            return ctx.db.base.update({
                where: { id: input.id },
                data: { name: input.name }
            });
        }),

    delete: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.db.base.delete({
                where: { id: input.id }
            });
        })
});
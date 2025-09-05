import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const baseRouter = createTRPCRouter({
    getAll: protectedProcedure
        .query(({ ctx }) => {
            return ctx.db.base.findMany({
                where: { createdBy: ctx.session.user.id }
            });
        }),

    getById: protectedProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ ctx, input }) => {
            const base = await ctx.db.base.findUnique({
                where: { id: input.id }
            });

            if (!base || base.createdBy !== ctx.session.user.id) {
                throw new Error("Not authorized to retrieve this base");;
            }

            return base;
        }),

    create: protectedProcedure
        .input(z.object({ name: z.string().min(1) }))
        .mutation(({ ctx, input }) => {
            return ctx.db.base.create({
                data: {
                    name: input.name,
                    createdBy: ctx.session.user.id
                }
            });
        }),

    update: protectedProcedure
        .input(z.object({ id: z.string(), name: z.string().min(1) }))
        .mutation(async ({ ctx, input }) => {
            const base = await ctx.db.base.findUnique({
                where: { id: input.id }
            });

            if (!base || base.createdBy !== ctx.session.user.id) {
                throw new Error("Not authorized to update this base");
            } 

            return ctx.db.base.update({
                where: { id: input.id },
                data: { name: input.name }
            });
        }),

    delete: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
            const base = await ctx.db.base.findUnique({
                where: { id: input.id },
            });

            if (!base || base.createdBy !== ctx.session.user.id) {
                throw new Error("Not authorized to delete this base");
            }

            return ctx.db.base.delete({
                where: { id: input.id },
            });
        })
});
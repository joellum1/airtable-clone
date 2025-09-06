"use client";

import { api } from "@/trpc/react";

export interface BaseType {
    id: string;
    name: string;
    createdBy: string,
    lastOpened: Date
}

export const useBases = () => {
    const { data: bases = [], isLoading } = api.base.getAll.useQuery();

    return { bases, loading: isLoading }
}
import { useState, useEffect } from "react";

interface BaseType {
    id: string;
    name: string;
}

export const useBases = () => {
    const [bases, setBases] = useState<BaseType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBases = async () => {
            try {
                const res = await fetch("api/bases");
                if (!res.ok) throw new Error("Failed to fetch bases");

                const data = await res.json();
                setBases(data as BaseType[]);
            } catch (err) {
                const msg = err instanceof Error ? err.message : "Failed to fetch bases";
                window.alert(msg);
            } finally {
                setLoading(false);
            }
        };

        void fetchBases();
    }, []);

    return { bases, loading }
}

export { type BaseType };
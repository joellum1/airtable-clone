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

                const data: BaseType[] = await res.json();
                setBases(data);
            } catch (err) {
                window.alert(err);
            } finally {
                setLoading(false);
            }
        };

        void fetchBases();
    }, []);

    return { bases, loading }
}

export { type BaseType };
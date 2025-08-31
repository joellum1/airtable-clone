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
                const data: BaseType[] = await res.json();
                setBases(data);
            } catch (err: any) {
                window.alert(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBases();
    }, []);

    return { bases, loading }
}

export { type BaseType };
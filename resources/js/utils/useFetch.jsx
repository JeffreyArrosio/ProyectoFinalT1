import { useCallback, useEffect, useState } from "react";

export const useFetch = (url, options = {}) => {
    const [dataRecive, setDataRecive] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch(url,options);
            const data = await res.json();
            setDataRecive(data);
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, []);

    return { dataRecive, loading, error };
};

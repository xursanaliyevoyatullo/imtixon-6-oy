import { useState, useEffect } from "react"

export function useFetch(url, method = "GET") {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);



    useEffect(() => {
        const getData = async () => {
            setIsPending(true);
            try {
                const req = await fetch(url);
                if (!req.ok) {
                    throw new Error(req.statusText);
                }
                const data = await req.json();
                setIsPending(false);
                setData(data);
                setError(null);
            } catch (error) {
                setIsPending(false);
                setData(data);
                setError(error.message)
            }
        };


        getData()

    }, [url]);
    return { data, isPending, error }
}
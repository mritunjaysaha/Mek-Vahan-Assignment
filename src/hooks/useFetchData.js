import { useState, useEffect } from "react";
import axios from "axios";
export default function useFetchData(url, options) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await axios
                .post(url, options)
                .then((res) => {
                    setResponse(res.data.status);
                })
                .catch((err) => {
                    setError(true);
                });
        };

        fetchData();
    }, [options, url]);
    return { response, error };
}

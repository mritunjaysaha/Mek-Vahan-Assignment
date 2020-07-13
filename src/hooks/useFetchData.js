import { useState, useEffect } from "react";
import axios from "axios";
export default function useFetchData(url, options) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            console.log("fetchdata");

            await axios
                .post(url, options)
                .then((res) => {
                    console.log(res);
                    console.log("data", res.data.status);
                    setResponse(res.data.status);
                })
                .catch((err) => {
                    console.log("err", err);
                    setError(true);
                });
        };

        fetchData();
    }, [options, url]);
    return { response, error };
}

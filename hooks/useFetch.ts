import { useEffect, useState } from "react";


interface Options {
  method?: string;
  headers?: { [key: string]: string };
  body?: string;
}
export default function useFetch(url:string, options: Options = {}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);
    setData(null);
    setError(null);

    fetch(url, { signal, ...options })
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setError(err);
            setLoading(false);
            console.error(err);
          }
        }
      });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url, options]); // Include options in dependency array

  return { loading, data, error };
}

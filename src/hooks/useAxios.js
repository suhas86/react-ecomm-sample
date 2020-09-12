import React from "react";
import axios from "axios";

const API = "https://fakestoreapi.com";

export default function useAxios(path, method, body) {
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    axios(`${API}${path}`, {
      method,
      ...(body ? { body } : {}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!signal.aborted) {
          setResponse(response.data);
          setLoading(false);
        }
      })
      .catch((error) => console.warn("Something gone wrong", error));

    return () => abortController.abort();
  }, [path, method, body]);
  return { response, loading };
}

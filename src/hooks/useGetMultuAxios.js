import React from "react";
import axios from "axios";

const API = "https://fakestoreapi.com";

export default function useGetMultuAxios(pathArray, method, bodyArray) {
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { current: patharr } = React.useRef(pathArray);
  React.useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    let promiseArray = patharr.map((path) => axios.get(`${API}${path}`));
    axios
      .all(promiseArray)
      .then((response) => {
        if (!signal.aborted) {
          let data = response.map(({ data }) => data);
          setResponse(data);
          setLoading(false);
        }
      })
      .catch((error) => console.warn("Something gone wrong", error));

    return () => abortController.abort();
  }, [patharr]);
  return { response, loading };
}

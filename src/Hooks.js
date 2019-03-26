import { useState, useEffect } from "react";

export const useFetch = (url, initialState) => {
  const [result, setResult] = useState(initialState);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setResult(json);
      });
  }, []);

  return result;
}

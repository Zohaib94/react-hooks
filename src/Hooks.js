import Context from './state/context';
import { useState, useEffect, useContext } from "react";

export function useFetch(url, initialState) {
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

export function useDynamicTransition({ delay, step, length }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // We set index in a callback to get the latest value inside set interval because we are going to
      //push the setinterval callback only once in stack so if we just set value then it will always
      //pick the initial value of imageIndex
      setImageIndex(latestIndex => {
        return (latestIndex + step) % length;
      });
    }, delay);

    // Return a callback that clears the interval, so that the callback does not keep on firing even after gallery has been hidden
    return () => {
      clearInterval(intervalId);
    };
  }, [delay, step]);

  return imageIndex;
}

export function useAppContext() {
  return useContext(Context);
}

import React from "react";
import { useFetch } from "./Hooks";

const Joke = () => {
  const { setup, punchline } = useFetch(
    "https://official-joke-api.appspot.com/jokes/random",
    {}
  );

  return (
    <div>
      <h3>{setup}</h3>
      <p>
        <em>{punchline}</em>
      </p>
    </div>
  );
};

export default Joke;

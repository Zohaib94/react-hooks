import React from "react";
import { useFetch } from "./Hooks";

//Hook must be a function so the `this` keyword inside the function is in context of the hook.

//Arrow functions do not create their own context, that is why all methods inside hook will be
//using arrow notations

function Joke() {
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

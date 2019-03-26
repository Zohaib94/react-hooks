import React, { useState, useEffect } from "react";

const Joke = () => {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setJoke(json);
      });
  }, []);

  const { setup, punchline } = joke;

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

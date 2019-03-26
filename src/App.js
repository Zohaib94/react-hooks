import React, { useState } from "react";
import Joke from "./Joke";

const App = () => {
  const [userQuery, setUserQuery] = useState("");

  const updateUserQuery = event => {
    setUserQuery(event.target.value);
  };

  const searchQuery = () => {
    window.open(`https://www.google.com/search?q=${userQuery}`, "_blank");
  };

  const handleKeypress = event => {
    if (event.target === "Enter") {
      searchQuery();
    }
  };

  return (
    <div className="App">
      <h1>Hello Mr Butt</h1>
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyDown={handleKeypress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr/>
      <Joke/>
    </div>
  );
};

export default App;

import React from "react";
import Story from "./Story";
import { useFetch } from "./Hooks";

//Hook must be a function so the `this` keyword inside the function is in context of the hook.

//Arrow functions do not create their own context, that is why all methods inside hook will be
//using arrow notations

function Stories() {
  const stories = useFetch(
    "https://news-proxy-server.appspot.com/topstories",
    []
  );

  return (
    <div className="Stories">
      {stories.map(story => {
        return <Story key={story.id} storyContent={story} />;
      })}
    </div>
  );
};

export default Stories;

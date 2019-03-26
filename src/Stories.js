import React from "react";
import Story from "./Story";
import { useFetch } from "./Hooks";

const Stories = () => {
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

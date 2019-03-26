import React, { useState, useEffect } from "react";
import Story from './Story';

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("https://news-proxy-server.appspot.com/topstories")
      .then(response => response.json())
      .then(json => {
        setStories(json);
      });
  }, []);

  return (
    <div className="Stories">
      {stories.map(story => {
        return (<Story key={story.id} storyContent={story} />);
      })}
    </div>
  );
};

export default Stories;

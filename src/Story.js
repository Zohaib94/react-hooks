import React from "react";

const Story = (props) => {
  const storyContent = props.storyContent;

  return (
    <div>
      <a href={storyContent.url}>{storyContent.title}</a>
      <div>{storyContent.by} - {new Date(storyContent.time * 1000).toLocaleString()}</div>
    </div>
  );
};

export default Story;

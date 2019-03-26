import React from "react";

//This is a presentational dumb component that is why arrow function notation is OK

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

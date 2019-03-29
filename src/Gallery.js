import React, { useState, useEffect } from 'react';
import Pictures from './data/pictures';

function Gallery() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      // We set index in a callback to get the latest value inside set interval because we are going to
      //push the setinterval callback only once in stack so if we just set value then it will always
      //pick the initial value of imageIndex
      setImageIndex((latestIndex) => {
        return (latestIndex + 1)%Pictures.length
      })
    }, 3000);
  }, [])

  return (
    <div className="Gallery">
      <img src={Pictures[imageIndex].image}/>
    </div>
  );
};

export default Gallery;

import React, { useState, useEffect } from 'react';
import Pictures from './data/pictures';
const DEFAULT_DELAY = 3000;
const DEFAULT_STEP = 1;

function Gallery() {
  const [imageIndex, setImageIndex] = useState(0);
  const [delay, setDelay] = useState(DEFAULT_DELAY);
  const [step, setStep] = useState(DEFAULT_STEP);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // We set index in a callback to get the latest value inside set interval because we are going to
      //push the setinterval callback only once in stack so if we just set value then it will always
      //pick the initial value of imageIndex
      setImageIndex((latestIndex) => {
        return (latestIndex + step)%Pictures.length
      })
    }, delay);

    // Return a callback that clears the interval, so that the callback does not keep on firing even after gallery has been hidden
    return () => {
      clearInterval(intervalId);
    }
  }, [delay, step])

  const updateDelay = event => {
    const updatedDelay = Number(event.target.value) * 1000
    if(updatedDelay > DEFAULT_DELAY) {
      setDelay(updatedDelay)
    }
  }

  const updateStep = event => {
    const updatedStep = Number(event.target.value)
    if(updatedStep > DEFAULT_STEP) {
      setStep(updatedStep)
    }
  }

  return (
    <div className="Gallery">
      <img src={Pictures[imageIndex].image}/>
      <p>
        Update step
        <input
          onChange={updateStep}
        />
      </p>
      <p>
        Update delay
        <input
          onChange={updateDelay}
        />
      </p>
    </div>
  );
};

export default Gallery;

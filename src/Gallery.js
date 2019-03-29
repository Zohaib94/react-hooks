import React, { useState } from 'react';
import Pictures from './data/pictures';
import { useDynamicTransition } from './Hooks';

const DEFAULT_DELAY = 3000;
const DEFAULT_STEP = 1;

function Gallery() {
  const [delay, setDelay] = useState(DEFAULT_DELAY);
  const [step, setStep] = useState(DEFAULT_STEP);
  const imageIndex = useDynamicTransition({ delay, step, length: Pictures.length });

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

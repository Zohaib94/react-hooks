import React, { useState } from 'react';
import Pictures from './data/matrix';
import { useDynamicTransition } from './Hooks';
const DEFAULT_DELAY = 1000;
const DEFAULT_STEP = 1;

function Matrix() {
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
    <div className="Matrix">
      <img src={Pictures[imageIndex]}/>
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

export default Matrix;

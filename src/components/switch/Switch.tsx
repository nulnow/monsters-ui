import React, { useState } from 'react';

export interface ISwitchProps {

}

export const Switch: React.FC<ISwitchProps> = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div role="button" onClick={() => setCounter((value) => (value + 1))}>
      Switch
      {counter}
    </div>
  );
};


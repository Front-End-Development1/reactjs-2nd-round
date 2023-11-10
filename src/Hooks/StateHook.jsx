import React, { useState } from 'react';

function StateHook() {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <h2>Toggle Component using useState Hook</h2>
      <button onClick={toggle}>Toggle</button>

      {isToggled ? (
        <p>The component is toggled ON.</p>
      ) : (
        <p>The component is toggled OFF.</p>
      )}
    </div>
  );
}

export default StateHook;

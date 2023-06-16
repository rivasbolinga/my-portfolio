import React, { useState } from 'react';
import { TbHandStop } from 'react-icons/tb';

const Hello = () => {
  const [hovered, setHovered] = useState(false);

  const hoverIn = () => {
    setHovered(true);
  };

  const hoverOut = () => {
    setHovered(false);
  };

  return (
    <div className="phone-container" onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
      {hovered && <TbHandStop />}
      <p>say</p>
      <span className="say-hello"> hello</span>
    </div>
  );
};

export default Hello;

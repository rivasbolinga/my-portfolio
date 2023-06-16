import React, { useState } from 'react';
import { TbHandStop } from 'react-icons/tb';

const Hello = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="phone-container" onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
      <TbHandStop />
      <p>say</p>
      <span className="say-hello"> hello</span>
    </div>
  );
};

export default Hello;

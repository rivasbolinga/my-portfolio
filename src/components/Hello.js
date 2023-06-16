import React, { useState } from 'react';
import { TbHandStop } from 'react-icons/tb';
import '../styles/hello.scss';

const Hello = () => {
  const [hovered, setHovered] = useState(true);

  const hoverIn = () => {
    setHovered(true);
  };

  const hoverOut = () => {
    setHovered(false);
  };

  return (
    <div
      className="phone-container"
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
    >
      {hovered && <TbHandStop className="hand-icon" />}
      <div className="say-hello-text">
        <p>say</p>
        <span className="say-hello"> hello</span>
      </div>
    </div>
  );
};

export default Hello;

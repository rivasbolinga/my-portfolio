import React, { useContext } from 'react';
import { TbHandStop } from 'react-icons/tb';
import '../styles/hello.scss';
import { HoverContext } from '../context/hover_context';

const Hello = () => {
  const { isHovered, hoverIn, hoverOut } = useContext(HoverContext);

  return (
    <div
      className="phone-container"
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
    >
      {isHovered && <TbHandStop className="hand-icon" />}
      <div className="say-hello-text">
        <p>say</p>
        <span className="say-hello"> hello</span>
      </div>
    </div>
  );
};

export default Hello;

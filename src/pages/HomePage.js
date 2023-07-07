import React, { useRef } from 'react';
import { Hero } from '../components/index';
import '../styles/home.scss';

const HomePage = () => {
  const scrollRef = useRef(null);
  let isScrolling = false;

  const handleScroll = (e) => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      const scrollOffset = e.deltaY > 0 ? 100 : -100;
      scrollRef.current.scrollLeft += scrollOffset;
    }, 100);
  };

  return (
    <div
      className="scroll-container"
      ref={scrollRef}
      onWheel={(e) => handleScroll(e)}
    >
      <div className="scroll-content">
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;

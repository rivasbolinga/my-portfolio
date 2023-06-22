import { useContext } from 'react';
import '../styles/hero.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HoverContext } from '../context/hover_context';

const Hero = () => {
  const { isHovered, hoverIn, hoverOut } = useContext(HoverContext);

  return (
    <section className="hero-section">
      <main className="hero-center">
        <div className={`home-container ${isHovered ? 'section-hovered' : ''}`}>
          <div
            className="link-container"
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            <Link to="/">
              <p className="link-rotate">home</p>
            </Link>
          </div>
          <div className="text-container">
            {isHovered && <h1 className="section-hovered-title">home</h1>}
          </div>
        </div>
        <div className="home-container">
          <div
            className="link-container"
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            <Link to="/about">
              <p className="link-rotate">about</p>
            </Link>
          </div>
          <div className="text-container">
            <h1 className="name-rotate">andrea</h1>
            {isHovered && <h1 className="section-hovered-title">about</h1>}
          </div>
        </div>
        <div className="home-container">
          <div
            className="link-container"
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            <Link to="/works" />
            <p className="link-rotate">works</p>
          </div>
          <div className="text-container">
            <h1 className="surname name-rotate">rivas</h1>
            {isHovered && <h1 className="section-hovered-title">works</h1>}
          </div>
        </div>
        <div className="home-container">
          <div
            className="link-container"
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            <Link to="/contact">
              <p className="link-rotate">contact</p>
            </Link>
          </div>
          <div className="text-container sentence">
            {isHovered && <h1 className="section-hovered-title">contact</h1>}
            <h2>
              Welcome to my world of web wizardry, where design meets code and
              user experience becomes extraordinary – I am your front-end
              developer extraordinaire!
              {' '}
            </h2>
          </div>
        </div>
      </main>
      <div className="scroll-right">
        <p>scroll right</p>
        <AiOutlineArrowRight />
      </div>
    </section>
  );
};

export default Hero;

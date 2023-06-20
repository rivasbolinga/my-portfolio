import '../styles/hero.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="hero-section">
    <main className="hero-center">
      <div className="home-container">
        <div className="link-container">
          <Link to="/">
            <p className="link-rotate">home</p>
          </Link>
        </div>
        <div className="text-container" />
      </div>
      <div className="home-container">
        <div className="link-container">
          <Link to="/about">
            <p className="link-rotate">about</p>
          </Link>
        </div>
        <div className="text-container">
          <h1 className="name-rotate">andrea</h1>
        </div>
      </div>
      <div className="home-container">
        <div className="link-container">
          <Link to="/works" />
          <p className="link-rotate">works</p>
        </div>
        <div className="text-container">
          <h1 className="surname name-rotate">rivas</h1>
        </div>
      </div>
      <div className="home-container">
        <div className="link-container">
          <Link to="/contact">
            <p className="link-rotate">contact</p>
          </Link>
        </div>
        <div className="text-container sentence">
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

export default Hero;

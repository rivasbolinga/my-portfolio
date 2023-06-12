import '../styles/hero.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Hero = () => (
  <section className="hero-section">
    <main>
      <div className="name-container">
        <h1>andrea</h1>
        <h1>rivas</h1>
      </div>
      <div className="text-container">
        <h2>
          Font-end developer. Passionate about creating unforgettable
          experiences
          {' '}
        </h2>
      </div>
    </main>
    <div className="scroll-right">
      <p>scroll right</p>
      <AiOutlineArrowRight />
    </div>
  </section>
);

export default Hero;

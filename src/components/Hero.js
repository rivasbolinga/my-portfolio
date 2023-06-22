import { useContext } from 'react';
import '../styles/hero.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HoverContext } from '../context/hover_context';

const Hero = () => {
  const { links, hoverIn, hoverOut } = useContext(HoverContext);

  const areAllLinksNotHovered = links.every((link) => !link.isHovered);
  return (
    <section className="hero-section">
      <main className="hero-center">
        {links.map((link) => {
          const {
            id, text, url, content, isHovered,
          } = link;

          return (
            <div
              className={`home-container ${isHovered ? 'section-hovered' : ''}`}
              key={id}
            >
              <div
                className="link-container"
                onMouseEnter={() => hoverIn(id)}
                onMouseLeave={() => hoverOut(id)}
              >
                <Link to={url}>
                  <p className="link-rotate">{text}</p>
                </Link>
              </div>
              <div className="text-container">
                {isHovered ? (
                  <h1 className="section-hovered-title">{text}</h1>
                ) : (
                  <h1 className="name-rotate">{content}</h1>
                )}
              </div>
            </div>
          );
        })}
      </main>
      {areAllLinksNotHovered && (
        <div className="scroll-right">
          <p>scroll right</p>
          <AiOutlineArrowRight />
        </div>
      )}
    </section>
  );
};
export default Hero;

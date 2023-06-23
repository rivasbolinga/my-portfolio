import { useContext } from 'react';
import '../styles/hero.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HoverContext } from '../context/hover_context';

const Hero = () => {
  const { links, hoverInId, hoverOutId } = useContext(HoverContext);

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
                onMouseEnter={() => hoverInId(id)}
                onMouseLeave={() => hoverOutId(id)}
              >
                <Link to={url}>
                  <p className={`link-rotate ${isHovered ? 'link-white' : ''}`}>
                    {text}
                  </p>
                </Link>
              </div>
              <div className="text-container">
                {isHovered ? (
                  <h1 className="section-hovered-title">{text}</h1>
                ) : (
                  <h1 className={`name-container ${text}`}>{content}</h1>
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

import me2 from '../assets/me2.jpeg';

const AboutSlide = () => (
  <section>
    <div className="introduction-container">
      <h1>about me</h1>
      <h3>Hello world!</h3>
      <h2>I am Andrea Rivas</h2>
    </div>
    <div className="image container">
      <img className="image-about-slide" href={me2} alt="me" />
    </div>
  </section>
);

export default AboutSlide;

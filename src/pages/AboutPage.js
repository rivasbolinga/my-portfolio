import '../styles/about.scss';
import me from '../assets/me.png';
import { skills } from '../utils/data';

const AboutPage = () => (
  <section className="about-section">
    <div className="name-header">
      <h1>
        <span className="name-surname">Andrea Rivas</span>
      </h1>
    </div>
    <div className="image-container">
      <img src={me} className="images" alt="me" />
    </div>
    <div className="about-text-container">
      <h2>Hello world!</h2>
      <p>
        I am currently studying Full-Stack development at Microverse, a remote
        software development program that uses pair programming and project
        building to teach software development.
      </p>
      <p>
        I am passionate about software engineering, and also about nature and
        conservation. So I would love to bring the two together and dedicate my
        future career to creating software to help combat Climate Change.
      </p>
      <p>
        I have become passionate about web development in the last few years.
        Thanks to the Microverse program and a lot of hard work, I can now build
        any kind of websites from scratch.
        {' '}
      </p>
      <p>
        Immerse myself into the tech industry was probably the best decision I
        ever took. Programming gives me the possibility to challenge myself
        every day, solve new problems, and even develop communication and
        collaboration skills managing a group project.
      </p>
    </div>
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, items]) => {
          <div className="skill-container" key={category}>
            <h2>{category}</h2>
            <ul>
              {
            items.map((item) => (
              <li key={item}>{item}</li>
            ))
}
            </ul>
          </div>;
        })}
      </div>
    </div>
  </section>
);

export default AboutPage;

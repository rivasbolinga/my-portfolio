import React from 'react';
import { projects } from '../utils/data';
import SliderContainer from './SliderContaienr';

const Sliders = () => (
  <section className="sliders-section">

    {projects.map((project) => (
      <div
        key={project.id}
      >
        <SliderContainer />
      </div>
    ))}
  </section>
);

export default Sliders;

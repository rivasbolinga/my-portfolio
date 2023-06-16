import React, { useState, useRef } from 'react'
import { projects } from '../utils/data'
import SliderContainer from './SliderContainer'

const Sliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)
  const slideWidth = 100

  const handlePreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleNextSlide = () => {
    if (currentSlide < projects.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handleDragStart = (e) => {
    e.preventDefault()
  }

  const handleDrag = (e) => {
    const container = sliderRef.current
    const containerWidth = container.offsetWidth
    const dragDistance = e.clientX - container.offsetLeft
    const draggedSlides = Math.round(dragDistance / slideWidth)

    container.style.transition = 'none'
    container.style.transform = `translateX(-${draggedSlides * slideWidth}px)`
  }

  const handleDragEnd = (e) => {
    const container = sliderRef.current
    const containerWidth = container.offsetWidth
    const dragDistance = e.clientX - container.offsetLeft
    const draggedSlides = Math.round(dragDistance / slideWidth)

    container.style.transition = 'transform 0.3s ease-out'
    container.style.transform = `translateX(-${draggedSlides * slideWidth}px)`

    setCurrentSlide(draggedSlides)
  }

  return (
    <section className="sliders-section">
      <div
        className="sliders-container"
        ref={sliderRef}
        style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDrag}
        onTouchEnd={handleDragEnd}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <SliderContainer />
          </div>
        ))}
      </div>
      <button className="previous-button" onClick={handlePreviousSlide}>
        Previous
      </button>
      <button className="next-button" onClick={handleNextSlide}>
        Next
      </button>
    </section>
  )
}

export default Sliders


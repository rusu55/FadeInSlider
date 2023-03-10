import React, {useEffect, useState} from 'react'

import {carousel} from '../data/data';

const Carousel = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = carousel.length;
  let intervalTime = 8000;
  let slideInterval;
  
  useEffect(()=> {setCurrentSlide(0)}, []);
  useEffect(() =>{
        auto();
        return () => clearInterval(slideInterval)
  }, [currentSlide])

  const auto = () =>{
        slideInterval = setInterval(nextSlide, intervalTime);
  }

  const nextSlide = () =>{
    setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1);
  }
  
  return (
    <div className="slider">
        {carousel.map((slide,index)=>(
            <div className={index === currentSlide ? 'slide-item current' : 'slide-item'} id={index === currentSlide -1 ? 'close' : ''}>
                <div className="item">
                    <h2>{slide.title}</h2>
                    <p>{slide.text}</p>
                </div>
                <img src={slide.image} alt="" />
            </div>
        ))}        
    </div>
  )
}

export default Carousel
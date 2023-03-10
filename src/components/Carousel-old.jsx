import React from 'react'

import {carousel} from '../data/data';

const Carousel = () => {
  return (
    <div className="slider">
        <div className="slide-item">
            <div className="item">
                <h2>Slide 1</h2>
                <p>Lorem ipsum.....</p>                
            </div>
            <img src={carousel[0].image} alt="" />         
        </div> 
        <div className="slide-item">
            <div className="item">
                <h2>Slide 2</h2>
                <p>Lorem ipsum.....</p>                
            </div>
            <img src={carousel[1].image} alt="" />         
        </div>    
        <div className="slide-item">
            <div className="item">
                <h2>Slide 3</h2>
                <p>Lorem ipsum.....</p>                
            </div>
            <img src={carousel[2].image} alt="" />         
        </div> 
        <div className="slide-item">
            <div className="item">
                <h2>Slide 4</h2>
                <p>Lorem ipsum.....</p>                
            </div>
            <img src={carousel[3].image} alt="" />         
        </div>
        <div className="slide-item">
            <div className="item">
                <h2>Slide 5</h2>
                <p>Lorem ipsum.....</p>                
            </div>
            <img src={carousel[3].image} alt="" />         
        </div>      
    </div>
  )
}

export default Carousel
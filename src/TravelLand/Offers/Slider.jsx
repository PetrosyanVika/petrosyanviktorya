

import React, { useState } from "react";
import Slider from "react-slick";
import { cards } from "./cards";

function SimpleSlider() {
    const [card, setcard] = useState(cards);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
   return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="Cards">
       {
         card.map((elm)=>{
           return(
           <div key={elm.id}>
            <img src={elm.image} alt="" />
            <h6>{elm.title}</h6>
            <p>{elm.location}</p>
            <i>{elm.time}</i>
            <b>{elm.price}</b>
          </div>
         )
        })
       }
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;





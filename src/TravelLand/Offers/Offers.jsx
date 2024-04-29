import React from "react";
import "./Offers.scss";
import Slider from "react-slick"; 
import SimpleSlider from "./Slider";

export default function Offers() {
  return (
    <div className="Offers">
      <h1>Special Offers</h1>
      <p>
        With the New Year comes a refreshing sense of wanderlust, a longing in
        our souls to escape to warmer climates:
      </p>
      <div>
        <SimpleSlider />
      </div>
    </div>
  );
}

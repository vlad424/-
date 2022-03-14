import React from "react";
import data_slider from "./slider_data";

import "./slider.css";

const Slider: React.FC = () => {
  return (
    <div className="header_slider">
      {data_slider.map((obj) => {
        return (
          <div className="slide">
            <img src={obj.img} alt="ups..." />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;

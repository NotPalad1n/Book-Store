import React from 'react'

import "../../styles/Home/WhyChoseUs.css"

import Library from "../../assets/library.png"
import Delivery from "../../assets/delivery.png";
import Quality from "../../assets/quality.png";

const WhyChoseUs = () => {
  return (
    <div className="whyChoseUs">
      <h1 className="title">Why Chose Us</h1>
      <div className="cards">
        <div className="card">
          <div className="bar"></div>
          <img src={Library} alt="" />
          <h1>Huge Library</h1>
        </div>
        <div className="card">
          <div className="bar"></div>
          <img src={Delivery} alt="" />
          <h1>Fast Delivery</h1>
        </div>
        <div className="card">
          <div className="bar"></div>
          <img src={Quality} alt="" />
          <h1>High Quality</h1>
        </div>
      </div>
    </div>
  );
}

export default WhyChoseUs
import React from 'react'

import "../../styles/Home/Banner.css"

import Cover from "/BannerBooks/book1.png"
import Search from "../../assets/search.png"

const Banner = () => {
  return (
    <div className="banner">
      <div className="text">
        <h1 className="title">
          Get your new book with the <span>best</span> price
        </h1>
        <p>
          From applied literiture to educational resources, we have a lot of
          textbooks to offer you. We provide only the best books for purchase.
        </p>
        <div className="search">
          <div className='input'>
            <img src={Search} alt="" />
            <input type="text" placeholder="Search for a book" />
          </div>
          <a href="">Search</a>
        </div>
      </div>
      <div className="image">
        <div className="cover">
          <img src={Cover} alt="" />
          <p className="title">The mind of a leader</p>
          <p className="author">Kevin Anderson</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Banner
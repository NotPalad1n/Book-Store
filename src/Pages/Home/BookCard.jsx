import React from 'react'

import "../../styles/Home/BookCard.css"

const BookCard = (props) => {
  return (
    <div className="bookCard">
      <img src={"./square/" + props.book.img + ".jpg"} alt="" />
      <p className="name">{props.book.name}</p>
      <p>{props.book.author}</p>
    </div>
  );
}

export default BookCard
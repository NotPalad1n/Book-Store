import React from "react";
import BookCard from "./BookCard";

import "../../styles/Home/BestSeller.css";

import bestSellerBooks from "../../data/bestSellerBooks";

const BestSeller = () => {
  const [books, setBooks] = React.useState(bestSellerBooks);

  const cards = books.map((book) => <BookCard key={book.id} book={book} />);

  return (
    <div className="bestseller">
      <h1 className="title">Best Seller Books</h1>
      <div className="cards">{cards}</div>
    </div>
  );
};

export default BestSeller;

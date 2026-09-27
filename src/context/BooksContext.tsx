'use client'
import React, { createContext, ReactNode, useState } from "react";
// Creating a context or say: Create a w.app group
export const BooksContext = createContext({});

const BooksProvider = ({ children }:{children: ReactNode}) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Value, egula BooksContext.Provider e pass korbo
  const sharedData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;

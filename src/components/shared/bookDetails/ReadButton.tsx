
"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";

interface IReadButtonProps {
  book: IBook;
}

const ReadButton = ({ book }: IReadButtonProps) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  const handleReadBook = () => {
    setReadBooks([...readBooks, book]);

    console.log("Triggered");
  };

  return (
    <button
      className="
        flex-1
        rounded-xl
        border
        border-[#876a3e]
        bg-[#4b3b25]
        px-5
        py-3.5
        font-serif
        text-sm
        font-bold
        tracking-wide
        text-white
        shadow-[0_8px_20px_rgba(75,59,37,0.18)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-[#392c1c]
        hover:shadow-[0_12px_25px_rgba(75,59,37,0.25)]
      "
      onClick={handleReadBook}
    >
      Read Now
    </button>
  );
};

export default ReadButton;

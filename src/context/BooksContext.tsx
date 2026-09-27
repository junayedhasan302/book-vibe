// src/context/BooksContext.tsx

"use client";

import React, { createContext, ReactNode, useRef, useState } from "react";
import { IBook } from "@/types/books.type";

interface IBooksContext {
  readBooks: IBook[];
  wishlist: IBook[];

  addToReadBooks: (book: IBook) => void;
  addToWishlist: (book: IBook) => void;

  removeFromReadBooks: (bookId: number) => void;
  removeFromWishlist: (bookId: number) => void;

  showToast: (message: string) => void;
}

export const BooksContext = createContext<IBooksContext | undefined>(undefined);

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);
  const [toast, setToast] = useState("");

  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const addToReadBooks = (book: IBook) => {
    setReadBooks((prevBooks) => {
      const alreadyExists = prevBooks.some(
        (item) => item.bookId === book.bookId,
      );

      if (alreadyExists) {
        showToast("This book is already in your Read List!");
        return prevBooks;
      }

      showToast("Book added to Read List!");

      return [...prevBooks, book];
    });
  };

  const addToWishlist = (book: IBook) => {
    setWishlist((prevWishlist) => {
      const alreadyExists = prevWishlist.some(
        (item) => item.bookId === book.bookId,
      );

      if (alreadyExists) {
        showToast("This book is already in your Wishlist!");
        return prevWishlist;
      }

      showToast("Book added to Wishlist!");

      return [...prevWishlist, book];
    });
  };

  const removeFromReadBooks = (bookId: number) => {
    setReadBooks((prevBooks) =>
      prevBooks.filter((book) => book.bookId !== bookId),
    );

    showToast("Book removed from Read List!");
  };

  const removeFromWishlist = (bookId: number) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((book) => book.bookId !== bookId),
    );

    showToast("Book removed from Wishlist!");
  };

  const showToast = (message: string) => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    setToast(message);

    toastTimerRef.current = setTimeout(() => {
      setToast("");
      toastTimerRef.current = null;
    }, 2500);
  };

  const sharedData: IBooksContext = {
    readBooks,
    wishlist,
    addToReadBooks,
    addToWishlist,
    removeFromReadBooks,
    removeFromWishlist,
    showToast,
  };

  return (
    <BooksContext.Provider value={sharedData}>
      {children}

      {toast && (
        <div className="toast toast-top toast-center z-[999] mt-20">
          <div className="alert alert-success rounded-xl shadow-xl">
            <span>{toast}</span>
          </div>
        </div>
      )}
    </BooksContext.Provider>
  );
};

export default BooksProvider;

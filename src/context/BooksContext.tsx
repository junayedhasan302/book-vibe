"use client";

import React, { createContext, ReactNode, useRef, useState } from "react";
import { IBook } from "@/types/books.type";

type ToastType = "success" | "warning" | "error";

interface IToast {
  message: string;
  type: ToastType;
}

interface IBooksContext {
  readBooks: IBook[];
  wishlist: IBook[];
  completedWishlistIds: number[];

  addToReadBooks: (book: IBook) => void;
  addToWishlist: (book: IBook) => void;
  markWishlistBookAsRead: (book: IBook) => void;

  removeFromReadBooks: (bookId: number) => void;
  removeFromWishlist: (bookId: number) => void;

  showToast: (message: string, type?: ToastType) => void;
}

export const BooksContext = createContext<IBooksContext | undefined>(undefined);

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);
  const [completedWishlistIds, setCompletedWishlistIds] = useState<number[]>([]);
  const [toast, setToast] = useState<IToast | null>(null);

  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const addToReadBooks = (book: IBook) => {
    setReadBooks((prevBooks) => {
      const alreadyExists = prevBooks.some(
        (item) => item.bookId === book.bookId,
      );

      if (alreadyExists) {
        showToast("This book is already in your Read List!", "warning");
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
        showToast("Book is already in your Wishlist!", "warning");
        return prevWishlist;
      }

      showToast("Book added to Wishlist!");

      return [...prevWishlist, book];
    });
  };

  const markWishlistBookAsRead = (book: IBook) => {
    if (completedWishlistIds.includes(book.bookId)) {
      showToast(
        "This book is already marked as read. You can't mark it again!",
        "warning",
      );
      return;
    }

    addToReadBooks(book);

    setCompletedWishlistIds((prevIds) => {
      if (prevIds.includes(book.bookId)) {
        return prevIds;
      }

      return [...prevIds, book.bookId];
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

    setCompletedWishlistIds((prevIds) =>
      prevIds.filter((id) => id !== bookId),
    );

    showToast("Book removed from Wishlist!");
  };

  const showToast = (message: string, type: ToastType = "success") => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    setToast({ message, type });

    toastTimerRef.current = setTimeout(() => {
      setToast(null);
      toastTimerRef.current = null;
    }, 2500);
  };

  const sharedData: IBooksContext = {
    readBooks,
    wishlist,
    completedWishlistIds,
    addToReadBooks,
    addToWishlist,
    markWishlistBookAsRead,
    removeFromReadBooks,
    removeFromWishlist,
    showToast,
  };


  const toastAlertClass =
    toast?.type === "warning"
      ? "alert-warning"
      : toast?.type === "error"
        ? "alert-error"
        : "alert-success";

  return (
    <BooksContext.Provider value={sharedData}>
      {children}

      {toast && (
        <div className="toast toast-top toast-center z-[999] mt-20">
          <div className={`alert ${toastAlertClass} rounded-xl shadow-xl`}>
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
// src/app/wishlist/page.tsx

"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { BooksContext } from "@/context/BooksContext";

const Wishlist = () => {
  const context = useContext(BooksContext);

  if (!context) {
    return null;
  }

  const { wishlist, readBooks, addToReadBooks, removeFromWishlist } = context;

  const handleMarkAsRead = (bookId: number) => {
    const book = wishlist.find((item) => item.bookId === bookId);

    if (!book) {
      return;
    }

    const alreadyRead = readBooks.some((item) => item.bookId === book.bookId);

    if (!alreadyRead) {
      addToReadBooks(book);
    }

    removeFromWishlist(book.bookId);
  };

  return (
    <main className="min-h-screen bg-[#f5f1e8] px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9a8054]">
            Your Collection
          </p>

          <h1 className="mt-2 font-serif text-4xl font-bold text-[#29251f]">
            My Wishlist
          </h1>

          <p className="mt-2 text-sm text-[#766f63]">
            Books you want to read later.
          </p>
        </div>

        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-[#29251f]">
            Wishlist Books
          </h2>

          <span className="rounded-full bg-[#f4ead8] px-3 py-1 text-sm font-semibold text-[#806331]">
            {wishlist.length} Books
          </span>
        </div>

        {wishlist.length === 0 ? (
          <div className="rounded-2xl border border-[#ddd5c8] bg-[#fbfaf6] px-6 py-16 text-center">
            <p className="font-serif text-2xl font-bold text-[#393229]">
              Your wishlist is empty
            </p>

            <p className="mt-2 text-sm text-[#81786b]">
              Open a book and add it to your wishlist.
            </p>

            <Link
              href="/books"
              className="mt-6 inline-block rounded-xl bg-[#4b3b25] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#392c1c]"
            >
              Explore Books
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {wishlist.map((book) => (
              <div
                key={book.bookId}
                className="
                  group
                  flex
                  flex-col
                  gap-5
                  rounded-2xl
                  border
                  border-[#ddd5c8]
                  bg-[#fbfaf6]
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  sm:flex-row
                  sm:items-center
                "
              >
                <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl bg-[#eee8dc] sm:h-28 sm:w-20">
                  <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    unoptimized
                    sizes="80px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#f4ead8] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#806331]">
                      {book.category}
                    </span>

                    <span className="text-sm font-semibold text-[#806331]">
                      ★ {book.rating}
                    </span>

                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      Wishlist
                    </span>
                  </div>

                  <h3 className="mt-2 truncate font-serif text-xl font-bold text-[#29251f]">
                    {book.bookName}
                  </h3>

                  <p className="mt-1 text-sm text-[#81786b]">
                    by {book.author}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-4 text-xs text-[#766f63]">
                    <span>{book.totalPages} Pages</span>
                    <span>{book.yearOfPublishing}</span>
                    <span>{book.publisher}</span>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-2 sm:w-auto sm:min-w-[150px]">
                  <Link
                    href={`/books/${book.bookId}`}
                    className="rounded-xl border border-[#876a3e] bg-[#4b3b25] px-4 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-[#392c1c]"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => handleMarkAsRead(book.bookId)}
                    className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-100 hover:shadow-md"
                  >
                    Mark as Read
                  </button>

                  <button
                    onClick={() => removeFromWishlist(book.bookId)}
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition-all duration-300 hover:bg-red-100"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Wishlist;

"use client";

import { BooksContext } from "@/context/BooksContext";
import Image from "next/image";
import React, { useContext } from "react";

const ListedBooks = () => {
  const { readBooks } = useContext(BooksContext);

  console.log(readBooks, "readBooks");

  return (
    <main className="min-h-screen bg-[#f5f1e8] px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9a8054]">
            Your Collection
          </p>

          <h1 className="mt-2 font-serif text-4xl font-bold text-[#29251f]">
            Listed Books
          </h1>

          <p className="mt-2 text-sm text-[#766f63]">
            Books you have marked as read.
          </p>
        </div>

        {/* Books */}
        {readBooks.length === 0 ? (
          <div className="rounded-2xl border border-[#ddd5c8] bg-[#fbfaf6] px-6 py-16 text-center">
            <p className="font-serif text-2xl font-bold text-[#393229]">
              No books yet
            </p>

            <p className="mt-2 text-sm text-[#81786b]">
              Start reading and your books will appear here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {readBooks.map((book) => (
              <div
                key={book.bookId}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#ddd5c8]
                  bg-[#fbfaf6]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-[#eee8dc]">
                  <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#f4ead8] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#806331]">
                      {book.category}
                    </span>

                    <span className="text-sm font-semibold text-[#806331]">
                      ★ {book.rating}
                    </span>
                  </div>

                  <h2 className="mt-4 font-serif text-xl font-bold text-[#29251f]">
                    {book.bookName}
                  </h2>

                  <p className="mt-1 text-sm text-[#81786b]">
                    {book.author}
                  </p>

                  <div className="my-4 h-px bg-[#e4ddd1]" />

                  <div className="flex items-center justify-between text-xs text-[#766f63]">
                    <span>{book.totalPages} Pages</span>

                    <span>{book.yearOfPublishing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default ListedBooks;
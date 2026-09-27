
import ReadButton from "@/components/shared/bookDetails/ReadButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{ id: string }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await res.json();
  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  );

  if (!book) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f1e8] px-4">
        <div className="text-center">
          <p className="font-serif text-3xl font-bold text-[#29251f]">
            Book not found
          </p>

          <p className="mt-2 text-sm text-[#766f63]">
            The book you are looking for could not be found.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f1e8] px-4 py-10 sm:px-6 md:py-16">
      <div className="mx-auto flex max-w-6xl justify-center">
        {/* Main Card */}
        <div
          className="
            relative
            w-full
            max-w-[1100px]
            overflow-hidden
            rounded-[28px]
            border
            border-[#d8d0c1]
            bg-[#fbfaf6]
            shadow-[0_25px_80px_rgba(62,52,38,0.16)]
          "
        >
          {/* Decorative Top Line */}
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#b08a4a] to-transparent" />

          <div className="grid min-h-[650px] grid-cols-1 md:grid-cols-5">
            {/* ================= LEFT : BOOK COVER ================= */}
            <div className="group relative min-h-[500px] overflow-hidden md:col-span-2 md:min-h-full">
              {/* Book Image */}
              <Image
                src={book.image}
                alt={book.bookName}
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 40vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.03]
                "
              />

              {/* Warm Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

              {/* Classic Image Frame */}
              <div className="absolute inset-5 rounded-2xl border border-white/25" />

              {/* Cover Information */}
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#d8b875]" />

                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#e8d4a7]">
                    BookVibe Edition
                  </p>
                </div>

                <h2 className="max-w-md font-serif text-3xl font-bold leading-tight drop-shadow-lg sm:text-4xl">
                  {book.bookName}
                </h2>

                <p className="mt-3 font-serif text-sm italic text-white/75">
                  by {book.author}
                </p>
              </div>
            </div>

            {/* ================= RIGHT : BOOK DETAILS ================= */}
            <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 md:col-span-3 md:px-12 lg:px-14">
              {/* Category + Rating */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span
                  className="
                    rounded-full
                    border
                    border-[#d9c6a0]
                    bg-[#f5eddf]
                    px-4
                    py-1.5
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#806331]
                  "
                >
                  {book.category}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-[#b08a4a]">★</span>

                  <span className="font-serif text-sm font-bold text-[#51483b]">
                    {book.rating}
                  </span>

                  <span className="text-xs text-[#968d80]">
                    Reader Rating
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1
                className="
                  mt-5
                  max-w-2xl
                  font-serif
                  text-3xl
                  font-bold
                  leading-[1.12]
                  text-[#29251f]
                  sm:text-4xl
                  lg:text-[46px]
                "
              >
                {book.bookName}
              </h1>

              {/* Author */}
              <p className="mt-3 text-sm text-[#81786b]">
                Written by{" "}
                <span className="font-semibold text-[#40382e]">
                  {book.author}
                </span>
              </p>

              {/* Divider */}
              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#ddd5c8]" />

                <span className="text-xs text-[#b08a4a]">✦</span>

                <div className="h-px flex-1 bg-[#ddd5c8]" />
              </div>

              {/* About */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9a8054]">
                  The Story
                </p>

                <h3 className="mt-1 font-serif text-xl font-bold text-[#29251f]">
                  About this book
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#696154]">
                  {book.review}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {book.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-[#ddd5c8]
                      bg-[#f8f5ee]
                      px-3
                      py-1
                      text-[11px]
                      font-medium
                      text-[#716858]
                      transition-all
                      duration-200
                      hover:border-[#c5a66d]
                      hover:bg-[#f4ead8]
                      hover:text-[#806331]
                    "
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Book Information */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {/* Pages */}
                <div
                  className="
                    rounded-xl
                    border
                    border-[#e4ddd1]
                    bg-[#f8f5ee]
                    p-3.5
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-white
                    hover:shadow-sm
                  "
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#a19789]">
                    Pages
                  </p>

                  <p className="mt-1 font-serif text-lg font-bold text-[#393229]">
                    {book.totalPages}
                  </p>
                </div>

                {/* Published */}
                <div
                  className="
                    rounded-xl
                    border
                    border-[#e4ddd1]
                    bg-[#f8f5ee]
                    p-3.5
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-white
                    hover:shadow-sm
                  "
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#a19789]">
                    Published
                  </p>

                  <p className="mt-1 font-serif text-lg font-bold text-[#393229]">
                    {book.yearOfPublishing}
                  </p>
                </div>

                {/* Publisher */}
                <div
                  className="
                    rounded-xl
                    border
                    border-[#e4ddd1]
                    bg-[#f8f5ee]
                    p-3.5
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-white
                    hover:shadow-sm
                  "
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#a19789]">
                    Publisher
                  </p>

                  <p className="mt-1 truncate font-serif text-lg font-bold text-[#393229]">
                    {book.publisher}
                  </p>
                </div>

                {/* Book ID */}
                <div
                  className="
                    rounded-xl
                    border
                    border-[#e4ddd1]
                    bg-[#f8f5ee]
                    p-3.5
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-white
                    hover:shadow-sm
                  "
                >
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#a19789]">
                    Book ID
                  </p>

                  <p className="mt-1 font-serif text-lg font-bold text-[#393229]">
                    #{book.bookId}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
               <ReadButton book={book}/>

                <button
                  className="
                    flex-1
                    rounded-xl
                    border
                    border-[#d5c9b8]
                    bg-transparent
                    px-5
                    py-3.5
                    font-serif
                    text-sm
                    font-bold
                    tracking-wide
                    text-[#51483b]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#bda16d]
                    hover:bg-[#f5eee2]
                  "
                >
                  ♡ Add to Wishlist
                </button>
              </div>

              {/* Bottom Quote */}
              <p className="mt-6 text-center font-serif text-xs italic text-[#9a9184]">
                “Every book is a journey waiting to be taken.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetailsPage;


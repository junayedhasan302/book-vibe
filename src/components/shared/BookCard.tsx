import { IBook } from "@/types/books.type";
import Image from "next/image";
import React from "react";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Book Image */}
      <div className="flex h-72 items-center justify-center bg-slate-100 p-5">
        <Image
          src={book.image}
          alt={book.bookName}
          width={300}
          height={400}
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Book Information */}
      <div className="p-5">
        {/* Category & Rating */}
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            {book.category}
          </span>

          <span className="text-sm font-semibold text-yellow-500">
            ⭐ {book.rating}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900">
          {book.bookName}
        </h3>

        {/* Author */}
        <p className="mt-1 text-sm text-slate-500">
          by {book.author}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Review */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
          {book.review}
        </p>

        {/* Details */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 text-sm text-slate-500">
          <span>{book.totalPages} pages</span>
          <span>{book.yearOfPublishing}</span>
        </div>

        {/* Button */}
        <button className="mt-4 w-full rounded-lg bg-green-600 px-4 py-2.5 font-medium text-white transition hover:bg-green-700">
          View Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;
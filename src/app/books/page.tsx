// import React from "react";
// import BookCard from "@/components/shared/BookCard";
// import { IBook } from "@/types/books.type";

// const getBooks = async () => {
//   const res = await fetch("http://localhost:3000/booksData.json");
//   const data = await res.json();
//   return data;
// };

// const Books = async () => {
//   const booksData = await getBooks();

//   return (
//     <section className="container mx-auto px-4 py-16">
//       {/* Section Heading */}
//       <div className="mb-10 text-center">
//         <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
//           Explore All Books
//         </h2>

//         <p className="mt-2 text-slate-500">
//           Find your next favorite book from our collection.
//         </p>
//       </div>

//       {/* Books Grid */}
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {booksData.map((book: IBook) => (
//           <BookCard key={book.bookId} book={book} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Books;





import React from "react";
import { promises as fs } from "fs";
import path from "path";
import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async (): Promise<IBook[]> => {
  const filePath = path.join(process.cwd(), "public", "booksData.json");
  const fileContents = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContents);
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Explore All Books
        </h2>

        <p className="mt-2 text-slate-500">
          Find your next favorite book from our collection.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book: IBook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
import Image from "next/image";
import React from "react";
import logo from "@/assets/book.ico";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#ddd5c8] bg-[#29251f] text-[#f5f1e8]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src={logo}
                alt="Book Vibe Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />

              <span className="ml-2 text-xl font-extrabold tracking-tight">
                Book<span className="text-success">Vibe</span>
              </span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#b9b0a1]">
              Discover your next favorite book and keep your reading journey
              organized.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link
              href="/"
              className="text-[#c9c1b4] transition hover:text-[#d8b875]"
            >
              Home
            </Link>

            <Link
              href="/books"
              className="text-[#c9c1b4] transition hover:text-[#d8b875]"
            >
              Books
            </Link>

            <Link
              href="/listed-books"
              className="text-[#c9c1b4] transition hover:text-[#d8b875]"
            >
              Listed Books
            </Link>

            <Link
              href="/wishlist"
              className="text-[#c9c1b4] transition hover:text-[#d8b875]"
            >
              Wishlist
            </Link>

            <Link
              href="/about"
              className="text-[#c9c1b4] transition hover:text-[#d8b875]"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-[#c9c1b4] transition hover:text-[#d8b875]"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[#51483b] pt-5 text-xs text-[#918879] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BookVibe. All rights reserved.</p>

          <p>
            Designed & developed by{" "}
            <Link
              href="/contact"
              className="font-medium text-[#d8b875] transition hover:text-[#f0d89a]"
            >
              Junayed Hasan
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
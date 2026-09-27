import Image from "next/image";
import React from "react";
import logo from "@/assets/book.ico";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-base-100 shadow-md">
      <div className="navbar container mx-auto mt-4 rounded-2xl px-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-2xl bg-base-100 p-3 shadow-lg"
            >
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/books">Books</Link>
              </li>

              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="ml-2 flex items-center gap-2">
            <Image
              src={logo}
              alt="Book Vibe Logo"
              width={34}
              height={34}
              className="rounded-lg"
            />

            <span className="text-xl font-extrabold tracking-tight">
              Book<span className="text-success">Vibe</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 font-medium">
            <li>
              <Link href="/" className="rounded-xl">
                Home
              </Link>
            </li>

            <li>
              <Link href="/books" className="rounded-xl">
                Books
              </Link>
            </li>

            <li>
              <Link href="/about" className="rounded-xl">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="rounded-xl">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="navbar-end gap-2">
          <button className="btn btn-ghost rounded-xl">Sign In</button>

          <button className="btn btn-success rounded-xl px-5">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

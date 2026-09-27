
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/pngegg.png";

const Banner = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto overflow-hidden rounded-4xl bg-gradient-to-br from-slate-100 via-white to-emerald-50 px-8 py-12 shadow-xl md:px-16 md:py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              📚 Your Next Great Read
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Books to
              <span className="text-emerald-600"> freshen up </span>
              your bookshelf.
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-slate-600">
              Discover amazing books, explore new stories, and build a
              bookshelf that reflects your personality.
            </p>

            <button className="btn btn-success rounded-full px-7 text-white shadow-lg shadow-emerald-200">
              Explore Books →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-emerald-200/40 blur-3xl"></div>

              <Image
                src={heroImage}
                alt="Books"
                className="relative w-full max-w-md object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Banner;


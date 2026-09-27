export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-16 text-[#2f2a24]">
      <section className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            About BookVibe
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Discover books.
            <br />
            Find your next vibe.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            BookVibe is a simple and cozy space for discovering books, exploring
            new stories, and keeping track of the books you want to read.
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="text-3xl">📚</div>

            <h2 className="mt-4 text-xl font-semibold">Discover Books</h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Explore different books, learn about them, and discover stories
              that might become your next favorite.
            </p>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="text-3xl">❤️</div>

            <h2 className="mt-4 text-xl font-semibold">Save Your Favorites</h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Found a book you love? Add it to your collection and keep your
              favorite reads close.
            </p>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="text-3xl">✨</div>

            <h2 className="mt-4 text-xl font-semibold">Build Your List</h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Keep track of the books you want to read and create your own
              personal reading journey.
            </p>
          </div>
        </div>

        {/* Story */}
        <section className="mt-16 rounded-3xl bg-[#2f2a24] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            The Idea
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            A little corner for book lovers.
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-300">
            We created BookVibe with one simple idea: finding and organizing
            books should feel enjoyable. Instead of getting lost in complicated
            interfaces, BookVibe keeps the experience focused on what matters
            most — discovering books and building your own collection.
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-300">
            Whether you are looking for something new to read, saving a book for
            later, or building your reading list, BookVibe gives you a simple
            place to do it.
          </p>
        </section>

        {/* Bottom */}
        <div className="mt-14 text-center">
          <p className="text-2xl font-semibold">
            Your next story might be one click away. 📖
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Explore. Save. Read. Repeat.
          </p>
        </div>
      </section>
    </main>
  );
}

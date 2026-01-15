"use client";

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-10 text-center">
      <button
        onClick={scrollToTop}
        className="mb-6 px-6 py-2 rounded-full border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:opacity-90 transition"
      >
        ↑ Back to Top
      </button>

      <p className="text-sm opacity-70">
        © {new Date().getFullYear()} Dhruvesh Patil. All rights reserved.
      </p>
    </footer>
  );
}

"use client";

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#020617] py-10 text-center">
      <button
        onClick={scrollToTop}
        className="mb-6 px-6 py-2 rounded-full border border-[#38BDF8] text-sm hover:bg-[#38BDF8]/10 transition"
      >
        ↑ Back to Top
      </button>

      <p className="text-sm text-[#9CA3AF]">
        © {new Date().getFullYear()} Dhruvesh Patil. All rights reserved.
      </p>
    </footer>
  );
}

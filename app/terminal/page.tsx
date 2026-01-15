import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terminal | Portfolio",
};

export default function TerminalPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
          Terminal
        </h1>
        <p className="text-center opacity-70 max-w-2xl mx-auto">
          This page is under construction. If you meant to show an interactive terminal component here,
          tell me what commands/features you want and I’ll wire it up.
        </p>

        <div className="mt-10 border border-black dark:border-white p-6 md:p-8">
          <p className="font-mono text-sm opacity-80">$ echo "Hello, world"</p>
          <p className="font-mono text-sm mt-2">Hello, world</p>
        </div>
      </section>
    </main>
  );
}

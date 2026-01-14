import Footer from "@/components/Footer";

export default function FooterPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Footer</h1>
        <p className="text-[#9CA3AF] mb-10">
          This page exists so the Navbar can navigate to Footer as a separate route.
        </p>
      </div>
      <Footer />
    </div>
  );
}

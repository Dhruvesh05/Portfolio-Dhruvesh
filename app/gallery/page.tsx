import GallerySection from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white pt-24">
      <GallerySection />
      <Footer />
    </div>
  );
}

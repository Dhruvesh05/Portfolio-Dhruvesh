import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Gallery
      </h2>

      <div className="grid md:grid-cols-4 gap-4 auto-rows-[180px]">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10"
          >
            <Image
              src="/gallery-placeholder.jpg"
              alt="Gallery"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

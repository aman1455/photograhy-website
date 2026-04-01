import Image from "next/image";

const portfolioImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600&h=800&q=80", alt: "Couple hiking in mountains" },
  { id: 2, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&h=800&q=80", alt: "Romantic couple embrace" },
  { id: 3, src: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&h=800&q=80", alt: "Couple kissing with mountain view" },
  { id: 4, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&h=800&q=80", alt: "Couple in forest" },
  { id: 5, src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&h=800&q=80", alt: "Couple by river" },
  { id: 6, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&h=800&q=80", alt: "Couple in garden" },
  { id: 7, src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&h=800&q=80", alt: "Couple on street" },
  { id: 8, src: "https://images.unsplash.com/photo-1522630346382-494b36577ac4?auto=format&fit=crop&w=600&h=800&q=80", alt: "Couple romantic moment" },
];

export default function Portfolio() {
  return (
    <section className="py-20 px-4 bg-white" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Capturing love stories in the Himalayas
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
          {portfolioImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* Optional Video Section */}
        <div className="mt-10 sm:mt-16 text-center px-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
            Watch Our Cinematic Work
          </h3>
          <div className="relative aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg bg-gray-100">
            {/* Replace with actual video embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-4">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-amber-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-600 font-medium text-sm sm:text-base">Video Showreel</p>
                <p className="text-gray-500 text-xs sm:text-sm">(Add YouTube/Vimeo embed here)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Stay() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-premium" id="stay">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-3 sm:mb-4">
            🏨 accommodations
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Stay in Rishikesh — Comfort After Your Shoot
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Relax in carefully selected hotels after your shoot. Experience comfort with stunning mountain views.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hotel Images Gallery */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 auto-rows-fr">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <Image
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&h=600&q=80"
                alt="Luxury hotel room"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold p-4 text-sm">Premium Room</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&h=600&q=80"
                alt="Resort exterior"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold p-4 text-sm">Resort Exterior</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&h=600&q=80"
                alt="Mountain view room"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold p-4 text-sm">Mountain View</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <Image
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&h=600&q=80"
                alt="Spa and lounge"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold p-4 text-sm">Lounge Area</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="lg:pl-4">
            <div className="inline-flex items-center gap-2 text-purple-600 font-semibold mb-4 sm:mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                <path d="M10 4a1 1 0 011 1v4.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V5a1 1 0 011-1z" />
              </svg>
              <span>Why Choose Our Stays?</span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                    <path d="M10 4a1 1 0 011 1v4.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V5a1 1 0 011-1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">
                    Breathtaking Mountain Views
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Wake up to panoramic Himalayan peaks right from your window
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">
                    Premium Comfort
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    3-star+ accommodations with modern amenities and cozy beds
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">
                    Complete Privacy
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Safe, secure environment with total privacy for couples
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">
                    Perfect Location
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Close to shooting spots, cafes, and scenic attractions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Nearby Attractions */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">
            Nearby Attractions in Rishikesh
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { icon: "🌊", name: "Laxman Jhula" },
              { icon: "🙏", name: "Triveni Ghat" },
              { icon: "🏔️", name: "Neelkanth Temple" },
              { icon: "🌿", name: "Rajaji Forest" },
              { icon: "🎵", name: "Beatles Ashram" },
              { icon: "❄️", name: "Dhanaulti" },
            ].map((place) => (
              <div key={place.name} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{place.icon}</div>
                <p className="text-xs sm:text-sm font-semibold text-gray-700">{place.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

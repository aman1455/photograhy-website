import { Package } from "@/types";
import WhatsAppButton from "../WhatsAppButton";

const packages: Package[] = [
  {
    name: "Basic",
    price: 15000,
    duration: "1 Day",
    features: [
      "4-5 Hours Shoot",
      "1 Location (Rishikesh)",
      "50+ Edited Photos",
      "1 Minute Short Video",
      "Digital Delivery",
      "Basic Props Included"
    ]
  },
  {
    name: "Standard",
    price: 22000,
    duration: "2 Days",
    features: [
      "8-10 Hours Shoot",
      "2 Locations (Rishikesh/Dhanaulti)",
      "100+ Edited Photos",
      "3 Minute Cinematic Video",
      "Digital + USB Drive",
      "Premium Props & Outfits",
      "Hotel Stay Included"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: 35000,
    duration: "3 Days",
    features: [
      "Full Day Shoot (3 Days)",
      "Multiple Locations",
      "200+ Edited Photos",
      "5-7 Minute Cinematic Film",
      "Drone Shots Included",
      "All Props & Outfits",
      "Luxury Hotel Stay",
      "Photo Album (20 pages)",
      "Unlimited Revisions"
    ]
  }
];

export default function Packages() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-premium" id="packages">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-3 sm:mb-4">
            💝 Packages
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Choose Your Perfect Package
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Transparent pricing. No hidden charges. All packages include professional photographer, editing, and taxes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 sm:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-5 sm:p-6 md:p-8 shadow-card card-lift transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-to-br from-fuchsia-500 via-purple-600 to-violet-600 text-white ring-4 ring-purple-300 scale-[1.02] md:scale-105 z-10"
                  : "bg-white"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap shadow-lg">
                    ✨ Most Popular
                  </span>
                </div>
              )}

              {/* Package Name */}
              <h3 className={`text-xl sm:text-2xl font-bold mb-1 sm:mb-2 ${pkg.popular ? "text-white" : "text-gray-900"}`}>
                {pkg.name}
              </h3>

              <p className={`text-xs sm:text-sm mb-4 sm:mb-6 ${pkg.popular ? "text-purple-100" : "text-gray-500"}`}>
                {pkg.duration}
              </p>

              {/* Price */}
              <div className="mb-4 sm:mb-6">
                <span className={`text-3xl sm:text-4xl font-bold ${pkg.popular ? "text-white" : "text-gray-900"}`}>
                  ₹{pkg.price.toLocaleString("en-IN")}
                </span>
                {!pkg.popular && (
                  <span className="text-sm text-gray-500 ml-1">/package</span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${pkg.popular ? "bg-white/20" : "bg-green-100"}`}>
                      <svg
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${pkg.popular ? "text-white" : "text-green-600"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className={`text-sm sm:text-base ${pkg.popular ? "text-white" : "text-gray-700"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <WhatsAppButton
                message={`Hi! I want to book the ${pkg.name} package for pre-wedding shoot. Please share more details.`}
                className="w-full justify-center text-sm sm:text-base py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg transition-all duration-300"
              />

              {/* Value proposition */}
              {pkg.popular && (
                <p className="mt-3 text-center text-xs sm:text-sm text-purple-100">
                  Best value package 🎯
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Trust message */}
        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            💳 Flexible payment options available | 🔄 50% advance, rest on shoot day
          </p>
        </div>
      </div>
    </section>
  );
}

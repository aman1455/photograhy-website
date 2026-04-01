import Image from "next/image";
import WhatsAppButton from "../WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-premium">
      {/* Animated background circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-rose-50/40 via-purple-50/20 to-white/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20 sm:py-0">
        {/* Badge */}
        <div className="mb-4 sm:mb-6">
          <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-purple-600 shadow-lg border border-purple-200">
            ✨ Top-Rated Pre-Wedding Photographers in Uttarakhand
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Pre Wedding Shoot in{" "}
          <span className="gradient-text">Rishikesh</span>
          <br className="hidden sm:block" /> with Luxury Stay
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 font-medium leading-relaxed max-w-3xl mx-auto">
          2 Days Shoot + Hotel + <span className="text-purple-600 font-bold">Cinematic Video</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
          <WhatsAppButton
            message="Hi! I'm interested in the pre-wedding package for Rishikesh. Please share details."
            className="w-full max-w-md text-base sm:text-lg py-4 sm:py-5 shadow-premium hover:scale-105 transition-transform duration-300"
          />

          <a
            href="#packages"
            className="text-purple-600 hover:text-purple-700 font-semibold text-base underline decoration-2 underline-offset-4"
          >
            View All Packages →
          </a>
        </div>

        {/* Trust indicators - Redesigned */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {/* Premium Quality */}
          <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="mt-4 text-center">
              <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">Premium Quality</h4>
              <p className="text-xs sm:text-sm text-gray-600">Professional equipment & editing</p>
            </div>
          </div>

          {/* Luxury Hotel Stay */}
          <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                <path d="M10 4a1 1 0 011 1v4.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V5a1 1 0 011-1z" />
              </svg>
            </div>
            <div className="mt-4 text-center">
              <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">Luxury Hotel Stay</h4>
              <p className="text-xs sm:text-sm text-gray-600">Premium accommodations included</p>
            </div>
          </div>

          {/* Cinematic Video */}
          <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="mt-4 text-center">
              <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">Cinematic Video</h4>
              <p className="text-xs sm:text-sm text-gray-600">Professional filmmaking</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.4"/>
        </svg>
      </div>
    </section>
  );
}

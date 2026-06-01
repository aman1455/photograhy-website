"use client";

import WhatsAppButton from "../WhatsAppButton";

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-cta relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center text-white relative z-10">
        {/* Urgency Badge */}
        <div className="mb-4 sm:mb-6 inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-sm font-semibold animate-pulse">
          ⏳ Hurry! Limited Availability
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-6 px-2 leading-tight">
          Your Perfect Pre-Wedding <br className="hidden sm:block" />
          <span className="text-yellow-300">Awaits You</span>
        </h2>

        <p className="text-base sm:text-xl mb-6 sm:mb-10 opacity-95 px-4 leading-relaxed">
          Capture your love story in the majestic Himalayas. <br className="hidden sm:block" />
          Book now and get <span className="font-bold text-yellow-300">10% off</span> on advance booking!
        </p>

        <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 max-w-2xl mx-auto border border-white/20 shadow-2xl">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">5 slots remaining</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">150+ Happy Couples</span>
            </div>
          </div>
        </div>

        <div className="relative inline-block">
          <WhatsAppButton
            message="Hi! I want to book my pre-wedding shoot. Please share availability and details."
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg pulse-glow w-full max-w-md text-base sm:text-xl py-4 sm:py-5"
          />
        </div>

        {/* Lead Capture Form */}
        <div className="mt-10 sm:mt-14 bg-white/15 backdrop-blur-md rounded-2xl p-5 sm:p-8 max-w-xl mx-auto border border-white/20 shadow-2xl text-left">
          <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-5">
            📋 Get a Free Quote
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const name = data.get("name");
              const phone = data.get("phone");
              const date = data.get("date");
              const pkg = data.get("package");
              const msg = `Hi! I want to enquire about a pre-wedding shoot.\nName: ${name}\nPhone: ${phone}\nPreferred Date: ${date}\nPackage Interest: ${pkg}`;
              window.open(`https://wa.me/919286949730?text=${encodeURIComponent(msg)}`, "_blank");
            }}
            className="space-y-3"
          >
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <input
              name="date"
              type="text"
              placeholder="Preferred Shoot Date (e.g. Dec 2026)"
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <select
              name="package"
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <option value="Not sure yet" className="text-gray-900">Package Interest</option>
              <option value="Basic (₹15,000)" className="text-gray-900">Basic — ₹15,000</option>
              <option value="Standard (₹22,000)" className="text-gray-900">Standard — ₹22,000</option>
              <option value="Premium (₹35,000)" className="text-gray-900">Premium — ₹35,000</option>
            </select>
            <button
              type="submit"
              className="w-full py-3 bg-white text-purple-700 font-bold rounded-xl hover:bg-purple-50 transition-colors text-sm sm:text-base"
            >
              Send via WhatsApp →
            </button>
          </form>
        </div>

        <p className="mt-4 sm:mt-6 text-xs sm:text-sm opacity-90 flex flex-col sm:flex-row gap-1 sm:gap-3 justify-center items-center">
          <span className="flex items-center gap-1">
            ⚡ Response within 1 hour
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center gap-1">
            🔒 Your data is safe
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center gap-1">
            📞 Free consultation
          </span>
        </p>
      </div>
    </section>
  );
}

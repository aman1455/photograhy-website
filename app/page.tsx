import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Packages from "./components/Packages/Packages";
import Stay from "./components/Stay/Stay";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen flex-1 flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Packages Section */}
      <Packages />

      {/* Stay Section */}
      <Stay />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Final CTA Section */}
      <CTA />

      {/* Floating WhatsApp Button - Always Visible */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <WhatsAppButton
          message="Hi! I want to book my pre-wedding shoot. Please share details."
          className="bg-green-500 hover:bg-green-600 shadow-2xl animate-float px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base"
        />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 pb-20 sm:pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm sm:text-base mb-2">
            Pre Wedding Shoot in Rishikesh & Dhanaulti
          </p>
          <p className="text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

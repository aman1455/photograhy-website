import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Packages from "./components/Packages/Packages";
import Stay from "./components/Stay/Stay";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen flex-1 flex flex-col">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Packages Section */}
      <Packages />

      {/* Stay Section */}
      <Stay />

      {/* About Section */}
      <About />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

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
        <div className="max-w-6xl mx-auto text-center space-y-2">
          <p className="text-sm sm:text-base font-semibold">
            Rishikesh Pre Wedding Photography
          </p>
          <p className="text-xs sm:text-sm text-gray-400">
            Rishikesh, Uttarakhand, India
          </p>
          <p className="text-xs sm:text-sm text-gray-400">
            📞{" "}
            <a href="tel:+919286949730" className="hover:text-white transition-colors">
              +91 92869 49730
            </a>
          </p>
          <p className="text-xs sm:text-sm text-gray-400">
            📸{" "}
            <a
              href="https://www.instagram.com/rishikeshprewedding"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              @rishikeshprewedding
            </a>
          </p>
          <p className="text-xs sm:text-sm text-gray-500 pt-2">
            © {new Date().getFullYear()} Rishikesh Pre Wedding Photography. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

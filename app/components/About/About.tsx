import Reveal from "../Reveal";
import StaggerGrid from "../StaggerGrid";

export default function About() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-white" id="about">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-3 sm:mb-4">
              👋 About Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Rishikesh&apos;s Trusted Pre-Wedding Photographers
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Based in Rishikesh, Uttarakhand — we specialise in cinematic pre-wedding photography across the Himalayas.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Stats */}
          <StaggerGrid className="space-y-6">
            <div
              style={{ '--stagger': 0 } as React.CSSProperties}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl">
                📸
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">5+ Years in Rishikesh</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We know every golden-hour spot — from Laxman Jhula and Triveni Ghat to the forests of Rajaji and the meadows of Dhanaulti.
                </p>
              </div>
            </div>

            <div
              style={{ '--stagger': 1 } as React.CSSProperties}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-2xl">
                💑
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">150+ Couples Photographed</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Couples from Delhi, Mumbai, Bangalore and across India trust us to capture their love story in the Himalayas.
                </p>
              </div>
            </div>

            <div
              style={{ '--stagger': 2 } as React.CSSProperties}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-2xl">
                🎬
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Cinematic Storytelling</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We don&apos;t just take photos — we craft a visual story with professional editing, drone shots, and cinematic video.
                </p>
              </div>
            </div>

            <div
              style={{ '--stagger': 3 } as React.CSSProperties}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-2xl">
                🏨
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Stay Included — Hassle Free</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  We handle your hotel stay in Rishikesh so you can focus entirely on enjoying your shoot.
                </p>
              </div>
            </div>
          </StaggerGrid>

          {/* Quote card */}
          <Reveal delay={150} animation="scale-in">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg border border-purple-100">
            <svg className="w-10 h-10 text-purple-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic mb-6">
              &ldquo;Rishikesh is magical — the Ganges, the mountains, the forests. Every frame here tells a story. We&apos;ve spent years learning its light, its seasons, and its hidden gems so your photos look like nothing else.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg">
                R
              </div>
              <div>
                <p className="font-bold text-gray-900">Your Photographer</p>
                <p className="text-sm text-purple-600">Rishikesh, Uttarakhand</p>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

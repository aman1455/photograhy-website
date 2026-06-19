import { Testimonial } from "@/types";
import Reveal from "../Reveal";
import StaggerGrid from "../StaggerGrid";

const testimonials: Testimonial[] = [
  {
    name: "Priya & Rahul",
    text: "Amazing experience! The team captured our love story perfectly. The hotel was beautiful and the cinematic video gave us goosebumps. Highly recommended!",
    location: "Delhi"
  },
  {
    name: "Ananya & Vikram",
    text: "Best pre-wedding shoot ever! Rishikesh location was stunning. They took care of everything - shoot, stay, and video. Worth every rupee.",
    location: "Mumbai"
  },
  {
    name: "Meera & Arjun",
    text: "Professional, creative, and so friendly. The photos turned out beautiful. The stay was comfortable and the whole package felt like a mini-honeymoon!",
    location: "Bangalore"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-premium" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-3 sm:mb-4">
              💬 testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Loved by Couples Across India
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Don&apos;t just take our word for it. Here&apos;s what newlyweds say about their experience.
            </p>
          </div>
        </Reveal>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{ '--stagger': index } as React.CSSProperties}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 card-lift relative overflow-hidden group"
            >
              {/* Decorative gradient top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-600"></div>

              {/* Quote Icon */}
              <div className="mb-3 sm:mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-200 group-hover:text-purple-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author with avatar placeholder */}
              <div className="flex items-center gap-3 border-t pt-3 sm:pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                  {testimonial.location && (
                    <p className="text-xs sm:text-sm text-purple-600 font-medium">
                      {testimonial.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </StaggerGrid>

        {/* Social Proof */}
        <Reveal delay={100}>
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-4 sm:gap-8 bg-white/60 backdrop-blur-sm px-6 py-4 sm:px-8 sm:py-6 rounded-2xl shadow-sm">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-purple-600">150+</p>
              <p className="text-xs sm:text-sm text-gray-600">Happy Couples</p>
            </div>
            <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-transparent via-purple-300 to-transparent"></div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-purple-600">4.9</p>
              <p className="text-xs sm:text-sm text-gray-600">Average Rating</p>
            </div>
            <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-transparent via-purple-300 to-transparent"></div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-purple-600">5+</p>
              <p className="text-xs sm:text-sm text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

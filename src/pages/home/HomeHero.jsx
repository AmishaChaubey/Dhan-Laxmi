import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const images = ["/banner-img/h1.png", "/banner-img/h2.png"];

export default function WelcomeSection() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Container remains full screen
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[index]})` }}
      />
      
      {/* Overlay - Gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      {/* Content - Left aligned with responsive padding */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mt-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white mb-2 sm:mb-3 md:mb-5 leading-tight">
              Dignified. Compassionate.
              <span className="text-gray-300 block mt-2 sm:mt-3 md:mt-4">24/7 Funeral Services</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-7 md:mb-8 leading-relaxed max-w-2xl">
              In times of loss, we provide respectful and professional funeral services. 
              Our team is available around the clock to support your family with care and dignity.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/about" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-[#1e4d83] text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-700 transition duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Know More
                </button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-[#a81514] text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-red-600 transition duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-300 ${
              idx === index 
                ? "bg-white w-6 sm:w-7 md:w-8 shadow-lg" 
                : "bg-white/50 w-2 sm:w-2.5 md:w-3 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
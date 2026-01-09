import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  
  const testimonials = [
    {
      name: "Suresh Verma",
      text: "Dhanlaxmi Ambulance Service provided a fast and reliable emergency ambulance when we needed it the most. The medical staff was professional, caring, and well-trained. Highly recommended for emergency medical transport.",
      rating: 5,
      role: "Patient Attendant"
    },
    {
      name: "Neha Gupta",
      text: "We booked an ambulance for a critical hospital transfer, and the response time was excellent. Clean ambulance, proper medical equipment, and a very supportive team. Truly a dependable ambulance service.",
      rating: 5,
      role: "Family Member"
    },
    {
      name: "Mohit Khan",
      text: "One of the best ambulance services in Delhi NCR. The ICU ambulance was fully equipped, and the paramedics handled the patient with great care and professionalism.",
      rating: 5,
      role: "Client"
    },
    {
      name: "Ritika Malhotra",
      text: "Dhanlaxmi Ambulance ensured a safe and smooth patient transfer to the hospital. Their 24/7 ambulance availability and quick response make them extremely reliable.",
      rating: 5,
      role: "Patient Relative"
    },
    {
      name: "Dr. Anil Mehra",
      text: "A well-organized ambulance service with trained paramedics and modern medical equipment. Dhanlaxmi Ambulance maintains high standards of patient safety and hygiene.",
      rating: 5,
      role: "Medical Professional"
    },
    {
      name: "Pankaj Srivastava",
      text: "From emergency booking to hospital drop, the service was seamless. Polite staff, fast ambulance arrival, and complete medical support throughout the journey.",
      rating: 5,
      role: "Client"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    return Array.from({ length: cardsPerView }, (_, i) =>
      testimonials[(currentIndex + i) % testimonials.length]
    );
  };

  // Responsive logic
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(2);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#1e4d83] to-[#2563eb] rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-lg">
            <Quote className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e4d83] mb-3 sm:mb-4 font-serif px-4">
            Client Experiences
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#a81514] to-[#1e4d83] mx-auto mb-3 sm:mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Hear from those who have experienced our compassionate care during their most difficult moments
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile, visible on tablet+ */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 sm:p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 -translate-x-2 sm:-translate-x-4 border border-gray-100 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e4d83] group-hover:text-[#2563eb] transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 sm:p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 translate-x-2 sm:translate-x-4 border border-gray-100 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e4d83] group-hover:text-[#2563eb] transition-colors" />
          </button>

          {/* Testimonials Grid */}
          <div className={`grid ${cardsPerView === 1 ? 'grid-cols-1' : 'sm:grid-cols-2'} gap-4 sm:gap-6 px-0 sm:px-8 md:px-12`}>
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden border border-gray-100"
              >
                {/* Decorative Quote Background */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 opacity-5">
                  <Quote className="w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 text-[#1e4d83]" />
                </div>
                
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e4d83]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
                
                {/* Rating Stars - Top */}
                <div className="flex mb-3 sm:mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current drop-shadow-sm" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 relative z-10 italic">
                  "{testimonial.text}"
                </p>

                {/* Divider */}
                <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-[#1e4d83] to-transparent mb-4 sm:mb-6"></div>

                {/* User Info */}
                <div className="flex items-center relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#1e4d83] to-[#2563eb] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base mr-3 sm:mr-4 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                    {getInitials(testimonial.name)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</h3>
                    <p className="text-[#1e4d83] text-xs sm:text-sm font-medium">{testimonial.role}</p>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-[#1e4d83] via-[#2563eb] to-[#1e4d83] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Buttons - Bottom */}
          <div className="flex sm:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="bg-white rounded-full p-3 shadow-lg active:scale-95 transition-all border border-gray-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-[#1e4d83]" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white rounded-full p-3 shadow-lg active:scale-95 transition-all border border-gray-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-[#1e4d83]" />
            </button>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 gap-1.5 sm:gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-[#1e4d83] to-[#2563eb] w-6 sm:w-8 shadow-md"
                  : "bg-gray-300 hover:bg-gray-400 w-1.5 sm:w-2"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
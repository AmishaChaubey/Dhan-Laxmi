import React, { useState } from "react";
import {
  X,
  Eye,
  ArrowUpRight,
  ChevronDown,
  Home,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

 const galleryData = [
  { id: 1, src: "/dhanLakshmi-img/11.jpg", title: "24/7 Service", desc: "Emergency ready always." },
  { id: 2, src: "/dhanLakshmi-img/12.jpg", title: "24/7 Service", desc: "Trained medical support." },
  { id: 3, src: "/dhanLakshmi-img/13.jpg", title: "24/7 Service", desc: "Fast emergency response." },
  { id: 4, src: "/dhanLakshmi-img/14.jpg", title: "24/7 Service", desc: "Advanced ICU ambulance." },
  { id: 5, src: "/dhanLakshmi-img/15.jpg", title: "24/7 Service", desc: "Reliable patient care." },
  { id: 6, src: "/dhanLakshmi-img/16.jpg", title: "24/7 Service", desc: "Compassionate service." },
  { id: 7, src: "/dhanLakshmi-img/17.jpeg", title: "24/7 Service", desc: "Clean and hygienic." },
  { id: 8, src: "/dhanLakshmi-img/18.jpeg", title: "24/7 Service", desc: "Safe patient transfer." },
  { id: 9, src: "/dhanLakshmi-img/19.jpeg", title: "24/7 Service", desc: "Fully equipped ambulance." },
  { id: 10, src: "/dhanLakshmi-img/20.jpeg", title: "24/7 Service", desc: "Quick dispatch service." },
  { id: 11, src: "/dhanLakshmi-img/21.jpeg", title: "24/7 Service", desc: "Modern life support." },
  { id: 12, src: "/dhanLakshmi-img/22.jpeg", title: "24/7 Service", desc: "Trusted emergency care." },
  { id: 13, src: "/dhanLakshmi-img/23.jpeg", title: "24/7 Service", desc: "Patient comfort first." },
  { id: 14, src: "/dhanLakshmi-img/24.jpeg", title: "24/7 Service", desc: "Saving lives daily." },
  { id: 15, src: "/dhanLakshmi-img/25.jpeg", title: "24/7 Service", desc: "Dependable ambulance." },
  { id: 16, src: "/dhanLakshmi-img/26.jpeg", title: "24/7 Service", desc: "Round-the-clock help." },
];


  React.useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-red-100 selection:text-red-900">
      {/* --- HERO BANNER SECTION (Full Image Background) --- */}
      <div className="relative h-[40vh] min-h-[280px] sm:h-[50vh] sm:min-h-[350px] md:h-[60vh] md:min-h-[400px] lg:h-[70vh] lg:min-h-[500px] xl:h-[75vh] w-full overflow-hidden flex items-center justify-center mt-3 sm:mt-5 md:mt-7 lg:mt-9">
        {/* Background Image - Fully Responsive */}
        <div className="relative h-[40vh] min-h-[280px] sm:h-[50vh] sm:min-h-[350px] md:h-[60vh] md:min-h-[400px] lg:h-[70vh] lg:min-h-[500px] xl:h-[75vh] w-full overflow-hidden flex items-center mt-3 sm:mt-5 md:mt-7 lg:mt-9">
          {/* Background Image - Fully Responsive */}
          <div className="absolute inset-0">
            <img
              src="/banner-img/32.png"
              alt="Ambulance Service Gallery"
              className="w-full h-full object-cover object-center"
              style={{ objectPosition: "center center" }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/10 to-slate-900/50"></div>
          </div>

          {/* Left Side Text */}
          <div className="relative z-10 text-left px-6 sm:px-10 md:px-16 lg:px-24 max-w-xl">
            <h1
              className="text-white font-serif font-bold
      text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Gallery
            </h1>

            <p
              className="mt-2 md:mt-3 text-white/90
      text-sm sm:text-base md:text-lg"
            >
              A Glimpse of Our Ambulance Services & Emergency Care
            </p>

            <div className="w-14 sm:w-16 md:w-24 h-1 bg-[#a81514] mt-3 rounded-full"></div>
          </div>

          {/* Scroll Down Indicator - Hidden on small mobile */}
          <div className="hidden sm:block absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
            <ChevronDown size={28} className="sm:w-8 sm:h-8" />
          </div>
        </div>

        {/* Scroll Down Indicator - Hidden on small mobile */}
        <div className="hidden sm:block absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
          <ChevronDown size={28} className="sm:w-8 sm:h-8" />
        </div>
      </div>

      {/* --- BREADCRUMB NAVIGATION --- */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <nav className="flex items-center space-x-2 text-sm sm:text-base">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-slate-600 hover:text-[#1e4d83] transition-colors group"
            >
              <Home
                size={16}
                className="sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform"
              />
              <span className="font-medium">Home</span>
            </Link>

            <ChevronRight
              size={16}
              className="text-slate-400 sm:w-[18px] sm:h-[18px]"
            />

            <span className="text-[#1e4d83] font-semibold">Gallery</span>
          </nav>
        </div>
      </div>

      {/* --- GALLERY GRID SECTION (Symmetrical Responsive Grid) --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24 pt-8 sm:pt-12 lg:pt-16">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {galleryData.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg shadow-slate-200/50 cursor-pointer hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container - Responsive heights */}
              <div className="w-full h-[220px] sm:h-[260px] lg:h-[350px] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content Overlay (Slide Up Effect) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                {/* Category Badge */}
                <div className="mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  <span className="inline-block px-2.5 sm:px-3 py-1 bg-red-600 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                    Gallery
                  </span>
                </div>

                {/* Title & Description */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <h3 className="text-white text-lg sm:text-xl font-bold font-serif mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm mb-3 sm:mb-4">
                    {item.desc}
                  </p>

                  {/* Action Button */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 text-white font-semibold text-xs sm:text-sm group-hover:text-red-400 transition-colors">
                    View Full Screen <Eye size={14} className="sm:w-4 sm:h-4" />
                  </div>
                </div>

                {/* Floating Top Right Icon */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all duration-500 delay-200">
                  <ArrowUpRight size={16} className="sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* Mobile-friendly tap indicator (visible on touch devices) */}
              <div className="sm:hidden absolute bottom-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-slate-700 shadow-lg">
                <Eye size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Message (if needed in future) */}
        {galleryData.length === 0 && (
          <div className="text-center py-16 sm:py-20 lg:py-24">
            <p className="text-slate-500 text-base sm:text-lg">
              No images available at the moment.
            </p>
          </div>
        )}
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button - Responsive positioning and sizing */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white rounded-full p-2 sm:p-2.5 md:p-3 transition-all z-10 touch-manipulation"
            aria-label="Close modal"
          >
            <X size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </button>

          <div
            className="relative max-w-5xl w-full flex flex-col items-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container - Responsive sizing */}
            <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] sm:max-h-[75vh] md:max-h-[80vh] object-contain"
              />
            </div>

            {/* Image Info - Responsive text */}
            <div className="mt-4 sm:mt-5 md:mt-6 text-center space-y-1 sm:space-y-2 px-4">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                {selectedImage.title}
              </h2>
              <p className="text-slate-300 sm:text-slate-400 text-sm sm:text-base">
                {selectedImage.desc}
              </p>
            </div>

            {/* Navigation Hint for mobile */}
            <div className="sm:hidden mt-4 text-center">
              <p className="text-slate-500 text-xs">Tap outside to close</p>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }

        /* Improve touch targets for mobile */
        @media (max-width: 640px) {
          .touch-manipulation {
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Hide scrollbar for mobile while keeping functionality */
        @media (max-width: 640px) {
          ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;

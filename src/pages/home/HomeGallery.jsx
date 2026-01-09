import React from "react";
import { Link } from "react-router-dom";


// Optional: Injects Google Fonts to ensure the layout looks premium.
// You can remove this if you handle fonts globally.
const GoogleFonts = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Inter:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  />
);

const services = [
  {
    title: "Emergency Ambulance",
    desc: "Rapid emergency ambulance service with trained staff, life-saving equipment, and 24/7 availability for critical medical situations.",
    img: "/services/news-1.jpg",
    link:"/services/ambulance-services"
  },
  {
    title: "Dead Body Freezer Box",
    desc: "Advanced dead body freezer box service to preserve the body safely, maintain hygiene, and ensure dignity during final rites.",
    img: "/services/athome.jpg",
    link:"/services/deadbody-freezer-box-at-home"
  },
  {
    title: "Mortuary Ambulance",
    desc: "Professional mortuary ambulance service providing safe, respectful, and timely transportation of deceased bodies.",
    img: "/services/deadbody-ambulance.jpg",
    link:"/services/deadbody-ambulance-services"
  },
  {
    title: "Air Ambulance Service",
    desc: "Fast air ambulance service with ICU setup, expert medical team, and rapid patient transfer across long distances.",
    img: "/services/air-ambulance.jpg",
    link:"/services/air-ambulance-services"
  },
  {
    title: "Ventilator Ambulance",
    desc: "Fully equipped ventilator ambulance service with advanced life support systems and continuous medical monitoring.",
    img: "/services/ventilaor-ambulance.jpg",
    link:"/services/ventilator-ambulance-services"
  },
  {
    title: "Train Ambulance Service",
    desc: "Reliable train ambulance service offering cost-effective, medically supervised patient transport across cities.",
    img: "/services/train-ambulance.jpg",
    link:"/services/train-ambulance-services"
  },
];

const Gallery = () => {
  return (
    <>
      <GoogleFonts />
      <section className="bg-[#f8fafc] py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden font-sans text-slate-600">
        
        {/* Decorative Background Blobs */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16 lg:mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-[#a81514] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4 border border-red-100">
              Available 24/7
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1e4d83] mb-4 sm:mb-6">
              Our Medical <span className="text-[#a81514]">Services</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-6 sm:mb-8 px-4">
              Compassionate care with professional medical support. 
              We ensure safety, speed, and dignity in every transfer.
            </p>
            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-[#a81514] mx-auto rounded-full shadow-sm"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden bg-slate-200">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hover Overlay Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4 sm:pb-6">
                    <span className="text-white font-medium tracking-wide text-xs sm:text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow relative">
                  {/* Accent Line */}
                  <div className="w-10 sm:w-12 h-1 bg-[#a81514] mb-3 sm:mb-4 rounded-full transition-all duration-500 group-hover:w-full opacity-50 group-hover:opacity-100"></div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1e4d83] mb-2 sm:mb-3 group-hover:text-[#a81514] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4 sm:mb-6 flex-grow">
                    {service.desc}
                  </p>

                  {/* Footer Link */}
                  <Link to={service.link} className="mt-auto pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between group/link cursor-pointer">
                    <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Medical Care
                    </span>

                    <div className="flex items-center gap-1.5 sm:gap-2 text-[#a81514] font-semibold text-xs sm:text-sm transition-transform group-hover/link:translate-x-1">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </Link>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Gallery;
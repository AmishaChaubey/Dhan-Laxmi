import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// --- Reusable Icon Components ---
const PhoneIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronDown = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronUp = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

export default function ServiceLayout({ service }) {
  // Safety Check
  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-50">
        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-[#1e4d83]"></div>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeSection, setActiveSection] = useState("overview");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "inclusions", "process", "gallery", "faqs"];
      const scrollPosition = window.scrollY + 150;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* ======================= HERO SECTION WITH BANNER ======================= */}
      <div className="mt-3 sm:mt-4 md:mt-5 relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] xl:min-h-[85vh] flex items-center justify-start overflow-hidden">
        {/* Full Background Banner Image */}
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay for better text readability - Left focused */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-slate-900/40 sm:from-slate-900/92 sm:via-slate-900/70 sm:to-slate-900/30 lg:from-slate-900/95 lg:via-slate-900/80 lg:to-transparent"></div>
        </div>



        {/* Service Title Overlay - Left Aligned with Design Elements */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              
            

              {/* Main Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white drop-shadow-2xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight font-serif animate-in fade-in slide-in-from-left-4 duration-700 mt-9">
                {service.title}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 drop-shadow-lg leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-8 animate-in fade-in slide-in-from-left-6 duration-700 delay-150 max-w-2xl">
                Professional medical transportation services available 24/7
              </p>

              {/* CTA Buttons - Left Aligned */}
             <div className="flex flex-row gap-2 sm:gap-4 mb-8 justify-center sm:justify-start">
  
  <a
    href={`tel:${service.contact}`}
    className="inline-flex items-center justify-center gap-1.5
      bg-[#a81514] hover:bg-red-700 text-white
      w-[140px] sm:w-auto        /* 👈 mobile small width */
      px-3 py-2
      sm:px-6 sm:py-3
      rounded-lg sm:rounded-xl
      text-xs sm:text-base
      font-semibold sm:font-bold
      transition-all shadow-lg
      group"
  >
    <PhoneIcon />
    Call Now
  </a>

  <button
    onClick={() => scrollToSection('overview')}
    className="inline-flex items-center justify-center gap-1.5
      bg-white/10 hover:bg-white/20 border border-white/30 text-white
      w-[140px] sm:w-auto        /* 👈 same width */
      px-3 py-2
      sm:px-6 sm:py-3
      rounded-lg sm:rounded-xl
      text-xs sm:text-base
      font-semibold sm:font-bold
      transition-all
      group"
  >
    Learn More
  </button>

</div>


           

            </div>
          </div>
        </div>
      </div>

      {/* ======================= MAIN CONTENT LAYOUT ======================= */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 pb-20 sm:pb-24 lg:pb-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 2xl:gap-16">
          
          {/* Sticky Sidebar Navigation - Desktop Only */}
          <aside className="hidden lg:block lg:col-span-3 xl:col-span-3">
            <div className="sticky top-20 xl:top-24 2xl:top-28">
              <div className="font-mono text-xs font-bold text-slate-400 mb-3 xl:mb-4 2xl:mb-6 uppercase tracking-wider">
                Navigation
              </div>
              <nav className="space-y-1">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "inclusions", label: "Inclusions" },
                  { id: "process", label: "Process" },
                  { id: "gallery", label: "Gallery" },
                  { id: "faqs", label: "FAQs" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 xl:px-4 py-2 xl:py-2.5 2xl:py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-red-50 text-[#1e4d83] border-l-4 border-[#a81514]"
                        : "text-slate-600 hover:bg-red-100 hover:text-slate-900 border-l-4 border-transparent"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Contact Card */}
              <div className="mt-6 xl:mt-8 2xl:mt-10 bg-slate-900 text-white p-4 xl:p-5 2xl:p-6 rounded-2xl shadow-xl border border-slate-800">
                <div className="font-mono text-xs font-bold text-red-400 mb-2 xl:mb-3">
                  EMERGENCY CONTACT
                </div>
                <p className="text-lg xl:text-xl font-bold mb-3 xl:mb-4 2xl:mb-6 leading-tight break-words">{service.contact}</p>
                <a
                  href={`tel:${service.contact}`}
                  className="block w-full bg-[#a81514] hover:bg-red-700 text-white text-center py-2 xl:py-2.5 2xl:py-3 rounded-lg font-bold transition-all text-sm"
                >
                  CALL NOW
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9 xl:col-span-9 space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 xl:space-y-20 2xl:space-y-24">
            
            {/* Overview Section */}
            <section id="overview" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28">
              <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-serif border-l-4 border-[#1e4d83] pl-4">Overview</h2>
              </div>
              
              <div className="prose prose-sm sm:prose-base md:prose-lg text-slate-600 max-w-none">
                <p className="leading-relaxed text-sm sm:text-base">{service.overview}</p>
              </div>
            </section>

            {/* Inclusions - Bento Grid */}
            {service.inclusions?.length > 0 && (
              <section id="inclusions" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28">
                <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-serif border-l-4 border-[#1e4d83] pl-4">What's Included</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                  {service.inclusions.map((item, idx) => (
                    <div
                      key={idx}
                      className="group bg-white p-3.5 sm:p-4 md:p-5 rounded-xl border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 flex items-start gap-2.5 sm:gap-3 md:gap-4"
                    >
                      <div className="flex-shrink-0 mt-0.5 bg-cyan-50 text-[#1e4d83] rounded-full p-1">
                        <CheckIcon />
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-slate-700 font-medium leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Process - Steps */}
            {service.process?.length > 0 && (
              <section id="process" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28">
                <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-serif border-l-4 border-[#1e4d83] pl-4">
                    How It Works
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {service.process.map((p, idx) => (
                    <div
                      key={idx}
                      className="group bg-white p-4 sm:p-5 md:p-6 lg:p-7 rounded-xl border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-cyan-50 flex items-center justify-center border-2 border-cyan-200">
                          <span className="text-sm sm:text-base md:text-lg font-bold text-[#1e4d83]">
                            {p.step}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2 md:mb-2.5">
                            {p.title}
                          </h3>
                          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Gallery */}
            {service.gallery?.length > 0 && (
              <section id="gallery" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28">
                <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-serif border-l-4 border-[#1e4d83] pl-4">Gallery</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  {service.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3] shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img
                        src={img}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-300"></div>
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur text-slate-900 p-2 sm:p-2.5 md:p-3 rounded-full transform scale-50 group-hover:scale-100 transition-transform duration-300">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                             <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs Section - Collapsible/Expandable */}
            {service.faqs?.length > 0 && (
              <section id="faqs" className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28">
                <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-serif border-l-4 border-[#1e4d83] pl-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-[#f8fafc] rounded-xl border border-slate-200 hover:border-cyan-200 transition-all shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-3.5 sm:p-4 md:p-5 lg:p-6 flex items-start justify-between gap-2.5 sm:gap-3 md:gap-4 text-left hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 flex items-start gap-1.5 sm:gap-2">
                            <span className="text-[#1e4d83] flex-shrink-0">Q:</span>
                            <span className="break-words">{faq.q}</span>
                          </h3>
                        </div>
                        <div className="flex-shrink-0 text-[#1e4d83] mt-0.5">
                          {openFaqIndex === idx ? <ChevronUp /> : <ChevronDown />}
                        </div>
                      </button>
                      
                      {openFaqIndex === idx && (
                        <div className="px-3.5 sm:px-4 md:px-5 lg:px-6 pb-3.5 sm:pb-4 md:pb-5 lg:pb-6 pt-2 border-t border-slate-100 animate-in slide-in-from-top-2 duration-200">
                          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed flex items-start gap-1.5 sm:gap-2">
                            <span className="text-[#1e4d83] font-bold flex-shrink-0">A:</span>
                            <span className="break-words">{faq.a}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CTA Section with Side Image */}
            <section className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-28">
              <div className="bg-[#1e4d83] text-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-0">

                  {/* Left Side - Content */}
                  <div className="p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 relative overflow-hidden order-2 lg:order-1">
                    <div className="absolute top-0 right-0 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[#1e4d83]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10">
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2.5 sm:mb-3 md:mb-4 tracking-tight font-serif">
                        Need Immediate Help?
                      </h2>

                      <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                        Our team is standing by 24/7 to assist you with medical transportation needs.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                        <a
                          href={`tel:${service.contact}`}
                          className="inline-flex items-center justify-center gap-2 bg-[#a81514] hover:bg-red-700 text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl font-bold transition-all shadow-lg shadow-[#1e4d83]/25 text-xs sm:text-sm md:text-base"
                        >
                          <PhoneIcon />
                          <span className="break-all sm:break-normal">{service.contact}</span>
                        </a>

                        <Link to="/contact" className="w-full sm:w-auto">
                          <button className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl font-bold transition-all backdrop-blur-sm text-xs sm:text-sm md:text-base">
                            Email Us
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="relative h-40 sm:h-48 md:h-56 lg:h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[300px] order-1 lg:order-2">
                    <img
                      src='/services/cta-img.jfif'
                      alt="Contact Us"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1e4d83]/20 to-transparent"></div>
                  </div>

                </div>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Mobile Bottom Navigation - Fully responsive */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-slate-200 z-50 safe-area-inset-bottom">
        <div className="flex justify-around items-center px-1 sm:px-2 py-2 sm:py-2.5 md:py-3">
          {[
            { id: "overview", label: "Overview", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            { id: "inclusions", label: "Included", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            { id: "process", label: "Process", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { id: "gallery", label: "Gallery", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
            { id: "faqs", label: "FAQs", icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center flex-1 max-w-[70px] sm:max-w-[80px] p-1 sm:p-1.5 md:p-2 rounded-lg md:rounded-xl transition-all ${
                activeSection === item.id
                  ? "text-[#1e4d83] bg-cyan-50"
                  : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
              }`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mb-0.5 sm:mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-wide leading-tight text-center">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Image Modal - Fully responsive */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-slate-950/95 z-[60] flex items-center justify-center p-2 sm:p-3 md:p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-6 lg:right-6 bg-white/10 hover:bg-white/20 text-white p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-full transition-colors backdrop-blur-md z-10"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <XIcon />
          </button>
          <div className="relative max-w-6xl w-full max-h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Gallery Fullscreen"
              className="w-full h-auto object-contain max-h-[80vh] sm:max-h-[85vh] md:max-h-[90vh] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
import React from 'react';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cta() {
  return (
    <div className="relative bg-[#f8fafc] py-8 sm:py-12 md:py-14 lg:py-16 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 sm:w-40 h-32 sm:h-40 bg-red-100 rounded-full blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-5 sm:space-y-6 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-3 sm:px-4 py-1.5">
              <span className="w-1.5 h-1.5 bg-[#a81514] rounded-full animate-pulse"></span>
              <span className="text-[#a81514] text-xs sm:text-sm font-bold tracking-wider uppercase">24/7 Emergency Ready</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#1e4d83] leading-tight font-serif">
              Fast & Reliable <br/>
              <span className="text-[#a81514]">
                Ambulance Service
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
              Quick response times and professional care. We ensure safe transportation for patients with our modern fleet.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link to='/contact' className="w-full sm:w-auto">
                <button className="group bg-[#a81514] text-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold text-sm sm:text-base shadow-lg shadow-red-200 hover:shadow-red-300 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    Book Now
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              
              <button className="group bg-white border-2 border-slate-200 text-slate-700 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold text-sm sm:text-base hover:border-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300 w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  +91-9711875038
                </span>
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative group animate-fade-in-up mt-6 lg:mt-0" style={{ animationDelay: '0.2s' }}>
            
            {/* Main Image Container */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white">
              <img 
                src="/services/cta.png"
                alt="Emergency Medical Services"
                className="w-full h-[300px] sm:h-[360px] md:h-[400px] lg:h-[380px] xl:h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Floating Badge */}
              <div className="absolute top-4 sm:top-5 md:top-6 left-4 sm:left-5 md:left-6 bg-white/90 backdrop-blur-md text-slate-800 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 shadow-lg flex items-center gap-2 sm:gap-3 border border-white/50 transform hover:scale-105 transition-transform">
                <div className="bg-red-100 p-1.5 sm:p-2 rounded-full text-[#a81514]">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Verified</p>
                  <p className="text-xs sm:text-sm md:text-base font-bold">Safe & Secure</p>
                </div>
              </div>

              {/* Bottom Stats Overlay */}
              <div className="absolute bottom-4 sm:bottom-5 md:bottom-0 left-4 sm:left-5 md:left-6 right-4 sm:right-5 md:right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 sm:p-4 md:p-2 flex justify-between text-white">
                <div className="text-center flex-1">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">5 Min</p>
                  <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wide opacity-80 mt-0.5">Avg Response</p>
                </div>
                <div className="w-px bg-white/20 h-8 sm:h-10 md:h-12 self-center"></div>
                <div className="text-center flex-1">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">24/7</p>
                  <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wide opacity-80 mt-0.5">Support</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
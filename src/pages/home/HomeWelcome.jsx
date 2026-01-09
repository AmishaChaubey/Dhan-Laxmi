import React from 'react';
import { Phone, Clock, MapPin, Heart, Ambulance, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomeWelcome() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Content - Shows first on mobile */}
            <div className="space-y-4 sm:space-y-6 order-1">
              <div className="inline-block">
                <span className="bg-red-100 text-[#a81514] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  24/7 Emergency Service
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e4d83] leading-tight font-serif">
                Fast & Reliable
                <span className="text-[#a81514]"> Emergency Care</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                When every second counts, trust our professional team to provide rapid response 
                and expert medical care. Available 24/7 across the city with state-of-the-art 
                ambulance services.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button className="bg-[#a81514] hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>+91-9711875038</span>
                </button>
                
                <Link to='/contact' className="w-full sm:w-auto">
                  <button className="bg-[#1e4d83] hover:bg-[#163a68] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                    Book Ambulance
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image - Shows second on mobile */}
            <div className="relative order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/dhanLakshmi-img/14.jpg" 
                  alt="Emergency Ambulance" 
                  className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
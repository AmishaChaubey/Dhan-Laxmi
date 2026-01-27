import React from 'react';
import { Heart, Target, Shield, Clock, Phone, ArrowRight, CheckCircle, Users, ChevronDown } from 'lucide-react';
import Cta from '../home/HomeCta';

export default function AboutPage() {

  React.useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&display=swap');
        * { font-family: 'Sora', sans-serif; }
      `}</style> */}

      {/* Hero Section - Responsive height and image fitting */}
    {/* Hero Section */}
<div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden flex items-center justify-start mt-16 md:mt-9">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/banner-img/about.png"
      alt="Dhanlaxmi Ambulance Service"
      className="w-full h-full object-cover scale-105"
    />
  </div>

  {/* Light overlay for readability (design-safe) */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Center Text */}
{/* Center Text */}
<div className="relative z-10 text-left px-6 sm:px-10 md:px-16 lg:px-24">
  <h1 className="text-white font-serif font-bold
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
    About Us
  </h1>

  <p className="mt-2 md:mt-3 text-white/90
    text-sm sm:text-base md:text-lg max-w-xl">
    Caring Beyond Emergency, Delivering Life-Saving Support
  </p>

  <div className="w-16 md:w-24 h-1 bg-[#a81514] mt-3 rounded-full"></div>
</div>




</div>


      {/* About Section */}
      <section id="about" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

            {/* Image - Responsive positioning */}
            <div className="relative order-1 lg:order-1">
              {/* Decorative blur background */}
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-[#1e4d83] to-[#a81514] rounded-3xl blur-xl opacity-20"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/dhanLakshmi-img/1.png"
                  alt="Medical Experts"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Card - Adjusted for mobile to not overflow */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-white rounded-2xl shadow-xl p-4 md:p-2 max-w-[260px] md:max-w-xs z-10">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">24/7</div>
                    <div className="text-xs md:text-sm text-gray-600">Emergency Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 md:space-y-6 order-2 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                <span className="text-xs md:text-sm font-semibold text-[#1e4d83]">
                  Welcome To Dhanlaxmi Ambulance Service
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e4d83] font-serif leading-tight">
                Trusted Emergency & <span className='text-[#a81514]'>Medical Transport Provider</span>
              </h2>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Dhanlaxmi Ambulance Service offers a broad selection of ambulances for both
                emergency and non-emergency transportation. We are a leading private
                ambulance service provider, delivering fast, reliable, and compassionate
                medical assistance across the country.
              </p>

              <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5 md:mt-1 flex-shrink-0">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#a81514]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm md:text-base">Advanced Life Support</div>
                    <div className="text-gray-600 text-sm md:text-base">
                      Equipped with modern medical equipment and technology
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5 md:mt-1 flex-shrink-0">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#a81514]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm md:text-base">Skilled Medical Team</div>
                    <div className="text-gray-600 text-sm md:text-base">
                      EMTs, paramedics, and nurses committed to patient care
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5 md:mt-1 flex-shrink-0">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#a81514]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm md:text-base">Safe & Timely Transport</div>
                    <div className="text-gray-600 text-sm md:text-base">
                      Professional drivers ensuring patient comfort and safety
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
              <span className="text-xs md:text-sm font-semibold text-[#a81514]">
                Our Company Mission
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e4d83] font-serif leading-tight">
              Mission, Vision & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-[#a81514] rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                To deliver quick, efficient, and compassionate emergency medical services
                by utilizing advanced medical equipment and professional healthcare teams.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-[#1e4d83] rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Our Vision</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                To be a trusted and reliable private ambulance service provider,
                recognized for excellence, safety, and patient-centered care.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Our Values</h3>
              <div className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
                <div>Compassionate Care</div>
                <div>Professional Integrity</div>
                <div>Patient Safety</div>
                <div>24/7 Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Cta />
    </div>
  );
}
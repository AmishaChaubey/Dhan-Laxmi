import React, { useState } from 'react';
import { MapPin, CheckCircle, Search, Navigation, Phone, Clock } from 'lucide-react';

const CoverageAreas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);

  // Coverage data for Delhi locations
  const coverageAreas = [
    {
      city: 'Saket',
      zones: ['Saket Metro', 'Select Citywalk', 'DDA Flats', 'PVR Anupam', 'Malviya Nagar Metro'],
      available: true,
      coordinates: { lat: 28.5244, lng: 77.2066 }
    },
    {
      city: 'South Delhi',
      zones: ['Greater Kailash', 'Green Park', 'Hauz Khas', 'Safdarjung Enclave', 'Vasant Vihar'],
      available: true,
      coordinates: { lat: 28.5355, lng: 77.2100 }
    },
    {
      city: 'Malviya Nagar',
      zones: ['Malviya Nagar Metro', 'Khirki Village', 'Begumpur', 'Westend Marg', 'Panchsheel Park'],
      available: true,
      coordinates: { lat: 28.5403, lng: 77.2055 }
    },
    {
      city: 'Sainik Farm',
      zones: ['Sainik Farm Main', 'Press Enclave Road', 'Pushp Vihar', 'Madangir', 'Lado Sarai'],
      available: true,
      coordinates: { lat: 28.5094, lng: 77.2221 }
    },
    {
      city: 'Hauz Khas',
      zones: ['Hauz Khas Village', 'Deer Park', 'Green Park', 'IIT Delhi', 'Aurobindo Marg'],
      available: true,
      coordinates: { lat: 28.5494, lng: 77.2001 }
    },
    {
      city: 'Greater Kailash',
      zones: ['GK 1', 'GK 2', 'M Block Market', 'N Block Market', 'Chirag Delhi'],
      available: true,
      coordinates: { lat: 28.5483, lng: 77.2419 }
    },
    {
      city: 'Green Park',
      zones: ['Green Park Main', 'Aurobindo Marg', 'Hauz Khas Extension', 'Yusuf Sarai', 'Safdarjung'],
      available: true,
      coordinates: { lat: 28.5596, lng: 77.2069 }
    },
    {
      city: 'Ramakrishna Puram',
      zones: ['RK Puram Sector 1-12', 'Moti Bagh', 'Sarojini Nagar', 'Chanakya Puri', 'Satya Niketan'],
      available: true,
      coordinates: { lat: 28.5640, lng: 77.1840 }
    },
    {
      city: 'Gulmohar Park',
      zones: ['Gulmohar Park Main', 'Siri Fort', 'Hauz Khas Enclave', 'RK Puram Extension', 'Adchini'],
      available: true,
      coordinates: { lat: 28.5568, lng: 77.1974 }
    },
    {
      city: 'Dwarka',
      zones: ['Dwarka Sector 1-23', 'Dwarka Mor', 'Palam Extension', 'Kakrola', 'Dwarka Expressway'],
      available: true,
      coordinates: { lat: 28.5921, lng: 77.0460 }
    },
    {
      city: 'Lajpat Nagar',
      zones: ['Lajpat Nagar 1-4', 'Central Market', 'Vinobapuri', 'Moolchand', 'Defence Colony'],
      available: true,
      coordinates: { lat: 28.5677, lng: 77.2431 }
    },
    {
      city: 'Connaught Place',
      zones: ['CP Inner Circle', 'CP Outer Circle', 'Rajiv Chowk', 'Janpath', 'Parliament Street'],
      available: true,
      coordinates: { lat: 28.6315, lng: 77.2167 }
    },
    {
      city: 'Rohini',
      zones: ['Rohini Sector 1-24', 'Pitampura', 'Rithala', 'Rohini West', 'Rohini East'],
      available: true,
      coordinates: { lat: 28.7499, lng: 77.0670 }
    },
    {
      city: 'Vasant Vihar',
      zones: ['Vasant Vihar Main', 'Priya Cinema', 'Basant Lok', 'Munirka', 'Vasant Kunj'],
      available: true,
      coordinates: { lat: 28.5567, lng: 77.1585 }
    },
    {
      city: 'Safdarjung Enclave',
      zones: ['Safdarjung Enclave Main', 'AIIMS', 'Kidwai Nagar', 'Dhaula Kuan', 'Arjun Nagar'],
      available: true,
      coordinates: { lat: 28.5677, lng: 77.1916 }
    }
  ];

  const filteredAreas = coverageAreas.filter(area =>
    area.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.zones.some(zone => zone.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
        
        .heading-font {
          font-family: 'Playfair Display', serif;
        }
        
        .gradient-border {
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #1e4d83, #a81514) border-box;
          border: 2px solid transparent;
        }
        
        @media (min-width: 640px) {
          .gradient-border {
            border: 3px solid transparent;
          }
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @media (hover: hover) {
          .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(30, 77, 131, 0.2);
          }
        }
        
        .pulse-animation {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .7;
          }
        }
        
        .slide-in {
          animation: slideIn 0.6s ease-out;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .zone-badge {
          transition: all 0.3s ease;
        }
        
        @media (hover: hover) {
          .zone-badge:hover {
            transform: scale(1.05);
            background: linear-gradient(135deg, #1e4d83, #2563a0);
            color: white;
          }
        }
        
        .search-glow:focus {
          box-shadow: 0 0 0 3px rgba(30, 77, 131, 0.1),
                      0 8px 20px rgba(30, 77, 131, 0.15);
        }
        
        @media (min-width: 640px) {
          .search-glow:focus {
            box-shadow: 0 0 0 4px rgba(30, 77, 131, 0.1),
                        0 10px 25px rgba(30, 77, 131, 0.15);
          }
        }
        
        .scrollbar-custom::-webkit-scrollbar {
          width: 6px;
        }
        
        @media (min-width: 640px) {
          .scrollbar-custom::-webkit-scrollbar {
            width: 8px;
          }
        }
        
        .scrollbar-custom::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #1e4d83, #a81514);
          border-radius: 10px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #2563a0, #c71d1d);
        }
        
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shine-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        
        @media (hover: hover) {
          .shine-effect:hover::before {
            left: 100%;
          }
        }
        
        /* Prevent horizontal overflow on mobile */
        @media (max-width: 640px) {
          * {
            max-width: 100%;
          }
        }
        
        /* Optimize animations on mobile */
        @media (prefers-reduced-motion: reduce) {
          .slide-in,
          .pulse-animation,
          .hover-lift,
          .zone-badge,
          .shine-effect::before {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header Section with Decorative Elements - Fully Responsive */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 relative slide-in">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#1e4d83]/10 to-[#a81514]/10 rounded-full blur-2xl sm:blur-3xl"></div>
          
          <div className="relative">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4 md:mb-6 px-2 leading-tight">
              <span className="bg-gradient-to-r from-[#1e4d83] via-[#2563a0] to-[#a81514] bg-clip-text text-transparent">
                Our Coverage Areas
              </span>
            </h1>
            
            <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[#1e4d83] to-[#a81514] mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full"></div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#1e4d83] font-medium max-w-3xl mx-auto px-4 leading-relaxed">
              We're proud to serve Delhi and surrounding areas with 24/7 emergency ambulance services. 
              <span className="block mt-1 sm:mt-2 text-[#a81514] font-semibold">Your safety is our priority.</span>
            </p>
          </div>
        </div>

        {/* Emergency Contact Banner - Fully Responsive */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 gradient-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 bg-gradient-to-r from-[#1e4d83]/5 to-[#a81514]/5 shine-effect slide-in" style={{animationDelay: '0.2s'}}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#a81514] to-[#d61d1d] flex items-center justify-center pulse-animation flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs sm:text-sm text-[#1e4d83] font-medium">Emergency Hotline</p>
                <p className="text-lg sm:text-xl font-bold text-[#a81514]">+91-9711875038</p>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-10 sm:h-12 bg-gradient-to-b from-[#1e4d83] to-[#a81514]"></div>
            
            <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#1e4d83] to-[#2563a0] flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs sm:text-sm text-[#1e4d83] font-medium">Available</p>
                <p className="text-lg sm:text-xl font-bold text-[#a81514]">24/7 Service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar - Fully Responsive */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2 slide-in" style={{animationDelay: '0.3s'}}>
          <div className="relative group">
            <Search className="absolute left-3 sm:left-4 md:left-5 top-1/2 transform -translate-y-1/2 text-[#1e4d83] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all group-hover:scale-110" />
            <input
              type="text"
              placeholder="Search by area or zone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 sm:pl-12 md:pl-14 pr-3 sm:pr-4 md:pr-6 py-3 sm:py-4 md:py-5 border-2 sm:border-3 border-[#1e4d83]/20 rounded-xl sm:rounded-2xl focus:outline-none focus:border-[#1e4d83] text-sm sm:text-base md:text-lg text-[#1e4d83] placeholder-[#1e4d83]/50 font-medium search-glow transition-all bg-white shadow-lg"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Cities and Zones List - Fully Responsive */}
          <div className="space-y-4 sm:space-y-6 slide-in" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <Navigation className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#a81514] flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1e4d83] heading-font">
                Service Locations
              </h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4 max-h-[600px] sm:max-h-[700px] md:max-h-[790px] overflow-y-auto pr-1 sm:pr-2 scrollbar-custom">
              {filteredAreas.length === 0 ? (
                <div className="text-center py-8 sm:py-10 md:py-12 bg-white rounded-xl sm:rounded-2xl shadow-lg border-2 sm:border-3 border-[#1e4d83]/10">
                  <MapPin className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#1e4d83]/30 mx-auto mb-3 sm:mb-4" />
                  <p className="text-[#1e4d83] font-medium text-base sm:text-lg px-4">No areas found matching your search.</p>
                </div>
              ) : (
                filteredAreas.map((area, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedCity(area)}
                    className={`border-2 sm:border-3 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 cursor-pointer hover-lift shine-effect ${
                      selectedCity?.city === area.city
                        ? 'border-[#a81514] bg-gradient-to-br from-[#a81514]/5 to-[#1e4d83]/5 shadow-xl'
                        : 'border-[#1e4d83]/20 bg-white shadow-lg hover:border-[#1e4d83]/40'
                    }`}
                    style={{animationDelay: `${0.5 + index * 0.05}s`}}
                  >
                    <div className="flex flex-col xs:flex-row items-start justify-between mb-3 sm:mb-4 gap-3">
                      <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 flex-1 min-w-0 w-full xs:w-auto">
                        <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 ${
                          selectedCity?.city === area.city
                            ? 'bg-gradient-to-br from-[#a81514] to-[#d61d1d]'
                            : 'bg-gradient-to-br from-[#1e4d83] to-[#2563a0]'
                        }`}>
                          <MapPin className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1e4d83] heading-font truncate">
                          {area.city}
                        </h3>
                      </div>
                      {area.available && (
                        <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#1e4d83] to-[#2563a0] px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full flex-shrink-0 self-start xs:self-auto">
                          <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                          <span className="text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
                            Available
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="ml-0 xs:ml-0 sm:ml-14 md:ml-16">
                      <p className="text-xs sm:text-sm md:text-base font-semibold text-[#1e4d83] mb-2 sm:mb-3">
                        Coverage Zones:
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {area.zones.map((zone, zoneIndex) => (
                          <span
                            key={zoneIndex}
                            className="px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-[#1e4d83]/10 to-[#a81514]/5 text-[#1e4d83] text-xs sm:text-sm font-medium rounded-lg border-2 border-[#1e4d83]/20 zone-badge"
                          >
                            {zone}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Map Section - Fully Responsive */}
          <div className="lg:sticky lg:top-8 h-fit slide-in" style={{animationDelay: '0.6s'}}>
            <div className="gradient-border rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-[#1e4d83] to-[#2563a0] px-4 sm:px-5 md:px-7 py-3 sm:py-4 md:py-5">
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <MapPin className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white heading-font truncate">
                      {selectedCity ? `${selectedCity.city}` : 'Delhi Service Area'}
                    </h2>
                    <p className="text-xs sm:text-sm text-white/80 mt-0.5 sm:mt-1 truncate">
                      {selectedCity ? 'Location on map' : 'Select an area to view location'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative bg-slate-100">
                <div className="w-full">
                  <iframe
                    title="Google Map"
                    src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=delhi+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    className="w-full h-[300px] sm:h-[350px] md:h-[400px] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                
                {!selectedCity && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-3 border-[#1e4d83] mx-3 sm:mx-4 pulse-animation">
                      <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#a81514] mx-auto mb-1.5 sm:mb-2" />
                      <p className="text-[#1e4d83] font-bold text-sm sm:text-base md:text-lg text-center">
                        Click on any area to view map
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Stats - Fully Responsive */}
            <div className="mt-4 sm:mt-6 md:mt-8 bg-white rounded-xl sm:rounded-2xl shadow-lg border-2 sm:border-3 border-[#1e4d83]/10 p-4 sm:p-5 md:p-7">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1e4d83] mb-3 sm:mb-4 heading-font flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-[#a81514]" />
                Service Coverage
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#1e4d83]/5 to-transparent rounded-lg sm:rounded-xl">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[#a81514] heading-font">
                    {coverageAreas.filter(a => a.available).length}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-[#1e4d83] font-semibold mt-0.5 sm:mt-1">Areas Covered</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#a81514]/5 to-transparent rounded-lg sm:rounded-xl">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[#a81514] heading-font">24/7</p>
                  <p className="text-xs sm:text-sm md:text-base text-[#1e4d83] font-semibold mt-0.5 sm:mt-1">Available</p>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 bg-gradient-to-r from-[#1e4d83]/5 to-[#a81514]/5 rounded-lg sm:rounded-xl border-2 border-[#1e4d83]/20">
                <p className="text-[#1e4d83] text-xs sm:text-sm md:text-base leading-relaxed">
                  <span className="font-bold text-[#a81514]">Expanding Soon!</span> We're constantly growing our service network. Contact us to check availability in your area.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note - Fully Responsive */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-center px-2 sm:px-4 slide-in" style={{animationDelay: '0.8s'}}>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-[#1e4d83]/10">
            <p className="text-[#1e4d83] text-xs sm:text-sm md:text-base leading-relaxed">
              <span className="font-bold">Important:</span> Coverage areas and zones are subject to change based on traffic conditions and availability. 
              Please contact us at <span className="font-bold text-[#a81514]">9711875038</span> to verify service availability in your specific location before requesting an ambulance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageAreas;
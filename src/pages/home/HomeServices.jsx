import React from 'react';
import { CheckCircle } from "lucide-react";
import { Link } from 'react-router-dom';

export default function HomeServices() {

  const leftColumnServices = [
    'Emergency Ambulance Service',
    'Road Ambulance Service',
    'ICU Ambulance Service',
    'Train Ambulance',
    'Air Ambulance',
     'AC/& Non AC Ambulance',
         'Mobile Mortuary Service',

    
  ];

  const rightColumnServices = [
        'Deadbody freezer box service at home',

    'Oxygen & Ventilator Ambulance',
    'Cardiac Care Ambulance',
    'Basic & Advance Life Support Ambulance',
    'Ambulance Tempo Traveler',
    'Eeco Ambulance',
    'Trax Ambulance',
   
  ]

  const allServices = [...leftColumnServices, ...rightColumnServices];

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

          {/* Left Section - Services List */}
          <div className="lg:col-span-1 bg-white p-5 sm:p-6 md:p-8 rounded shadow-sm">
            <h1 className="text-xl sm:text-2xl font-bold text-[#1e4d83] mb-4 sm:mb-6 leading-tight font-serif">
              Services provided by<br />
              Dhanlaxmi Ambulance<br />
              include
            </h1>

            {/* Mobile/Tablet - Single Column */}
            <div className="md:hidden space-y-2.5 sm:space-y-3">
              {allServices.map((service, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a81514]" />
                  </div>
                  <span className="text-[#1e4d83] text-xs sm:text-sm leading-tight">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* Desktop - Two Columns */}
            <div className="hidden md:grid grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-3">
              {/* Left column */}
              <div className="space-y-3">
                {leftColumnServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-[#a81514]" />
                    </div>
                    <span className="text-[#1e4d83] text-sm font-medium leading-tight">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right column */}
              <div className="space-y-3">
                {rightColumnServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-[#a81514]" />
                    </div>
                    <span className="text-[#1e4d83] text-sm font-medium leading-tight">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Service Cards */}
         <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

  {/* Emergency Ambulance */}
  <div className="bg-[#1e4d83] text-white p-5 sm:p-6 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
      Emergency Ambulance
    </h2>
    <p className="text-xs sm:text-sm leading-relaxed">
      Fast and reliable emergency ambulance service equipped with trained medical staff to ensure immediate care during critical situations.
      Our ambulances operate 24/7 and are fitted with essential life-saving equipment to provide safe, quick, and smooth hospital transfers.
    </p>
  </div>

  {/* ICU Ambulance */}
  <div className="bg-white border-2 border-gray-300 p-5 sm:p-6 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[#1e4d83]">
      ICU Ambulance
    </h2>
    <p className="text-xs sm:text-sm leading-relaxed text-[#1e4d83]">
      Fully equipped ICU ambulances with ventilator, cardiac monitor, oxygen support, and expert paramedics for critical patient care.
      Continuous monitoring and advanced medical facilities ensure maximum safety, stability, and comfort during transportation.
    </p>
  </div>

  {/* Dead Body Ambulance */}
  <div className="bg-white border-2 border-gray-300 p-5 sm:p-6 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[#1e4d83]">
      Dead Body Ambulance
    </h2>
    <p className="text-xs sm:text-sm leading-relaxed text-[#1e4d83]">
      Respectful and hygienic dead body transportation services with freezer box facility available on request for preservation.
      We ensure dignity, proper handling, and timely transportation for both local and long-distance transfers.
    </p>
  </div>

  {/* Outstation Ambulance */}
  <div className="bg-[#1e4d83] text-white p-5 sm:p-6 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
      Outstation Ambulance
    </h2>
    <p className="text-xs sm:text-sm leading-relaxed">
      Safe and comfortable long-distance ambulance services with professional medical supervision across cities and states.
      Our outstation ambulances focus on patient comfort, reliability, and timely support for intercity and interstate medical travel.
    </p>
  </div>

</div>

        </div>
      </div>
    </div>
  );
}
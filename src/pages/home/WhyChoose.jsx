import React from 'react';
import { Link } from 'react-router-dom';

export default function WhyChoose() {
  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 sm:p-6 md:p-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Left Section - Content */}
          <div className="flex-1 w-full">
            <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-bold text-[#1e4d83] mb-3 sm:mb-4 font-serif">
              Why 
              <span className="text-[#a81514] ml-2">
                Choose Us
              </span>
            </h2>
            
            <p className="text-gray-600 text-[13px] sm:text-[14px] leading-[1.6] mb-4 sm:mb-6">
              Choose us for standout transport to exceptional service, advanced technology, and a commitment to excellence. With years of industry experience, a skilled team, and a customer-first approach, we deliver reliable, innovative solutions tailored to your needs. Partner with us for a transportation experience you can trust.
            </p>

            {/* Features List */}
            <div className="space-y-3 sm:space-y-4 mb-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1e4d83] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1e4d83] font-bold text-[14px] sm:text-[15px] mb-1">Reliability</h3>
                  <p className="text-gray-600 text-[12px] sm:text-[13px] leading-[1.5]">
                    We ensure on-time service with dependable, well-maintained vehicles and professional drivers.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1e4d83] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1e4d83] font-bold text-[14px] sm:text-[15px] mb-1">Safety</h3>
                  <p className="text-gray-600 text-[12px] sm:text-[13px] leading-[1.5]">
                    Your safety is our priority. We follow strict protocols and use advanced safety features.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1e4d83] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1e4d83] font-bold text-[14px] sm:text-[15px] mb-1">Experienced Team</h3>
                  <p className="text-gray-600 text-[12px] sm:text-[13px] leading-[1.5]">
                    Our team brings years of expertise to deliver exceptional service and handle any situation.
                  </p>
                </div>
              </div>
            </div>

            {/* Read More Button */}
            <Link to='/about'>
              <button className="bg-[#a81514] text-white px-5 sm:px-6 py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-semibold rounded hover:bg-[#163a63] transition-colors w-full sm:w-auto">
                Read More
              </button>
            </Link>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-[450px] flex-shrink-0 mt-4 lg:mt-0">
            <img 
              src="/dhanLakshmi-img/14.jpg" 
              alt="Ambulance at night" 
              className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
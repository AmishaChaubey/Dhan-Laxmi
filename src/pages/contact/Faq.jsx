import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    // Ambulance Services
    {
      question: "What types of ambulance services do you provide?",
      answer: "We offer comprehensive ambulance services including emergency medical transportation, ICU-equipped ambulances, hearse vans for dignified transfers, and specialized vehicles for long-distance body transportation across all major cities.",
      category: "Ambulance"
    },
    {
      question: "How quickly can an ambulance reach my location?",
      answer: "Our emergency ambulance service ensures rapid response with average arrival times of 15-30 minutes in urban areas. We operate 24/7 with strategically located ambulance stations to minimize response time during critical situations.",
      category: "Ambulance"
    },
    {
      question: "Are your ambulances equipped with medical facilities?",
      answer: "Yes, our ambulances are fully equipped with oxygen cylinders, cardiac monitors, first aid supplies, and stretchers. Our ICU ambulances include ventilators, defibrillators, and advanced life support systems for critical patients during transportation.",
      category: "Ambulance"
    },
   
    // Funeral Services
    {
      question: "What comprehensive funeral services do you offer?",
      answer: "We provide complete end-to-end funeral arrangements including body collection, embalming, casket selection, transportation, funeral venue booking, priest coordination, documentation assistance, and cremation or burial services across all religious traditions.",
      category: "Funeral"
    },
    {
      question: "How quickly can you arrange a freezer box after a death occurs?",
      answer: "We ensure prompt delivery of dead body freezer boxes within 30-45 minutes anywhere in the city. Our 24×7 service includes professional setup, temperature monitoring, and extended preservation options for families needing time for relatives to arrive.",
      category: "Funeral"
    },
    {
      question: "Do you assist with legal documentation required after death?",
      answer: "Yes, our team provides complete assistance with death certificate preparation, medical documentation, cremation/burial permits, and other necessary paperwork. We guide families through the entire process to ensure all legal requirements are properly fulfilled.",
      category: "Funeral"
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Responsive */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#1e4d83]/10 rounded-full mb-3 sm:mb-4">
            <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#1e4d83]" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e4d83] mb-3 sm:mb-4 md:mb-5 px-4">
            Frequently <span className="text-[#a81514]">Asked Questions</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Find answers to common questions about our ambulance and funeral services. Still need help? Contact our 24×7 support team — we're here to assist you anytime.
          </p>
        </div>
        
        {/* FAQ Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`
                border rounded-xl sm:rounded-2xl bg-white shadow-sm border-gray-200 
                transition-all duration-300 hover:shadow-lg hover:border-[#1e4d83]/20
                ${openIndex === index ? 'ring-2 ring-[#1e4d83]/20 shadow-md' : ''}
              `}
            >
              {/* Question Button - Responsive */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 text-left group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex-1 min-w-0">
                  {/* Category Badge - Only on desktop */}
                  {faq.category && (
                    <span className="hidden sm:inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-[#1e4d83] bg-[#1e4d83]/10 rounded-full mb-2">
                      {faq.category}
                    </span>
                  )}
                  
                  <span className="font-medium text-sm sm:text-base md:text-lg text-gray-800 group-hover:text-[#1e4d83] transition-colors block leading-snug">
                    {faq.question}
                  </span>
                </div>
                
                {/* Icon - Responsive */}
                <ChevronDown
                  className={`
                    w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-[#1e4d83]
                    transform transition-all duration-300 flex-shrink-0 mt-0.5
                    ${openIndex === index ? "rotate-180 text-[#1e4d83]" : ""}
                  `}
                />
              </button>
              
              {/* Answer - Responsive with animation */}
              <div
                id={`faq-answer-${index}`}
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${openIndex === index ? 'max-h-96' : 'max-h-0'}
                `}
              >
                <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 pt-2 sm:pt-3 text-gray-600 text-xs sm:text-sm md:text-base border-t border-gray-100 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
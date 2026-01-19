import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, CheckCircle } from "lucide-react";

// --- Toast Notification Component ---
const Toast = ({ message, show, onClose }) => {
  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-20 sm:top-24 right-3 sm:right-4 z-[100] bg-white border-l-4 border-green-500 shadow-xl rounded-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3 animate-[slideIn_0.3s_ease-out] min-w-[280px] sm:min-w-[300px] max-w-[calc(100vw-24px)]">
      <div className="text-green-500 bg-green-50 p-1.5 sm:p-2 rounded-full flex-shrink-0">
        <CheckCircle size={18} className="sm:w-5 sm:h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Success!</h4>
        <p className="text-xs sm:text-sm text-gray-600 truncate">{message}</p>
      </div>
    </div>
  );
};

// --- Booking Modal Component ---
const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your API logic here
    onClose(true); // Pass true to indicate success
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 sm:px-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => onClose(false)}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-md rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden animate-[slideUp_0.3s_ease-out] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#1e4d83] px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center flex-shrink-0">
          <h3 className="text-white text-lg sm:text-xl font-semibold">Book Ambulance</h3>
          <button
            onClick={() => onClose(false)}
            className="text-white/80 hover:text-white transition-colors p-1"
          >
            <X size={22} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Form - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
              <input
                type="text"
                required
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e4d83] focus:border-[#1e4d83] outline-none transition-all"
                placeholder="Enter full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                required
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e4d83] focus:border-[#1e4d83] outline-none transition-all"
                placeholder="e.g., 9711875038"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
              <select className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e4d83] focus:border-[#1e4d83] outline-none transition-all bg-white">
                <option>General Ambulance</option>
                <option>ICU Ventilator Ambulance</option>
                <option>Air Ambulance</option>
                <option>Dead Body Freezer Box</option>
                <option>Emergency Transfer</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#a81514] hover:bg-[#8b1110] text-white font-semibold py-2.5 sm:py-3 text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transform transition-all active:scale-95"
            >
              Confirm Booking
            </button>

            <p className="text-xs text-center text-gray-500 mt-2">
              We will call you back immediately to confirm.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Main Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileNetworkOpen, setMobileNetworkOpen] = useState(false);
  
  // Modal and Toast States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });

  const location = useLocation();

  const services = [
    { title: "Ambulance Services", slug: "ambulance-services" },
     { title: "Nursing Care Services", slug: "nursing-care-services" },
    { title: "Road Ambulance Services", slug: "road-ambulance-services" },
    { title: "Dead Body Ambulance Services", slug: "deadbody-ambulance-services" },
    { title: "Ventilator Ambulance Services", slug: "ventilator-ambulance-services" },
    { title: "Air Ambulance Services", slug: "air-ambulance-services" },
    { title: "Train Ambulance Services", slug: "train-ambulance-services" },
    { title: "DeadBody Freezer Box At Home", slug: "deadbody-freezer-box-at-home" },
    { title: "ICU Ambulance Services", slug: "icu-ambulance-services" },
    { title: "AC Ambulance Services", slug: "ac-ambulance-services" },
    { title: "Cardiac Care Ambulance", slug: "cardiac-care-ambulance" },
    { title: "Oxygen System Ambulance Services", slug: "oxygen-system-ambulance-services" },
  ];

  const networks = [
    { title: "Ambulance Service in Saket", slug: "ambulance-service-in-saket" },
    { title: "Ambulance Service in Greater Kailash", slug: "ambulance-service-in-greater-kailash" },
    { title: "Ambulance Service in Green Park", slug: "ambulance-service-in-green-park" },
    { title: "Ambulance Service in Hauz Khas", slug: "ambulance-service-in-hauz-khas" },
    { title: "Ambulance Service in Malviya Nagar", slug: "ambulance-service-in-malviya-nagar" },
    { title: "Ambulance Service in South Delhi", slug: "ambulance-service-in-south-delhi" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleModalClose = (success = false) => {
    setIsModalOpen(false);
    if (success) {
      setToast({ show: true, message: "Booking request sent successfully!" });
    }
  };

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white fixed w-full top-0 z-50 shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">

            {/* LOGO - Responsive Size */}
            <Link to="/" className="flex items-center transform transition-transform duration-300 hover:scale-105">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="object-contain h-10 w-auto sm:h-12 md:h-14 lg:h-16"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
              <Link
                to="/"
                className={`font-medium relative group transition-colors duration-300 text-sm xl:text-base ${
                  isActive("/") ? "text-[#1e4d83]" : "text-gray-600 hover:text-[#1e4d83]"
                }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1e4d83] transition-all duration-300 group-hover:w-full ${
                  isActive("/") ? "w-full" : ""
                }`}></span>
              </Link>

              <Link
                to="/about"
                className={`font-medium relative group transition-colors duration-300 text-sm xl:text-base ${
                  isActive("/about") ? "text-[#1e4d83]" : "text-gray-600 hover:text-[#1e4d83]"
                }`}
              >
                About Us
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1e4d83] transition-all duration-300 group-hover:w-full ${
                  isActive("/about") ? "w-full" : ""
                }`}></span>
              </Link>

              {/* SERVICES DROPDOWN */}
              <div className="relative group">
                <button className="flex items-center gap-1 font-medium text-gray-600 hover:text-[#1e4d83] transition-colors duration-300 text-sm xl:text-base">
                  Services 
                  <ChevronDown size={14} className="xl:w-4 xl:h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1e4d83] transition-all duration-300 group-hover:w-full"></span>

                <div className="absolute left-0 top-full pt-3 w-72 xl:w-80
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white rounded-2xl shadow-2xl border p-2 max-h-96 overflow-y-auto custom-scrollbar
                    animate-in fade-in slide-in-from-top-2">
                    {services.map((s, i) => (
                      <Link
                        key={i}
                        to={`/services/${s.slug}`}
                        className="block px-3 xl:px-4 py-2.5 xl:py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 
                          text-sm text-gray-700 hover:text-[#1e4d83] transition-all duration-200
                          hover:translate-x-1 hover:shadow-sm"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* NETWORK DROPDOWN */}
              <div className="relative group">
                <button className="flex items-center gap-1 font-medium text-gray-600 hover:text-[#1e4d83] transition-colors duration-300 text-sm xl:text-base">
                  Network 
                  <ChevronDown size={14} className="xl:w-4 xl:h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1e4d83] transition-all duration-300 group-hover:w-full"></span>

                <div className="absolute left-0 top-full pt-3 w-72 xl:w-80
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white rounded-2xl shadow-2xl border p-2
                    animate-in fade-in slide-in-from-top-2">
                    {networks.map((n, i) => (
                      <Link
                        key={i}
                        to={`/network/${n.slug}`}
                        className="block px-3 xl:px-4 py-2.5 xl:py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 
                          text-sm text-gray-700 hover:text-[#1e4d83] transition-all duration-200
                          hover:translate-x-1 hover:shadow-sm"
                      >
                        {n.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link 
                to="/gallery" 
                className="font-medium text-gray-600 hover:text-[#1e4d83] relative group transition-colors duration-300 text-sm xl:text-base"
              >
                Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1e4d83] transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link 
                to="/contact" 
                className="font-medium text-gray-600 hover:text-[#1e4d83] relative group transition-colors duration-300 text-sm xl:text-base"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1e4d83] transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* BOOK NOW BUTTON */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#a81514] text-white px-4 xl:px-5 py-2 xl:py-2.5 rounded-lg flex items-center gap-1.5 xl:gap-2 
                  transform transition-all duration-300 hover:bg-[#8b1110] hover:shadow-lg hover:scale-105
                  active:scale-95 text-sm xl:text-base whitespace-nowrap"
              >
                <Phone size={14} className="xl:w-4 xl:h-4 animate-pulse" /> Book Now
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? 
                <X size={24} className="transition-transform duration-300 rotate-90" /> : 
                <Menu size={24} className="transition-transform duration-300" />
              }
            </button>
          </div>
        </div>

        {/* MOBILE MENU - Fixed scrolling issue */}
        {isOpen && (
          <>
            {/* Backdrop for mobile menu */}
            <div 
              className="lg:hidden fixed inset-0 bg-black/20 z-40 top-16 sm:top-18"
              onClick={() => setIsOpen(false)}
            ></div>
            
            {/* Mobile menu content */}
            <div className="lg:hidden fixed top-16 sm:top-18 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto shadow-2xl animate-in slide-in-from-top duration-300">
              <div className="px-4 py-4 space-y-2 pb-safe">
                <Link 
                  to="/" 
                  onClick={() => setIsOpen(false)}
                  className={`block py-2.5 px-4 rounded-lg transition-all duration-200 hover:translate-x-1 ${
                    isActive("/") ? "bg-blue-50 text-[#1e4d83] font-medium" : "hover:bg-gray-100"
                  }`}
                >
                  Home
                </Link>
                
                <Link 
                  to="/about" 
                  onClick={() => setIsOpen(false)}
                  className={`block py-2.5 px-4 rounded-lg transition-all duration-200 hover:translate-x-1 ${
                    isActive("/about") ? "bg-blue-50 text-[#1e4d83] font-medium" : "hover:bg-gray-100"
                  }`}
                >
                  About Us
                </Link>

                {/* Services Dropdown */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex justify-between items-center w-full py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-all duration-200"
                  >
                    <span className="font-medium">Services</span>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="mt-1 ml-2 pl-3 border-l-2 border-gray-200 space-y-1 animate-in slide-in-from-left duration-300 max-h-64 overflow-y-auto">
                      {services.map((s, i) => (
                        <Link
                          key={i}
                          to={`/services/${s.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 px-3 text-sm rounded-lg hover:bg-blue-50 hover:text-[#1e4d83] 
                            transition-all duration-200 hover:translate-x-1"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Network Dropdown */}
                <div>
                  <button
                    onClick={() => setMobileNetworkOpen(!mobileNetworkOpen)}
                    className="flex justify-between items-center w-full py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-all duration-200"
                  >
                    <span className="font-medium">Network</span>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-300 ${mobileNetworkOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  {mobileNetworkOpen && (
                    <div className="mt-1 ml-2 pl-3 border-l-2 border-gray-200 space-y-1 animate-in slide-in-from-left duration-300">
                      {networks.map((n, i) => (
                        <Link
                          key={i}
                          to={`/network/${n.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 px-3 text-sm rounded-lg hover:bg-blue-50 hover:text-[#1e4d83] 
                            transition-all duration-200 hover:translate-x-1"
                        >
                          {n.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link 
                  to="/gallery" 
                  onClick={() => setIsOpen(false)}
                  className={`block py-2.5 px-4 rounded-lg transition-all duration-200 hover:translate-x-1 ${
                    isActive("/gallery") ? "bg-blue-50 text-[#1e4d83] font-medium" : "hover:bg-gray-100"
                  }`}
                >
                  Gallery
                </Link>

                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className={`block py-2.5 px-4 rounded-lg transition-all duration-200 hover:translate-x-1 ${
                    isActive("/contact") ? "bg-blue-50 text-[#1e4d83] font-medium" : "hover:bg-gray-100"
                  }`}
                >
                  Contact
                </Link>

                {/* Book Now Button */}
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full bg-[#a81514] text-white px-5 py-3 rounded-lg text-center mt-4
                    transform transition-all duration-300 hover:bg-[#8b1110] active:scale-95
                    flex items-center justify-center gap-2 font-medium"
                >
                  <Phone size={18} className="animate-pulse" /> Book Now
                </button>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Modal & Toast Render */}
      <BookingModal isOpen={isModalOpen} onClose={handleModalClose} />
      <Toast 
        show={toast.show} 
        message={toast.message} 
        onClose={() => setToast({ ...toast, show: false })} 
      />

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Safe area for mobile devices with notches */
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}</style>
    </>
  );
};

export default Navbar;
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Calendar, Clock, ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import FAQ from "./Faq";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [showCalendar, setShowCalendar] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", 
    "15:00", "16:00", "17:00", "18:00", "19:00"
  ];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (form.phone && !/^\+?[0-9\-()\s]{7,}$/.test(form.phone))
      e.phone = "Enter a valid phone";
    if (!form.message.trim()) e.message = "Please write a short message";
    if (!form.date) e.date = "Please select a preferred date";
    if (!form.time) e.time = "Please select a preferred time";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setTimeout(() => setSubmitted(true), 400);
  };

  const handleDateChange = (selectedDate) => {
    setForm({ ...form, date: selectedDate });
    setShowCalendar(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const inputC =
    "w-full rounded-xl border border-gray-200 focus:border-[#1e4d83] focus:ring-2 focus:ring-[#1e5a94] outline-none px-3 py-2.5 sm:px-4 sm:py-3 bg-white/80 placeholder:text-gray-400 transition-all";

  const CalendarComponent = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());
    
    const days = [];
    const currentDate = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const isToday = (date) => {
      const today = new Date();
      return date.toDateString() === today.toDateString();
    };

    const isPastDate = (date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date < today;
    };

    const isCurrentMonth = (date) => date.getMonth() === currentMonth.getMonth();

    const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));

    return (
      <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl p-3 sm:p-4 z-50 w-[calc(100vw-2rem)] sm:w-80 md:w-96 max-w-[400px]">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <button 
            type="button" 
            onClick={prevMonth} 
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors text-lg sm:text-xl"
          >
            ←
          </button>
          <h3 className="font-semibold text-sm sm:text-base">
            {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h3>
          <button 
            type="button" 
            onClick={nextMonth} 
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors text-lg sm:text-xl"
          >
            →
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-0.5 sm:gap-1 mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
            <div key={idx} className="text-center text-[10px] sm:text-xs font-medium text-gray-500 py-1 sm:py-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
          {days.map((date, index) => (
            <button
              key={index}
              type="button"
              onClick={() => !isPastDate(date) && handleDateChange(date.toISOString().split('T')[0])}
              disabled={isPastDate(date)}
              className={`
                p-1 sm:p-2 text-[10px] sm:text-sm rounded transition-colors
                ${isToday(date) ? 'bg-[#1e5a94]/20 text-[#1e4d83] font-semibold' : ''}
                ${!isCurrentMonth(date) ? 'text-gray-300' : 'text-gray-700'}
                ${isPastDate(date) ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-[#1e4d83]/10'}
                ${form.date === date.toISOString().split('T')[0] ? 'bg-[#1e4d83] text-white' : ''}
              `}
            >
              {date.getDate()}
            </button>
          ))}
        </div>
      </div>
    );
  };

  React.useEffect(() => window.scrollTo(0, 0), []);

  // Close calendar on outside click
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (showCalendar && !e.target.closest('.calendar-container')) {
        setShowCalendar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCalendar]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Banner Section - Fully Responsive */}
   <div
  className="relative h-[35vh] min-h-[250px] sm:h-[40vh] sm:min-h-[300px] md:h-[50vh] md:min-h-[350px] lg:h-[60vh] lg:min-h-[450px] xl:h-[70vh] xl:min-h-[500px] flex items-center mt-3 sm:mt-5 md:mt-7 lg:mt-9 overflow-hidden"
>
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/banner-img/27.png"
      alt="Contact Us Banner"
      className="w-full h-full object-cover object-center"
      style={{ objectPosition: 'center 40%' }}
    />
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-900/60"></div>
  </div>

  {/* Banner Content - LEFT */}
  <div className="relative z-10 text-left px-6 sm:px-10 md:px-16 lg:px-24 max-w-xl">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-serif mb-2 sm:mb-3 md:mb-4 drop-shadow-2xl">
      Contact Us
    </h1>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 drop-shadow-lg">
      We're here to help you 24/7
    </p>

    <div className="w-14 sm:w-16 md:w-24 h-1 bg-[#a81514] mt-3 rounded-full"></div>
  </div>
</div>


      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 top-16 sm:top-18 lg:top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <nav className="flex items-center space-x-2 text-sm sm:text-base">
            <Link 
              to="/" 
              className="flex items-center gap-1.5 text-slate-600 hover:text-[#1e4d83] transition-colors group"
            >
              <Home size={16} className="sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform" />
              <span className="font-medium">Home</span>
            </Link>
            
            <ChevronRight size={16} className="text-slate-400 sm:w-[18px] sm:h-[18px]" />
            
            <span className="text-[#1e4d83] font-semibold">Contact</span>
          </nav>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-stretch">
          
          {/* Image Section - Responsive */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl order-2 lg:order-1 group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>
            <img
              src="/services/contact.png"
              alt="Service welcome"
              className="h-full w-full object-cover min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 p-4 sm:p-6 md:p-8 lg:p-10 text-white z-20">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/80 mb-1 sm:mb-2">Get in touch</p>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-2 sm:mb-3">
                Compassionate & Dignified Services
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-xl leading-relaxed">
                Reach out to us for funeral support or dead body freezer rentals. Our trained team ensures dignity and care.
              </p>

              <div className="mt-3 sm:mt-4 md:mt-6 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                <a
                  href="tel:+919711875038"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-[#a81514] px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm hover:bg-[#8b1110] transition-all hover:shadow-lg"
                >
                  <Phone size={12} className="sm:w-4 sm:h-4" /> 
                  <span className="whitespace-nowrap">+91-9711875038</span>
                </a>
                <a
                  href="mailto:dhanlaxmiambulance@gmail.com"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-[#a81514] px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm hover:bg-[#8b1110] transition-all hover:shadow-lg"
                >
                  <Mail size={12} className="sm:w-4 sm:h-4" /> 
                  <span className="hidden sm:inline">dhanlaxmiambulance@gmail.com</span>
                  <span className="sm:hidden">Email Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Responsive */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="mb-4 sm:mb-6">
                <p className="text-xs sm:text-sm font-medium text-[#1e4d83]">Contact Us</p>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#a81514] font-serif">
                  Let's Assist You
                </h2>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-500">
                  Fill the form and our support team will reach you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-xl sm:rounded-2xl border border-green-200 bg-green-50 p-4 sm:p-6 animate-in fade-in duration-300">
                  <p className="text-green-700 font-medium text-sm sm:text-base">
                    ✓ Thank you! Your message has been sent.
                  </p>
                  <p className="text-green-700/80 text-xs sm:text-sm mt-1">
                    Our team will get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm text-[#1e4d83] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  
                  {/* Name & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className={`${inputC} text-sm sm:text-base ${errors.name ? 'border-red-300' : ''}`}
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        aria-invalid={!!errors.name}
                        aria-describedby="name-error"
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        className={`${inputC} text-sm sm:text-base ${errors.phone ? 'border-red-300' : ''}`}
                        placeholder="+91 XXXXXXXXXX"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        aria-invalid={!!errors.phone}
                        aria-describedby="phone-error"
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-xs text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className={`${inputC} text-sm sm:text-base ${errors.email ? 'border-red-300' : ''}`}
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      aria-invalid={!!errors.email}
                      aria-describedby="email-error"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="relative calendar-container">
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          className={`${inputC} cursor-pointer text-sm sm:text-base pr-10 ${errors.date ? 'border-red-300' : ''}`}
                          placeholder="Select date"
                          value={form.date ? formatDate(form.date) : ""}
                          onClick={() => setShowCalendar(!showCalendar)}
                          readOnly
                          aria-invalid={!!errors.date}
                          aria-describedby="date-error"
                        />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none" />
                        {showCalendar && <CalendarComponent />}
                      </div>
                      {errors.date && (
                        <p id="date-error" className="mt-1 text-xs text-red-600">{errors.date}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          className={`${inputC} appearance-none cursor-pointer text-sm sm:text-base pr-10 ${errors.time ? 'border-red-300' : ''}`}
                          value={form.time}
                          onChange={(e) =>
                            setForm({ ...form, time: e.target.value })
                          }
                          aria-invalid={!!errors.time}
                          aria-describedby="time-error"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                        <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      {errors.time && (
                        <p id="time-error" className="mt-1 text-xs text-red-600">{errors.time}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className={`${inputC} min-h-[100px] sm:min-h-[120px] resize-y text-sm sm:text-base ${errors.message ? 'border-red-300' : ''}`}
                      placeholder="Describe your requirement: Ambulance, funeral support or any questions…"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      aria-invalid={!!errors.message}
                      aria-describedby="message-error"
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#a81514] text-white font-semibold shadow-lg hover:bg-[#8b1110] active:scale-[.98] transition-all text-sm sm:text-base"
                  >
                    <Send size={16} className="sm:w-5 sm:h-5" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <FAQ/>
      </section>

      {/* Map Section - Responsive */}
      <section className="bg-gray-50 py-8 sm:py-12 lg:py-16">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1e4d83] mb-2 sm:mb-3 md:mb-4 font-serif">
            Find <span className="text-[#a81514]">Our Facility</span>
          </h2>
          <p className="mb-6 sm:mb-8 md:mb-10 text-center text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Visit our facility for professional funeral support and dead body freezer services.
          </p>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.370863877573!2d77.20942117421832!3d28.528570488796458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f5d682a9c1%3A0xf9afa04acf6c19b1!2sRZ%20-140%2C%20Press%20Enclave%20Marg%2C%20Hauz%20Rani%2C%20Malviya%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110017!5e0!3m2!1sen!2sin!4v1767793627937!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location Map"
            />
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
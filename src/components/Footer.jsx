// components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart, Facebook, Twitter, Instagram, Linkedin, ChevronRight, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <>
       <style jsx>{`
        :root {
          --primary-color: #1e4d83;
          --primary-light: #1e4d83;
          --primary-lighter: #2a66a8;
          --primary-accent: #ffffff;
          --text-white: #ffffff;
          --text-muted: rgba(255, 255, 255, 0.75);
        }

        .footer-gradient {
          background: linear-gradient(
            135deg,
            var(--primary-color),
            var(--primary-light)
          );
        }

        .footer-text {
          color: var(--text-white);
        }

        .footer-text-muted {
          color: var(--text-muted);
        }

        .footer-link {
          color: #ffffff;
          position: relative;
          transition: all 0.3s ease;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #ffffff;
          transition: width 0.3s ease;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background-color: var(--primary-lighter);
          transform: translateY(-3px);
        }

        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #1e4d83;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }
      `}</style>

 
      
      <footer className="footer-gradient pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center  w-36 h-20">
                <img src='/logo.png'/>
              </div>
              <p className="footer-text-muted mb-6 leading-relaxed">
Dedicated to saving lives through prompt, well-equipped ambulance services and trained medical support.              </p>
              <div className="flex space-x-3">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold footer-text mb-6 relative pb-2">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-accent"></span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/" className="footer-link">Home</Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/about" className="footer-link">About Us</Link>
                </li>
              
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/gallery" className="footer-link">Gallery</Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/contact" className="footer-link">Contact</Link>
                </li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold footer-text mb-6 relative pb-2">
                Our Services
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-accent"></span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/services/ambulance-services" className="footer-link">Ambulance Services</Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/services/road-ambulance-services" className="footer-link">Road Ambulance Services</Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/services/deadbody-ambulance-services" className="footer-link">DeadBody Ambulance Services</Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/services/ventilator-ambulance-services" className="footer-link">Ventilator Ambulance Services</Link>
                </li>
                  <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/services/air-ambulance-services" className="footer-link">Air Amulance Services</Link>
                </li>
 <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="services/train-ambulance-services" className="footer-link">Train Amulance Services</Link>
                </li>
                 <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-white" />
                  <Link to="/services/deadbody-freezer-box-at-home" className="footer-link">Deadbody Freezer Box At Home</Link>
                </li>

              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold footer-text mb-6 relative pb-2">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-accent"></span>
              </h3>
              <ul className="space-y-4">
                <li className="contact-item flex items-start">
                  <Phone className="contact-icon w-5 h-5 mr-3 mt-0.5 text-white" />
                  <div>
                    <a href="tel: +91-9711875038" className="footer-text">+91-9711875038</a>
                    <p className="footer-text-muted text-sm">Mon-Fri: 9am-6pm</p>
                  </div>
                </li>
                <li className="contact-item flex items-start">
                  <Mail className="contact-icon w-5 h-5 mr-3 mt-0.5 text-white" />
                  <a href="mailto:dhanlaxmiambulance@gmail.com" className="footer-text">dhanlaxmiambulance@gmail.com</a>
                </li>
                <li className="contact-item flex items-start">
                  <MapPin className="contact-icon w-5 h-5 mr-3 mt-0.5 text-white" />
                  <div className="footer-text">
                    <p>RZ -140 , Press Enclave Marg,</p>
                    <p className="footer-text-muted">New Delhi - 110017</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-12">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-4 lg:mb-0 lg:mr-8">
                <h3 className="text-xl font-semibold footer-text mb-2">Stay Connected</h3>
                <p className="footer-text-muted">Subscribe to our newsletter for updates and resources</p>
              </div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full lg:w-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input mb-3 sm:mb-0 sm:mr-3 w-full lg:w-64 border-gray-400 border-1 rounded text-center text-white"
                  required
                />
                <button type="submit" className="newsletter-button w-full sm:w-auto bg-red-600 text-white p-2 rounded">
                  Subscribe
                </button>
              </form>
              {subscribed && <p className="success-message">Thank you for subscribing!</p>}
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <p className="footer-text-muted text-sm mb-4 md:mb-0">
                © {currentYear} Dhanlaxmi Ambulance Service. All rights reserved.
              </p>
          
            </div>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <div 
          className={`back-to-top ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
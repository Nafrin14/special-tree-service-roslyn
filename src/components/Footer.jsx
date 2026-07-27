import { Link } from "react-router-dom";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiTwitter
} from "react-icons/fi";

function Footer() {
  const services = [
    "Tree Removal",
    "Tree Trimming",
    "Tree Pruning",
    "Stump Grinding",
    "Emergency Tree Service"
  ];

  return (
    <footer className="bg-emerald-950 text-emerald-50 pt-20 pb-10 relative overflow-hidden">
      
      {/* Decorative Tree Silhouette (Abstract) */}
      <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 12h3v10h10V12h3L12 2zm0 4.8l4.4 5.2h-2.4l1.6 4h-7.2l1.6-4H7.6L12 6.8z"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company */}
          <div>
            <h2 className="text-2xl font-black text-emerald-400 mb-6 leading-tight">
              Special Tree <br/>
              <span className="text-emerald-50">Service Roslyn</span>
            </h2>
            <p className="text-emerald-200/80 mb-8 leading-relaxed">
              Professional tree care services dedicated to safety, quality, and the beautification of your outdoor spaces.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300">
                <FiFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300">
                <FiInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300">
                <FiTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <a href="/" className="text-emerald-200/80 hover:text-emerald-400 transition-colors w-fit">Home</a>
              <a href="/#about" className="text-emerald-200/80 hover:text-emerald-400 transition-colors w-fit">About Us</a>
              <a href="/#services" className="text-emerald-200/80 hover:text-emerald-400 transition-colors w-fit">Services</a>
               <a href="/#blog" className="text-emerald-200/80 hover:text-emerald-400 transition-colors w-fit">Blog</a>
              <a href="/#contact" className="text-emerald-200/80 hover:text-emerald-400 transition-colors w-fit">Contact</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Our Services</h3>
            <div className="flex flex-col gap-3">
              {services.map((service, index) => (
                <span key={index} className="text-emerald-200/80">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Get In Touch</h3>
            <div className="flex flex-col gap-4">
              <a href="tel:+10000000000" className="flex items-center gap-3 text-emerald-200/80 hover:text-emerald-400 transition-colors">
                <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center shrink-0 text-emerald-400">
                  <FiPhone />
                </div>
                516-882-3300
              </a>
             
              <div className="flex items-center gap-3 text-emerald-200/80">
                <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center shrink-0 text-emerald-400">
                  <FiMapPin />
                </div>
                Roslyn, NY
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-emerald-900 flex flex-col md:flex-row items-center justify-between gap-4 text-emerald-200/60 text-sm">
          <p>
            © {new Date().getFullYear()} Special Tree Service Roslyn. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-emerald-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
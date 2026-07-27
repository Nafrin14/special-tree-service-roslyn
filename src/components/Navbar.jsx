import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import logo from "../assets/images/logo-new.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Scroll spy logic
    const handleScroll = () => {
      const sections = ["about", "services", "blog", "contact"];
      let current = "";

      // If at the very top, set active to home
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset to trigger highlighting slightly before reaching the exact top
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync with manual clicks / router location
  useEffect(() => {
    if (location.hash) {
      setActiveSection(location.hash.substring(1));
    } else if (location.pathname === "/") {
      setActiveSection("");
    }
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/", id: "" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Services", href: "/#services", id: "services" },
    { name: "Blog", href: "/#blog", id: "blog" },
    { name: "Contact", href: "/#contact", id: "contact" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white py-4 shadow-md border-b border-slate-100 transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <img 
            src={logo} 
            alt="Special Tree Service" 
            className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-full bg-white shadow-sm border-2 border-emerald-100 transition-transform duration-300 group-hover:scale-105"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-black leading-none text-emerald-950">
              Special Tree
              <span className="block mt-1 text-sm md:text-base font-bold text-emerald-600">Service Roslyn</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.name} 
                href={link.href}
                className={`font-bold transition-all duration-300 relative ${isActive ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-500'}`}
              >
                {link.name}
                {/* Active Indicator Underline */}
                <span className={`absolute -bottom-2 left-0 h-1 bg-emerald-600 rounded-full transition-all duration-300 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></span>
              </a>
            )
          })}
          
          <a 
            href="tel:516-882-3300"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-black shadow-lg shadow-emerald-700/20 bg-emerald-700 hover:bg-emerald-800 text-white transition-all duration-300 hover:-translate-y-1 ml-4"
          >
            <FiPhone className="text-xl"/>
            Call Now
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl focus:outline-none text-emerald-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${open ? 'max-h-[400px] opacity-100 py-6 border-t border-slate-100' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col items-center gap-5 px-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-lg font-black transition-colors ${isActive ? 'text-emerald-600' : 'text-emerald-950 hover:text-emerald-500'}`}
              >
                {link.name}
              </a>
            )
          })}
          <a 
            href="tel:516-882-3300"
            className="flex items-center justify-center gap-2 w-full max-w-xs bg-emerald-700 text-white px-6 py-4 rounded-full font-black shadow-lg mt-4"
          >
            <FiPhone className="text-xl" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
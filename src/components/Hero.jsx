import heroImage from "../assets/images/hero.webp";
import { FiArrowRight, FiPhone, FiCheckCircle } from "react-icons/fi";

function Hero() {
  const benefits = [
    "Certified Arborists",
    "Fully Licensed & Insured",
    "24/7 Emergency Service"
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Tree care professionals at work"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle radial gradient overlay to make text pop without making the whole image dark */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/40 via-black/20 to-transparent"></div>
        {/* Bottom fade for smooth transition to next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Content Directly on Background */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        
        <div className="animate-fade-in-up w-full max-w-4xl">
          <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-emerald-500/30 text-white font-bold tracking-widest text-sm uppercase mb-6 backdrop-blur-md shadow-lg border border-emerald-400/30">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
             Tree Service in Roslyn
          </span>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Expert Tree Care <br/>
            <span className="text-emerald-400 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">For Your Home</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-100 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
            Professional, safe, and reliable tree removal, trimming, and emergency services. We protect your property and enhance your landscape's beauty.
          </p>

          {/* Benefits list */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-white font-bold text-sm md:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                <FiCheckCircle className="text-emerald-400 text-xl md:text-2xl shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#contact" className="group flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full font-black text-lg shadow-[0_10px_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:-translate-y-1">
              Get Free Estimate 
              <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform"/>
            </a>

            <a href="tel:516-882-3300" className="group flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full font-black text-lg transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              <FiPhone className="text-xl group-hover:rotate-12 transition-transform"/>
              Call Now
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero;
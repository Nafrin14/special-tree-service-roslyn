import aboutImage from "../assets/images/about.webp";
import { FiCheckCircle } from "react-icons/fi";

function About() {
  const points = [
    "Certified tree care professionals",
    "Safe and reliable tree solutions",
    "Residential and commercial services",
    "Quality work with customer satisfaction",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-100 rounded-[2rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-50"></div>
            <img
              src={aboutImage}
              alt="Tree service team"
              className="relative rounded-3xl w-full h-[500px] object-cover shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
            />
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-emerald-900 text-white p-8 rounded-3xl shadow-xl border-4 border-white transform transition-transform duration-500 group-hover:-translate-y-4">
              <h3 className="text-5xl font-black text-emerald-400 mb-1">10+</h3>
              <p className="font-semibold tracking-wide text-slate-200">Years<br/>Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8 mt-10 lg:mt-0">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 font-bold uppercase tracking-widest text-xs mb-4">
              About Our Company
            </span>
            
            <h2 className="text-4xl md:text-5xl font-black text-emerald-950 leading-tight mb-6">
              Trusted Tree Care <br className="hidden md:block"/>
              <span className="text-emerald-600 text-gradient">With Professional Expertise</span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Special Tree Service Roslyn provides dependable tree care
              solutions designed to protect your property and improve the
              beauty of your outdoor space. We treat every yard as if it were our own.
            </p>

            <div className="space-y-4 mb-10">
              {points.map((item, index) => (
                <div key={index} className="flex items-center gap-4 text-emerald-950 font-semibold group">
                  <div className="bg-emerald-100 p-2 rounded-full group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                    <FiCheckCircle className="text-emerald-600 group-hover:text-white transition-colors duration-300 text-xl" />
                  </div>
                  <span className="text-lg text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
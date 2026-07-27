import {
  FiAward,
  FiShield,
  FiTool,
  FiHeart,
} from "react-icons/fi";

function WhyChoose() {
  const features = [
    {
      title: "Experienced Professionals",
      text: "Our skilled team provides reliable tree care solutions with years of experience.",
      icon: <FiAward />,
    },
    {
      title: "Safety First Approach",
      text: "We follow professional safety practices to protect your property and surroundings.",
      icon: <FiShield />,
    },
    {
      title: "Quality Tree Solutions",
      text: "From trimming to removal, we deliver accurate and dependable services.",
      icon: <FiTool />,
    },
    {
      title: "Customer Satisfaction",
      text: "We focus on excellent service and complete customer satisfaction.",
      icon: <FiHeart />,
    },
  ];

  return (
    <section id="why" className="py-24 bg-emerald-950 relative overflow-hidden text-white">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-800/50 border border-emerald-700/50 text-emerald-300 font-bold uppercase tracking-widest text-xs mb-4 backdrop-blur-sm">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Trusted Tree Service <br/>
            <span className="text-emerald-400">You Can Depend On</span>
          </h2>
          <p className="text-lg text-emerald-100/80">
            We provide professional tree care with safety, quality, and customer-focused service at the core of everything we do.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-emerald-900/40 backdrop-blur-md border border-emerald-800/50 p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 bg-emerald-800/80 rounded-2xl flex items-center justify-center text-emerald-400 text-3xl mb-6 shadow-inner group-hover:scale-110 group-hover:bg-emerald-700 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-emerald-50">
                {item.title}
              </h3>
              <p className="text-emerald-100/70 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
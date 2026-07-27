import { FiStar } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "Michael R.",
      location: "Roslyn, NY",
      text: "Excellent tree service. The team was professional, safe, and completed the job perfectly. I was amazed at how efficiently they worked.",
    },
    {
      name: "Sarah T.",
      location: "Roslyn, NY",
      text: "Very reliable service. They removed a large tree and cleaned everything after the work. My yard looks better than ever before.",
    },
    {
      name: "David L.",
      location: "Roslyn, NY",
      text: "Great experience from start to finish. Highly recommend their tree care services to anyone needing professional help in the area.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-700 font-bold uppercase tracking-widest text-xs mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-emerald-950 mb-6">
            What Our Customers <br/>
            <span className="text-amber-600">Say About Us</span>
          </h2>
          <p className="text-lg text-slate-600">
            Trusted by homeowners who need professional and dependable tree care services. Don't just take our word for it.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-[2rem] shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 relative group"
            >
              {/* Quote Icon Background */}
              <FaQuoteLeft className="absolute top-6 right-8 text-7xl text-slate-100 group-hover:text-emerald-50 transition-colors duration-300 z-0" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar key={i} className="fill-current text-xl" />
                  ))}
                </div>

                <p className="text-slate-700 italic text-lg leading-relaxed mb-8">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-950 text-lg">
                      {review.name}
                    </h3>
                    <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
                      {review.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
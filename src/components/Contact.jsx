import { useEffect } from "react";
import { FiPhone, FiMapPin } from "react-icons/fi";

function Contact() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://link.kdlead.com/js/form_embed.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://link.kdlead.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-emerald-100 text-emerald-800 font-bold uppercase tracking-widest text-xs mb-4">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-emerald-950 mb-6">
            Get Your Free <span className="text-emerald-600">Estimate</span>
          </h2>

          <p className="text-lg text-slate-600">
            Need professional tree care services? Reach out today for a free
            consultation. Our experts are ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start max-w-6xl mx-auto">

          {/* Left */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">

            <div className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition">
              <div className="w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center text-emerald-600 text-2xl">
                <FiPhone />
              </div>

              <div>
                <small className="block text-slate-500 font-bold uppercase tracking-wider text-xs">
                  Call Us Anytime
                </small>

                <a
                  href="tel:516-882-3300"
                  className="text-2xl font-black text-emerald-950"
                >
                  516-882-3300
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition">
              <div className="w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center text-emerald-600 text-2xl">
                <FiMapPin />
              </div>

              <div>
                <small className="block text-slate-500 font-bold uppercase tracking-wider text-xs">
                  Service Area
                </small>

                <strong className="text-xl font-bold text-emerald-950">
                  Roslyn, New York
                </strong>
              </div>
            </div>

          </div>

          {/* Right */}
          <div className="lg:col-span-7 bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative">

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400 rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-400 rounded-full blur-2xl opacity-50" />

            <div className="relative z-10">

              <h3 className="text-3xl font-black text-emerald-950 mb-2 text-center">
                Request Service
              </h3>

              <p className="text-slate-500 mb-8 text-center">
                Fill out the form below and we'll get back to you shortly.
              </p>

              <div className="rounded-2xl border border-slate-200 bg-slate-50">

                <iframe
                  src="https://link.kdlead.com/widget/form/rdbfahj4lG15pdnZ5fqy"
                  id="inline-rdbfahj4lG15pdnZ5fqy"
                  title="Special Tree Service Roslyn"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-activation-type="alwaysActivated"
                  data-deactivation-type="neverDeactivate"
                  data-form-name="Special Tree Service Roslyn"
                  data-layout-iframe-id="inline-rdbfahj4lG15pdnZ5fqy"
                  data-form-id="rdbfahj4lG15pdnZ5fqy"
                  scrolling="no"
                  style={{
                    width: "100%",
                    height: "1100px",
                    border: "none",
                    display: "block",
                  }}
                />

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
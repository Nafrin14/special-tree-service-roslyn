import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function Terms() {
  const sections = [
    {
      title: "Welcome to Special Tree Service Roslyn",
      content: "By accessing this website or using our tree care services, you agree to follow these Terms and Conditions. If you do not agree with these terms, please do not use our website or services."
    },
    {
      title: "Business Identity",
      contact: true
    },
    {
      title: "Age Requirement (18+)",
      content: "By using this website or requesting our services, you confirm that you are at least 18 years old."
    },
    {
      title: "Services",
      content: "Special Tree Service Roslyn provides professional tree removal, trimming, pruning, stump grinding, and emergency tree care services."
    },
    {
      title: "SMS Messaging Terms",
      content: "By submitting your phone number through our contact forms, you agree to receive service-related messages from Special Tree Service Roslyn.",
      list: [
        "Estimate confirmations",
        "Appointment reminders",
        "Service updates",
        "Customer support messages"
      ]
    },
    {
      title: "Message Frequency",
      content: "Message frequency may vary depending on your service requests and communication needs."
    },
    {
      title: "Opt Out Instructions",
      content: "You may stop SMS messages at any time by replying STOP to any message received from us."
    },
    {
      title: "Cookies",
      content: "We may use cookies to improve website performance, user experience, and functionality."
    },
    {
      title: "Intellectual Property",
      content: "All website content, designs, images, and materials belong to Special Tree Service Roslyn unless otherwise stated. Copying or distributing content without permission is not allowed."
    },
    {
      title: "Disclaimer",
      content: "We provide professional services with care and expertise, but we are not responsible for damages caused by factors outside our control."
    },
    {
      title: "Changes To These Terms",
      content: "We may update these Terms and Conditions at any time. Updated versions will be posted on this page."
    },
    {
      title: "Contact Information",
      contact: true
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">

      {/* Page Header */}
      <div className="bg-emerald-950 py-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-emerald-300 font-semibold text-lg">
            Effective Date: January 19, 2025 &nbsp;|&nbsp; Last Updated: July 26, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl mt-16">

        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-500 transition-colors mb-10 group">
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`p-8 md:p-10 ${index !== sections.length - 1 ? 'border-b border-slate-100' : ''}`}
            >
              <h2 className="text-xl md:text-2xl font-black text-emerald-950 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 text-sm font-black flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                {section.title}
              </h2>

              {section.content && (
                <p className="text-slate-600 leading-relaxed text-lg mb-3">
                  {section.content}
                </p>
              )}

              {section.list && (
                <ul className="space-y-2 mt-3">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 text-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.contact && (
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mt-2 space-y-2">
                  <p className="font-black text-emerald-950 text-lg">Special Tree Service Roslyn</p>
                  <p className="text-slate-600">📍 Roslyn, New York</p>
                  <p className="text-slate-600">📞 <a href="tel:516-882-3300" className="text-emerald-700 font-bold hover:underline">516-882-3300</a></p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-10">
          © {new Date().getFullYear()} Special Tree Service Roslyn. All Rights Reserved.
        </p>
      </div>
    </main>
  );
}

export default Terms;
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function Privacy() {
  const sections = [
    {
      title: "Introduction",
      content: "Special Tree Service Roslyn respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect information when you visit our website or use our services."
    },
    {
      title: "Information We Collect",
      content: "We may collect personal information that you provide to us, including:",
      list: [
        "Name and contact information",
        "Phone number and email address",
        "Property details related to service requests",
        "Communication preferences"
      ]
    },
    {
      title: "How We Use Your Information",
      content: "Information collected may be used for:",
      list: [
        "Providing tree care services",
        "Scheduling appointments",
        "Responding to inquiries",
        "Sending service-related updates"
      ]
    },
    {
      title: "SMS Communications",
      content: "If you provide your phone number and consent to receive messages, Special Tree Service Roslyn may send SMS messages related to estimates, appointments, service updates, and customer support. Message frequency may vary. Message and data rates may apply. You can opt out at any time by replying STOP."
    },
    {
      title: "Cookies",
      content: "Our website may use cookies and similar technologies to improve website functionality, analyze traffic, and provide a better user experience."
    },
    {
      title: "Third-Party Services",
      content: "We may use trusted third-party services for website hosting, analytics, forms, and communication tools."
    },
    {
      title: "Data Security",
      content: "We take reasonable steps to protect your personal information. However, no online transmission method is completely secure."
    },
    {
      title: "Your Rights",
      content: "You may request information about your personal data, request corrections, or ask us to remove your information where applicable."
    },
    {
      title: "Changes To This Privacy Policy",
      content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date."
    },
    {
      title: "Contact Information",
      content: null,
      contact: true
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">

      {/* Page Header */}
      <div className="bg-emerald-950 py-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Privacy Policy
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

export default Privacy;
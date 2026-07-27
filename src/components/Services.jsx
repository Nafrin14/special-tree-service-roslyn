import {
  FiScissors,
  FiTrash2,
  FiTool,
  FiAlertTriangle,
} from "react-icons/fi";
import { FaTree, FaCloud } from "react-icons/fa";

import treeRemoval from "../assets/images/tree-removal.webp";
import treeTrimming from "../assets/images/tree-trimming.webp";
import treePruning from "../assets/images/tree-pruning.webp";
import stumpGrinding from "../assets/images/stump-grinding.webp";
import emergencyTree from "../assets/images/emergency-tree.webp";
import stormCleanup from "../assets/images/storm-cleanup.webp";

function Services() {
  const services = [
    {
      title: "Tree Removal",
      text: "Safe and professional tree removal services for your property.",
      image: treeRemoval,
      icon: <FiTrash2 />,
    },
    {
      title: "Tree Trimming",
      text: "Improve tree health and appearance with expert trimming.",
      image: treeTrimming,
      icon: <FiScissors />,
    },
    {
      title: "Tree Pruning",
      text: "Maintain strong and healthy trees with professional pruning.",
      image: treePruning,
      icon: <FaTree />,
    },
    {
      title: "Stump Grinding",
      text: "Remove unwanted stumps and restore your outdoor space.",
      image: stumpGrinding,
      icon: <FiTool />,
    },
    {
      title: "Emergency Tree Service",
      text: "Fast response for fallen trees and storm damage.",
      image: emergencyTree,
      icon: <FiAlertTriangle />,
    },
    {
      title: "Storm Cleanup",
      text: "Complete cleanup after storms and severe weather.",
      image: stormCleanup,
      icon: <FaCloud />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 font-bold uppercase tracking-widest text-xs mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-emerald-950 mb-6">
            Professional <span className="text-emerald-600 text-gradient">Tree Care</span> Solutions
          </h2>
          <p className="text-lg text-slate-600">
            Reliable tree services designed to keep your property safe and beautiful. From routine trimming to emergency removal.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Section */}
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Floating Icon */}
                <div className="absolute bottom-4 left-6 z-20 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 text-2xl shadow-xl transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-emerald-950 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  {item.text}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center font-bold text-emerald-700 hover:text-amber-600 transition-colors duration-300 group/link"
                >
                  Learn More 
                  <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
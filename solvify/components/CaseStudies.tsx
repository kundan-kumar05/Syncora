"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, ArrowRight } from "lucide-react";

const cases = [
  {
    client: "GlobalMed Healthcare",
    industry: "Healthcare",
    challenge: "Manual billing processes causing 3–5 day payment delays and 18% error rate in claims.",
    solution: "Deployed Solvify Finance & HRM modules with automated insurance claims processing and real-time eligibility checks.",
    results: ["60% faster billing cycles", "Error rate reduced to 0.3%", "$2.4M annual savings", "98% staff satisfaction"],
    color: "from-red-500 to-pink-500",
    logo: "GM",
    logoColor: "from-red-500 to-pink-600",
  },
  {
    client: "TechCorp Manufacturing",
    industry: "Manufacturing",
    challenge: "Disconnected production planning and inventory systems causing 25% overstock and frequent stockouts.",
    solution: "Integrated Solvify Manufacturing, Inventory, and Procurement modules with AI-driven demand forecasting.",
    results: ["40% reduction in stockouts", "Inventory costs down 32%", "OEE improved to 87%", "ROI in 6 months"],
    color: "from-blue-500 to-cyan-500",
    logo: "TC",
    logoColor: "from-blue-500 to-cyan-600",
  },
  {
    client: "RetailPro Stores",
    industry: "Retail",
    challenge: "Omnichannel inventory chaos with no real-time visibility across 120+ store locations.",
    solution: "Unified POS, inventory, and CRM on Solvify with real-time dashboards and automated replenishment.",
    results: ["3x inventory turnover", "15% revenue increase", "120 stores unified", "Customer NPS +42 pts"],
    color: "from-amber-500 to-orange-500",
    logo: "RP",
    logoColor: "from-amber-500 to-orange-600",
  },
];

export default function CaseStudies() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="case-studies" className="section-padding relative overflow-hidden" style={{ background: "#0a192f" }}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-green-400 bg-green-500/10 border border-green-500/20 uppercase tracking-widest mb-5">
            Case Studies
          </span>
          <h2 className="heading-lg text-white mb-5">
            Real Results,{" "}
            <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            See how enterprises across industries transformed their operations with Solvify ERP.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-8 group flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.logoColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg`}>
                  {c.logo}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">{c.client}</h3>
                  <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${c.color} text-white`}>
                    {c.industry}
                  </span>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Challenge</p>
                <p className="text-slate-300 text-sm leading-relaxed">{c.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Solution</p>
                <p className="text-slate-300 text-sm leading-relaxed">{c.solution}</p>
              </div>

              {/* Results */}
              <div className="mt-auto">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Results Achieved</p>
                <div className="grid grid-cols-2 gap-2">
                  {c.results.map((result) => (
                    <div key={result} className="flex items-start gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-green-300 text-xs font-medium leading-tight">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="#contact" className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                Read Full Case Study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

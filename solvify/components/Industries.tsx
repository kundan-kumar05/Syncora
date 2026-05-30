"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Factory, Heart, ShoppingBag, GraduationCap, Truck, HardHat, Building2, Hotel, Landmark, Globe } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Optimize production planning, BOM management, quality control, and shop floor execution with real-time visibility.",
    stats: "40% efficiency gain",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Manage patient records, clinical workflows, pharmacy, billing, and regulatory compliance in one unified system.",
    stats: "60% faster billing",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "Unify omnichannel inventory, POS, loyalty programs, and customer analytics for seamless retail operations.",
    stats: "3x inventory turnover",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Streamline student management, fee collection, library, payroll, and academic planning across institutions.",
    stats: "50% admin reduction",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Track fleets, optimize routes, manage warehouses, and deliver proof-of-delivery with end-to-end visibility.",
    stats: "25% cost savings",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Control project budgets, material procurement, subcontractor management, and on-site scheduling precisely.",
    stats: "35% on-time delivery",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Manage properties, tenants, lease contracts, maintenance, and financials from a single intelligent platform.",
    stats: "90% lease automation",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description: "Enhance guest experiences with integrated PMS, F&B, housekeeping, and revenue management modules.",
    stats: "45% RevPAR increase",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Landmark,
    title: "Government",
    description: "Enable transparent, compliant, and efficient public sector operations with audit-ready ERP workflows.",
    stats: "99% audit compliance",
    color: "from-slate-400 to-blue-500",
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description: "Sync orders, automate fulfillment, manage returns, and scale across marketplaces with intelligent automation.",
    stats: "2x order throughput",
    color: "from-purple-500 to-violet-500",
  },
];

export default function Industries() {
  const [active, setActive] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="industries" className="section-padding bg-gradient-section relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 uppercase tracking-widest mb-5">
            Industries We Serve
          </span>
          <h2 className="heading-lg text-white mb-5">
            Purpose-Built for{" "}
            <span className="gradient-text">Your Industry</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Every industry has unique challenges. Solvify delivers sector-specific ERP modules built from real-world expertise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`glass-card p-6 cursor-pointer relative overflow-hidden group transition-all duration-300 ${active === i ? "border-blue-500/50 shadow-blue-500/20 shadow-xl scale-[1.02]" : ""}`}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <ind.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2 text-sm">{ind.title}</h3>
              
              <AnimatePresence>
                {active === i ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-400 text-xs leading-relaxed mb-3">{ind.description}</p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      <span className="text-green-400 text-xs font-semibold">{ind.stats}</span>
                    </div>
                  </motion.div>
                ) : (
                  <p className="text-slate-500 text-xs">Click to explore →</p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

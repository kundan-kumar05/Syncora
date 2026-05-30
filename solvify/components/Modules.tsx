"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, DollarSign, Users, Package, Briefcase, TrendingUp, ShoppingCart, Factory, FolderOpen, CreditCard, BarChart3 } from "lucide-react";

const modules = [
  {
    icon: DollarSign,
    title: "Finance & Accounting",
    description: "Automate ledgers, invoices, tax compliance, and financial reporting with AI-driven insights.",
    color: "from-blue-500 to-cyan-400",
    bg: "from-blue-500/10 to-cyan-500/5",
  },
  {
    icon: Users,
    title: "Human Resource Management",
    description: "Streamline recruitment, onboarding, performance reviews, and employee lifecycle management.",
    color: "from-violet-500 to-purple-400",
    bg: "from-violet-500/10 to-purple-500/5",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Track stock levels, manage warehouses, automate reorders, and eliminate shrinkage.",
    color: "from-amber-500 to-orange-400",
    bg: "from-amber-500/10 to-orange-500/5",
  },
  {
    icon: Briefcase,
    title: "CRM",
    description: "Build stronger customer relationships with a 360° view of every lead, deal, and interaction.",
    color: "from-green-500 to-emerald-400",
    bg: "from-green-500/10 to-emerald-500/5",
  },
  {
    icon: TrendingUp,
    title: "Sales Management",
    description: "Accelerate your pipeline with intelligent quoting, forecasting, and deal tracking tools.",
    color: "from-pink-500 to-rose-400",
    bg: "from-pink-500/10 to-rose-500/5",
  },
  {
    icon: ShoppingCart,
    title: "Procurement",
    description: "Centralize purchasing, vendor management, and spend analytics for maximum cost efficiency.",
    color: "from-indigo-500 to-blue-400",
    bg: "from-indigo-500/10 to-blue-500/5",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Plan production schedules, manage BOMs, quality control, and shop floor operations seamlessly.",
    color: "from-teal-500 to-cyan-400",
    bg: "from-teal-500/10 to-cyan-500/5",
  },
  {
    icon: FolderOpen,
    title: "Project Management",
    description: "Plan, execute, and deliver projects on time with resource allocation and milestone tracking.",
    color: "from-orange-500 to-yellow-400",
    bg: "from-orange-500/10 to-yellow-500/5",
  },
  {
    icon: CreditCard,
    title: "Payroll",
    description: "Process accurate payroll, tax deductions, benefits, and compliance in a single click.",
    color: "from-red-500 to-pink-400",
    bg: "from-red-500/10 to-pink-500/5",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Analytics",
    description: "Transform raw data into executive-ready dashboards and predictive intelligence.",
    color: "from-purple-500 to-violet-400",
    bg: "from-purple-500/10 to-violet-500/5",
  },
];

export default function Modules() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="modules" className="section-padding relative overflow-hidden" style={{ background: "#0a192f" }}>
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 uppercase tracking-widest mb-5">
            ERP Modules
          </span>
          <h2 className="heading-lg text-white mb-5">
            One Platform,{" "}
            <span className="gradient-text">Every Business Need</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Solvify's modular architecture lets you start with what you need and scale as you grow — fully integrated, zero duplication.
          </p>
        </motion.div>

        {/* Module Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`glass-card p-6 group cursor-pointer relative overflow-hidden`}
            >
              {/* Hover glow background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${mod.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <mod.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="relative text-white font-bold text-sm mb-2 leading-tight group-hover:text-white transition-colors">
                {mod.title}
              </h3>
              <p className="relative text-slate-400 text-xs leading-relaxed mb-4 group-hover:text-slate-300 transition-colors">
                {mod.description}
              </p>
              <a
                href="#contact"
                className="relative flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
              >
                Learn More
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="#contact">
            <button className="btn-primary inline-flex items-center gap-2 group">
              <span className="relative z-10">Explore All Modules</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

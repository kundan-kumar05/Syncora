"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Eye, CheckCircle2, ArrowRight } from "lucide-react";

const reasons = [
  "End-to-end ERP implementation from day one",
  "Scalable architecture that grows with your business",
  "Industry-specific modules tailored to your workflow",
  "Dedicated customer success managers",
  "Seamless third-party integrations (200+ apps)",
  "Compliant with global regulatory standards",
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="section-padding bg-gradient-section relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 uppercase tracking-widest mb-5">
            About Solvify
          </span>
          <h2 className="heading-lg text-white mb-5">
            Built for Enterprises,{" "}
            <span className="gradient-text">Designed for People</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Since 2009, Solvify has been at the forefront of enterprise technology, delivering transformative ERP solutions that redefine operational excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="glass-card p-8 pb-10 rounded-3xl relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              
              {/* Company Illustration */}
              <div className="relative flex flex-col gap-6">
                {/* Top bar */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Solvify ERP</h3>
                    <p className="text-slate-400 text-sm">Enterprise Intelligence Platform</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Founded", value: "2009" },
                    { label: "Employees", value: "1,200+" },
                    { label: "Countries", value: "45+" },
                    { label: "Support", value: "24/7" },
                  ].map((m) => (
                    <div key={m.label} className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <p className="text-2xl font-bold gradient-text">{m.value}</p>
                      <p className="text-slate-400 text-sm">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Achievement badges */}
                <div className="flex flex-wrap gap-2">
                  {["ISO 27001 Certified", "SOC 2 Type II", "GDPR Compliant", "AWS Partner"].map((badge) => (
                    <span key={badge} className="px-3 py-1.5 rounded-full text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              We are a global enterprise software company passionate about unlocking the full potential of every business. Our unified ERP platform integrates every aspect of your operations — from finance and HR to supply chain and analytics — into a single, intelligent ecosystem.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-4">Why Businesses Choose Us</h3>
            <div className="grid grid-cols-1 gap-3 mb-8">
              {reasons.map((r, i) => (
                <motion.div
                  key={r}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{r}</span>
                </motion.div>
              ))}
            </div>
            <a href="#contact">
              <button className="btn-primary flex items-center gap-2 group">
                <span className="relative z-10">Learn More About Us</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Target,
              title: "Our Mission",
              color: "from-blue-500 to-cyan-500",
              text: "To empower businesses of every size with intelligent, scalable ERP solutions that eliminate complexity, drive efficiency, and unlock sustainable growth — making enterprise technology accessible to all.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              color: "from-violet-500 to-purple-500",
              text: "To be the world's most trusted ERP partner — pioneering the next generation of AI-powered business automation that transforms how enterprises operate, compete, and thrive in the digital age.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
              className="glass-card p-8 group"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

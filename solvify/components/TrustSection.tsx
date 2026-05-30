"use client";
import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Award, Globe, Clock, Users } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Global Clients", description: "Enterprises transformed" },
  { icon: Globe, value: 50, suffix: "+", label: "Industries Served", description: "Across diverse sectors" },
  { icon: Clock, value: 99.9, suffix: "%", label: "Uptime SLA", description: "Guaranteed reliability", decimals: 1 },
  { icon: Award, value: 15, suffix: "+", label: "Years Experience", description: "In enterprise ERP" },
];

const logos = [
  { name: "TechCorp", abbr: "TC" },
  { name: "GlobalMed", abbr: "GM" },
  { name: "RetailPro", abbr: "RP" },
  { name: "BuildCo", abbr: "BC" },
  { name: "EduSys", abbr: "ES" },
  { name: "LogiFlow", abbr: "LF" },
  { name: "FinEdge", abbr: "FE" },
  { name: "ManuTech", abbr: "MT" },
];

export default function TrustSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="trust" className="py-20 bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        {/* Client Logos Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-center text-sm text-slate-500 uppercase tracking-widest font-medium mb-8">
            Trusted by leading enterprises worldwide
          </p>
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-marquee">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center gap-3 glass rounded-xl px-6 py-3 border border-white/5 hover:border-blue-500/30 transition-all duration-300 cursor-default group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/30 to-indigo-500/30 flex items-center justify-center text-blue-400 text-xs font-bold group-hover:from-blue-500/50 transition-all">
                    {logo.abbr}
                  </div>
                  <span className="text-slate-400 font-medium text-sm whitespace-nowrap group-hover:text-slate-200 transition-colors">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a192f] to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a192f] to-transparent pointer-events-none z-10" />
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-300 border border-blue-500/20">
                <stat.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-4xl font-black text-white mb-1">
                {inView ? (
                  <>
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      decimals={stat.decimals || 0}
                      enableScrollSpy={false}
                    />
                    <span className="gradient-text">{stat.suffix}</span>
                  </>
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="text-white font-semibold text-lg mb-1">{stat.label}</p>
              <p className="text-slate-500 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

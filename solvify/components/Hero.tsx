"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle, TrendingUp, Shield, Zap } from "lucide-react";

const floatingCards = [
  { icon: TrendingUp, label: "Revenue Growth", value: "+127%", color: "from-blue-500 to-cyan-400", delay: 0 },
  { icon: Shield, label: "Data Security", value: "99.9%", color: "from-violet-500 to-purple-400", delay: 0.2 },
  { icon: Zap, label: "Automation", value: "3x Faster", color: "from-amber-500 to-orange-400", delay: 0.4 },
];

const highlights = [
  "AI-Powered Analytics",
  "Real-Time Reporting",
  "Cloud-Native Infrastructure",
  "24/7 Enterprise Support",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero grid-bg"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-slate-300 font-medium">Now serving 500+ enterprises worldwide</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-xl text-white mb-6 leading-tight"
            >
              Transform Your{" "}
              <span className="gradient-text">Business</span>{" "}
              with Intelligent{" "}
              <span className="gradient-text">ERP Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed"
            >
              Syncora unifies your finance, HR, operations, and analytics into one powerful platform — empowering smarter decisions, faster growth, and complete business control.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-3 mb-10"
            >
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="#contact">
                <button className="btn-primary flex items-center gap-2 group">
                  <span className="relative z-10">Book a Demo</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="#modules">
                <button className="btn-secondary flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-blue-400 transition-colors">
                    <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                  </div>
                  Get Started
                </button>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[
                  "bg-gradient-to-br from-blue-400 to-blue-600",
                  "bg-gradient-to-br from-purple-400 to-purple-600",
                  "bg-gradient-to-br from-green-400 to-green-600",
                  "bg-gradient-to-br from-orange-400 to-orange-600",
                  "bg-gradient-to-br from-pink-400 to-pink-600",
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full ${color} border-2 border-[#0a192f] flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {["JD", "SK", "AM", "LR", "PK"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Trusted by <span className="text-white font-semibold">500+</span> businesses</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Dashboard Card */}
            <div className="relative glass-card p-1 rounded-2xl shadow-2xl border border-blue-500/20 glow-blue animate-float">
              {/* Dashboard Header */}
              <div className="bg-[#0d1f3c] rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-xs text-slate-500 font-mono">syncora.dashboard.erp</div>
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </div>
                
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Total Revenue", value: "$2.4M", change: "+12.5%", up: true },
                    { label: "Active Users", value: "1,847", change: "+8.2%", up: true },
                    { label: "Orders Today", value: "342", change: "+5.1%", up: true },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-3">
                      <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className={`text-xs font-medium ${stat.up ? "text-green-400" : "text-red-400"}`}>{stat.change}</p>
                    </div>
                  ))}
                </div>

                {/* Chart Area */}
                <div className="bg-white/3 rounded-xl p-3 mb-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-slate-400 font-medium">Revenue Analytics</span>
                    <span className="text-xs text-blue-400">This Quarter</span>
                  </div>
                  <div className="flex items-end gap-2 h-24">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full rounded-sm"
                          style={{
                            height: `${h}%`,
                            background: i === 10 || i === 11
                              ? "linear-gradient(180deg, #3b82f6, #6366f1)"
                              : "rgba(59, 130, 246, 0.3)",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/3 rounded-xl p-3">
                    <p className="text-xs text-slate-500 mb-2">Module Usage</p>
                    <div className="space-y-1.5">
                      {[
                        { label: "Finance", pct: 85, color: "bg-blue-500" },
                        { label: "HR", pct: 72, color: "bg-violet-500" },
                        { label: "CRM", pct: 91, color: "bg-cyan-500" },
                      ].map((m) => (
                        <div key={m.label} className="flex items-center gap-2">
                          <span className="text-xs text-slate-400 w-12">{m.label}</span>
                          <div className="flex-1 h-1.5 bg-white/10 rounded-full">
                            <div className={`h-1.5 rounded-full ${m.color}`} style={{ width: `${m.pct}%` }} />
                          </div>
                          <span className="text-xs text-slate-400">{m.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/3 rounded-xl p-3">
                    <p className="text-xs text-slate-500 mb-2">Recent Activity</p>
                    <div className="space-y-2">
                      {[
                        { action: "Invoice #2847 paid", time: "2m ago" },
                        { action: "New employee onboarded", time: "15m ago" },
                        { action: "Stock alert: SKU-291", time: "1h ago" },
                      ].map((a, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-slate-300 leading-tight">{a.action}</p>
                            <p className="text-xs text-slate-500">{a.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stat Cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + card.delay }}
                className="absolute glass rounded-2xl p-4 border border-white/10 shadow-xl"
                style={{
                  ...(i === 0 && { top: "-10%", left: "-12%", animation: "float-reverse 7s ease-in-out infinite" }),
                  ...(i === 1 && { bottom: "15%", left: "-14%", animation: "float 8s ease-in-out infinite" }),
                  ...(i === 2 && { top: "15%", right: "-10%", animation: "float-reverse 6s ease-in-out infinite" }),
                }}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-2`}>
                  <card.icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg font-bold text-white">{card.value}</p>
                <p className="text-xs text-slate-400">{card.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a192f] to-transparent pointer-events-none" />
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cloud, Brain, Activity, Smartphone, Lock, Zap, MapPin, Plug } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Cloud-Based ERP",
    description: "Deploy on any cloud — AWS, Azure, or GCP. Zero infrastructure management, automatic scaling, and 99.9% uptime SLA.",
    color: "from-blue-500 to-sky-400",
    delay: 0,
  },
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Leverage machine learning models to predict demand, detect anomalies, and generate actionable business forecasts.",
    color: "from-violet-500 to-purple-400",
    delay: 0.08,
  },
  {
    icon: Activity,
    title: "Real-Time Reporting",
    description: "Executive dashboards with live KPIs, drill-down reports, and scheduled exports across every business unit.",
    color: "from-green-500 to-emerald-400",
    delay: 0.16,
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description: "Full ERP functionality on iOS and Android. Approve workflows, check inventory, and manage teams on the go.",
    color: "from-amber-500 to-yellow-400",
    delay: 0.24,
  },
  {
    icon: Lock,
    title: "Enterprise Data Security",
    description: "AES-256 encryption, role-based access control, SSO, 2FA, and continuous SOC 2 Type II compliance.",
    color: "from-red-500 to-rose-400",
    delay: 0.32,
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Build powerful automations with drag-and-drop workflow designer. No-code rule engines for any business process.",
    color: "from-orange-500 to-amber-400",
    delay: 0.40,
  },
  {
    icon: MapPin,
    title: "Multi-Location Support",
    description: "Manage unlimited branches, warehouses, and subsidiaries with consolidated multi-currency, multi-language reporting.",
    color: "from-teal-500 to-cyan-400",
    delay: 0.48,
  },
  {
    icon: Plug,
    title: "Third-Party Integrations",
    description: "Connect to 200+ business apps via REST API, webhooks, and native connectors — Shopify, Stripe, Salesforce, and more.",
    color: "from-indigo-500 to-blue-400",
    delay: 0.56,
  },
];

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="features" className="section-padding relative overflow-hidden" style={{ background: "#0a192f" }}>
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-green-400 bg-green-500/10 border border-green-500/20 uppercase tracking-widest mb-5">
            Platform Features
          </span>
          <h2 className="heading-lg text-white mb-5">
            Enterprise-Grade Features,{" "}
            <span className="gradient-text">Out of the Box</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Everything your enterprise needs — security, scalability, intelligence, and speed — built right in from day one.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: feat.delay }}
              className="glass-card p-7 group relative overflow-hidden"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 20% 20%, rgba(59,130,246,0.08) 0%, transparent 70%)` }}
              />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feat.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                <feat.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-white font-bold text-base mb-3 group-hover:text-blue-300 transition-colors">
                {feat.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feat.description}
              </p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

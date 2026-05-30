"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Zap, Building2, Sparkles, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: 299,
    period: "per month",
    description: "Perfect for growing SMEs ready to digitize their core operations.",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Up to 25 users",
      "Finance & Accounting module",
      "Inventory Management",
      "Basic CRM",
      "Standard Reports",
      "Email Support",
      "99.5% uptime SLA",
      "Mobile App Access",
      "2 GB storage",
      "Monthly updates",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    icon: Sparkles,
    price: 799,
    period: "per month",
    description: "The complete ERP suite for scaling businesses with advanced needs.",
    color: "from-violet-500 to-purple-500",
    features: [
      "Up to 100 users",
      "All Starter modules",
      "HR & Payroll Management",
      "Advanced CRM & Sales",
      "Procurement & Manufacturing",
      "AI Analytics Dashboard",
      "Priority Support 24/5",
      "99.9% uptime SLA",
      "Custom Reports & BI",
      "50 GB storage",
      "API Access (100+ integrations)",
      "Workflow Automation",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: null,
    period: "custom pricing",
    description: "Bespoke ERP solutions for large-scale enterprises and conglomerates.",
    color: "from-amber-500 to-orange-500",
    features: [
      "Unlimited users",
      "All Professional modules",
      "Custom module development",
      "Dedicated account manager",
      "On-premise or private cloud",
      "White-label option",
      "24/7 SLA support",
      "99.99% uptime guarantee",
      "Advanced security & compliance",
      "Unlimited storage",
      "Custom integrations",
      "Staff training program",
      "Executive analytics suite",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="pricing" className="section-padding relative overflow-hidden" style={{ background: "#0a192f" }}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 uppercase tracking-widest mb-5">
            Pricing Plans
          </span>
          <h2 className="heading-lg text-white mb-5">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            No hidden fees, no surprises. Choose the plan that fits your business and scale at any time.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 glass rounded-2xl p-1.5 border border-white/10">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${!annual ? "bg-blue-600 text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${annual ? "bg-blue-600 text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
            >
              Annual
              <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs border border-green-500/30">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative glass-card p-8 flex flex-col ${plan.popular ? "border-blue-500/50 shadow-2xl shadow-blue-500/10 scale-[1.02]" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-5 py-1.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 text-white text-xs font-bold shadow-lg">
                    ✦ Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                {plan.price ? (
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-black text-white">
                      ${annual ? Math.round(plan.price * 0.8) : plan.price}
                    </span>
                    <span className="text-slate-400 mb-2 text-sm">{plan.period}</span>
                  </div>
                ) : (
                  <div>
                    <span className="text-4xl font-black gradient-text">Custom</span>
                    <p className="text-slate-400 text-sm mt-1">Tailored to your scale</p>
                  </div>
                )}
                {annual && plan.price && (
                  <p className="text-green-400 text-sm font-medium mt-1">
                    You save ${Math.round(plan.price * 0.2 * 12)}/year
                  </p>
                )}
              </div>

              {/* CTA */}
              <a href="#contact" className="mb-8">
                <button className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group ${plan.popular ? "btn-primary" : "btn-secondary"}`}>
                  <span className={plan.popular ? "relative z-10" : ""}>{plan.cta}</span>
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${plan.popular ? "relative z-10" : ""}`} />
                </button>
              </a>

              {/* Features */}
              <div className="space-y-3 flex-1">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm">
            All plans include a <span className="text-white font-medium">14-day free trial</span> · No credit card required · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}

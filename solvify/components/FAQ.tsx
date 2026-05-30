"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does an ERP implementation typically take?",
    a: "Most Syncora implementations go live within 8–16 weeks depending on the number of modules, integrations, and customizations required. Our Starter plan can be deployed in as little as 4 weeks for core modules.",
  },
  {
    q: "Can Syncora integrate with our existing software stack?",
    a: "Yes. Syncora supports 200+ native integrations including Salesforce, Shopify, QuickBooks, Stripe, SAP, Microsoft 365, Google Workspace, and more. Our REST API and webhooks allow custom integrations with virtually any system.",
  },
  {
    q: "Is Syncora suitable for small businesses or only enterprises?",
    a: "Syncora's modular approach makes it ideal for businesses of all sizes. Our Starter plan is designed for SMEs with as few as 10 employees, while our Enterprise plan scales to multinational corporations with thousands of users.",
  },
  {
    q: "What data security and compliance standards does Syncora meet?",
    a: "Syncora is ISO 27001 certified, SOC 2 Type II compliant, and GDPR-ready. We use AES-256 encryption at rest and in transit, role-based access controls, 2FA, and offer private cloud or on-premise deployments for maximum security.",
  },
  {
    q: "Do you provide training and onboarding for our team?",
    a: "Absolutely. Every implementation includes role-based training sessions, a comprehensive video library, a searchable knowledge base, and dedicated onboarding specialists. Enterprise plans include on-site training programs.",
  },
  {
    q: "What kind of post-implementation support do you offer?",
    a: "All plans include access to our support portal and email support. Professional plans get 24/5 priority support, and Enterprise customers receive dedicated account managers with 24/7 phone, email, and on-site support.",
  },
  {
    q: "Can we customize Syncora modules to fit our specific workflows?",
    a: "Yes. Syncora is highly configurable through our no-code workflow designer. For deeper customizations, our development team can build custom modules, reports, and integrations tailored to your exact business requirements.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, all plans come with a 14-day free trial — no credit card required. You get full access to your chosen plan's features during the trial period, plus dedicated onboarding support to help you get the most out of Syncora.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="faq" className="section-padding bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 uppercase tracking-widest mb-5">
            FAQ
          </span>
          <h2 className="heading-lg text-white mb-5">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Everything you need to know before making the most important software decision for your business.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={open === i}
              >
                <span className="text-white font-semibold text-base pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className={`w-5 h-5 transition-colors ${open === i ? "text-blue-400" : "text-slate-500"}`} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gradient-to-r from-blue-500/30 to-transparent mb-4" />
                      <p className="text-slate-400 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

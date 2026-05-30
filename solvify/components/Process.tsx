"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageSquare, Search, PenTool, Code, Rocket, BookOpen, HeadphonesIcon, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    description: "We start with a deep-dive discovery session to understand your business goals, pain points, and vision.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Search,
    step: "02",
    title: "Requirement Analysis",
    description: "Our experts document detailed functional and technical requirements through structured workshops and audits.",
    color: "from-indigo-500 to-blue-400",
  },
  {
    icon: PenTool,
    step: "03",
    title: "Solution Design",
    description: "We architect a tailored ERP blueprint — module selection, integrations, data model, and UI design.",
    color: "from-violet-500 to-purple-400",
  },
  {
    icon: Code,
    step: "04",
    title: "Development & Customization",
    description: "Agile sprints bring your ERP to life — custom workflows, reports, integrations, and branded interfaces.",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Deployment",
    description: "Zero-downtime go-live with parallel run testing, data migration, and full cutover support.",
    color: "from-pink-500 to-rose-400",
  },
  {
    icon: BookOpen,
    step: "06",
    title: "Training",
    description: "Comprehensive role-based training, video tutorials, knowledge base, and live coaching for your teams.",
    color: "from-orange-500 to-amber-400",
  },
  {
    icon: HeadphonesIcon,
    step: "07",
    title: "Support & Maintenance",
    description: "24/7 dedicated support, proactive monitoring, regular updates, and continuous improvement cycles.",
    color: "from-green-500 to-emerald-400",
  },
];

export default function Process() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="process" className="section-padding bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 uppercase tracking-widest mb-5">
            Implementation Process
          </span>
          <h2 className="heading-lg text-white mb-5">
            From Vision to{" "}
            <span className="gradient-text">Fully Live ERP</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our battle-tested 7-step implementation methodology ensures on-time, on-budget delivery every single time.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/50 to-green-500/50 hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Left/Right Content */}
                <div className={`flex-1 sm:px-10 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className={`glass-card p-6 inline-block max-w-md w-full group hover:scale-[1.02] transition-transform duration-300 ${i % 2 === 0 ? "lg:ml-auto" : ""}`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-slate-500">STEP {step.step}</span>
                        </div>
                        <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden sm:flex absolute left-8 lg:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-4 border-[#0a192f] items-center justify-center z-10 shadow-lg">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Get Started?</h3>
            <p className="text-slate-400 mb-6">Most implementations go live within 8–12 weeks. Let's map your journey.</p>
            <a href="#contact">
              <button className="btn-primary inline-flex items-center gap-2">
                <span className="relative z-10">Start Your ERP Journey</span>
                <Rocket className="w-4 h-4 relative z-10" />
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

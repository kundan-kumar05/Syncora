"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from "lucide-react";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 uppercase tracking-widest mb-5">
            Contact Us
          </span>
          <h2 className="heading-lg text-white mb-5">
            Let's Build Your{" "}
            <span className="gradient-text">ERP Solution</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Ready to transform your business? Talk to our ERP experts today — free consultation, no commitment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              {
                icon: MapPin,
                label: "Headquarters",
                lines: ["Solvify Technologies Inc.", "123 Enterprise Blvd, Suite 900", "San Francisco, CA 94105, USA"],
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Phone,
                label: "Phone",
                lines: ["+1 (888) 765-4321", "+1 (888) 765-4322 (Support)"],
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Mail,
                label: "Email",
                lines: ["hello@solvify.com", "support@solvify.com"],
                color: "from-violet-500 to-purple-500",
              },
              {
                icon: MessageCircle,
                label: "Live Chat",
                lines: ["Available Monday – Friday", "9:00 AM – 6:00 PM EST"],
                color: "from-orange-500 to-amber-500",
              },
            ].map((item) => (
              <div key={item.label} className="glass-card p-6 flex items-start gap-4 group">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                  {item.lines.map((line, i) => (
                    <p key={i} className="text-slate-200 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="glass-card overflow-hidden rounded-2xl">
              <div className="h-48 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 relative flex items-center justify-center">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="relative text-center">
                  <MapPin className="w-10 h-10 text-blue-400 mx-auto mb-2 animate-float" />
                  <p className="text-slate-400 text-sm">San Francisco, CA</p>
                  <p className="text-slate-500 text-xs">View on Google Maps →</p>
                </div>
                {/* Map grid dots */}
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-blue-500/40"
                    style={{ left: `${(i % 5) * 22 + 10}%`, top: `${Math.floor(i / 5) * 28 + 10}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out. Our ERP consultants will contact you within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 btn-secondary text-sm py-2.5 px-6"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { id: "name", label: "Full Name *", placeholder: "John Donovan", type: "text" },
                      { id: "email", label: "Business Email *", placeholder: "john@company.com", type: "email" },
                      { id: "phone", label: "Phone Number", placeholder: "+1 (555) 000-0000", type: "tel" },
                      { id: "company", label: "Company Name *", placeholder: "Your Company Ltd.", type: "text" },
                    ].map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                          {field.label}
                        </label>
                        <input
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          value={form[field.id as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                          required={field.label.includes("*")}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all text-sm"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1f3c] border border-white/10 text-white focus:outline-none focus:border-blue-500/60 transition-all text-sm appearance-none"
                    >
                      <option value="">Select a service...</option>
                      <option>Finance & Accounting ERP</option>
                      <option>Human Resource Management</option>
                      <option>Inventory & Supply Chain</option>
                      <option>CRM & Sales Management</option>
                      <option>Manufacturing ERP</option>
                      <option>Business Intelligence</option>
                      <option>Full ERP Suite</option>
                      <option>Custom Development</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your business needs, current challenges, and what you're looking to achieve with an ERP solution..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 group py-4"
                  >
                    <span className="relative z-10 font-semibold">Send Message & Get Free Consultation</span>
                    <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <p className="text-center text-xs text-slate-600">
                    By submitting, you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

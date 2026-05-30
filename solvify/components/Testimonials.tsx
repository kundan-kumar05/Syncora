"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Donovan",
    role: "CTO",
    company: "TechCorp Industries",
    avatar: "JD",
    avatarColor: "from-blue-500 to-blue-700",
    rating: 5,
    text: "Solvify completely transformed how we manage our 14 manufacturing plants. The real-time dashboards and AI-powered analytics have given us visibility we never had before. Our operational efficiency improved by 40% within the first six months.",
    industry: "Manufacturing",
  },
  {
    name: "Sarah Kimura",
    role: "CFO",
    company: "GlobalMed Healthcare",
    avatar: "SK",
    avatarColor: "from-purple-500 to-purple-700",
    rating: 5,
    text: "The finance module automation alone saved us 2,000+ man-hours per month. Invoice processing, reconciliation, and compliance reporting that used to take weeks now happens in real-time. Solvify's implementation team was exceptional.",
    industry: "Healthcare",
  },
  {
    name: "Ahmed Mansour",
    role: "CEO",
    company: "RetailPro Stores",
    avatar: "AM",
    avatarColor: "from-green-500 to-emerald-700",
    rating: 5,
    text: "Unifying 120 store locations on a single ERP seemed impossible until we partnered with Solvify. The inventory visibility alone has increased our stock turnover by 3x. I'd recommend Solvify to any retail chain looking to scale.",
    industry: "Retail",
  },
  {
    name: "Priya Nair",
    role: "VP Operations",
    company: "LogiFlow Logistics",
    avatar: "PN",
    avatarColor: "from-orange-500 to-orange-700",
    rating: 5,
    text: "Fleet management and route optimization through Solvify cut our fuel costs by 22% in the first quarter. The mobile access feature means our drivers and managers stay connected no matter where they are.",
    industry: "Logistics",
  },
  {
    name: "David Chen",
    role: "Director of Finance",
    company: "BuildCo Construction",
    avatar: "DC",
    avatarColor: "from-yellow-500 to-amber-700",
    rating: 5,
    text: "Construction projects are notoriously hard to track financially. Solvify's project module gives us real-time budget vs actual tracking, subcontractor management, and automatic progress billing. Our project margins improved by 18%.",
    industry: "Construction",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="section-padding bg-gradient-section relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 uppercase tracking-widest mb-5">
            Testimonials
          </span>
          <h2 className="heading-lg text-white mb-5">
            Loved by{" "}
            <span className="gradient-text">Enterprise Leaders</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Don't take our word for it — hear from the executives who made the decision to transform with Solvify.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-10 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-500/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-200 text-lg leading-relaxed mb-8 max-w-3xl">
                "{testimonials[current].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonials[current].avatarColor} flex items-center justify-center text-white font-bold text-base shadow-lg`}>
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="text-white font-bold text-base">{testimonials[current].name}</p>
                  <p className="text-slate-400 text-sm">{testimonials[current].role} · {testimonials[current].company}</p>
                </div>
                <div className="ml-auto">
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20">
                    {testimonials[current].industry}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${i === current ? "w-8 h-2.5 bg-blue-500" : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mini avatars row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-4 mt-10"
        >
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold transition-all duration-300 ${i === current ? "scale-110 ring-2 ring-blue-500 ring-offset-2 ring-offset-transparent" : "opacity-50 hover:opacity-80"}`}
            >
              {t.avatar}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

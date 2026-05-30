"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Clock, User } from "lucide-react";

const posts = [
  {
    category: "ERP Trends",
    categoryColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    title: "The Future of AI in Enterprise Resource Planning: 2025 and Beyond",
    excerpt: "Discover how machine learning, predictive analytics, and generative AI are fundamentally changing how ERP systems make business decisions.",
    author: "Sarah Mitchell",
    date: "May 22, 2025",
    readTime: "8 min read",
    gradient: "from-blue-600/30 to-indigo-600/10",
  },
  {
    category: "Digital Transformation",
    categoryColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    title: "Why 73% of ERP Implementations Fail — And How to Ensure Yours Doesn't",
    excerpt: "A deep dive into the most common pitfalls of ERP projects and the proven strategies that successful enterprises use to deliver on time and budget.",
    author: "James Donovan",
    date: "May 15, 2025",
    readTime: "12 min read",
    gradient: "from-violet-600/30 to-purple-600/10",
  },
  {
    category: "Case Study",
    categoryColor: "text-green-400 bg-green-500/10 border-green-500/20",
    title: "How RetailPro Unified 120 Stores on a Single ERP in Just 12 Weeks",
    excerpt: "A step-by-step breakdown of the largest retail ERP rollout in Southeast Asia — lessons learned, challenges overcome, and the remarkable results.",
    author: "Priya Nair",
    date: "May 8, 2025",
    readTime: "6 min read",
    gradient: "from-green-600/30 to-emerald-600/10",
  },
];

export default function Blog() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="blog" className="section-padding relative overflow-hidden" style={{ background: "#0a192f" }}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 uppercase tracking-widest mb-5">
              Blog & Insights
            </span>
            <h2 className="heading-lg text-white">
              Expert ERP{" "}
              <span className="gradient-text">Insights</span>
            </h2>
          </div>
          <a href="#blog" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group flex-shrink-0">
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card group cursor-pointer flex flex-col overflow-hidden"
            >
              {/* Gradient image area */}
              <div className={`h-44 bg-gradient-to-br ${post.gradient} relative overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <User className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-slate-400 text-xs">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 text-xs">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass-card p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5" />
          <div className="relative">
            <h3 className="text-2xl font-bold text-white mb-3">Stay Ahead of the Curve</h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Join 15,000+ business leaders who get our weekly ERP insights, industry reports, and transformation strategies.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your business email"
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all text-sm"
                required
              />
              <button className="btn-primary px-6 py-3.5 whitespace-nowrap">
                <span className="relative z-10 text-sm">Subscribe Free</span>
              </button>
            </form>
            <p className="text-slate-600 text-xs mt-4">No spam, unsubscribe anytime.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

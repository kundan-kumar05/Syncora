"use client";
import Link from "next/link";
import { Zap, ArrowRight, Mail } from "lucide-react";

const footerLinks = {
  "Solutions": [
    { label: "Finance & Accounting", href: "#modules" },
    { label: "Human Resources", href: "#modules" },
    { label: "CRM & Sales", href: "#modules" },
    { label: "Inventory Management", href: "#modules" },
    { label: "Manufacturing", href: "#modules" },
    { label: "Business Intelligence", href: "#modules" },
  ],
  "Industries": [
    { label: "Manufacturing", href: "#industries" },
    { label: "Healthcare", href: "#industries" },
    { label: "Retail & E-Commerce", href: "#industries" },
    { label: "Logistics", href: "#industries" },
    { label: "Construction", href: "#industries" },
    { label: "Education", href: "#industries" },
  ],
  "Company": [
    { label: "About Syncora", href: "#about" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Blog & Insights", href: "#blog" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Partner Program", href: "#" },
  ],
  "Support": [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Status Page", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Contact Support", href: "#contact" },
    { label: "Book a Demo", href: "#contact" },
  ],
};

const socialLinks = [
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    href: "#",
    label: "Twitter",
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    href: "#",
    label: "Facebook",
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
    href: "#",
    label: "YouTube",
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    href: "#",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#060f1e]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl py-20">
        {/* Top Row */}
        <div className="grid lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Solvi<span className="gradient-text">fy</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Syncora is the intelligent ERP platform that unifies your entire business — from finance and HR to operations and analytics — in one powerful cloud ecosystem.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 text-sm hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Strip */}
        <div className="glass-card p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-white font-bold">Get ERP Insights in Your Inbox</h4>
              <p className="text-slate-400 text-sm">Weekly strategies from 500+ enterprise leaders.</p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 md:w-64 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all text-sm"
              required
            />
            <button className="btn-primary px-5 py-2.5 flex items-center gap-1.5 group whitespace-nowrap">
              <span className="relative z-10 text-sm">Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Syncora Technologies Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"].map((item) => (
              <a key={item} href="#" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-slate-500 text-xs">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

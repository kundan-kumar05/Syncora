"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
}

const PRESETS = [
  { q: "What modules are included?", a: "Syncora includes modules for Finance & Accounting, HR & Payroll, CRM, Inventory & Warehousing, Manufacturing ERP, and AI Business Intelligence. You can select only the modules you need." },
  { q: "Do you offer a free trial?", a: "Yes, we offer a 14-day free trial on all plans. No credit card is required. You will get access to all features and a dedicated onboarding assistant during this period." },
  { q: "How long is implementation?", a: "Core modules can be implemented in 4 weeks. Full enterprise deployments with customizations generally take between 8 to 16 weeks. We support you at every stage." },
  { q: "Can you integrate with Salesforce?", a: "Absolutely! Syncora has 200+ native integrations, including Salesforce, QuickBooks, HubSpot, Shopify, Stripe, and SAP." }
];

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hi there! I'm Solvi, your Syncora AI assistant. How can I help you transform your business today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSend = (text: string, sender: "bot" | "user" = "user") => {
    if (!text.trim()) return;
    
    const newMsg: Message = {
      id: crypto.randomUUID(),
      sender,
      text,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMsg]);
    if (sender === "user") {
      setInput("");
      simulateBotResponse(text);
    }
  };

  const simulateBotResponse = (userText: string) => {
    setIsTyping(true);
    
    // Find matching keyword or preset
    setTimeout(() => {
      let response = "That's a great question! I've logged this query. If you'd like to discuss this in detail with our solutions architects, you can book a live demo in the contact section below.";
      
      const lower = userText.toLowerCase();
      if (lower.includes("price") || lower.includes("cost") || lower.includes("pricing")) {
        response = "Our Starter plan begins at $49/user/month (billed annually). The Professional plan is $99/user/month, and Enterprise is custom. All plans include core CRM and Finance features.";
      } else if (lower.includes("module") || lower.includes("feature") || lower.includes("what does it do")) {
        response = "Syncora offers modular business apps: Accounting, HR, CRM, Supply Chain, Manufacturing, and BI Analytics. You pay only for what you use.";
      } else if (lower.includes("free") || lower.includes("trial") || lower.includes("test")) {
        response = "Yes! You can start a 14-day free trial directly on our site without entering a credit card. Check out the Pricing section to get started.";
      } else if (lower.includes("integrate") || lower.includes("api") || lower.includes("salesforce")) {
        response = "Syncora supports over 200 native integrations (Shopify, QuickBooks, Salesforce, Stripe, etc.) plus a fully featured developer REST API.";
      } else if (lower.includes("hello") || lower.includes("hi")) {
        response = "Hello! How can I assist you with Syncora today?";
      }

      setMessages(prev => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          text: response,
          timestamp: new Date()
        }
      ]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="w-96 h-[500px] rounded-3xl bg-[#0a192f] border border-white/10 shadow-2xl flex flex-col overflow-hidden mb-4"
          >
            {/* Chat Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center relative">
                  <Bot className="w-5 h-5 text-white" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 border border-[#0a192f] absolute bottom-0 right-0 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                    Solvi AI Agent
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-blue-500/20 text-blue-300 border border-blue-400/20 gap-0.5">
                      <Sparkles className="w-2.5 h-2.5" /> AI
                    </span>
                  </h4>
                  <p className="text-blue-100 text-xs">Replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      msg.sender === "bot" ? "bg-blue-600/20 border border-blue-500/30 text-blue-400" : "bg-indigo-600/20 border border-indigo-500/30 text-indigo-400"
                    }`}
                  >
                    {msg.sender === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.sender === "bot"
                        ? "bg-white/5 text-slate-200 rounded-tl-sm border border-white/5"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-sm"
                    }`}
                  >
                    <p className="leading-relaxed">{msg.text}</p>
                    <span className="text-[10px] text-slate-500 block mt-1 text-right">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white/5 text-slate-400 rounded-2xl rounded-tl-sm border border-white/5 px-4 py-3 flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              
              <div ref={chatEndRef} />
            </div>

            {/* Presets Grid */}
            {messages.length === 1 && (
              <div className="p-3 bg-white/3 border-t border-white/5">
                <p className="text-[11px] text-slate-500 font-semibold mb-2 px-1 uppercase tracking-wider">Suggested Questions</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {PRESETS.map((preset) => (
                    <button
                      key={preset.q}
                      onClick={() => {
                        handleSend(preset.q, "user");
                        setTimeout(() => simulateBotResponse(preset.q), 500);
                      }}
                      className="text-left text-xs bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 text-slate-300 p-2 rounded-xl transition-all duration-200 truncate"
                    >
                      {preset.q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 bg-white/5 border-t border-white/10 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about pricing, trial, integrations..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white disabled:opacity-40 transition-opacity"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Bubble */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setUnread(false);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-2xl relative group cursor-pointer hover:shadow-blue-500/20"
      >
        <MessageSquare className="w-6 h-6 transition-transform group-hover:rotate-6" />
        <AnimatePresence>
          {unread && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-[#0a192f] absolute top-0.5 right-0.5"
            />
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

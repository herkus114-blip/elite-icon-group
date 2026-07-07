import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';

const COMPANY_CONTEXT = `
You are a helpful assistant for Elite Icon Group — a multinational strategic advisory platform headquartered in Dubai (The 9 Lounge, Kempinski Hotel, Mall of Emirates, Sheikh Zayed Road, P.O. Box 121301).

Elite Icon Group specialises in:
- Real-World Asset (RWA) Tokenisation: Structuring compliant digital asset frameworks for institutional clients
- Sovereign Advisory: Strategic advisory for governments and sovereign wealth funds
- Islamic Finance Structuring: Sharia-compliant capital markets and financial architecture
- Institutional Blockchain: Enterprise-grade distributed ledger solutions
- Central Bank Strategy: CBDC feasibility studies and implementation frameworks
- Technology & Compliance: Regulatory technology and AML/KYC solutions

The firm operates across the EU, UAE, and USA. They work exclusively with institutional clients. Consultations are confidential and may require an NDA. Contact: jedlickijherkus@gmail.com.

Answer questions about the company helpfully and accurately. For questions outside the company context, answer as a knowledgeable general assistant.
`;

export default function ChatbotPopup() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m the Elite Icon Group assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setLoading(true);

    const history = newMessages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n');
    const prompt = `${COMPANY_CONTEXT}\n\nConversation history:\n${history}\n\nProvide a helpful, concise response as the assistant.`;

    const reply = await base44.integrations.Core.InvokeLLM({ prompt });
    setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-gold text-[#0A1628] rounded-full shadow-2xl flex items-center justify-center hover:bg-[#B8953D] transition-all duration-300 ${open ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100 scale-100'}`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-6rem)] flex flex-col bg-[#0A1628] border border-white/10 shadow-2xl rounded-sm overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0F1F38] shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-white text-sm font-sans-body font-medium">Ask me anything</p>
                  <p className="text-white/40 text-xs font-sans-body">Elite Icon Group Assistant</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-4 py-2.5 text-sm font-sans-body leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gold text-[#0A1628] rounded-tl-xl rounded-tr-sm rounded-bl-xl rounded-br-xl'
                      : 'bg-white/8 text-white/80 rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-xl border border-white/10'
                  }`} style={msg.role === 'assistant' ? { background: 'rgba(255,255,255,0.06)' } : {}}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="px-4 py-3 rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-xl border border-white/10" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <Loader2 className="w-4 h-4 text-gold animate-spin" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="shrink-0 border-t border-white/10 px-4 py-3 flex items-center gap-3">
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Type your message..."
                className="flex-1 bg-transparent text-white/80 text-sm font-sans-body placeholder:text-white/25 outline-none"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="w-8 h-8 flex items-center justify-center text-gold hover:text-[#B8953D] disabled:opacity-30 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { BRAND, CHATBOT_DATA } from '@/data/content';

interface Message {
  role: 'bot' | 'user';
  text: string;
}

const INITIAL_MESSAGE: Message = {
  role: 'bot',
  text: `Hello! I'm the Wild Bunch wellness guide. Ask me anything about our juices, hours, location, or ordering!`,
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const findAnswer = (query: string): string => {
    const lower = query.toLowerCase().trim();
    let bestMatch: { score: number; answer: string } = { score: 0, answer: '' };

    for (const qa of CHATBOT_DATA) {
      let score = 0;
      for (const keyword of qa.keywords) {
        if (lower.includes(keyword)) score += 1;
      }
      if (qa.question.toLowerCase().includes(lower)) score += 3;
      if (lower.includes(qa.question.toLowerCase().split(' ')[0].toLowerCase())) score += 1;
      if (score > bestMatch.score) {
        bestMatch = { score, answer: qa.answer };
      }
    }

    if (bestMatch.score === 0) {
      return `I'd love to help with that! For specific questions, feel free to call us at ${BRAND.phone} or visit us at ${BRAND.address}. You can also browse our Menu and Contact pages for more info.`;
    }
    return bestMatch.answer;
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const answer = findAnswer(text);
      setTyping(false);
      setMessages((prev) => [...prev, { role: 'bot', text: answer }]);
    }, 700 + Math.random() * 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const quickQuestions = CHATBOT_DATA.slice(0, 4).map((qa) => qa.question);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-5 right-5 z-50 glass-btn-strong rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-400 ${
          open ? 'scale-90' : 'scale-100'
        }`}
        style={{
          background: 'linear-gradient(135deg, #566e44 0%, #44583a 100%)',
          boxShadow: '0 4px 24px 0 rgba(68, 88, 58, 0.35)',
        }}
        aria-label="Open chat"
      >
        {open ? (
          <X size={22} className="text-white" strokeWidth={1.5} />
        ) : (
          <MessageCircle size={22} className="text-white" strokeWidth={1.5} />
        )}
        {!open && (
          <span
            className="absolute inset-0 rounded-full"
            style={{ animation: 'pulseRing 2s ease-out infinite', border: '2px solid rgba(86,110,68,0.4)' }}
          />
        )}
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[360px] max-w-[calc(100vw-2.5rem)] glass-strong rounded-3xl overflow-hidden chatbot-enter flex flex-col" style={{ maxHeight: 'min(560px, 70vh)' }}>
          {/* Header */}
          <div className="px-5 py-4 border-b border-white/30 flex items-center gap-3 chatbot-bg" style={{ background: 'rgba(244,241,234,0.5)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #566e44 0%, #44583a 100%)' }}>
              <Sparkles size={18} className="text-white" strokeWidth={1.5} />
            </div>
            <div>
              <div className="luxury-heading text-lg text-charcoal-700 leading-none">Wild Bunch Guide</div>
              <div className="text-[11px] text-sage-500 tracking-wide-2 mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                Online &mdash; Ask me anything
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 chatbot-msgs-bg" style={{ background: 'rgba(249,246,239,0.4)' }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} chatbot-message-enter`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'text-white rounded-br-md'
                      : 'glass-card text-charcoal-600 rounded-bl-md'
                  }`}
                  style={
                    msg.role === 'user'
                      ? { background: 'linear-gradient(135deg, #566e44 0%, #44583a 100%)' }
                      : undefined
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start chatbot-message-enter">
                <div className="glass-card px-4 py-3 rounded-2xl rounded-bl-md flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            {/* Quick questions */}
            {messages.length <= 1 && !typing && (
              <div className="pt-2 space-y-2">
                <p className="text-[11px] text-charcoal-400 tracking-wide-2 uppercase px-1">Quick Questions</p>
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="block w-full text-left glass-card px-3.5 py-2.5 rounded-xl text-sm text-charcoal-500 hover:text-sage-600 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-white/30 flex items-center gap-2 chatbot-bg" style={{ background: 'rgba(249,246,239,0.5)' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="chatbot-input flex-1 bg-white/40 border border-white/50 rounded-full px-4 py-2.5 text-sm text-charcoal-600 placeholder-charcoal-400/60 outline-none focus:border-sage-300 transition-colors"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 transition-transform hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #566e44 0%, #44583a 100%)' }}
              aria-label="Send"
            >
              <Send size={16} strokeWidth={1.5} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

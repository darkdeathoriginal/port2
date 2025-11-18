import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToShadow } from '../services/gemini';
import { MessageCircle, X, Send, Ghost } from 'lucide-react';

export const ShadowCompanion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: "Greetings, survivor. The fire is fading... ask me what you need to know." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    const currentHistory = [...messages]; // Capture history before adding new user message for state
    
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // We pass the history including the previous messages. 
      // The backend will add the new 'userMsg' to the context via the 'message' param in the API call,
      // but providing full context (including the just-sent message if we wanted, but usually history is prior context)
      // helps. However, the API design in services/gemini takes message + history.
      // Let's pass the history *prior* to this new message to avoid duplication if the backend appends it,
      // OR if the backend treats 'history' as 'previous turns'.
      // Based on api/chat.js, it initializes chat with `history`.
      
      const response = await sendMessageToShadow(userMsg, currentHistory);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "The shadows are interfering..." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-ds-dark border-4 border-ds-gray shadow-2xl relative overflow-hidden animate-flicker">
            {/* Sketchy header */}
            <div className="bg-ds-ink p-3 flex justify-between items-center border-b-2 border-ds-gray">
                <div className="flex items-center gap-2">
                    <Ghost className="text-ds-paper" size={20} />
                    <h3 className="font-sketch text-2xl text-ds-paper tracking-widest">Shadow Companion</h3>
                </div>
                <button onClick={toggleChat} className="text-ds-red hover:text-white">
                    <X size={24} />
                </button>
            </div>

            {/* Messages Area */}
            <div className="h-80 overflow-y-auto p-4 bg-[#151310] custom-scrollbar relative">
                {/* Texture overlay inside chat */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20 pointer-events-none"></div>
                
                {messages.map((msg, idx) => (
                    <div 
                        key={idx} 
                        className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div 
                            className={`max-w-[80%] p-3 font-typewriter text-sm border-2 ${
                                msg.role === 'user' 
                                ? 'bg-ds-paper text-ds-ink border-ds-gray rounded-tr-none' 
                                : 'bg-ds-ink text-ds-paper border-ds-red-dark rounded-tl-none'
                            }`}
                            style={{
                                borderRadius: '8px',
                                transform: msg.role === 'user' ? 'rotate(1deg)' : 'rotate(-1deg)'
                            }}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start mb-3">
                        <div className="bg-ds-ink text-ds-paper p-3 border-2 border-ds-red-dark font-sketch text-xl animate-pulse">
                            Consulting the Codex...
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-ds-ink border-t-2 border-ds-gray flex gap-2">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Whisper to the void..."
                    className="flex-1 bg-[#0f0e0d] border border-ds-gray text-ds-paper font-typewriter px-3 py-2 focus:outline-none focus:border-ds-red"
                />
                <button 
                    onClick={handleSend}
                    disabled={isLoading}
                    className="bg-ds-red text-white p-2 hover:bg-ds-red-dark border border-ds-paper disabled:opacity-50"
                >
                    <Send size={20} />
                </button>
            </div>
        </div>
      )}

      <button 
        onClick={toggleChat}
        className={`
            bg-ds-dark text-ds-paper p-4 rounded-full border-4 border-ds-gray shadow-lg 
            hover:bg-ds-red hover:border-white hover:scale-110 transition-all duration-300
            ${isOpen ? 'rotate-180 bg-ds-red border-white' : 'animate-wiggle'}
        `}
      >
        {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
      </button>
    </div>
  );
};
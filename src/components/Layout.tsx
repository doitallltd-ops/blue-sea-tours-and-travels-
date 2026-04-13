import { ReactNode, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute bottom-20 right-0 w-80 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
            >
              <div className="bg-sea-600 p-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Live Support</h4>
                    <p className="text-[10px] text-sea-100">Typically replies in minutes</p>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                  <X size={20} />
                </button>
              </div>
              <div className="h-64 p-4 bg-slate-50 overflow-y-auto flex flex-col gap-3">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none text-sm text-slate-600 shadow-sm self-start max-w-[80%]">
                  Hello! How can we help you plan your dream cruise today?
                </div>
              </div>
              <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-grow text-sm focus:outline-none"
                />
                <button className="text-sea-600 hover:text-sea-700">
                  <Send size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-16 h-16 bg-sea-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-sea-700 transition-all"
        >
          {isChatOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </motion.button>
      </div>
    </div>
  );
}

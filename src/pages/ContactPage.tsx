import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl space-y-6"
        >
          <span className="text-sea-600 font-bold uppercase tracking-widest text-sm">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
            Let's Plan Your <br />
            <span className="italic">Next Adventure</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Have questions about our cruise packages or want to book a consultation? Our team is here to help you every step of the way.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-serif font-bold text-slate-900">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-sea-50 flex items-center justify-center text-sea-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-lg font-medium text-slate-900">099676 42578</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-sea-50 flex items-center justify-center text-sea-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg font-medium text-slate-900">info@blueseatours.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-sea-50 flex items-center justify-center text-sea-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Address</p>
                  <p className="text-sm font-medium text-slate-900 leading-relaxed">
                    Africawala House, Near MHADA Police Station, Sion-Chunabhatti, Mumbai - 400 022
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-sea-50 flex items-center justify-center text-sea-600 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Opening Hours</p>
                  <p className="text-sm font-medium text-slate-900">Tue: 9:00 AM - 9:00 PM</p>
                  <p className="text-xs text-slate-400 mt-1">Closed on Sundays</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-sea-600 rounded-3xl text-white space-y-4 shadow-xl shadow-sea-600/20">
            <MessageSquare size={32} className="mb-2" />
            <h4 className="text-xl font-bold">Live Chat Support</h4>
            <p className="text-sea-100 text-sm leading-relaxed">
              Need immediate assistance? Our travel experts are available for live chat during business hours.
            </p>
            <button className="w-full py-3 bg-white text-sea-600 rounded-xl font-bold hover:bg-sea-50 transition-all">
              Start Chat
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-8">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-sea-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-sea-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-sea-500 transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Cruise Booking</option>
                  <option>Appointment Request</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your dream vacation..."
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-sea-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-sea-600 text-white rounded-2xl font-bold text-lg hover:bg-sea-700 transition-all shadow-xl shadow-sea-600/20 flex items-center justify-center gap-3 group"
              >
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-24 max-w-7xl mx-auto px-6">
        <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-slate-100 relative border border-slate-100">
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-4">
            <MapPin size={48} />
            <span className="font-bold uppercase tracking-widest text-xs">Google Maps Integration</span>
          </div>
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1920"
            alt="Map Background"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </div>
  );
}

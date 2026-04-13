import { Link } from 'react-router-dom';
import { Ship, Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-sea-600 rounded-full flex items-center justify-center text-white">
              <Ship size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold leading-none text-white">
                Blue Sea
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-sea-400">
                Tours & Travels
              </span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Experience the ultimate luxury on the high seas. We specialize in crafting unforgettable cruise experiences tailored to your desires.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-sea-600 hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-sea-600 hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-sea-600 hover:text-white transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-serif text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-sea-400 transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-sea-400 transition-colors">Our Services</Link></li>
            <li><Link to="/about" className="hover:text-sea-400 transition-colors">About Us</Link></li>
            <li><Link to="/reviews" className="hover:text-sea-400 transition-colors">Customer Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-sea-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-serif text-lg font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-sea-500 shrink-0" />
              <span>Africawala House, Near MHADA Police Station, Sion-Chunabhatti, Mumbai - 400 022</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-sea-500 shrink-0" />
              <span>099676 42578</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-sea-500 shrink-0" />
              <span>info@blueseatours.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-sea-500 shrink-0" />
              <span>Tue: 9:00 AM - 9:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-serif text-lg font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-slate-400 mb-4">Subscribe to get special offers and travel inspiration.</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-sea-500 transition-colors"
            />
            <button className="bg-sea-600 text-white rounded-lg py-2.5 text-sm font-bold hover:bg-sea-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {currentYear} Blue Sea Tours And Travels. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

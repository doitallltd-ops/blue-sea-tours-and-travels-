import { motion } from 'motion/react';
import { Anchor, Star, ArrowRight, Shield, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredCruises = [
  {
    id: 1,
    title: "Mediterranean Dream",
    duration: "7 Nights",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Caribbean Paradise",
    duration: "10 Nights",
    price: "$1,899",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Alaskan Adventure",
    duration: "12 Nights",
    price: "$2,499",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800",
    rating: 5.0,
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500043204644-714de04028bc?auto=format&fit=crop&q=80&w=1920"
            alt="Luxury Cruise"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sea-950/60 via-sea-950/40 to-sea-950/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sea-500/20 border border-sea-400/30 text-sea-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              Premium Travel Agency
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-[1.1] mb-8">
              Experience Luxury <br />
              <span className="italic text-sea-300">on the High Seas</span>
            </h1>
            <p className="text-lg md:text-xl text-sea-100/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Discover breathtaking destinations and unparalleled comfort with Blue Sea Tours And Travels. Your journey to paradise starts here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-sea-600 text-white rounded-full font-bold text-lg hover:bg-sea-700 transition-all shadow-xl shadow-sea-900/40 flex items-center justify-center gap-2 group"
              >
                Book Your Cruise Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center space-y-2">
              <div className="text-4xl font-serif font-bold text-sea-900">4.9</div>
              <div className="flex justify-center text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-400">Average Rating</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-serif font-bold text-sea-900">57+</div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-400">Happy Clients</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-serif font-bold text-sea-900">15+</div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-400">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-serif font-bold text-sea-900">100%</div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540759786422-c60d5ecd57ad?auto=format&fit=crop&q=80&w=800"
                alt="About Blue Sea"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sea-600 rounded-2xl p-8 text-white shadow-2xl hidden md:block">
              <Anchor size={48} className="mb-6 opacity-50" />
              <h3 className="text-2xl font-serif font-bold mb-2">Expertly Crafted</h3>
              <p className="text-sm text-sea-100 leading-relaxed">
                We don't just book trips; we create memories that last a lifetime.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="text-sea-600 font-bold uppercase tracking-widest text-sm">About Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                Your Trusted Partner for <br />
                <span className="italic text-sea-600">Oceanic Adventures</span>
              </h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Blue Sea Tours And Travels is a premier travel agency based in Mumbai, dedicated to providing luxury cruise experiences. With a 4.9-star rating and a passion for excellence, we ensure every detail of your journey is perfect.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-sea-100 flex items-center justify-center text-sea-600 shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Secure Booking</h4>
                  <p className="text-sm text-slate-500">Your safety and privacy are our top priorities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-sea-100 flex items-center justify-center text-sea-600 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">24/7 Support</h4>
                  <p className="text-sm text-slate-500">We're here for you at every step of your journey.</p>
                </div>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-bold text-sea-600 hover:text-sea-700 transition-colors group"
            >
              Learn More About Our Story
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cruises */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-sea-600 font-bold uppercase tracking-widest text-sm">Our Packages</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">
                Featured <span className="italic">Cruises</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="px-8 py-3 border-2 border-slate-200 rounded-full font-bold text-slate-600 hover:border-sea-600 hover:text-sea-600 transition-all"
            >
              View All Packages
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCruises.map((cruise) => (
              <motion.div
                key={cruise.id}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cruise.image}
                    alt={cruise.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-sea-900 flex items-center gap-1">
                    <Star size={12} className="text-yellow-500 fill-yellow-500" />
                    {cruise.rating}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-serif font-bold text-slate-900">{cruise.title}</h3>
                    <span className="text-sea-600 font-bold">{cruise.price}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {cruise.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      Multi-stop
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="block w-full text-center py-3 bg-slate-50 text-slate-900 rounded-xl font-bold hover:bg-sea-600 hover:text-white transition-all"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto relative rounded-[2.5rem] overflow-hidden bg-sea-900 py-20 px-10 text-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1517330357046-3ab5a5dd42b1?auto=format&fit=crop&q=80&w=1920"
              alt="Ocean View"
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Ready to Start Your <br />
              <span className="italic text-sea-300">Dream Vacation?</span>
            </h2>
            <p className="text-lg text-sea-100/80">
              Join thousands of happy travelers who have experienced the magic of the ocean with us. Book your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-white text-sea-900 rounded-full font-bold text-lg hover:bg-sea-50 transition-all shadow-xl"
              >
                Get in Touch
              </Link>
              <a
                href="tel:09967642578"
                className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call: 099676 42578
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Phone(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

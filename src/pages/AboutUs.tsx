import { motion } from 'motion/react';
import { Target, Eye, Users, Award } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <span className="text-sea-600 font-bold uppercase tracking-widest text-sm">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900">
            About <span className="italic">Blue Sea</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Since our inception, we've been dedicated to redefining the cruise experience, blending luxury with adventure to create unforgettable journeys.
          </p>
        </motion.div>
      </section>

      {/* History & Vision */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif font-bold text-slate-900">Our History</h2>
              <div className="w-20 h-1.5 bg-sea-600 rounded-full" />
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded in Mumbai, Blue Sea Tours And Travels began with a simple mission: to make luxury cruises accessible to discerning travelers. Over the years, we have grown from a small consultancy to a leading travel agency, recognized for our expertise and personalized service.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our team of travel experts brings decades of combined experience in the maritime and tourism industries, ensuring that every cruise we organize meets the highest standards of quality and safety.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <div className="text-3xl font-serif font-bold text-sea-600">15+</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Years in Business</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-serif font-bold text-sea-600">5000+</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Bookings Completed</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800"
                alt="Our Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-sea-100 flex items-center justify-center text-sea-600">
                  <Award size={20} />
                </div>
                <span className="font-bold text-slate-900">Award Winning</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Recognized as the "Best Luxury Cruise Agency" in the region for three consecutive years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all space-y-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-sea-50 flex items-center justify-center text-sea-600">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-slate-900">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide exceptional travel experiences that inspire and enrich the lives of our customers. We strive to offer the highest level of service, value, and expertise in the luxury cruise market.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all space-y-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-sea-50 flex items-center justify-center text-sea-600">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-slate-900">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the most preferred and trusted luxury travel agency globally, known for our innovation, integrity, and commitment to creating unforgettable oceanic adventures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold">Visit Our Office</h2>
            <p className="text-slate-400 leading-relaxed">
              We are located in the heart of Mumbai. Drop by for a personalized consultation with our cruise experts.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-sea-400 shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Expert Consultants</h4>
                  <p className="text-sm text-slate-400">Available for on-site meetings.</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm font-medium text-slate-300 mb-2 uppercase tracking-widest">Address</p>
              <p className="text-lg">Africawala House, Near MHADA Police Station, Sion-Chunabhatti, Mumbai - 400 022</p>
            </div>
          </div>
          <div className="aspect-video rounded-3xl overflow-hidden bg-slate-800 relative">
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 flex-col gap-4">
              <MapPin size={48} />
              <span className="font-bold uppercase tracking-widest text-xs">Google Maps Integration</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200"
              alt="Map Background"
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function MapPin(props: any) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

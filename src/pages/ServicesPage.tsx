import { motion } from 'motion/react';
import { Ship, Calendar, Headphones, Compass, Map, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Luxury Cruise Booking",
    description: "Access to exclusive cruise lines and premium cabins worldwide.",
    icon: Ship,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Online Appointments",
    description: "Book a virtual consultation with our travel experts from anywhere.",
    icon: Calendar,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "On-site Consultations",
    description: "Visit our Mumbai office for a face-to-face travel planning session.",
    icon: Headphones,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Custom Itineraries",
    description: "Tailor-made travel plans that match your specific preferences.",
    icon: Compass,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Shore Excursions",
    description: "Curated land tours and activities at every port of call.",
    icon: Map,
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "VIP Concierge",
    description: "Priority boarding, private transfers, and 24/7 travel assistance.",
    icon: Coffee,
    color: "bg-amber-50 text-amber-600"
  }
];

const packages = [
  {
    name: "Family Fun Cruise",
    price: "From $899/pp",
    features: ["Kids Club Access", "Family Suites", "All-inclusive Dining", "Water Park Entry"],
    image: "https://images.unsplash.com/photo-1540759786422-c60d5ecd57ad?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Honeymoon Escape",
    price: "From $1,499/pp",
    features: ["Private Balcony", "Champagne on Arrival", "Spa Treatments", "Romantic Dinners"],
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Solo Explorer",
    price: "From $1,199/pp",
    features: ["Single Studios", "Social Mixers", "Guided Shore Tours", "Fitness Center"],
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=600"
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl space-y-6">
            <span className="text-sea-600 font-bold uppercase tracking-widest text-sm">Our Expertise</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Comprehensive <br />
              <span className="italic">Travel Services</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              From the moment you dream of a voyage to the day you return home, we handle every detail with precision and care.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-10 py-4 bg-sea-600 text-white rounded-full font-bold hover:bg-sea-700 transition-all shadow-lg"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cruise Packages */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-serif font-bold text-slate-900">Popular Cruise Packages</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Explore our most requested travel packages designed for every type of traveler.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm group">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold text-slate-900">{pkg.name}</h3>
                </div>
                <p className="text-sea-600 font-bold mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-sea-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full text-center py-3 border-2 border-sea-600 text-sea-600 rounded-xl font-bold hover:bg-sea-600 hover:text-white transition-all"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-24 bg-sea-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-serif font-bold">How to Book Your <br /><span className="italic text-sea-400">Dream Cruise</span></h2>
                <p className="text-slate-400">Booking with us is simple, transparent, and personalized.</p>
              </div>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Consultation", text: "Book an online or on-site appointment to discuss your travel goals." },
                  { step: "02", title: "Selection", text: "Choose from our curated list of luxury cruise packages or customize your own." },
                  { step: "03", title: "Confirmation", text: "We handle all the paperwork and logistics. You just pack your bags." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-4xl font-serif font-bold text-sea-800">{item.step}</span>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1517330357046-3ab5a5dd42b1?auto=format&fit=crop&q=80&w=800"
                  alt="Cruise Deck"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-sea-600 rounded-full flex items-center justify-center text-center p-6 animate-pulse">
                <span className="font-serif text-xl font-bold italic">Limited Time Offers Available!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

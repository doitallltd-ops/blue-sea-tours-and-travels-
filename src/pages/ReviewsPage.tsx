import { motion } from 'motion/react';
import { Star, Quote, User } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    rating: 5,
    date: "March 2024",
    text: "Absolutely fantastic experience! The Mediterranean cruise organized by Blue Sea was flawless. The attention to detail was impressive.",
    avatar: null
  },
  {
    id: 2,
    name: "Anjali Sharma",
    rating: 5,
    date: "January 2024",
    text: "We booked our honeymoon through them and it was the best decision. They handled everything from flights to the cruise cabin selection.",
    avatar: null
  },
  {
    id: 3,
    name: "Vikram Singh",
    rating: 4,
    date: "December 2023",
    text: "Great service and very professional staff. The on-site consultation in Mumbai was very helpful in deciding which package to choose.",
    avatar: null
  },
  {
    id: 4,
    name: "Priya Patel",
    rating: 5,
    date: "October 2023",
    text: "Highly recommend Blue Sea Tours. Their 4.9 rating is well-deserved. Truly a premium experience on the high seas!",
    avatar: null
  },
  {
    id: 5,
    name: "Amitabh Shah",
    rating: 5,
    date: "August 2023",
    text: "The Alaskan cruise was breathtaking. Everything was perfectly timed and the shore excursions were the highlight of the trip.",
    avatar: null
  },
  {
    id: 6,
    name: "Sneha Gupta",
    rating: 5,
    date: "June 2023",
    text: "Excellent customer support. They were available 24/7 when we had questions during our trip. Will definitely book again.",
    avatar: null
  }
];

export default function ReviewsPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <span className="text-sea-600 font-bold uppercase tracking-widest text-sm">Testimonials</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900">
            What Our <span className="italic">Clients Say</span>
          </h1>
          <div className="flex flex-col items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <p className="text-lg font-bold text-slate-900">4.9/5 Based on 57 Reviews</p>
          </div>
        </motion.div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col"
            >
              <div className="mb-6 text-sea-100">
                <Quote size={40} fill="currentColor" />
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{review.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Review CTA */}
      <section className="mt-24 py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl font-serif font-bold text-slate-900">Have You Traveled With Us?</h2>
          <p className="text-lg text-slate-600">
            We'd love to hear about your experience. Your feedback helps us continue to provide the best luxury cruise services in Mumbai.
          </p>
          <button className="px-10 py-4 bg-sea-600 text-white rounded-full font-bold hover:bg-sea-700 transition-all shadow-lg">
            Leave a Review
          </button>
        </div>
      </section>
    </div>
  );
}

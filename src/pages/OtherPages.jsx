// News Page
import { motion } from 'framer-motion';
import { useState } from 'react';
import { news } from '../data/people';
import { NewsCard, AwardItem, SectionHeader } from '../components/Cards';
import { fadeUp, pageTransition } from '../animations/variants';

const categories = ['All', 'Award', 'Publication', 'Grant', 'Student', 'Talk', 'Media'];

export function News() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? news : news.filter(n => n.category === activeCategory);

  return (
    <motion.div {...pageTransition} className="px-6 md:px-10 lg:px-14 py-10 max-w-4xl">
      <section className="mb-12">
        <motion.p variants={fadeUp} initial="hidden" animate="visible" className="section-label mb-3">Updates</motion.p>
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible"
          className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          News & Updates
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="visible"
          className="text-gray-500 dark:text-gray-400 max-w-xl text-sm md:text-base">
          Latest announcements, publications, awards, and events from the SUST Geography Laboratory.

        </motion.p>
      </section>

      {/* Category Filter */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 border ${
              activeCategory === cat
                ? 'bg-navy-700 text-white border-navy-700 dark:bg-blue-600 dark:border-blue-600'
                : 'border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((item) => <NewsCard key={item.id} item={item} />)}
      </div>
    </motion.div>
  );
}

// Awards Page
import { awards } from '../data/people';

export function Awards() {
  return (
    <motion.div {...pageTransition} className="px-6 md:px-10 lg:px-14 py-10 max-w-4xl">
      <section className="mb-12">
        <motion.p variants={fadeUp} initial="hidden" animate="visible" className="section-label mb-3">Recognition</motion.p>
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible"
          className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Awards & Honors
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="visible"
          className="text-gray-500 dark:text-gray-400 max-w-xl text-sm md:text-base">
          Recognition for contributions to research, teaching, and service in the AI and cognitive science communities.
        </motion.p>
      </section>

      <section>
        <div className="space-y-0">
          {awards.map((award, i) => (
            <AwardItem key={`${award.year}-${award.title}`} award={award} index={i} />
          ))}
        </div>
      </section>
    </motion.div>
  );
}

// Contact Page
import { Mail, MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { faculty } from '../data/faculty';

export function Contact() {
  return (
    <motion.div {...pageTransition} className="px-6 md:px-10 lg:px-14 py-10 max-w-4xl">
      <section className="mb-12">
        <motion.p variants={fadeUp} initial="hidden" animate="visible" className="section-label mb-3">Get in Touch</motion.p>
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible"
          className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Contact
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="visible"
          className="text-gray-500 dark:text-gray-400 max-w-xl text-sm md:text-base">
          I welcome inquiries from prospective students, collaborators, media, and anyone interested in my research.
          Response time is typically 3–5 business days.
        </motion.p>
      </section>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Contact Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-3"
        >
          <div className="card p-6">
            <h2 className="font-serif text-xl font-semibold text-gray-900 dark:text-white mb-6">Send a Message</h2>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">First Name</label>
                  <input type="text" className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-600/30 dark:focus:ring-blue-400/30" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Last Name</label>
                  <input type="text" className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-600/30 dark:focus:ring-blue-400/30" placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Email</label>
                <input type="email" className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-600/30 dark:focus:ring-blue-400/30" placeholder="jane@university.edu" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Subject</label>
                <select className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/3 text-gray-700 dark:text-gray-300 focus:outline-none">
                  <option>PhD Application Inquiry</option>
                  <option>Research Collaboration</option>
                  <option>Speaking Invitation</option>
                  <option>Media / Press</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Message</label>
                <textarea rows={5} className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-600/30 dark:focus:ring-blue-400/30 resize-none" placeholder="Your message..." />
              </div>
              <button className="btn-primary w-full justify-center">
                Send Message
              </button>
            </div>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-2 space-y-4"
        >
          {[
            { icon: Mail, label: 'Email', value: faculty.email, href: `mailto:${faculty.email}` },
            { icon: Phone, label: 'Phone', value: faculty.phone, href: `tel:${faculty.phone}` },
            { icon: MapPin, label: 'Office', value: faculty.office, href: null },
            { icon: Clock, label: 'Office Hours', value: faculty.officeHours, href: null },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="card p-4 flex gap-3">
              <div className="w-9 h-9 rounded-lg bg-navy-600/8 dark:bg-blue-400/8 flex items-center justify-center shrink-0">
                <Icon size={15} className="text-navy-600 dark:text-blue-300" />
              </div>
              <div>
                <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-0.5">{label}</p>
                {href ? (
                  <a href={href} className="text-sm text-navy-600 dark:text-blue-400 hover:underline">{value}</a>
                ) : (
                  <p className="text-sm text-gray-700 dark:text-gray-300">{value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Map Placeholder */}
          <div className="card overflow-hidden">
            <div className="h-36 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
              <div className="text-center text-gray-400 dark:text-gray-500">
                <MapPin size={20} className="mx-auto mb-1" />
                <p className="text-xs">SUST Geography Laboratory</p>
                <p className="text-xs">Sylhet, Bangladesh</p>

              </div>
            </div>
            <div className="p-3">
              <a
                href="https://maps.google.com/?q=Shahjalal+University+of+Science+and+Technology+Sylhet"

                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-navy-600 dark:text-blue-400 hover:underline"
              >
                <ExternalLink size={11} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

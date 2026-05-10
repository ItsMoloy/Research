import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, MapPin, Mail, ExternalLink, ChevronRight } from 'lucide-react';
import { faculty } from '../data/faculty';
import { publications } from '../data/publications';
import { news } from '../data/people';
import { PublicationCard, NewsCard, SectionHeader } from '../components/Cards';
import { fadeUp, staggerContainer, pageTransition } from '../animations/variants';

const stats = [
  { label: 'Publications', value: faculty.stats.publications },
  { label: 'Citations', value: faculty.stats.citations.toLocaleString() },
  { label: 'h-index', value: faculty.stats.hIndex },
  { label: 'PhD Students', value: faculty.stats.students },
  { label: 'Active Grants', value: faculty.stats.grants },
];

export default function Home() {
  const featuredPubs = publications.filter(p => p.featured).slice(0, 3);
  const latestNews = news.slice(0, 4);

  return (
    <motion.div {...pageTransition} className="px-6 md:px-10 lg:px-14 py-10 max-w-4xl">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="mb-16">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="section-label mb-3">
            Welcome
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6"
          >
            Shaping the Future of{' '}
            <span className="text-gradient">GIS</span>{' '}
            & Environmental Mapping

          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mb-8"
          >
            I’m a Professor at Shahjalal University of Science and Technology (SUST), where I lead the
            SUST Geography Laboratory. Our research focuses on GIS, remote sensing, and spatial analysis
            of environmental change—supporting evidence-based decisions for climate resilience.

          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
            <Link to="/research" className="btn-primary">
              Explore Research <ArrowRight size={16} />
            </Link>
            <a href={faculty.cvUrl} className="btn-outline">
              <Download size={16} /> Download CV
            </a>
          <Link to="/contact" className="btn-outline">
              <Mail size={16} /> Contact
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
            <MapPin size={14} />
            <span>{faculty.office}</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────── */}
      <section className="mb-16">
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{ background: 'linear-gradient(135deg, #0a1828 0%, #1a3a5c 100%)' }}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-5 gap-6 text-center"
          >
            {stats.map(({ label, value }) => (
              <motion.div key={label} variants={fadeUp}>
                <div className="font-serif text-2xl md:text-3xl font-bold text-white mb-0.5">{value}</div>
                <div className="text-xs text-white/50 font-medium">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Bio ──────────────────────────────────────────────────────── */}
      <section className="mb-16">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3">
            <SectionHeader label="About" title="Biography" />
            {faculty.bio.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
                {para}
              </p>
            ))}
          </div>
          <div className="md:col-span-2">
            <div className="sticky top-6">
              <p className="section-label mb-4">Research Interests</p>
              <div className="space-y-2">
                {faculty.interests.map((interest, i) => (
                  <motion.div
                    key={interest}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-white/3 border border-gray-100 dark:border-white/5 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <ChevronRight size={14} className="text-gold-500 shrink-0" />
                    {interest}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Publications ─────────────────────────────────────── */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader label="Selected Work" title="Featured Publications" />
          <Link to="/publications" className="flex items-center gap-1 text-sm text-navy-600 dark:text-blue-400 hover:underline shrink-0">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="space-y-4">
          {featuredPubs.map((pub, i) => (
            <PublicationCard key={pub.id} pub={pub} index={i} />
          ))}
        </div>
      </section>

      {/* ── Latest News ───────────────────────────────────────────────── */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader label="Updates" title="Latest News" />
          <Link to="/news" className="flex items-center gap-1 text-sm text-navy-600 dark:text-blue-400 hover:underline shrink-0">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {latestNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="mb-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl border border-gold-400/20 dark:border-gold-400/10 p-8 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(196,154,60,0.04) 0%, rgba(26,58,92,0.04) 100%)' }}
        >
          <p className="section-label mb-2 text-center">Join the Laboratory</p>

          <h2 className="font-serif text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Interested in Working Together?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 max-w-lg mx-auto">
            I'm always looking for motivated PhD students, postdocs, and research collaborators
            focused on GIS, remote sensing, environmental mapping, and climate resilience.

          </p>
          <Link to="/contact" className="btn-primary inline-flex">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

    </motion.div>
  );
}

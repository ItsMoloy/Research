import { motion } from 'framer-motion';
import { ExternalLink, Code, FileText, Quote, BookOpen, Award } from 'lucide-react';
import { fadeUp } from '../animations/variants';

// ─── Publication Card ──────────────────────────────────────────────────────────
export function PublicationCard({ pub, index = 0 }) {
  const typeColors = {
    conference: 'bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300',
    journal: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300',
    workshop: 'bg-purple-50 text-purple-700 dark:bg-purple-400/10 dark:text-purple-300',
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="group card p-6 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-black/30"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${typeColors[pub.type] || typeColors.conference}`}>
            {pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
          </span>
          {pub.featured && (
            <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-gold-400/10 text-yellow-700 dark:text-gold-400">
              ★ Featured
            </span>
          )}
        </div>
        <span className="text-xs font-mono text-gray-400 dark:text-gray-500 shrink-0">{pub.year}</span>
      </div>

      <h3 className="font-serif text-base font-medium text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-navy-700 dark:group-hover:text-blue-300 transition-colors">
        {pub.title}
      </h3>

      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
        {pub.authors.join(', ')}
      </p>

      <p className="text-sm font-medium text-navy-600 dark:text-blue-400 mb-3">
        {pub.venue}
      </p>

      {pub.abstract && (
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
          {pub.abstract}
        </p>
      )}

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {pub.tags?.slice(0, 3).map(tag => (
            <span key={tag} className="tag text-[11px]">{tag}</span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {pub.citations > 0 && (
            <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
              <Quote size={11} />
              {pub.citations}
            </span>
          )}
          {pub.pdf && (
            <a href={pub.pdf} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/8 text-gray-400 hover:text-navy-600 dark:hover:text-blue-300 transition-colors" title="PDF">
              <FileText size={14} />
            </a>
          )}
          {pub.code && (
            <a href={pub.code} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/8 text-gray-400 hover:text-navy-600 dark:hover:text-blue-300 transition-colors" title="Code">
              <Code size={14} />
            </a>
          )}
          {pub.doi && (
            <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/8 text-gray-400 hover:text-navy-600 dark:hover:text-blue-300 transition-colors" title="DOI">
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Research Card ─────────────────────────────────────────────────────────────
export function ResearchCard({ area, index = 0 }) {
  const colorMap = {
    navy: { bg: 'bg-navy-600/8 dark:bg-blue-400/8', text: 'text-navy-700 dark:text-blue-300', border: 'border-navy-200 dark:border-blue-400/20' },
    gold: { bg: 'bg-amber-50 dark:bg-amber-400/8', text: 'text-amber-700 dark:text-amber-300', border: 'border-amber-200 dark:border-amber-400/20' },
    emerald: { bg: 'bg-emerald-50 dark:bg-emerald-400/8', text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-200 dark:border-emerald-400/20' },
    purple: { bg: 'bg-purple-50 dark:bg-purple-400/8', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-400/20' },
  };
  const colors = colorMap[area.color] || colorMap.navy;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`card p-6 border ${colors.border} hover:shadow-xl transition-all duration-300`}
    >
      <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
        <BookOpen size={18} className={colors.text} />
      </div>
      <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {area.title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
        {area.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {area.topics.map(t => (
          <span key={t} className={`text-[11px] px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} font-medium`}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Stat Card ─────────────────────────────────────────────────────────────────
export function StatCard({ label, value, suffix = '', delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="font-serif text-4xl font-bold text-navy-800 dark:text-white mb-1">
        {value.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</div>
    </motion.div>
  );
}

// ─── Section Header ────────────────────────────────────────────────────────────
export function SectionHeader({ label, title, subtitle, centered = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`mb-10 ${centered ? 'text-center' : ''}`}
    >
      {label && <p className="section-label mb-2">{label}</p>}
      <h2 className="section-title mb-3">{title}</h2>
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-white/5 py-8 px-8 mt-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-serif text-sm font-medium text-gray-700 dark:text-gray-300">
            Dr. Elena Marchetti
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Associate Professor · MIT · Cambridge, MA
          </p>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} Elena Marchetti. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Award Item ────────────────────────────────────────────────────────────────
export function AwardItem({ award, index }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex gap-4 group"
    >
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-xl bg-gold-400/10 dark:bg-gold-400/10 flex items-center justify-center text-gold-500 dark:text-gold-400 shrink-0">
          <Award size={18} />
        </div>
        <div className="w-px flex-1 bg-gray-100 dark:bg-white/5 mt-2" />
      </div>
      <div className="pb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-xs font-medium text-gold-600 dark:text-gold-400">{award.year}</span>
        </div>
        <h3 className="font-serif text-base font-semibold text-gray-900 dark:text-white mb-0.5">
          {award.title}
        </h3>
        <p className="text-xs font-medium text-navy-600 dark:text-blue-400 mb-2">{award.organization}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{award.description}</p>
      </div>
    </motion.div>
  );
}

// ─── News Card ─────────────────────────────────────────────────────────────────
export function NewsCard({ item }) {
  const categoryColors = {
    Award: 'bg-gold-400/10 text-yellow-700 dark:text-gold-400',
    Publication: 'bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300',
    Grant: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300',
    Student: 'bg-purple-50 text-purple-700 dark:bg-purple-400/10 dark:text-purple-300',
    Talk: 'bg-orange-50 text-orange-700 dark:bg-orange-400/10 dark:text-orange-300',
    Media: 'bg-pink-50 text-pink-700 dark:bg-pink-400/10 dark:text-pink-300',
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="card p-5 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${categoryColors[item.category] || 'bg-gray-100 text-gray-600'}`}>
          {item.category}
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500 font-mono shrink-0">{item.date}</span>
      </div>
      <h3 className="font-serif text-sm font-semibold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-navy-700 dark:group-hover:text-blue-300 transition-colors">
        {item.title}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
        {item.excerpt}
      </p>
    </motion.div>
  );
}

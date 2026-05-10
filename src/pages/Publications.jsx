import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { publications, publicationYears, publicationTags } from '../data/publications';
import { PublicationCard, SectionHeader } from '../components/Cards';
import { fadeUp, pageTransition } from '../animations/variants';

export default function Publications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filtered = useMemo(() => {
    return publications.filter(pub => {
      if (selectedYear !== 'all' && pub.year !== parseInt(selectedYear)) return false;
      if (selectedType !== 'all' && pub.type !== selectedType) return false;
      if (selectedTag !== 'all' && !pub.tags.includes(selectedTag)) return false;
      if (showFeaturedOnly && !pub.featured) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          pub.title.toLowerCase().includes(q) ||
          pub.authors.some(a => a.toLowerCase().includes(q)) ||
          pub.venue.toLowerCase().includes(q) ||
          pub.tags.some(t => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [searchQuery, selectedYear, selectedType, selectedTag, showFeaturedOnly]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedYear('all');
    setSelectedType('all');
    setSelectedTag('all');
    setShowFeaturedOnly(false);
  };

  const hasFilters = searchQuery || selectedYear !== 'all' || selectedType !== 'all' || selectedTag !== 'all' || showFeaturedOnly;

  const byYear = useMemo(() => {
    return publicationYears.reduce((acc, year) => {
      const pubs = filtered.filter(p => p.year === year);
      if (pubs.length) acc[year] = pubs;
      return acc;
    }, {});
  }, [filtered]);

  return (
    <motion.div {...pageTransition} className="px-6 md:px-10 lg:px-14 py-10 max-w-4xl">

      {/* Header */}
      <section className="mb-10">
        <motion.p variants={fadeUp} initial="hidden" animate="visible" className="section-label mb-3">
          Scholarly Work
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Publications
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-gray-500 dark:text-gray-400 max-w-xl text-sm md:text-base"
        >
          {publications.length} publications · {publications.reduce((a, p) => a + p.citations, 0).toLocaleString()} citations ·{' '}
          h-index 28
        </motion.p>
      </section>

      {/* Filters */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mb-8 space-y-3"
      >
        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search publications..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/3 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-600/30 dark:focus:ring-blue-400/30"
          />
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap gap-2 items-center">
          <Filter size={14} className="text-gray-400" />

          <select
            value={selectedYear}
            onChange={e => setSelectedYear(e.target.value)}
            className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/3 text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            <option value="all">All Years</option>
            {publicationYears.map(y => <option key={y} value={y}>{y}</option>)}
          </select>

          <select
            value={selectedType}
            onChange={e => setSelectedType(e.target.value)}
            className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/3 text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            <option value="all">All Types</option>
            <option value="conference">Conference</option>
            <option value="journal">Journal</option>
          </select>

          <select
            value={selectedTag}
            onChange={e => setSelectedTag(e.target.value)}
            className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/3 text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            <option value="all">All Topics</option>
            {publicationTags.map(t => <option key={t} value={t}>{t}</option>)}
          </select>

          <button
            onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
            className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
              showFeaturedOnly
                ? 'bg-gold-400/10 border-gold-400/30 text-yellow-700 dark:text-gold-400'
                : 'border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400'
            }`}
          >
            ★ Featured
          </button>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-400/8 transition-colors"
            >
              <X size={12} /> Clear
            </button>
          )}

          <span className="ml-auto text-xs text-gray-400 dark:text-gray-500">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </motion.div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400 dark:text-gray-500">
          <p className="font-serif text-xl mb-2">No publications found</p>
          <p className="text-sm">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="space-y-10">
          {Object.entries(byYear)
            .sort(([a], [b]) => b - a)
            .map(([year, pubs]) => (
              <div key={year}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-mono text-sm font-semibold text-gold-600 dark:text-gold-400">{year}</h2>
                  <div className="flex-1 border-t border-gray-100 dark:border-white/5" />
                  <span className="text-xs text-gray-400">{pubs.length}</span>
                </div>
                <div className="space-y-4">
                  {pubs.map((pub, i) => (
                    <PublicationCard key={pub.id} pub={pub} index={i} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </motion.div>
  );
}

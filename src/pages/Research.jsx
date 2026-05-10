import { motion } from 'framer-motion';
import { ExternalLink, Users, DollarSign, Calendar } from 'lucide-react';
import { researchAreas, activeProjects, collaborators } from '../data/research';
import { ResearchCard, SectionHeader } from '../components/Cards';
import { fadeUp, staggerContainer, pageTransition } from '../animations/variants';

export default function Research() {
  return (
    <motion.div {...pageTransition} className="px-6 md:px-10 lg:px-14 py-10 max-w-4xl">

      {/* Hero */}
      <section className="mb-14">
        <motion.p variants={fadeUp} initial="hidden" animate="visible" className="section-label mb-3">
          Laboratory
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
        >
          SUST Geography Laboratory
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl"
        >
          The SUST Geography Laboratory advances GIS, remote sensing, and spatial analysis to study
          environmental change, climate vulnerability, and resilience—turning geospatial evidence
          into actionable insights for sustainable development.
        </motion.p>
      </section>

      {/* Research Areas */}
      <section className="mb-16">
        <SectionHeader label="Focus Areas" title="Research Directions" />
        <div className="grid sm:grid-cols-2 gap-5">
          {researchAreas.map((area, i) => (
            <ResearchCard key={area.id} area={area} index={i} />
          ))}
        </div>
      </section>

      {/* Active Projects */}
      <section className="mb-16">
        <SectionHeader
          label="Current Work"
          title="Active Projects"
          subtitle="Ongoing research initiatives funded by NSF, NIH, DARPA, and other agencies."
        />
        <div className="space-y-6">
          {activeProjects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="card overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-56 lg:w-64 shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <Calendar size={12} className="text-gold-500 shrink-0" />
                      {project.period}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <DollarSign size={12} className="text-gold-500 shrink-0" />
                      {project.amount}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <Users size={12} className="text-gold-500 shrink-0" />
                      {project.collaborators.length} partners
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag text-[11px]">{tag}</span>
                    ))}
                  </div>

                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    <span className="font-medium">Funding: </span>{project.funding}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Collaborators */}
      <section className="mb-16">
        <SectionHeader label="Network" title="Key Collaborators" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {collaborators.map((collab, i) => (
            <motion.div
              key={collab.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card p-4 hover:shadow-md transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-navy-600/8 dark:bg-blue-400/8 flex items-center justify-center mb-3">
                <Users size={14} className="text-navy-600 dark:text-blue-300" />
              </div>
              <p className="font-medium text-sm text-gray-900 dark:text-white mb-0.5">{collab.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{collab.institution}</p>
              <span className="tag text-[11px]">{collab.area}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lab Info */}
      <section className="mb-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl p-8"
          style={{ background: 'linear-gradient(135deg, #0a1828, #1a3a5c)' }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-gold-400 mb-3">Lab Information</p>
          <h3 className="font-serif text-2xl font-bold text-white mb-4">
            SUST Geography Laboratory
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-white/50 text-xs mb-1">Location</p>
              <p className="text-white/90">Room 301, School of Life Sciences</p>
              <p className="text-white/90">SUST, Sylhet-3114</p>
            </div>
            <div>
              <p className="text-white/50 text-xs mb-1">Affiliated With</p>
              <p className="text-white/90">Department of Geography and Environment</p>
              <p className="text-white/90">Shahjalal University of Science and Technology (SUST)</p>
            </div>
          </div>
        </motion.div>
      </section>

    </motion.div>
  );
}

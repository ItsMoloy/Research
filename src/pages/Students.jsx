import { motion } from 'framer-motion';
import { ExternalLink, Mail, GraduationCap, Briefcase } from 'lucide-react';
import { students } from '../data/people';
import { SectionHeader } from '../components/Cards';
import { fadeUp, staggerContainer, pageTransition } from '../animations/variants';

function StudentCard({ student, showEmail = true }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="card p-5 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex gap-4">
        <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 ring-2 ring-gray-100 dark:ring-white/10">
          <img
            src={student.photo}
            alt={student.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-base font-semibold text-gray-900 dark:text-white truncate">
              {student.name}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              {student.website && (
                <a href={student.website} className="p-1 text-gray-300 dark:text-gray-600 hover:text-navy-600 dark:hover:text-blue-400 transition-colors">
                  <ExternalLink size={13} />
                </a>
              )}
              {student.email && showEmail && (
                <a href={`mailto:${student.email}`} className="p-1 text-gray-300 dark:text-gray-600 hover:text-navy-600 dark:hover:text-blue-400 transition-colors">
                  <Mail size={13} />
                </a>
              )}
            </div>
          </div>
          <p className="text-xs font-medium text-gold-600 dark:text-gold-400 mb-1">{student.year}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
            {student.research}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Students() {
  return (
    <motion.div {...pageTransition} className="px-6 md:px-10 lg:px-14 py-10 max-w-4xl">

      {/* Header */}
      <section className="mb-12">
        <motion.p variants={fadeUp} initial="hidden" animate="visible" className="section-label mb-3">
          People
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Lab Members
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-gray-500 dark:text-gray-400 max-w-xl text-sm md:text-base"
        >
          The SUST Geography Laboratory is home to an outstanding group of PhD students, master's
          students, and research assistants working on GIS, remote sensing, and spatial analysis
          for environmental and climate change.

        </motion.p>
      </section>

      {/* Stats Row */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3 gap-4 mb-12"
      >
        {[
          { label: 'PhD Students', value: students.phd.length },
          { label: "Master's Students", value: students.masters.length },
          { label: 'Alumni', value: students.alumni.length },
        ].map(({ label, value }) => (
          <div key={label} className="card p-4 text-center">
            <div className="font-serif text-3xl font-bold text-navy-800 dark:text-white mb-0.5">{value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
          </div>
        ))}
      </motion.div>

      {/* PhD Students */}
      <section className="mb-12">
        <SectionHeader label="Doctoral" title="PhD Students" />
        <div className="grid sm:grid-cols-2 gap-4">
          {students.phd.map((student, i) => (
            <StudentCard key={student.name} student={student} index={i} />
          ))}
        </div>
      </section>

      {/* Masters Students */}
      <section className="mb-12">
        <SectionHeader label="Graduate" title="Master's Students" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {students.masters.map((student, i) => (
            <StudentCard key={student.name} student={student} showEmail={false} index={i} />
          ))}
        </div>
      </section>

      {/* Alumni */}
      <section className="mb-12">
        <SectionHeader
          label="Graduates"
          title="Alumni"
          subtitle="Former lab members and their current positions."
        />
        <div className="space-y-3">
          {students.alumni.map((alum, i) => (
            <motion.div
              key={alum.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card p-5 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy-600/8 dark:bg-blue-400/8 flex items-center justify-center shrink-0">
                  <GraduationCap size={16} className="text-navy-600 dark:text-blue-300" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <span className="font-serif text-base font-semibold text-gray-900 dark:text-white">{alum.name}</span>
                      <span className="ml-2 font-mono text-xs text-gray-400 dark:text-gray-500">{alum.degree}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 mb-2">
                    <Briefcase size={11} className="text-gold-500 shrink-0" />
                    <p className="text-sm text-navy-600 dark:text-blue-400 font-medium">{alum.current}</p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                    Thesis: {alum.thesis}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Lab CTA */}
      <section className="mb-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl border border-navy-200/30 dark:border-blue-400/10 p-8"
          style={{ background: 'linear-gradient(135deg, rgba(26,58,92,0.04), rgba(26,58,92,0.02))' }}
        >
          <p className="section-label mb-2">Join Us</p>
          <h3 className="font-serif text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Prospective Students
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 max-w-lg">
            The SUST Geography Laboratory is actively recruiting PhD students for Fall 2026.
            We welcome applicants with strong backgrounds in GIS, remote sensing, environmental
            geography, spatial analysis, and climate risk assessment.
          </p>
          <a href="/contact" className="btn-primary inline-flex">
            Apply to Join the Laboratory
          </a>
        </motion.div>
      </section>

    </motion.div>
  );
}

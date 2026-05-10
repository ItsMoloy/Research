import { motion } from 'framer-motion';
import { BookOpen, Users, Download, Clock, GraduationCap } from 'lucide-react';
import { courses } from '../data/people';
import { SectionHeader } from '../components/Cards';
import { fadeUp, staggerContainer, pageTransition } from '../animations/variants';

const levelColor = {
  Graduate: 'bg-purple-50 text-purple-700 dark:bg-purple-400/10 dark:text-purple-300',
  Undergraduate: 'bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300',
};

export default function Teaching() {
  return (
    <motion.div {...pageTransition} className="px-6 md:px-10 lg:px-14 py-10 max-w-4xl">

      {/* Header */}
      <section className="mb-12">
        <motion.p variants={fadeUp} initial="hidden" animate="visible" className="section-label mb-3">
          Education
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Teaching
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-gray-500 dark:text-gray-400 max-w-xl text-sm md:text-base"
        >
          I teach graduate and undergraduate courses at the intersection of machine learning,
          cognitive science, and human-computer interaction. My courses emphasize critical thinking,
          hands-on projects, and ethical reasoning.
        </motion.p>
      </section>

      {/* Current Courses */}
      <section className="mb-14">
        <SectionHeader label="Spring 2025" title="Current Courses" />
        <div className="space-y-5">
          {courses.current.map((course, i) => (
            <motion.div
              key={course.code}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-sm font-semibold text-gold-600 dark:text-gold-400">
                      {course.code}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${levelColor[course.level]}`}>
                      {course.level}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Users size={13} />
                    {course.enrollment} students
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {course.credits} units
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                {course.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                  {course.semester}
                </span>
                {course.syllabus && (
                  <a
                    href={course.syllabus}
                    className="flex items-center gap-1.5 text-xs font-medium text-navy-600 dark:text-blue-400 hover:underline"
                  >
                    <Download size={12} />
                    Syllabus
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="mb-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl p-8 border border-gold-400/20 dark:border-gold-400/10"
          style={{ background: 'linear-gradient(135deg, rgba(196,154,60,0.04), rgba(26,58,92,0.04))' }}
        >
          <p className="section-label mb-3">Philosophy</p>
          <h3 className="font-serif text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Teaching Approach
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: 'Theory + Practice', desc: 'Rigorous theoretical foundations paired with hands-on projects on real-world datasets and systems.' },
              { icon: Users, title: 'Collaborative Learning', desc: 'Students work in interdisciplinary teams mirroring how modern AI research is conducted.' },
              { icon: GraduationCap, title: 'Research Exposure', desc: 'Graduate students engage directly with open research problems and are encouraged to publish their work.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold-400/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={14} className="text-gold-600 dark:text-gold-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900 dark:text-white mb-1">{title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Past Courses */}
      <section className="mb-8">
        <SectionHeader label="Archive" title="Previous Courses" />
        <div className="divide-y divide-gray-100 dark:divide-white/5">
          {courses.past.map((course, i) => (
            <motion.div
              key={`${course.code}-${course.semester}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-between py-3 group"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-medium text-gray-400 dark:text-gray-500 w-16">{course.code}</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{course.title}</span>
              </div>
              <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">{course.semester}</span>
            </motion.div>
          ))}
        </div>
      </section>

    </motion.div>
  );
}

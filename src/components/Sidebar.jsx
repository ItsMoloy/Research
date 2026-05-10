import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, BookOpen, Microscope, GraduationCap, Users,
  Newspaper, Award, Mail, Github, Twitter, Linkedin,
  ExternalLink, Download, Sun, Moon, X, ChevronRight,
  Globe
} from 'lucide-react';
import { faculty } from '../data/faculty';

const navLinks = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/research', label: 'Research', icon: Microscope },
  { to: '/publications', label: 'Publications', icon: BookOpen },
  { to: '/teaching', label: 'Teaching', icon: GraduationCap },
  { to: '/students', label: 'Students', icon: Users },
  { to: '/news', label: 'News & Updates', icon: Newspaper },
  { to: '/awards', label: 'Awards', icon: Award },
  { to: '/contact', label: 'Contact', icon: Mail },
];

const socialLinks = [
  { icon: Github, href: faculty.github, label: 'GitHub' },
  { icon: Twitter, href: faculty.twitter, label: 'Twitter' },
  { icon: Linkedin, href: faculty.linkedin, label: 'LinkedIn' },
  { icon: Globe, href: faculty.googleScholar, label: 'Scholar' },
];

export default function Sidebar({ isOpen, onClose, isDark, toggleDark }) {
  const location = useLocation();

  const sidebarContent = (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Profile */}
      <div className="p-6 pb-4">
        <div className="relative mb-4">
          <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-white/20">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80"
              alt={faculty.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-navy-800" />
        </div>

        <h2 className="font-serif text-lg font-semibold text-white leading-tight mb-0.5">
          {faculty.name}
        </h2>
        <p className="text-xs text-white/60 font-medium mb-0.5">{faculty.title}</p>
        <p className="text-xs text-white/50">{faculty.universityShort}</p>
        
        <p className="mt-3 text-xs text-white/40 italic leading-relaxed">
          {faculty.tagline}
        </p>
      </div>

      <div className="mx-6 border-t border-white/10 mb-4" />

      {/* Nav */}
      <nav className="px-3 flex-1">
        <p className="px-3 mb-2 text-[10px] font-semibold tracking-[0.15em] uppercase text-white/30">
          Navigation
        </p>
        {navLinks.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mb-0.5 transition-all duration-200 group
              ${isActive
                ? 'bg-white/15 text-white'
                : 'text-white/60 hover:text-white hover:bg-white/8'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={16} className={isActive ? 'text-gold-400' : 'group-hover:text-white/80'} />
                <span className="flex-1">{label}</span>
                {isActive && <ChevronRight size={12} className="text-gold-400" />}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mx-6 border-t border-white/10 my-4" />

      {/* Social & Actions */}
      <div className="px-6 pb-6">
        <div className="flex items-center gap-2 mb-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="w-8 h-8 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
            >
              <Icon size={14} />
            </a>
          ))}
          <button
            onClick={toggleDark}
            title="Toggle dark mode"
            className="ml-auto w-8 h-8 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        <a
          href={faculty.cvUrl}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-gold-400/40 text-gold-400 text-sm font-medium hover:bg-gold-400/10 transition-all duration-200"
        >
          <Download size={14} />
          Download CV
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="sidebar hidden lg:flex flex-col"
        style={{ background: 'linear-gradient(160deg, #0a1828 0%, #152f4a 50%, #1a3a5c 100%)' }}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 h-full z-50 lg:hidden flex flex-col"
              style={{ 
                width: 280, 
                background: 'linear-gradient(160deg, #0a1828 0%, #152f4a 50%, #1a3a5c 100%)'
              }}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white"
              >
                <X size={16} />
              </button>
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

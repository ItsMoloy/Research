import { useLocation } from 'react-router-dom';
import { Menu, Sun, Moon } from 'lucide-react';

const pageTitles = {
  '/': 'Home',
  '/research': 'Research',
  '/publications': 'Publications',
  '/teaching': 'Teaching',
  '/students': 'Lab Members',
  '/news': 'News & Updates',
  '/awards': 'Awards & Honors',
  '/contact': 'Contact',
};

export default function Header({ onMenuOpen, isDark, toggleDark, scrollProgress }) {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'Page';

  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-100 dark:border-white/5">
      {/* Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-0.5 transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #1a3a5c, #C49A3C)',
        }}
      />

      <div className="flex items-center justify-between h-14 px-4 md:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuOpen}
            className="lg:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/8 transition-colors"
          >
            <Menu size={20} />
          </button>
          <div>
            <h1 className="text-sm font-semibold text-gray-900 dark:text-white">
              {title}
            </h1>
            <p className="text-xs text-gray-400 dark:text-gray-500 hidden sm:block">
              Dr. Elena Marchetti · MIT
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            className="lg:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/8 transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="/contact"
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-medium border border-navy-600/30 text-navy-700 dark:text-blue-300 dark:border-blue-400/30 hover:bg-navy-50 dark:hover:bg-blue-400/8 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Team', path: '/team' },
  { name: 'Projects', path: '/projects' },
  { name: 'Equipment', path: '/equipment' },
  { name: 'Publications', path: '/publications' },
  { name: 'Teaching', path: '/teaching' },
  { name: 'Affiliates', path: '/affiliates' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'News', path: '/news' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="relative">
      {/* Top bar */}
      <div className="bg-gray-800 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="https://www.sust.edu" className="hover:underline">SUST.edu</a>
          <span>Department of Geography and Environment</span>
        </div>
      </div>

      {/* Main header bar */}
      <div className="bg-white border-b-2 border-gray-800 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="block">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 text-center">
              Geography and Environmental Engineering (GEE) Lab
            </h1>
            <p className="text-center text-gray-600 text-sm mt-1">
              Shahjalal University of Science and Technology
            </p>
          </Link>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-gray-100 border-b border-gray-300 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-12 relative">
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center justify-between w-full max-w-4xl space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors text-center flex-1 ${
                    location.pathname === item.path
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-800 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden absolute right-4 p-2 rounded-md text-gray-800 hover:bg-gray-200"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-300">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors text-center ${
                    location.pathname === item.path
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-800 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

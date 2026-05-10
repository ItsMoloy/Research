import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Footer } from '../components/Cards';
import { useDarkMode, useScrollProgress } from '../hooks/useUtils';

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, toggleDark] = useDarkMode();
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    if (!sidebarOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [sidebarOpen]);


  return (
    <div className="flex h-screen overflow-hidden bg-ivory-100 dark:bg-slate-950">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isDark={isDark}
        toggleDark={toggleDark}
      />

      <main
        id="main-scroll"
        className="main-content flex-1 overflow-y-auto bg-ivory-50 dark:bg-slate-950"
      >
        <Header
          onMenuOpen={() => setSidebarOpen(true)}
          isDark={isDark}
          toggleDark={toggleDark}
          scrollProgress={scrollProgress}
        />

        <div className="min-h-screen">
          <AnimatePresence mode="wait">
            <Outlet />
          </AnimatePresence>
        </div>

        <Footer />
      </main>
    </div>
  );
}

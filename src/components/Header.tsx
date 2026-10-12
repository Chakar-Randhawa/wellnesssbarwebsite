import { useEffect, useState } from 'react';
import { Menu as MenuIcon, X, Sun, Moon } from 'lucide-react';
import { BRAND, NAV_LINKS, type PageId } from '@/data/content';
import type { Theme } from '@/hooks/useTheme';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  theme: Theme;
  onToggleTheme: () => void;
}

export default function Header({ currentPage, onNavigate, theme, onToggleTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setDrawerOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong py-2' : 'py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Desktop: Left nav links */}
            <nav className="hidden lg:flex items-center gap-8 flex-1">
              {NAV_LINKS.slice(0, 2).map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`link-underline text-sm tracking-wide-2 uppercase transition-colors duration-300 ${
                    currentPage === link.id
                      ? 'text-sage-600'
                      : 'text-charcoal-500 hover:text-sage-600'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Center Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 lg:flex-1 lg:justify-center cursor-target"
            >
              <img
                src={BRAND.logo}
                alt="Wild Bunch Wellness Bar"
                className={`rounded-full object-cover transition-all duration-500 ${
                  scrolled ? 'w-11 h-11' : 'w-14 h-14'
                } ring-1 ring-white/40`}
              />
              <div className="text-left hidden sm:block">
                <div className={`luxury-heading leading-none ${scrolled ? 'text-lg' : 'text-xl'} text-charcoal-700`}>
                  Wild Bunch
                </div>
                <div className="text-[10px] tracking-luxe uppercase text-sage-500 mt-0.5">
                  Wellness Bar
                </div>
              </div>
            </button>

            {/* Desktop: Right nav links + CTA */}
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-end">
              {NAV_LINKS.slice(2).map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`link-underline text-sm tracking-wide-2 uppercase transition-colors duration-300 ${
                    currentPage === link.id
                      ? 'text-sage-600'
                      : 'text-charcoal-500 hover:text-sage-600'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('menu')}
                className="glass-btn-solid px-5 py-2.5 rounded-full text-sm tracking-wide-2 uppercase"
              >
                Order Now
              </button>
              <button
                onClick={onToggleTheme}
                className="glass-btn w-10 h-10 rounded-full flex items-center justify-center text-charcoal-600 dark:text-sage-600 hover:text-sage-600 transition-colors"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <Moon size={18} strokeWidth={1.5} /> : <Sun size={18} strokeWidth={1.5} />}
              </button>
            </nav>

            {/* Mobile: Theme toggle + Hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onToggleTheme}
                className="flex items-center justify-center w-10 h-10 text-charcoal-600 dark:text-sage-600"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <Moon size={20} strokeWidth={1.5} /> : <Sun size={20} strokeWidth={1.5} />}
              </button>
              <button
                onClick={() => setDrawerOpen(true)}
                className="lg:hidden flex items-center justify-center w-10 h-10 text-charcoal-600 dark:text-sage-600"
                aria-label="Open menu"
              >
                <MenuIcon size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-charcoal-900/30 overlay-enter lg:hidden"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] glass-strong drawer-enter lg:hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-white/30">
              <div className="flex items-center gap-3">
                <img
                  src={BRAND.logo}
                  alt="Wild Bunch Wellness Bar"
                  className="w-10 h-10 rounded-full object-cover ring-1 ring-white/40"
                />
                <div>
                  <div className="luxury-heading text-lg text-charcoal-700 leading-none">Wild Bunch</div>
                  <div className="text-[9px] tracking-luxe uppercase text-sage-500">Wellness Bar</div>
                </div>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-9 h-9 flex items-center justify-center text-charcoal-600"
                aria-label="Close menu"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-col p-6 gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-left px-4 py-3.5 rounded-xl text-lg luxury-heading transition-all duration-300 ${
                    currentPage === link.id
                      ? 'bg-sage-100/60 text-sage-700'
                      : 'text-charcoal-600 hover:bg-white/30'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="mt-auto p-6 border-t border-white/30">
              <button
                onClick={() => handleNav('menu')}
                className="w-full glass-btn-solid py-3 rounded-full text-sm tracking-wide-2 uppercase"
              >
                Order Now
              </button>
              <button
                onClick={onToggleTheme}
                className="w-full glass-btn mt-3 py-3 rounded-full text-sm tracking-wide-2 uppercase text-charcoal-600 dark:text-sage-600 flex items-center justify-center gap-2"
              >
                {theme === 'light' ? <><Moon size={16} strokeWidth={1.5} /> Dark Mode</> : <><Sun size={16} strokeWidth={1.5} /> Light Mode</>}
              </button>
              <p className="text-center text-xs text-charcoal-400 mt-4 tracking-wide-2">
                {BRAND.hours}
              </p>
              <p className="text-center text-xs text-charcoal-400 mt-1">
                {BRAND.address}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

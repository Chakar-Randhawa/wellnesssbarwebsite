import { useEffect, useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { BRAND, NAV_LINKS, type PageId } from '@/data/content';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
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

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
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
                  aria-current={currentPage === link.id ? 'page' : undefined}
                  className={`link-underline text-sm tracking-wide-2 uppercase transition-colors duration-300 ${
                    currentPage === link.id
                      ? 'text-sage-300'
                      : 'text-ink-300 hover:text-sage-300'
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
                <div className={`luxury-heading leading-none ${scrolled ? 'text-lg' : 'text-xl'} text-ink-100`}>
                  Wild Bunch
                </div>
                <div className="text-[10px] tracking-luxe uppercase text-sage-400 mt-0.5">
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
                  aria-current={currentPage === link.id ? 'page' : undefined}
                  className={`link-underline text-sm tracking-wide-2 uppercase transition-colors duration-300 ${
                    currentPage === link.id
                      ? 'text-sage-300'
                      : 'text-ink-300 hover:text-sage-300'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={BRAND.doorDash}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn-solid px-5 py-2.5 rounded-full text-sm tracking-wide-2 uppercase"
              >
                Order Now
              </a>
            </nav>

            {/* Mobile: Hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setDrawerOpen(true)}
                className="lg:hidden flex items-center justify-center w-10 h-10 text-sage-300"
                aria-label="Open menu"
                aria-expanded={drawerOpen}
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
          <div role="dialog" aria-modal="true" aria-label="Site menu" className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] glass-strong drawer-enter lg:hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src={BRAND.logo}
                  alt="Wild Bunch Wellness Bar"
                  className="w-10 h-10 rounded-full object-cover ring-1 ring-white/40"
                />
                <div>
                  <div className="luxury-heading text-lg text-ink-100 leading-none">Wild Bunch</div>
                  <div className="text-[9px] tracking-luxe uppercase text-sage-400">Wellness Bar</div>
                </div>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-9 h-9 flex items-center justify-center text-ink-200"
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
                      ? 'bg-sage-500/20 text-sage-300'
                      : 'text-ink-200 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="mt-auto p-6 border-t border-white/10">
              <a
                href={BRAND.doorDash}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full glass-btn-solid py-3 rounded-full text-sm tracking-wide-2 uppercase"
              >
                Order Now
              </a>
              <p className="text-center text-xs text-ink-400 mt-4 tracking-wide-2">
                {BRAND.hours}
              </p>
              <p className="text-center text-xs text-ink-400 mt-1">
                {BRAND.address}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

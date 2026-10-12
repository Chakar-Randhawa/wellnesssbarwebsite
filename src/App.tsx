import { useState, useEffect, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import Chatbot from '@/components/Chatbot';
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import Story from '@/pages/Story';
import Retail from '@/pages/Retail';
import Contact from '@/pages/Contact';
import type { PageId } from '@/data/content';

export default function App() {
  const [page, setPage] = useState<PageId>('home');
  const [transitioning, setTransitioning] = useState(false);

  const handleNavigate = useCallback((next: PageId) => {
    if (next === page) return;
    setTransitioning(true);
    setTimeout(() => {
      setPage(next);
      window.scrollTo({ top: 0, behavior: 'auto' });
      setTransitioning(false);
    }, 200);
  }, [page]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'menu':
        return <Menu />;
      case 'story':
        return <Story onNavigate={handleNavigate} />;
      case 'retail':
        return <Retail />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Organic mesh background */}
      <div className="organic-mesh-bg">
        <div className="organic-blob w-[40vw] h-[40vw] top-[30%] right-[20%]" style={{ background: 'radial-gradient(circle, #a4b894 0%, transparent 70%)', animation: 'floatSlow 16s ease-in-out infinite' }} />
        <div className="organic-blob w-[35vw] h-[35vw] top-[60%] left-[10%]" style={{ background: 'radial-gradient(circle, #d4cab5 0%, transparent 70%)', animation: 'floatSlow 20s ease-in-out infinite reverse' }} />
      </div>

      <CustomCursor />
      <Header currentPage={page} onNavigate={handleNavigate} />

      <main className={`transition-opacity duration-200 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />
      <Chatbot />
    </div>
  );
}

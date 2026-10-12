import { useState, useMemo } from 'react';
import { ArrowRight, Tag } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, BRAND, type MenuCategory } from '@/data/content';

export default function Menu() {
  const [filter, setFilter] = useState<MenuCategory | 'All'>('All');

  const filteredItems = useMemo(() => {
    if (filter === 'All') {
      // Group the full menu by category (stable sort keeps the original order inside each group)
      const order = (c: MenuCategory) => MENU_CATEGORIES.indexOf(c);
      return [...MENU_ITEMS].sort((a, b) => order(a.category) - order(b.category));
    }
    return MENU_ITEMS.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <div className="page-enter pt-28 pb-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-luxe uppercase text-accent-400 reveal-text" style={{ animationDelay: '0.1s' }}>
            Digital Wellness Catalog
          </span>
          <h1 className="luxury-heading text-ink-100 mt-3 reveal-text" style={{ animationDelay: '0.15s', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
            The Menu
          </h1>
          <p className="text-ink-300 max-w-2xl mx-auto mt-4 reveal-text" style={{ animationDelay: '0.2s' }}>
            Every item is crafted to order with 100% organic, raw, and natural ingredients.
            Absolutely nothing artificial — ever.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="no-scrollbar overflow-x-auto">
            <div className="flex gap-2 px-1 min-w-max">
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm tracking-wide-2 uppercase whitespace-nowrap transition-all duration-400 ${
                    filter === cat
                      ? 'text-white shadow-md'
                      : 'glass-btn text-ink-300 hover:text-sage-300'
                  }`}
                  style={filter === cat ? { background: 'linear-gradient(135deg, #566e44 0%, #44583a 100%)' } : undefined}
                >
                  {cat === 'All' ? 'All Items' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-ink-400 -mt-6 mb-10">
          Allergies or dietary needs? Please call{' '}
          <a href={`tel:${BRAND.phone.replace(/[^0-9]/g, '')}`} className="text-sage-300 underline underline-offset-4">
            {BRAND.phone}
          </a>{' '}
          before ordering.
        </p>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, i) => (
            <div
              key={item.name}
              className="glass-card rounded-3xl overflow-hidden group reveal-text"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="img-zoom h-52 overflow-hidden relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                {item.tag && (
                  <div className="absolute top-3 left-3 glass-strong px-3 py-1 rounded-full text-[10px] tracking-luxe uppercase text-sage-300 flex items-center gap-1">
                    <Tag size={10} strokeWidth={2} />
                    {item.tag}
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="luxury-heading text-xl text-ink-100 leading-tight">{item.name}</h3>
                  {item.price && (
                    <span className="text-accent-400 luxury-heading text-lg shrink-0">{item.price}</span>
                  )}
                </div>
                <p className="text-sm text-ink-400 leading-relaxed line-clamp-3">{item.description}</p>
                <div className="text-[10px] tracking-luxe uppercase text-sage-400 mt-3 pt-3 border-t border-white/10">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <div className="glass-card rounded-3xl px-8 py-10 max-w-2xl mx-auto">
            <h2 className="luxury-heading text-2xl text-ink-100 mb-3">
              Hungry yet? <span className="luxury-italic text-gradient-sage">Let's fix that.</span>
            </h2>
            <p className="text-ink-400 text-sm mb-6">
              Order through DoorDash, or stop by the bar in Downtown Tiffin.
            </p>
            <a
              href={BRAND.doorDash}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn-solid inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm tracking-wide-2 uppercase group"
            >
              Order via DoorDash
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { RETAIL_PRODUCTS, BRAND } from '@/data/content';

export default function Retail() {
  const categories = ['All', 'Rowe Casa Organics', 'Curly and Spot', 'Wild Bunch Apparel'];
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? RETAIL_PRODUCTS : RETAIL_PRODUCTS.filter((p) => p.category === filter);

  return (
    <div className="page-enter pt-28 pb-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-luxe uppercase text-accent-600 reveal-text" style={{ animationDelay: '0.1s' }}>
            Lifestyle & Wellness Corner
          </span>
          <h1 className="luxury-heading text-charcoal-700 mt-3 reveal-text" style={{ animationDelay: '0.15s', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
            Retail & Merchandise
          </h1>
          <p className="text-charcoal-500 max-w-2xl mx-auto mt-4 reveal-text" style={{ animationDelay: '0.2s' }}>
            Curated non-toxic wellness products, organic pet treats, and premium apparel —
            everything you need to live the Wild Bunch lifestyle beyond the bar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="no-scrollbar overflow-x-auto">
            <div className="flex gap-2 px-1 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm tracking-wide-2 uppercase whitespace-nowrap transition-all duration-400 ${
                    filter === cat ? 'text-white shadow-md' : 'glass-btn text-charcoal-500 hover:text-sage-600'
                  }`}
                  style={filter === cat ? { background: 'linear-gradient(135deg, #566e44 0%, #44583a 100%)' } : undefined}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Spotlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <BrandSpotlight
            name="Rowe Casa Organics"
            tagline="Non-toxic home & body"
            blurb="Supplements, essential oils, skincare, and household remedies crafted with pure, clean ingredients."
          />
          <BrandSpotlight
            name="Curly and Spot"
            tagline="Organic dog treats"
            blurb="Small-batch, human-grade organic treats for your four-legged family members. Made with love."
          />
          <BrandSpotlight
            name="Wild Bunch Apparel"
            tagline="Wear the mission"
            blurb="Premium organic cotton apparel featuring the Wild Bunch crest. Soft, sustainable, and stylish."
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <div
              key={product.name}
              className="glass-card rounded-3xl overflow-hidden group reveal-text"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="img-zoom h-56 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="text-[10px] tracking-luxe uppercase text-sage-500 mb-2">{product.brand}</div>
                <h3 className="luxury-heading text-xl text-charcoal-700 mb-2">{product.name}</h3>
                <p className="text-sm text-charcoal-400 leading-relaxed line-clamp-3">{product.description}</p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/30 text-sage-600 text-xs tracking-wide-2 uppercase">
                  <ShoppingBag size={14} strokeWidth={1.5} />
                  Available In-Store
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visit CTA */}
        <div className="text-center mt-14">
          <div className="glass-card rounded-3xl px-8 py-10 max-w-2xl mx-auto">
            <h2 className="luxury-heading text-2xl text-charcoal-700 mb-3">
              Shop in person at the bar
            </h2>
            <p className="text-charcoal-400 text-sm mb-6">
              Visit us at {BRAND.address} to browse our full retail collection.
              Open daily from 7:00 AM to 2:00 PM.
            </p>
            <a
              href={`tel:${BRAND.phone.replace(/[^0-9]/g, '')}`}
              className="glass-btn-solid inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm tracking-wide-2 uppercase group"
            >
              Call to Inquire
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandSpotlight({ name, tagline, blurb }: { name: string; tagline: string; blurb: string }) {
  return (
    <div className="glass-card rounded-2xl p-5 text-center">
      <h3 className="luxury-heading text-lg text-charcoal-700">{name}</h3>
      <div className="text-[10px] tracking-luxe uppercase text-accent-600 mt-1">{tagline}</div>
      <p className="text-xs text-charcoal-400 leading-relaxed mt-3">{blurb}</p>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Clock, MapPin, Phone, ArrowRight, Leaf, Heart, Sparkles } from 'lucide-react';
import { BRAND, HERO_SLIDES, type PageId } from '@/data/content';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-enter">
      {/* ===== HERO ===== */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        {/* Slideshow */}
        <div className="absolute inset-0">
          {HERO_SLIDES.map((src, i) => (
            <div
              key={i}
              className={`slide ${i === currentSlide ? 'active' : ''}`}
            >
              <img
                src={src}
                alt={i === 0 ? 'Fresh organic juices and healthy food at Wild Bunch Wellness Bar' : ''}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(20,20,26,0.4) 0%, rgba(20,20,26,0.6) 50%, rgba(20,20,26,0.92) 100%)' }} />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-16">
          <div className="reveal-text flex items-center gap-2 mb-6" style={{ animationDelay: '0.1s' }}>
            <Leaf size={16} className="text-sage-400" strokeWidth={1.5} />
            <span className="text-xs tracking-luxe uppercase text-sage-300">Organic &middot; Cold-Pressed &middot; Handcrafted</span>
            <Leaf size={16} className="text-sage-400" strokeWidth={1.5} />
          </div>

          <h1
            className="reveal-text luxury-heading text-ink-100 max-w-4xl mx-auto"
            style={{ animationDelay: '0.2s', fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}
          >
            Tastes Like a Cheat Meal,
            <br className="hidden sm:block" />
            <span className="luxury-italic text-gradient-sage"> Fuels Your Body Like a Power Meal!</span>
          </h1>

          <p
            className="reveal-text text-ink-300 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
            style={{ animationDelay: '0.35s' }}
          >
            {BRAND.subTagline}
          </p>

          <div
            className="reveal-text flex flex-col sm:flex-row items-center gap-4 mt-10"
            style={{ animationDelay: '0.5s' }}
          >
            <button
              onClick={() => onNavigate('menu')}
              className="glass-btn-solid px-8 py-3.5 rounded-full text-sm tracking-wide-2 uppercase flex items-center gap-2 group"
            >
              Explore Our Healthy Menu
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={BRAND.doorDash}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn px-8 py-3.5 rounded-full text-sm tracking-wide-2 uppercase text-ink-200 hover:text-sage-300 flex items-center gap-2"
            >
              Order via DoorDash
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>
          </div>

          {/* Slide indicators */}
          <div className="reveal-text flex gap-2 mt-12" style={{ animationDelay: '0.65s' }}>
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === currentSlide ? 'w-8 bg-sage-500' : 'w-2 bg-sage-300/60'
                }`}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === currentSlide ? 'true' : undefined}
              />
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] tracking-luxe uppercase text-ink-400">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-sage-400 to-transparent" />
        </div>
      </section>

      {/* ===== QUICK INFO GRID ===== */}
      <section className="relative -mt-12 z-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            <InfoCard
              icon={<Clock size={22} strokeWidth={1.5} />}
              label="Hours"
              value={BRAND.hours}
            />
            <InfoCard
              icon={<MapPin size={22} strokeWidth={1.5} />}
              label="Address"
              value={BRAND.address}
            />
            <InfoCard
              icon={<Phone size={22} strokeWidth={1.5} />}
              label="Contact"
              value={BRAND.phone}
              href={`tel:${BRAND.phone.replace(/[^0-9]/g, '')}`}
            />
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY SECTION ===== */}
      <section className="py-20 lg:py-32 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles size={16} className="text-accent-400" strokeWidth={1.5} />
            <span className="text-xs tracking-luxe uppercase text-accent-400">Our Philosophy</span>
            <Sparkles size={16} className="text-accent-400" strokeWidth={1.5} />
          </div>
          <h2 className="luxury-heading text-ink-100 mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Nature knows best.
            <br />
            <span className="luxury-italic text-gradient-sage">We just listen carefully.</span>
          </h2>
          <p className="text-ink-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            What you put into your body matters. That is why everything we serve is prepared fresh
            daily using only non-toxic, premium, organic ingredients. Nothing artificial. No shortcuts.
            Just good food and drink that tastes as good as it makes you feel.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
            <PhilosophyCard
              icon={<Leaf size={28} strokeWidth={1.2} />}
              title="100% Organic"
              text="Premium organic ingredients and absolutely nothing artificial."
            />
            <PhilosophyCard
              icon={<Heart size={28} strokeWidth={1.2} />}
              title="Nurse-Founded"
              text="Created by a Registered Nurse with over two decades of experience serving the community."
            />
            <PhilosophyCard
              icon={<Sparkles size={28} strokeWidth={1.2} />}
              title="Made Fresh Daily"
              text="Everything is prepared fresh daily, from cold-pressed juices to hearty bowls."
            />
          </div>

          <button
            onClick={() => onNavigate('story')}
            className="mt-12 glass-btn px-7 py-3 rounded-full text-sm tracking-wide-2 uppercase text-ink-200 hover:text-sage-300 flex items-center gap-2 mx-auto group"
          >
            Read Our Story
            <ArrowRight size={15} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* ===== FEATURED PREVIEW ===== */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs tracking-luxe uppercase text-accent-400">Signature Selection</span>
            <h2 className="luxury-heading text-ink-100 mt-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              Crowd Favorites
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeaturedCard
              image={HERO_SLIDES[0]}
              title="Detox Juice"
              subtitle="Activated Charcoal Cleanse"
              price="$14.40"
              onClick={() => onNavigate('menu')}
            />
            <FeaturedCard
              image="https://images.pexels.com/photos/20348546/pexels-photo-20348546.jpeg?auto=compress&cs=tinysrgb&w=800"
              title="Acai Bowl"
              subtitle="Superfood Breakfast Bowl"
              price="$11.80"
              onClick={() => onNavigate('menu')}
            />
            <FeaturedCard
              image="https://images.pexels.com/photos/3957527/pexels-photo-3957527.jpeg?auto=compress&cs=tinysrgb&w=800"
              title="Avocado Toast"
              subtitle="Artisan & Microgreens"
              price="$10.40"
              onClick={() => onNavigate('menu')}
            />
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('menu')}
              className="glass-btn-solid px-8 py-3.5 rounded-full text-sm tracking-wide-2 uppercase inline-flex items-center gap-2 group"
            >
              View Full Menu
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-card rounded-3xl px-8 sm:px-12 py-12 lg:py-16 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #c7d3ba 0%, transparent 70%)' }} />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #e8e2d4 0%, transparent 70%)' }} />
            <div className="relative z-10">
              <h2 className="luxury-heading text-ink-100 mb-4" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}>
                Ready to fuel your body <span className="luxury-italic text-gradient-sage">the right way?</span>
              </h2>
              <p className="text-ink-300 max-w-xl mx-auto mb-8">
                Order through DoorDash or stop by the bar in Downtown Tiffin. Your wellness journey starts with one cold-pressed sip.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={BRAND.doorDash}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn-solid px-8 py-3.5 rounded-full text-sm tracking-wide-2 uppercase"
                >
                  Order via DoorDash
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="glass-btn px-8 py-3.5 rounded-full text-sm tracking-wide-2 uppercase text-ink-200 hover:text-sage-300"
                >
                  Visit Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const body = (
    <>
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sage-300 shrink-0" style={{ background: 'rgba(86,110,68,0.25)' }}>
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[11px] tracking-luxe uppercase text-sage-300 mb-1">{label}</div>
        <div className="text-sm text-ink-200 leading-snug">{value}</div>
      </div>
    </>
  );
  const cls = 'glass-card rounded-2xl px-6 py-5 flex items-center gap-4';
  return href ? (
    <a href={href} className={cls}>{body}</a>
  ) : (
    <div className={cls}>{body}</div>
  );
}

function PhilosophyCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="glass-card rounded-2xl px-6 py-8 text-center">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-sage-300 mx-auto mb-4" style={{ background: 'rgba(86,110,68,0.25)' }}>
        {icon}
      </div>
      <h3 className="luxury-heading text-xl text-ink-100 mb-2">{title}</h3>
      <p className="text-sm text-ink-400 leading-relaxed">{text}</p>
    </div>
  );
}

function FeaturedCard({ image, title, subtitle, price, onClick }: { image: string; title: string; subtitle: string; price: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="glass-card rounded-3xl overflow-hidden text-left group">
      <div className="img-zoom h-56 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-1">
          <h3 className="luxury-heading text-xl text-ink-100">{title}</h3>
          <span className="text-accent-400 luxury-heading text-lg">{price}</span>
        </div>
        <p className="text-sm text-ink-400">{subtitle}</p>
        <div className="flex items-center gap-1.5 mt-4 text-sage-300 text-xs tracking-wide-2 uppercase">
          View Menu <ArrowRight size={13} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </button>
  );
}

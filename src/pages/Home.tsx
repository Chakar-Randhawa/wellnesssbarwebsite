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
                alt="Organic wellness"
                className="w-full h-full object-cover"
              />
              <div className="hero-overlay absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(244,241,234,0.3) 0%, rgba(244,241,234,0.5) 50%, rgba(244,241,234,0.85) 100%)' }} />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-16">
          <div className="reveal-text flex items-center gap-2 mb-6" style={{ animationDelay: '0.1s' }}>
            <Leaf size={16} className="text-sage-500" strokeWidth={1.5} />
            <span className="text-xs tracking-luxe uppercase text-sage-600">Organic &middot; Cold-Pressed &middot; Handcrafted</span>
            <Leaf size={16} className="text-sage-500" strokeWidth={1.5} />
          </div>

          <h1
            className="reveal-text luxury-heading text-charcoal-700 max-w-4xl mx-auto"
            style={{ animationDelay: '0.2s', fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}
          >
            {BRAND.tagline.split(',')[0]},
            <br className="hidden sm:block" />
            <span className="luxury-italic text-gradient-sage"> {BRAND.tagline.split(',').slice(1).join(',')}</span>
          </h1>

          <p
            className="reveal-text text-charcoal-500 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
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
              Explore the Menu
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={BRAND.doorDash}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn px-8 py-3.5 rounded-full text-sm tracking-wide-2 uppercase text-charcoal-600 hover:text-sage-600 flex items-center gap-2"
            >
              Order on DoorDash
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
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] tracking-luxe uppercase text-charcoal-400">Scroll</span>
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
              lines={['Mon – Sun', '7:00 AM – 2:00 PM']}
            />
            <InfoCard
              icon={<MapPin size={22} strokeWidth={1.5} />}
              label="Location"
              lines={['71 E Market St', 'Downtown Tiffin, Ohio']}
            />
            <InfoCard
              icon={<Phone size={22} strokeWidth={1.5} />}
              label="Contact"
              lines={['(567) 938-8900', 'Call to order']}
            />
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY SECTION ===== */}
      <section className="py-20 lg:py-32 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles size={16} className="text-accent-500" strokeWidth={1.5} />
            <span className="text-xs tracking-luxe uppercase text-accent-600">Our Philosophy</span>
            <Sparkles size={16} className="text-accent-500" strokeWidth={1.5} />
          </div>
          <h2 className="luxury-heading text-charcoal-700 mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Nature knows best.
            <br />
            <span className="luxury-italic text-gradient-sage">We just listen carefully.</span>
          </h2>
          <p className="text-charcoal-500 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Every bottle, bowl, and brew at Wild Bunch is a reflection of one belief: that food should
            be medicine, and medicine should be delicious. We source from organic farms, press to order,
            and never compromise on purity. No fillers. No preservatives. No shortcuts. Just the way
            nature intended.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
            <PhilosophyCard
              icon={<Leaf size={28} strokeWidth={1.2} />}
              title="100% Organic"
              text="Every ingredient is certified organic, traceable to the farm it grew on."
            />
            <PhilosophyCard
              icon={<Heart size={28} strokeWidth={1.2} />}
              title="Nurse-Founded"
              text="Created by a Registered Nurse with 20+ years of clinical experience."
            />
            <PhilosophyCard
              icon={<Sparkles size={28} strokeWidth={1.2} />}
              title="Pressed Fresh"
              text="Cold-pressed to order daily, preserving maximum nutrients and flavor."
            />
          </div>

          <button
            onClick={() => onNavigate('story')}
            className="mt-12 glass-btn px-7 py-3 rounded-full text-sm tracking-wide-2 uppercase text-charcoal-600 hover:text-sage-600 flex items-center gap-2 mx-auto group"
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
            <span className="text-xs tracking-luxe uppercase text-accent-600">Signature Selection</span>
            <h2 className="luxury-heading text-charcoal-700 mt-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
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
              <h2 className="luxury-heading text-charcoal-700 mb-4" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}>
                Ready to fuel your body <span className="luxury-italic text-gradient-sage">the right way?</span>
              </h2>
              <p className="text-charcoal-500 max-w-xl mx-auto mb-8">
                Order ahead for pickup or delivery through DoorDash. Your wellness journey starts with one cold-pressed sip.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={BRAND.doorDash}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn-solid px-8 py-3.5 rounded-full text-sm tracking-wide-2 uppercase"
                >
                  Order on DoorDash
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="glass-btn px-8 py-3.5 rounded-full text-sm tracking-wide-2 uppercase text-charcoal-600 hover:text-sage-600"
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

function InfoCard({ icon, label, lines }: { icon: React.ReactNode; label: string; lines: string[] }) {
  return (
    <div className="glass-card rounded-2xl px-6 py-5 flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sage-600 shrink-0" style={{ background: 'rgba(199,211,186,0.3)' }}>
        {icon}
      </div>
      <div>
        <div className="text-[10px] tracking-luxe uppercase text-sage-500 mb-1">{label}</div>
        {lines.map((line, i) => (
          <div key={i} className="text-sm text-charcoal-600 leading-snug">{line}</div>
        ))}
      </div>
    </div>
  );
}

function PhilosophyCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="glass-card rounded-2xl px-6 py-8 text-center">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-sage-600 mx-auto mb-4" style={{ background: 'rgba(199,211,186,0.25)' }}>
        {icon}
      </div>
      <h3 className="luxury-heading text-xl text-charcoal-700 mb-2">{title}</h3>
      <p className="text-sm text-charcoal-400 leading-relaxed">{text}</p>
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
          <h3 className="luxury-heading text-xl text-charcoal-700">{title}</h3>
          <span className="text-accent-600 luxury-heading text-lg">{price}</span>
        </div>
        <p className="text-sm text-charcoal-400">{subtitle}</p>
        <div className="flex items-center gap-1.5 mt-4 text-sage-600 text-xs tracking-wide-2 uppercase">
          View Menu <ArrowRight size={13} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </button>
  );
}

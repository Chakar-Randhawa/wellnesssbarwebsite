import { Award, Heart, Leaf, Shield, User } from 'lucide-react';
import { FOUNDER, type PageId } from '@/data/content';

interface StoryProps {
  onNavigate: (page: PageId) => void;
}

export default function Story({ onNavigate }: StoryProps) {
  return (
    <div className="page-enter pt-28 pb-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-luxe uppercase text-accent-400 reveal-text" style={{ animationDelay: '0.1s' }}>
            The Nurse's Vision
          </span>
          <h1 className="luxury-heading text-ink-100 mt-3 reveal-text" style={{ animationDelay: '0.15s', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
            Our Story &amp; Vision
          </h1>
        </div>

        {/* Founder Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-24">
          {/* Image */}
          <div className="lg:col-span-2 reveal-text" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl opacity-40" style={{ background: 'linear-gradient(135deg, #566e44 0%, #2d3a28 100%)' }} />
              <div className="relative glass-card rounded-3xl overflow-hidden">
                {FOUNDER.image ? (
                  <img
                    src={FOUNDER.image}
                    alt={FOUNDER.name}
                    className="w-full h-[420px] sm:h-[500px] object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-[420px] sm:h-[500px] flex flex-col items-center justify-center gap-4 text-sage-300"
                    style={{ background: 'linear-gradient(135deg, rgba(86,110,68,0.25) 0%, rgba(30,30,38,0.6) 100%)' }}
                    role="img"
                    aria-label={`Photo of ${FOUNDER.name} coming soon`}
                  >
                    <User size={72} strokeWidth={1} />
                    <span className="text-xs tracking-luxe uppercase text-ink-400">Photo coming soon</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-center" style={{ background: 'linear-gradient(transparent, rgba(20,20,26,0.92))' }}>
                  <div className="text-[11px] tracking-luxe uppercase text-sage-300 mb-1">Founder</div>
                  <div className="luxury-heading text-2xl text-ink-100">{FOUNDER.name}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-3 reveal-text" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sage-300" style={{ background: 'rgba(199,211,186,0.3)' }}>
                <Award size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="luxury-heading text-2xl sm:text-3xl text-ink-100">{FOUNDER.name}</h2>
                <p className="text-sm text-sage-300 tracking-wide-2 uppercase">{FOUNDER.title}</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <Heart size={14} className="text-sage-400" strokeWidth={1.5} />
              <span className="text-sm text-ink-300">{FOUNDER.experience} of Healthcare Experience</span>
            </div>

            <div className="space-y-4">
              {FOUNDER.bio.map((para, i) => (
                <p key={i} className="text-ink-300 leading-relaxed text-base">
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <button
                onClick={() => onNavigate('menu')}
                className="glass-btn-solid px-6 py-3 rounded-full text-sm tracking-wide-2 uppercase"
              >
                Explore the Menu
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="glass-btn px-6 py-3 rounded-full text-sm tracking-wide-2 uppercase text-ink-200 hover:text-sage-300"
              >
                Visit the Bar
              </button>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs tracking-luxe uppercase text-accent-400">What Drives Us</span>
            <h2 className="luxury-heading text-ink-100 mt-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ValueCard
              icon={<Shield size={26} strokeWidth={1.3} />}
              title="Non-Toxic"
              text="Prepared fresh daily using only non-toxic ingredients — absolutely nothing artificial."
            />
            <ValueCard
              icon={<Leaf size={26} strokeWidth={1.3} />}
              title="Organic"
              text="Premium organic ingredients in everything we serve."
            />
            <ValueCard
              icon={<Heart size={26} strokeWidth={1.3} />}
              title="Holistic"
              text="A deep passion for healing, health, and holistic wellness."
            />
            <ValueCard
              icon={<Award size={26} strokeWidth={1.3} />}
              title="Nurse-Led"
              text="Founded by a Registered Nurse with over two decades of experience serving the community."
            />
          </div>
        </div>

        {/* Quote Banner */}
        <div className="glass-card rounded-3xl px-8 sm:px-12 py-14 text-center relative overflow-hidden">
          <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #c7d3ba 0%, transparent 70%)' }} />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #e8e2d4 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <div className="text-5xl luxury-heading text-sage-300 leading-none mb-2">&ldquo;</div>
            <p className="luxury-heading luxury-italic text-ink-200 text-xl sm:text-2xl lg:text-3xl max-w-3xl mx-auto leading-snug">
              What you put into your body matters.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-sage-400" />
              <span className="text-sm tracking-wide-2 uppercase text-sage-300">Wild Bunch Wellness Bar</span>
              <div className="w-8 h-px bg-sage-400" />
            </div>
          </div>
        </div>

        {/* Info bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="luxury-heading text-3xl text-sage-300">20+</div>
            <div className="text-xs tracking-wide-2 uppercase text-ink-400 mt-1">Years in Healthcare</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="luxury-heading text-3xl text-sage-300">100%</div>
            <div className="text-xs tracking-wide-2 uppercase text-ink-400 mt-1">Organic Ingredients</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="luxury-heading text-3xl text-sage-300">0</div>
            <div className="text-xs tracking-wide-2 uppercase text-ink-400 mt-1">Artificial Additives</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="glass-card rounded-2xl p-6 text-center">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-sage-300 mx-auto mb-4" style={{ background: 'rgba(199,211,186,0.25)' }}>
        {icon}
      </div>
      <h3 className="luxury-heading text-lg text-ink-100 mb-2">{title}</h3>
      <p className="text-sm text-ink-400 leading-relaxed">{text}</p>
    </div>
  );
}

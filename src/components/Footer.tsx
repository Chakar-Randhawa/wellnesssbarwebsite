import { Clock, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { BRAND, NAV_LINKS, type PageId } from '@/data/content';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative mt-20">
      <div className="container mx-auto px-4">
        <div className="glass-strong rounded-t-3xl px-6 sm:px-10 lg:px-16 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={BRAND.logo}
                  alt="Wild Bunch Wellness Bar"
                  className="w-12 h-12 rounded-full object-cover ring-1 ring-white/40"
                />
                <div>
                  <div className="luxury-heading text-xl text-ink-100 leading-none">Wild Bunch</div>
                  <div className="text-[10px] tracking-luxe uppercase text-sage-400 mt-1">Wellness Bar</div>
                </div>
              </div>
              <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
                Premium organic cold-pressed juicery, wellness bar, and organic kitchen.
                Tastes like a cheat meal, fuels your body like a power meal.
              </p>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="luxury-heading text-base text-ink-200 mb-4 tracking-wide-2 uppercase">
                Explore
              </h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="link-underline text-sm text-ink-400 hover:text-sage-300 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours & Location Column */}
            <div>
              <h4 className="luxury-heading text-base text-ink-200 mb-4 tracking-wide-2 uppercase">
                Visit Us
              </h4>
              <ul className="space-y-3 text-sm text-ink-400">
                <li className="flex items-start gap-2.5">
                  <Clock size={15} className="text-sage-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span>{BRAND.hours}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-sage-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span>{BRAND.address}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone size={15} className="text-sage-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <a href={`tel:${BRAND.phone.replace(/[^0-9]/g, '')}`} className="hover:text-sage-300 transition-colors">
                    {BRAND.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail size={15} className="text-sage-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <a href={`mailto:${BRAND.email}`} className="hover:text-sage-300 transition-colors break-all">
                    {BRAND.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Social & Connect Column */}
            <div>
              <h4 className="luxury-heading text-base text-ink-200 mb-4 tracking-wide-2 uppercase">
                Connect
              </h4>
              <div className="flex gap-3 mb-4">
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn w-10 h-10 rounded-full flex items-center justify-center text-ink-300 hover:text-sage-300"
                  aria-label="Instagram"
                >
                  <Instagram size={17} strokeWidth={1.5} />
                </a>
                <a
                  href={BRAND.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn w-10 h-10 rounded-full flex items-center justify-center text-ink-300 hover:text-sage-300"
                  aria-label="Facebook"
                >
                  <Facebook size={17} strokeWidth={1.5} />
                </a>
                <a
                  href={BRAND.doorDash}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn px-4 h-10 rounded-full flex items-center justify-center text-xs tracking-wide-2 uppercase text-ink-300 hover:text-sage-300"
                >
                  DoorDash
                </a>
              </div>
              <p className="text-xs text-ink-400 tracking-wide-2">
                Instagram: {BRAND.instagram}
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-ink-400 tracking-wide-2 text-center sm:text-left">
              &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </p>
            <p className="text-xs text-ink-400 tracking-wide-2">
              Crafted with intention &mdash; Tiffin, Ohio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Clock, MapPin, Phone, Mail, Instagram, Facebook, ArrowUpRight, Navigation } from 'lucide-react';
import { BRAND } from '@/data/content';

export default function Contact() {
  const mapSrc = 'https://www.google.com/maps?q=71+E+Market+St,+Tiffin,+Ohio&output=embed';

  return (
    <div className="page-enter pt-28 pb-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-luxe uppercase text-accent-600 reveal-text" style={{ animationDelay: '0.1s' }}>
            Contact & Order Hub
          </span>
          <h1 className="luxury-heading text-charcoal-700 mt-3 reveal-text" style={{ animationDelay: '0.15s', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
            Come Say Hello
          </h1>
          <p className="text-charcoal-500 max-w-2xl mx-auto mt-4 reveal-text" style={{ animationDelay: '0.2s' }}>
            Whether you're stopping by for a cold-pressed juice, placing a delivery order,
            or just curious about our story — we'd love to hear from you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Map */}
          <div className="glass-card rounded-3xl overflow-hidden reveal-text h-[420px] lg:h-auto" style={{ animationDelay: '0.25s' }}>
            <div className="relative w-full h-full min-h-[420px]">
              <iframe
                src={mapSrc}
                title="Wild Bunch Wellness Bar location map"
                className="map-iframe w-full h-full"
                style={{ border: 0, minHeight: '420px', filter: 'saturate(0.8) contrast(0.95)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Card */}
          <div className="glass-card rounded-3xl p-7 sm:p-9 reveal-text" style={{ animationDelay: '0.3s' }}>
            <h2 className="luxury-heading text-2xl text-charcoal-700 mb-6">Reach Us Directly</h2>

            <div className="space-y-5">
              <ContactRow
                icon={<MapPin size={20} strokeWidth={1.5} />}
                label="Visit"
                value={BRAND.address}
              />
              <ContactRow
                icon={<Phone size={20} strokeWidth={1.5} />}
                label="Call"
                value={BRAND.phone}
                href={`tel:${BRAND.phone.replace(/[^0-9]/g, '')}`}
              />
              <ContactRow
                icon={<Mail size={20} strokeWidth={1.5} />}
                label="Email"
                value={BRAND.email}
                href={`mailto:${BRAND.email}`}
              />
              <ContactRow
                icon={<Clock size={20} strokeWidth={1.5} />}
                label="Hours"
                value={BRAND.hours}
              />
            </div>

            <div className="my-7 h-px bg-white/30" />

            {/* Action Portals */}
            <h3 className="text-xs tracking-luxe uppercase text-sage-500 mb-4">Order & Follow</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <PortalLink
                href={BRAND.doorDash}
                label="DoorDash"
                sublabel="Order Delivery"
              />
              <PortalLink
                href={BRAND.facebook}
                label="Facebook"
                sublabel="Follow Us"
                icon={<Facebook size={16} strokeWidth={1.5} />}
              />
              <PortalLink
                href={BRAND.instagramUrl}
                label="Instagram"
                sublabel={BRAND.instagram}
                icon={<Instagram size={16} strokeWidth={1.5} />}
              />
            </div>
          </div>
        </div>

        {/* Directions Banner */}
        <div className="glass-card rounded-3xl p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 reveal-text" style={{ animationDelay: '0.35s' }}>
          <div className="text-center sm:text-left">
            <h2 className="luxury-heading text-xl sm:text-2xl text-charcoal-700 mb-2">
              Planning your visit?
            </h2>
            <p className="text-sm text-charcoal-400">
              We're right in the heart of Downtown Tiffin. Easy parking on Market Street.
            </p>
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=71+E+Market+St,+Tiffin,+Ohio"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn-solid inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm tracking-wide-2 uppercase shrink-0 group"
          >
            <Navigation size={16} strokeWidth={1.5} />
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-sage-600 shrink-0" style={{ background: 'rgba(199,211,186,0.3)' }}>
        {icon}
      </div>
      <div>
        <div className="text-[10px] tracking-luxe uppercase text-sage-500 mb-1">{label}</div>
        <div className="text-charcoal-600 text-sm sm:text-base">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} className="block transition-transform hover:translate-x-1">{content}</a>;
  }
  return content;
}

function PortalLink({ href, label, sublabel, icon }: { href: string; label: string; sublabel: string; icon?: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-btn rounded-2xl p-4 text-center group"
    >
      <div className="flex items-center justify-center gap-1.5 text-charcoal-600 mb-1">
        {icon}
        <span className="luxury-heading text-base">{label}</span>
        <ArrowUpRight size={13} strokeWidth={1.5} className="text-sage-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <div className="text-[10px] tracking-wide-2 uppercase text-charcoal-400">{sublabel}</div>
    </a>
  );
}

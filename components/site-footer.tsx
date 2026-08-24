import Link from 'next/link';
import { Sparkles, MapPin, Phone, Clock } from 'lucide-react';

const footerSections = [
  {
    title: 'Explore',
    links: [
      { href: '/about', label: 'About us' },
      { href: '/academics', label: 'Academics' },
      { href: '/school-life', label: 'School life' },
      { href: '/news', label: 'News & events' },
    ],
  },
  {
    title: 'Admissions',
    links: [
      { href: '/admissions', label: 'How to apply' },
      { href: '/admissions#fees', label: 'Fees' },
      { href: '/admissions#process', label: 'Admission process' },
      { href: '/admissions#faq', label: 'FAQs' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: '/contact', label: 'Contact us' },
      { href: '/contact', label: 'Book a school tour' },
      { href: '/contact', label: 'Get directions' },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <img src="/trophies-logo.png" alt="The Trophies School crest" />
            <span>
              <strong>THE TROPHIES</strong>
              <small>SCHOOL</small>
            </span>
          </Link>
          <p>Sound and qualitative basic education for a brighter tomorrow.</p>
          <div className="footer-contact-items">
            <div className="footer-contact-item">
              <MapPin size={15} />
              <span>Oke-Ibukun, Agberu, Elebu Road, Iddo, Ibadan</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={15} />
              <span>+234 (0) 803 000 0000</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={15} />
              <span>Mon–Fri, 7:30am – 4:00pm</span>
            </div>
          </div>
        </div>
        <div className="footer-links">
          {footerSections.map((section) => (
            <div key={section.title}>
              <strong>{section.title}</strong>
              {section.links.map((link, i) => (
                <Link key={`${link.href}-${i}`} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2025 The Trophies School</span>
        <span>Oke-Ibukun · Agberu · Ibadan</span>
        <span>Made with care for young minds <Sparkles size={14} /></span>
      </div>
    </footer>
  );
}

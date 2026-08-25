'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/academics', label: 'Academics' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/school-life', label: 'School Life' },
  { href: '/news', label: 'News & Events' },
  { href: '/contact', label: 'Contact' },
  // { href: '/giving', label: 'Giving' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Admissions for 2025/26 are now open</span>
          <Link href="/admissions">Apply now <ArrowUpRight size={14} /></Link>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link href="/" className="brand" aria-label="The Trophies School home">
            <img src="/trophies-logo.png" alt="The Trophies School crest" />
            <span>
              <strong className='max-lg:hidden lg:visible'>THE TROPHIES</strong>
              <small className='max-lg:hidden lg:visible'>SCHOOL</small>
            </span>
            <span>
              <strong className='max-sm:visible sm:hidden'>THE TROPHIES</strong>
              <small className='max-sm:visible sm:hidden'>SCHOOL</small>
            </span>
          </Link>
          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? 'is-active' : 'gap-2 text-sm'}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link className="nav-cta" href="/admissions" onClick={() => setMenuOpen(false)}>
              Apply Now <ArrowUpRight size={16} />
            </Link>
          </nav>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import { ReactNode } from 'react';

interface PageHeroProps {
  label: string;
  title: ReactNode;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PageHero({ label, title, description, ctaLabel, ctaHref }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="hero-shape hero-shape-one" />
      <div className="hero-shape hero-shape-two" />
      <div className="container page-hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="eyebrow"><span /> {label}</div>
          <h1>{title}</h1>
          <p className="page-hero-lede">{description}</p>
          {ctaLabel && ctaHref && (
            <div className="hero-actions" style={{ marginTop: '32px' }}>
              <a className="button button-red" href={ctaHref}>
                {ctaLabel} <MoveRight size={18} />
              </a>
              <a className="text-link" href="/contact">
                Contact us <ArrowUpRight size={17} />
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

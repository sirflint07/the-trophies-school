'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Eye,
  Target,
  Heart,
  BookOpen,
  Users,
  MoveRight,
  Quote,
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Link from 'next/link';
import { Metadata } from 'next';

const values = [
  { icon: Heart, title: 'Care', description: 'Every child is known, valued and supported as an individual.' },
  { icon: Target, title: 'Excellence', description: 'We hold high expectations and help every child reach them.' },
  { icon: BookOpen, title: 'Curiosity', description: 'Learning is driven by wonder, questions and discovery.' },
  { icon: Users, title: 'Community', description: 'We grow together — pupils, families and teachers as one.' },
];

const milestones = [
  { year: '2010', title: 'The Trophies School opens', description: 'Founded with a vision to bring qualitative basic education to Iddo and surrounding communities in Ibadan.' },
  { year: '2015', title: 'Nursery programme expands', description: 'Our nursery section grows to meet demand from families across Elebu Road and Orita Merin.' },
  { year: '2020', title: 'A decade of impact', description: 'We celebrate ten years of nurturing confident, curious learners with a strong foundation for life.' },
  { year: '2025', title: 'Continuing the journey', description: 'Today, we continue to uphold our commitment to sound, qualitative education for every child.' },
];

const leadershipImage = 'https://images.pexels.com/photos/8467277/pexels-photo-8467277.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const libraryImage = 'https://images.pexels.com/photos/10638213/pexels-photo-10638213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const proprietress = '/trophies-school-proprietress.jpg'
const classImage = '/classes-trophies.png'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="About us"
        title={<>A school built on <em>purpose</em> and <em>care.</em></>}
        description="The Trophies School has been a cornerstone of foundational education in Ibadan, providing a nurturing environment where children from crèche through primary develop the confidence, character and curiosity to thrive."
        ctaLabel="Book a school tour"
        ctaHref="/contact"
      />

      <section className="section-pad">
        <div className="container feature-grid">
          <motion.div
            className="feature-images"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="feature-main-image">
              <img src={classImage} alt="Children reading together in a school library" />
            </div>
            <div className="image-badge"><span>15+</span><small>years of<br />serving</small></div>
          </motion.div>
          <motion.div
            className="feature-copy"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Our story</div>
            <h2>From a simple idea<br /><span>to a thriving school.</span></h2>
            <p>The Trophies School was founded on a simple belief: that every child deserves a strong, joyful start to their education. Located in Oke-Ibukun, Agberu, along Pipeline, Orita Merin, Elebu Road, Iddo, we have grown from a small crèche into a trusted institution offering crèche, nursery and primary education to families across Ibadan.</p>
            <p>Our name &ldquo;The Trophies&rdquo; reflects our conviction that every child is a trophy in the making: full of potential, capable of great things, and worthy of the very best care and guidance we can provide.</p>
            <Link className="text-link dark-link" href="/contact">Come and visit us <ArrowUpRight size={17} /></Link>
          </motion.div>
        </div>
      </section>

      <section className="mission-vision section-pad">
        <div className="container mv-grid">
          <motion.div
            className="mv-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Target size={28} />
            <h3>Our Mission</h3>
            <p>To provide sound and qualitative basic education that nurtures the whole child — academically, socially and morally — in a safe, stimulating and caring environment.</p>
          </motion.div>
          <motion.div
            className="mv-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Eye size={28} />
            <h3>Our Vision</h3>
            <p>To be a school where every child discovers their God-given potential, develops a lifelong love of learning, and grows into a confident, compassionate and capable young person.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label">What we stand for</div>
              <h2>Our <span>core values</span></h2>
            </motion.div>
            <p>These principles shape everything we do — from how we teach to how we welcome each child every morning.</p>
          </div>
          <div className="values-grid">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="value-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="value-icon"><Icon size={22} /></div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container headteacher-grid">
          <motion.div
            className="headteacher-image"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={proprietress} alt="Children engaged in creative learning" />
          </motion.div>
          <motion.div
            className="headteacher-copy"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="quote-mark-sm" size={32} />
            <blockquote>
              &ldquo;Every child who walks through our gates carries within them the seeds of something extraordinary. Our role and our privilege is to help those seeds grow. We do not just teach lessons; we build confidence, character and a love of learning that lasts a lifetime.&rdquo;
            </blockquote>
            <div className="quote-source-sm">
              <strong>The Proprietress</strong>
              <span>The Trophies School</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label">Our journey</div>
              <h2>Milestones along <span>the way.</span></h2>
            </motion.div>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-year">{m.year}</div>
                <h4>{m.title}</h4>
                <p>{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band section-pad">
        <div className="container cta-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-label" style={{ color: 'var(--gold)' }}>Come and see</div>
            <h2>Experience The Trophies<br />difference in person.</h2>
            <p>We would love to show you around our school and answer any questions you may have.</p>
            <div className="hero-actions" style={{ marginTop: '32px' }}>
              <Link className="button button-red" href="/contact">Book a school tour <MoveRight size={18} /></Link>
              <Link className="text-link" href="/academics">Explore academics <ArrowUpRight size={17} /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

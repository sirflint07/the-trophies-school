'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  MoveRight,
  TrophyIcon,
  Palette,
  Music,
  BookOpen,
  Globe,
  Smile,
  Heart,
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Link from 'next/link';

const activities = [
  { icon: TrophyIcon, title: 'Sports & Physical Education', description: 'Football, athletics and games that build teamwork, fitness and sportsmanship.' },
  { icon: Palette, title: 'Art & Creativity', description: 'Painting, crafts and design that let children express their imagination.' },
  { icon: Music, title: 'Music & Performance', description: 'Singing, instruments, dance and drama that build confidence and rhythm.' },
  { icon: BookOpen, title: 'Reading Club', description: 'A love of books nurtured through storytelling, library visits and reading challenges.' },
  { icon: Globe, title: 'Cultural & Social Studies', description: 'Celebrating our heritage and learning about the world beyond our gates.' },
  { icon: Smile, title: 'Wellbeing & Pastoral Care', description: 'A caring environment where every child feels safe, valued and supported.' },
];

const galleryImages = [
  { src: 'https://images.pexels.com/photos/12448839/pexels-photo-12448839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Children in a classroom', span: 'wide' },
  { src: 'https://images.pexels.com/photos/8467277/pexels-photo-8467277.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Children painting in art class', span: 'tall' },
  { src: 'https://images.pexels.com/photos/8941639/pexels-photo-8941639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Children playing football', span: 'normal' },
  { src: 'https://images.pexels.com/photos/10638213/pexels-photo-10638213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Children reading in library', span: 'normal' },
  { src: 'https://images.pexels.com/photos/14554003/pexels-photo-14554003.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Children in classroom activity', span: 'wide' },
  { src: 'https://images.pexels.com/photos/7025567/pexels-photo-7025567.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Children doing creative work', span: 'normal' },
];

const wellbeing = [
  { icon: Heart, title: 'Safe and supported', description: 'Safeguarding is at the heart of everything we do. Every child deserves to feel secure.' },
  { icon: Smile, title: 'Happy learners', description: 'We know that children learn best when they are happy, engaged and enjoying school.' },
  { icon: BookOpen, title: 'Personal growth', description: 'We track not just academic progress but character, confidence and social development.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SchoolLifePage() {
  return (
    <main>
      <PageHero
        label="School Life"
        title={<>Learning extends <em>beyond the classroom.</em></>}
        description="At The Trophies School, we believe that a rich, vibrant school life is essential to a child's development. From sports to art, music to wellbeing, there is something for every child to discover and enjoy."
        ctaLabel="Book a school tour"
        ctaHref="/contact"
      />

      {/* Activities */}
      <section className="section-pad">
        <div className="container">
          <div className="section-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label">What we offer</div>
              <h2>Activities &amp; <span>clubs.</span></h2>
            </motion.div>
            <p>We offer a wide range of activities that help children discover their interests, develop new skills and build lasting friendships.</p>
          </div>
          <div className="activities-grid">
            {activities.map((activity, i) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={activity.title}
                  className="activity-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="activity-icon"><Icon size={24} /></div>
                  <h4>{activity.title}</h4>
                  <p>{activity.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label">A glimpse inside</div>
              <h2>Life at <span>The Trophies.</span></h2>
            </motion.div>
            <p>A look at the everyday moments that make our school special.</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                className={`gallery-item gallery-${img.span}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ scale: 1.02 }}
              >
                <img src={img.src} alt={img.alt} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellbeing */}
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
              <div className="section-label">Pastoral care</div>
              <h2>Your child&apos;s <span>wellbeing.</span></h2>
            </motion.div>
            <p>Academic success matters — but so does happiness. We take your child&apos emotional and social development seriously.</p>
          </div>
          <div className="wellbeing-grid">
            {wellbeing.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="wellbeing-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="wellbeing-icon"><Icon size={24} /></div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band section-pad">
        <div className="container cta-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-label" style={{ color: 'var(--gold)' }}>See for yourself</div>
            <h2>The best way to feel<br />our school is to visit.</h2>
            <p>Book a tour and experience the warmth and energy of The Trophies School first-hand.</p>
            <div className="hero-actions" style={{ marginTop: '32px' }}>
              <Link className="button button-red" href="/contact">Book a school tour <MoveRight size={18} /></Link>
              <Link className="text-link" href="/news">See our latest news <ArrowUpRight size={17} /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

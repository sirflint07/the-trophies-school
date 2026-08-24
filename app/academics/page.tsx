'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  HeartHandshake,
  Compass,
  BookOpen,
  Check,
  MoveRight,
  GraduationCap,
  Palette,
  Music,
  Languages,
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Link from 'next/link';

const levels = [
  {
    icon: HeartHandshake,
    number: '01',
    title: 'Crèche',
    ageRange: '3 months – 2 years',
    description: 'A safe, gentle and loving environment where our youngest learners begin to explore the world around them.',
    features: ['Individualised care routines', 'Sensory play and exploration', 'Language exposure through songs and stories', 'Safe, clean and stimulating spaces'],
    image: 'https://images.pexels.com/photos/31773583/pexels-photo-31773583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: Compass,
    number: '02',
    title: 'Nursery',
    ageRange: '2 – 5 years',
    description: 'A curiosity-led programme that builds early literacy, numeracy and social skills through play and structured activity.',
    features: ['Phonics and early reading', 'Number sense and problem-solving', 'Creative arts and self-expression', 'Social and emotional development'],
    image: 'https://images.pexels.com/photos/14554003/pexels-photo-14554003.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: BookOpen,
    number: '03',
    title: 'Primary',
    ageRange: '5 – 11 years',
    description: 'A rigorous and engaging curriculum that develops strong foundations in core subjects alongside character and creativity.',
    features: ['English, Mathematics and Science', 'Social studies and civic education', 'ICT and digital literacy', 'Sports, arts and extracurriculars'],
    image: 'https://images.pexels.com/photos/12448839/pexels-photo-12448839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

const subjects = [
  { icon: BookOpen, name: 'English & Literacy', description: 'Reading, writing, comprehension and communication.' },
  { icon: GraduationCap, name: 'Mathematics', description: 'Number, reasoning, problem-solving and logic.' },
  { icon: Compass, name: 'Science & Discovery', description: 'Understanding the world through observation and enquiry.' },
  { icon: Languages, name: 'Languages', description: 'English, Yoruba and basic French exposure.' },
  { icon: Palette, name: 'Creative Arts', description: 'Art, crafts, drama and self-expression.' },
  { icon: Music, name: 'Music & Movement', description: 'Singing, rhythm, instruments and physical coordination.' },
];

const approach = [
  { title: 'Child-centred learning', description: 'We plan around each child\'s needs, interests and pace — not a one-size-fits-all template.' },
  { title: 'Play-based foundations', description: 'In the early years, play is the work of the child. It is how they make sense of the world.' },
  { title: 'Strong academic core', description: 'As children grow, we build rigorous skills in literacy, numeracy and critical thinking.' },
  { title: 'Character and values', description: 'We weave honesty, kindness, respect and responsibility into everything we do.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AcademicsPage() {
  return (
    <main>
      <PageHero
        label="Academics"
        title={<>Learning that grows <em>with your child.</em></>}
        description="From first steps to big ideas, our curriculum is designed to build strong foundations while keeping the joy of learning alive at every stage."
        ctaLabel="Apply now"
        ctaHref="/admissions"
      />

      {/* Levels */}
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
              <div className="section-label">Our programmes</div>
              <h2>Three stages, <span>one journey.</span></h2>
            </motion.div>
            <p>Each level is thoughtfully structured to meet children where they are and help them take the next step with confidence.</p>
          </div>
          <div className="levels-list">
            {levels.map((level, i) => {
              const Icon = level.icon;
              return (
                <motion.div
                  key={level.title}
                  className="level-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="level-image">
                    <img src={level.image} alt={`${level.title} at The Trophies School`} />
                  </div>
                  <div className="level-content">
                    <div className="level-header">
                      <div className="level-icon"><Icon size={24} /></div>
                      <span className="level-number">{level.number}</span>
                    </div>
                    <div className="level-age">{level.ageRange}</div>
                    <h3>{level.title}</h3>
                    <p>{level.description}</p>
                    <ul className="level-features">
                      {level.features.map((f) => (
                        <li key={f}><span><Check size={13} /></span>{f}</li>
                      ))}
                    </ul>
                    <Link className="text-link" href="/admissions">Apply for {level.title} <ArrowUpRight size={16} /></Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum */}
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
              <div className="section-label">What we teach</div>
              <h2>A <span>broad, balanced</span> curriculum.</h2>
            </motion.div>
            <p>Our curriculum blends the Nigerian educational framework with international best practices, giving children a well-rounded foundation.</p>
          </div>
          <div className="subjects-grid">
            {subjects.map((subject, i) => {
              const Icon = subject.icon;
              return (
                <motion.div
                  key={subject.name}
                  className="subject-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                >
                  <Icon size={24} />
                  <h4>{subject.name}</h4>
                  <p>{subject.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
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
              <div className="section-label">How we teach</div>
              <h2>Our learning <span>approach.</span></h2>
            </motion.div>
            <p>Great teaching is not just about what children learn — it is about how they learn, and how they feel while doing it.</p>
          </div>
          <div className="approach-grid">
            {approach.map((item, i) => (
              <motion.div
                key={item.title}
                className="approach-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="approach-number">0{i + 1}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
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
            <div className="section-label" style={{ color: 'var(--gold)' }}>Ready to join us?</div>
            <h2>Give your child a<br />strong start.</h2>
            <p>Admissions are open for the 2025/26 academic year. We would love to welcome your family.</p>
            <div className="hero-actions" style={{ marginTop: '32px' }}>
              <Link className="button button-red" href="/admissions">Start your application <MoveRight size={18} /></Link>
              <Link className="text-link" href="/contact">Ask a question <ArrowUpRight size={17} /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

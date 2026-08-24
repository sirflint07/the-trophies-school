'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  HeartHandshake,
  MoveRight,
  Compass,
  Quote,
  Trophy,
  Users,
  GraduationCap
} from 'lucide-react';

const classroomImage = 'https://images.pexels.com/photos/12448839/pexels-photo-12448839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const activityImage = 'https://images.pexels.com/photos/14554003/pexels-photo-14554003.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const creativeImage = 'https://images.pexels.com/photos/31773583/pexels-photo-31773583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const schoolImage = '/trophies-school.png'

const programs = [
  { number: '01', title: 'Crèche', description: 'A gentle, nurturing beginning where every little milestone is celebrated.', color: 'red', icon: HeartHandshake },
  { number: '02', title: 'Nursery', description: 'Curiosity-led learning that builds confidence, language and a love for discovery.', color: 'gold', icon: Compass },
  { number: '03', title: 'Primary', description: 'Strong foundations, bright ideas and the skills to thrive in a changing world.', color: 'dark', icon: BookOpen },
];

const stats = [
  { value: '15+', label: 'Years of inspiring', icon: Trophy },
  { value: '500+', label: 'Pupils nurtured', icon: Users },
  { value: '100%', label: 'Dedicated teachers', icon: GraduationCap },
  { value: '3', label: 'Levels of learning', icon: BookOpen },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-shape hero-shape-one" />
        <div className="hero-shape hero-shape-two" />
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="eyebrow"><span /> Sound minds. Kind hearts. Bright futures.</div>
            <h1>Where every child finds their <em>spark.</em></h1>
            <p className="hero-lede">A warm, ambitious start to school life in Ibadan. We help children discover what they can do and give them the confidence to do it.</p>
            <div className="hero-actions">
              <Link className="button button-red" href="/admissions">Explore admissions <MoveRight size={18} /></Link>
              <Link className="text-link" href="/academics">Discover our approach <ArrowUpRight size={17} /></Link>
            </div>
            <div className="hero-note">
              <div className="avatar-stack"><span>F</span><span>M</span><span>A</span></div>
              <span>Trusted by families across Ibadan</span>
            </div>
          </motion.div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="hero-image-frame">
              <img src={schoolImage} alt="Children learning together in a classroom" />
            </div>
            <motion.div
              className="hero-stamp"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Award size={22} /><strong>Learning<br />with purpose</strong>
            </motion.div>
            <div className="hero-caption"><span className="caption-line" /><span>Oke-Ibukun, Ibadan</span></div>
          </motion.div>
        </div>
        <div className="hero-bottom container"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Icon size={22} />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="intro section-pad" id="about">
        <div className="container intro-grid">
          <div className="section-label">01 / Who we are</div>
          <motion.div
            className="intro-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <h2>A school built around <span>possibility.</span></h2>
            <p>At The Trophies School, we believe a child&apos;s early years should be full of wonder, purpose and possibility. Our classrooms are joyful places where children are known, challenged and encouraged to grow into their best selves.</p>
            <Link className="text-link dark-link" href="/about">More about us <ArrowUpRight size={17} /></Link>
          </motion.div>
          <div className="intro-aside">
            <div className="gold-rule" />
            <p>&ldquo;Uploading knowledge for true trophies.&rdquo;</p>
            <small>— Our promise to every child</small>
          </div>
        </div>
      </section>

      <section className="programs section-pad" id="learning">
        <div className="container">
          <div className="section-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label">02 / Learning journey</div>
              <h2>Growing at the <span>right pace.</span></h2>
            </motion.div>
            <p>From first steps to big ideas, each stage is thoughtfully designed to help your child feel secure, seen and ready for what comes next.</p>
          </div>
          <div className="program-grid">
            {programs.map((program, i) => {
              const Icon = program.icon;
              return (
                <motion.article
                  className={`program-card ${program.color}`}
                  key={program.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <span className="program-number">{program.number}</span>
                  <div className="program-icon"><Icon /></div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <Link href="/academics">Learn more <ArrowUpRight size={16} /></Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="feature section-pad" id="community">
        <div className="container feature-grid">
          <motion.div
            className="feature-images"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="feature-main-image">
              <img src={activityImage} alt="Students collaborating during a classroom activity" />
            </div>
            <div className="feature-small-image">
              <img src={creativeImage} alt="Young learners enjoying a creative activity" />
            </div>
            <div className="image-badge"><span>15+</span><small>years of<br />inspiring</small></div>
          </motion.div>
          <motion.div
            className="feature-copy"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">03 / The Trophies difference</div>
            <h2>More than a school.<br /><span>A place to belong.</span></h2>
            <p>Children do their best learning when they feel safe, valued and excited to be here. That is why we pair high expectations with genuine care, creating an environment where character and capability grow side by side.</p>
            <ul>
              {['Small class communities where every voice matters', 'Dedicated teachers who know your child well', 'A balanced foundation in academics, creativity and character'].map((item) => (
                <li key={item}><span><Check size={14} /></span>{item}</li>
              ))}
            </ul>
            <Link className="button button-dark" href="/school-life">Explore school life <MoveRight size={18} /></Link>
          </motion.div>
        </div>
      </section>

      <section className="quote-section">
        <motion.div
          className="container quote-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Quote className="quote-mark" size={44} />
          <blockquote>&ldquo;The best gift we can give a child is the belief that they are capable of great things.&rdquo;</blockquote>
          <div className="quote-source"><span /> The Trophies School philosophy</div>
        </motion.div>
      </section>

      <section className="cta-band section-pad">
        <div className="container cta-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-label" style={{ color: 'var(--gold)' }}>Ready to begin?</div>
            <h2>Come and see what makes<br />The Trophies School special.</h2>
            <p>Book a personal tour of our campus and meet the teachers who will guide your child&apos;s first steps into learning.</p>
            <div className="hero-actions" style={{ marginTop: '32px' }}>
              <Link className="button button-red" href="/contact">Book a school tour <MoveRight size={18} /></Link>
              <Link className="text-link" href="/admissions">View admissions process <ArrowUpRight size={17} /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

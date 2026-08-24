'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  MoveRight,
  Calendar,
  Trophy,
  BookOpen,
  Award,
  Star,
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import Link from 'next/link';

const newsItems = [
  {
    category: 'Achievement',
    date: 'June 2025',
    title: 'Our pupils excel in inter-school competition',
    excerpt: 'The Trophies School pupils brought home medals in the recent inter-school quiz and spelling competition, demonstrating the academic excellence we strive for.',
    icon: Trophy,
  },
  {
    category: 'School News',
    date: 'May 2025',
    title: 'New creative arts studio opens',
    excerpt: 'We are excited to announce the opening of our new creative arts studio, giving pupils a dedicated space to explore painting, crafts and design.',
    icon: BookOpen,
  },
  {
    category: 'Event',
    date: 'April 2025',
    title: 'Annual Inter-House Sports Day',
    excerpt: 'Our annual sports day was a celebration of teamwork, determination and school spirit. Parents, pupils and teachers came together for a memorable day.',
    icon: Award,
  },
  {
    category: 'Achievement',
    date: 'March 2025',
    title: '100% pass rate in primary six examinations',
    excerpt: 'We are proud to announce that all our Primary 6 pupils achieved excellent results in their transition examinations, a testament to their hard work.',
    icon: Star,
  },
  {
    category: 'School News',
    date: 'February 2025',
    title: 'Reading challenge inspires young learners',
    excerpt: 'Our termly reading challenge saw pupils across all levels discover new books, share stories and develop a deeper love of reading.',
    icon: BookOpen,
  },
  {
    category: 'Event',
    date: 'January 2025',
    title: 'Cultural Heritage Day celebration',
    excerpt: 'We celebrated the rich cultural heritage of Nigeria with a day of music, dance, food and traditional attire — a wonderful showcase of diversity.',
    icon: Award,
  },
];

const upcomingEvents = [
  { title: 'Open Day', date: 'Saturday, 6 September 2025', detail: 'Prospective families welcome. Tour the school, meet teachers and learn about admissions.' },
  { title: 'New academic year begins', date: 'Monday, 8 September 2025', detail: 'The 2025/26 academic year officially commences for all levels.' },
  { title: 'Parent-Teacher Conference', date: 'October 2025', detail: 'An opportunity to discuss your child\'s progress with their teachers.' },
  { title: 'End of Year Celebration', date: 'December 2025', detail: 'Our annual celebration of the year\'s achievements and milestones.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function NewsPage() {
  return (
    <main>
      <PageHero
        label="News & Events"
        title={<>Celebrating achievements, <em>sharing our story.</em></>}
        description="Stay up to date with the latest news, events and achievements from The Trophies School community."
      />

      {/* Featured news */}
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
              <div className="section-label">Latest stories</div>
              <h2>School <span>news.</span></h2>
            </motion.div>
            <p>From academic achievements to community celebrations, here is what has been happening at The Trophies School.</p>
          </div>
          <div className="news-grid">
            {newsItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={i}
                  className="news-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="news-card-top">
                    <div className="news-icon"><Icon size={20} /></div>
                    <span className="news-category">{item.category}</span>
                  </div>
                  <span className="news-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <span className="news-read-more">Read more <ArrowUpRight size={15} /></span>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming events */}
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
              <div className="section-label">Mark your calendar</div>
              <h2>Upcoming <span>events.</span></h2>
            </motion.div>
            <p>Join us at one of our upcoming events and experience The Trophies School community first-hand.</p>
          </div>
          <div className="events-list">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={i}
                className="event-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ x: 6 }}
              >
                <div className="event-date-col">
                  <Calendar size={22} />
                </div>
                <div className="event-content">
                  <h4>{event.title}</h4>
                  <p>{event.detail}</p>
                </div>
                <div className="event-date-value">{event.date}</div>
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
            <div className="section-label" style={{ color: 'var(--gold)' }}>Join our community</div>
            <h2>Come and be part<br />of our story.</h2>
            <p>We would love to welcome you and your child into The Trophies School family.</p>
            <div className="hero-actions" style={{ marginTop: '32px' }}>
              <Link className="button button-red" href="/admissions">Start your application <MoveRight size={18} /></Link>
              <Link className="text-link" href="/contact">Contact us <ArrowUpRight size={17} /></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

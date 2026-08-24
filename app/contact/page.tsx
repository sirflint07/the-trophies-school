'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, MoveRight, ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/page-hero';
import ContactForm from '@/components/contact-form';
import Link from 'next/link';

const contactInfo = [
  { icon: MapPin, label: 'Visit us', value: 'Oke-Ibukun, Agberu\nalong Pipeline, Orita Merin\nElebu Road, Iddo, Ibadan' },
  { icon: Phone, label: 'Call the school', value: '+234 (0) 803 000 0000' },
  { icon: Mail, label: 'Email us', value: 'info@trophiesschool.com' },
  { icon: Clock, label: 'Office hours', value: 'Monday – Friday\n7:30am – 4:00pm' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        label="Contact"
        title={<>We&apos;d love to <em>hear from you.</em></>}
        description="Whether you want to book a school tour, ask a question or start your child's application, we are here to help. Reach out and we will get back to you as soon as we can."
      />

      {/* Contact info cards */}
      <section className="section-pad">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  className="contact-info-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="contact-info-icon"><Icon size={22} /></div>
                  <small>{info.label}</small>
                  <strong>{info.value}</strong>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container contact-grid">
          <motion.div
            className="contact-copy"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Send a message</div>
            <h2>Let&apos;s start a <span>conversation.</span></h2>
            <p>Share a few details and our team will be in touch with you shortly. Whether you have a question about admissions, fees or anything else, we are happy to help.</p>
            <div className="contact-details">
              <div>
                <small>Find us</small>
                <strong>Oke-Ibukun, Agberu<br />Elebu Road, Iddo, Ibadan</strong>
              </div>
              <div>
                <small>Call us</small>
                <strong>+234 (0) 803 000 0000</strong>
              </div>
            </div>
            <Link className="text-link dark-link" href="/admissions">
              Ready to apply? Start here <ArrowUpRight size={17} />
            </Link>
          </motion.div>
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="map-section">
        <div className="map-placeholder">
          <div className="map-content">
            <MapPin size={32} />
            <strong>The Trophies School</strong>
            <p>Oke-Ibukun, Agberu, along Pipeline, Orita Merin<br />Elebu Road, Iddo, Ibadan</p>
            <a
              className="button button-red"
              href="https://www.google.com/maps/search/?api=1&query=Oke-Ibukun+Agberu+Elebu+Road+Iddo+Ibadan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions <MoveRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

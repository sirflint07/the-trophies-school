'use client';

import { motion } from 'framer-motion';
import {
  Check,
  FileText,
  ClipboardList,
  Calendar,
  ChevronDown,
  Phone,
  MapPin,
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import ContactForm from '@/components/contact-form';
import { useState } from 'react';

const steps = [
  { icon: ClipboardList, title: 'Enquire', description: 'Submit an enquiry through our website or call the school office to express your interest.' },
  { icon: Calendar, title: 'Visit', description: 'Book a personal tour of our campus to see our facilities and meet our teachers.' },
  { icon: FileText, title: 'Apply', description: 'Complete the application form and submit the required documents.' },
  { icon: Check, title: 'Enrol', description: 'Receive your admission offer, confirm your place and complete enrolment.' },
];

const requirements = [
  'Completed application form',
  'Child\'s birth certificate (photocopy)',
  'Two recent passport photographs',
  'Immunisation records',
  'Last school report (for transfer pupils)',
  'Application fee payment receipt',
];

const fees = [
  { level: 'Crèche', range: '3 months – 2 years', admission: '₦25,000', tuition: '₦45,000 / term' },
  { level: 'Nursery', range: '2 – 5 years', admission: '₦20,000', tuition: '₦40,000 / term' },
  { level: 'Primary', range: '5 – 11 years', admission: '₦20,000', tuition: '₦50,000 / term' },
];

const faqs = [
  { q: 'What ages do you accept?', a: 'We accept children from 3 months (crèche) through to 11 years (Primary 6). Our three levels — crèche, nursery and primary — cover the full range of foundational education.' },
  { q: 'How do I schedule a school tour?', a: 'You can book a tour by submitting an enquiry through our contact page or calling the school office directly. We will arrange a convenient time for you to visit and see our facilities.' },
  { q: 'What are your school hours?', a: 'Our school operates from Monday to Friday, 7:30am to 4:00pm. Drop-off begins at 7:30am and pick-up is by 4:00pm. We offer after-school care for families who need later collection.' },
  { q: 'Do you provide meals?', a: 'Yes, we offer nutritious meals and snacks prepared in hygienic conditions. Meal plans can be discussed during the enrolment process.' },
  { q: 'Is there a uniform?', a: 'Yes, all nursery and primary pupils wear our school uniform. Crèche children wear comfortable clothing. Uniform details are provided upon enrolment.' },
  { q: 'What is your class size?', a: 'We keep our class sizes small to ensure every child receives individual attention. Our typical pupil-to-teacher ratio allows us to know each child personally.' },
];

const dates = [
  { event: 'Admissions open', date: 'Ongoing', detail: 'Applications for 2025/26 are being accepted now.' },
  { event: 'Entrance assessment', date: 'By appointment', detail: 'Scheduled after your application is received.' },
  { event: 'Term begins', date: 'September 2025', detail: 'New academic year commences.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <ChevronDown size={18} className={open ? 'faq-chevron-open' : ''} />
      </button>
      {open && <div className="faq-answer"><p>{a}</p></div>}
    </div>
  );
}

export default function AdmissionsPage() {
  return (
    <main>
      <PageHero
        label="Admissions"
        title={<>Your child&apos;s journey <em>starts here.</em></>}
        description="We welcome families from across Ibadan and beyond. Our admissions process is simple, transparent and designed to help you make the right choice for your child."
        ctaLabel="Start your application"
        ctaHref="#process"
      />

      {/* Process */}
      <section className="section-pad" id="process">
        <div className="container">
          <div className="section-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label">How to join</div>
              <h2>Four simple <span>steps.</span></h2>
            </motion.div>
            <p>From first enquiry to first day, we are here to guide you through every stage of the process.</p>
          </div>
          <div className="process-grid">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="process-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="process-step-number">{i + 1}</div>
                  <div className="process-icon"><Icon size={24} /></div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container requirements-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">What you need</div>
            <h2>Admission <span>requirements.</span></h2>
            <p>To complete your child&apos;s application, please prepare the following documents. Our admissions team is available to help if you have any questions.</p>
          </motion.div>
          <motion.ul
            className="requirements-list"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {requirements.map((req) => (
              <li key={req}><span><Check size={14} /></span>{req}</li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Fees */}
      <section className="section-pad" id="fees" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label">Transparent pricing</div>
              <h2>Fees &amp; <span>tuition.</span></h2>
            </motion.div>
            <p>We believe in being upfront about costs. The figures below are indicative — please confirm current fees with the school office.</p>
          </div>
          <motion.div
            className="fees-table"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="fees-header">
              <span>Level</span>
              <span>Age range</span>
              <span>Admission fee</span>
              <span>Tuition</span>
            </div>
            {fees.map((row) => (
              <div key={row.level} className="fees-row">
                <span className="fees-level">{row.level}</span>
                <span>{row.range}</span>
                <span>{row.admission}</span>
                <span className="fees-tuition">{row.tuition}</span>
              </div>
            ))}
          </motion.div>
          <p className="fees-note">Fees are payable per term. Sibling discounts are available. Please contact the school office for a detailed fee schedule.</p>
        </div>
      </section>

      {/* Important dates */}
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
              <div className="section-label">Key dates</div>
              <h2>Important <span>dates.</span></h2>
            </motion.div>
          </div>
          <div className="dates-grid">
            {dates.map((d, i) => (
              <motion.div
                key={d.event}
                className="date-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Calendar size={22} />
                <strong>{d.event}</strong>
                <span className="date-value">{d.date}</span>
                <p>{d.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" id="faq" style={{ background: '#fff' }}>
        <div className="container faq-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <div className="section-label">Questions answered</div>
            <h2>Frequently asked <span>questions.</span></h2>
          </motion.div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <FaqItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply form */}
      <section className="section-pad" style={{ background: 'var(--cream)' }} id="apply">
        <div className="container contact-grid">
          <motion.div
            className="contact-copy"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Start your application</div>
            <h2>Begin the <span>conversation.</span></h2>
            <p>Share a few details and our admissions team will be in touch to guide you through the next steps.</p>
            <div className="contact-details">
              <div>
                <small>Visit us</small>
                <strong><MapPin size={14} /> Oke-Ibukun, Agberu<br />Elebu Road, Iddo, Ibadan</strong>
              </div>
              <div>
                <small>Call the school</small>
                <strong><Phone size={14} /> +234 (0) 803 000 0000</strong>
              </div>
            </div>
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
    </main>
  );
}

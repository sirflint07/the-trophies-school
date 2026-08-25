'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowUpRight,
  MoveRight,
  Heart,
  BookOpen,
  Laptop,
  Trophy,
  Dumbbell,
  GraduationCap,
  Building2,
  Sparkles,
  Check,
  Copy,
  Mail,
  Phone,
  MessageCircle,
  ShieldCheck,
  Landmark,
  Info,
} from 'lucide-react';
import PageHero from '@/components/page-hero';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const givingImage = 'https://images.pexels.com/photos/28593055/pexels-photo-28593055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const whyGive = [
  { icon: BookOpen, title: 'Educational resources', description: 'Textbooks, learning materials and classroom supplies that keep every child engaged.' },
  { icon: Laptop, title: 'ICT and technology', description: 'Computers, tablets and digital tools that prepare pupils for a connected world.' },
  { icon: Trophy, title: 'Sports and extracurriculars', description: 'Equipment and facilities that nurture teamwork, discipline and healthy bodies.' },
  { icon: GraduationCap, title: 'Scholarships and support', description: 'Financial assistance that opens doors for families who need it most.' },
];

const waysToSupport = [
  { icon: Heart, title: 'Financial donations', description: 'Direct contributions to the school\'s development fund or a specific programme.' },
  { icon: BookOpen, title: 'Books and learning resources', description: 'New or gently used textbooks, storybooks and educational materials.' },
  { icon: Laptop, title: 'Technology and equipment', description: 'Computers, tablets, projectors and other ICT equipment.' },
  { icon: Dumbbell, title: 'Sports equipment', description: 'Balls, jerseys, training gear and other athletic supplies.' },
  { icon: Building2, title: 'School development support', description: 'Contributions towards facilities, renovations and campus improvements.' },
  { icon: GraduationCap, title: 'Scholarships and student support', description: 'Sponsor a child\'s education or contribute to a scholarship fund.' },
];

const accounts = [
  {
    bankName: 'First Bank of Nigeria',
    accountName: 'The Trophies School',
    accountNumber: '0000000000',
    accountType: 'Current Account',
  },
  {
    bankName: 'Access Bank Plc',
    accountName: 'The Trophies School',
    accountNumber: '0000000000',
    accountType: 'Current Account',
  },
  {
    bankName: 'United Bank for Africa (UBA)',
    accountName: 'The Trophies School',
    accountNumber: '0000000000',
    accountType: 'Savings Account',
  },
];

const transferExamples = [
  'Michael Oluwaseun — School Development',
  'John Ade — ICT Support',
  'ABC Foundation — Student Scholarship',
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function AccountCard({ account, index }: { account: typeof accounts[0]; index: number }) {
  const [copied, setCopied] = useState(false);

  function copyAccountNumber() {
    navigator.clipboard.writeText(account.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <motion.div
      className="account-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="account-card-header">
        <div className="account-card-bank-icon"><Landmark size={20} /></div>
        <div>
          <h4>{account.bankName}</h4>
          <span>{account.accountType}</span>
        </div>
      </div>
      <div className="account-card-body">
        <div className="account-field">
          <small>Account name</small>
          <strong>{account.accountName}</strong>
        </div>
        <div className="account-field">
          <small>Account number</small>
          <div className="account-number-row">
            <strong className="account-number-value">{account.accountNumber}</strong>
            <button className="copy-btn" onClick={copyAccountNumber} aria-label="Copy account number">
              {copied ? <Check size={15} /> : <Copy size={15} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="account-card-placeholder-note">
        <Info size={13} /> Please only make donations to the school&apos;s actual details
      </div>
    </motion.div>
  );
}

export default function GivingPage() {
  const [accountsOpen, setAccountsOpen] = useState(false);

  return (
    <main>
      <PageHero
        label="Giving"
        title={<>Give towards a <em>brighter future.</em></>}
        description="Every contribution helps us support our pupils, improve learning opportunities and continue building a school where every child can thrive. Whether you are a parent, alumna, organisation or well-wisher, your support makes a real difference."
        ctaLabel="Support the school"
        ctaHref="#ways-to-support"
      />

      {/* Why Give */}
      <section className="section-pad" id="why-give">
        <div className="container">
          <div className="section-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label">The impact</div>
              <h2>Why your <span>support matters.</span></h2>
            </motion.div>
            <p>Donations and contributions directly enhance the quality of education we provide. Here are some of the areas your support helps us strengthen.</p>
          </div>
          <div className="why-give-grid">
            {whyGive.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="why-give-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="why-give-number">0{i + 1}</div>
                  <div className="why-give-icon"><Icon size={22} /></div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="section-pad" id="ways-to-support" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label">How you can help</div>
              <h2>Ways to <span>support.</span></h2>
            </motion.div>
            <p>Support does not have to be limited to financial donations. There are many ways to contribute to the growth and development of our school community.</p>
          </div>
          <div className="ways-grid">
            {waysToSupport.map((way, i) => {
              const Icon = way.icon;
              return (
                <motion.div
                  key={way.title}
                  className="ways-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="ways-icon"><Icon size={22} /></div>
                  <h4>{way.title}</h4>
                  <p>{way.description}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.p
            className="ways-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Individuals or organisations interested in supporting through other means are welcome to <Link href="#contact-sponsor">contact the school directly</Link>.
          </motion.p>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="section-pad" id="donation-cta" style={{ background: '#fff' }}>
        <div className="container donation-cta-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Be part of the difference</div>
            <h2>Be part of the <span>difference.</span></h2>
            <p>Parents, alumni, organisations, sponsors and well-wishers — your generosity fuels the continued growth and development of The Trophies School. Every contribution, large or small, helps us create better opportunities for our pupils.</p>
            <div className="hero-actions" style={{ marginTop: '32px' }}>
              <button className="button button-red" onClick={() => setAccountsOpen(true)}>
                View available accounts <MoveRight size={18} />
              </button>
              <Link className="text-link" href="#contact-sponsor">
                Contact the school <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="donation-cta-image"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={givingImage} alt="Children learning and smiling in a classroom" />
            <div className="donation-cta-badge">
              <Sparkles size={18} />
              <span>Every gift<br />makes a difference</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Account Details Dialog */}
      <Dialog open={accountsOpen} onOpenChange={setAccountsOpen}>
        <DialogContent className="giving-dialog-content">
          <DialogHeader>
            <DialogTitle className="giving-dialog-title">
              <ShieldCheck size={22} /> Available donation accounts
            </DialogTitle>
            <DialogDescription className="giving-dialog-desc">
              Use any of the accounts below to make your contribution. The account details shown are placeholders and will be replaced with the school&apos;s official banking information.
            </DialogDescription>
          </DialogHeader>

          <div className="accounts-list">
            <AnimatePresence>
              {accounts.map((account, i) => (
                <AccountCard key={account.bankName} account={account} index={i} />
              ))}
            </AnimatePresence>
          </div>

          <div className="transfer-guidelines">
            <h3><ShieldCheck size={18} /> Transfer guidelines</h3>
            <p>
              Please include your <strong>full name</strong> and a brief <strong>description or purpose</strong> of your donation in the transfer narration. This helps us identify and properly record every contribution.
            </p>
            <div className="transfer-examples">
              <small>Examples:</small>
              {transferExamples.map((ex) => (
                <div key={ex} className="transfer-example">{ex}</div>
              ))}
            </div>
            <div className="transfer-note">
              <Info size={14} />
              <span>After making a transfer, please contact the school to confirm receipt — especially for larger contributions or specific sponsorships.</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <section className="section-pad" id="contact-sponsor" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label">Other ways to help</div>
              <h2>Want to support in <span>another way?</span></h2>
            </motion.div>
            <p>Organisations, parents, alumni and individuals interested in providing materials, equipment, scholarships or other forms of support can contact the school directly.</p>
          </div>
          <div className="sponsor-contact-grid">
            <motion.a
              href="mailto:info@trophiesschool.com"
              className="sponsor-contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ y: -4 }}
            >
              <div className="sponsor-contact-icon"><Mail size={24} /></div>
              <h4>Send an email</h4>
              <p>info@trophiesschool.com</p>
              <span className="sponsor-contact-cta">Email us <ArrowUpRight size={15} /></span>
            </motion.a>
            <motion.a
              href="/contact"
              className="sponsor-contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="sponsor-contact-icon"><Phone size={24} /></div>
              <h4>Contact us</h4>
              <p>+234 (0) 816 416 2743</p>
              <span className="sponsor-contact-cta">Reach out <ArrowUpRight size={15} /></span>
            </motion.a>
            <motion.a
              href="https://wa.me/2348030000000"
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <div className="sponsor-contact-icon"><MessageCircle size={24} /></div>
              <h4>WhatsApp</h4>
              <p>Chat with us directly</p>
              <span className="sponsor-contact-cta">Message us <ArrowUpRight size={15} /></span>
            </motion.a>
          </div>
        </div>
      </section>

      <section className="giving-final-cta">
        <motion.div
          className="container giving-final-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-rule" style={{ margin: '0 auto 24px' }} />
          <h2>Together, we can create<br />greater opportunities.</h2>
          <p>Your generosity helps us build a brighter, stronger future for every child at The Trophies School.</p>
          <div className="hero-actions" style={{ marginTop: '32px', justifyContent: 'center' }}>
            <button className="button button-red" onClick={() => setAccountsOpen(true)}>
              View available accounts <MoveRight size={18} />
            </button>
            <Link className="text-link" href="/contact">
              Contact the school <ArrowUpRight size={17} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

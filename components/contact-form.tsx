'use client';

import { FormEvent, useState } from 'react';
import { Check, MoveRight, ArrowUpRight, AlertCircle } from 'lucide-react';
// import { supabase } from '@/lib/supabase-client';

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      level: formData.get('level') as string,
      message: formData.get('message') as string || null,
    };

    try {
      // const { error: insertError } = await supabase
      //   .from('contact_submissions')
      //   .insert([data]);

      // if (insertError) throw insertError;
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="success-message">
        <div className="success-icon"><Check size={24} /></div>
        <h3>Thank you for reaching out.</h3>
        <p>We have received your enquiry and our admissions team will be in touch with you shortly.</p>
        <button className="text-link dark-link" onClick={() => setSubmitted(false)}>
          Send another message <ArrowUpRight size={16} />
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Parent / guardian name
          <input name="name" placeholder="Your full name" required />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" placeholder="080 0000 0000" required />
        </label>
      </div>
      <label>
        Email address
        <input name="email" type="email" placeholder="you@example.com" required />
      </label>
      <label>
        Tell us about your child
        <select name="level" defaultValue="" required>
          <option value="" disabled>Select a school level</option>
          <option>Crèche</option>
          <option>Nursery</option>
          <option>Primary</option>
        </select>
      </label>
      {!compact && (
        <label>
          Message (optional)
          <textarea name="message" rows={4} placeholder="Tell us anything you'd like us to know" />
        </label>
      )}
      {error && (
        <div className="form-error">
          <AlertCircle size={16} /> {error}
        </div>
      )}
      <button className="button button-red form-submit" type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Request a school tour'} <MoveRight size={18} />
      </button>
      <small className="form-footnote">We&apos;ll only use your details to respond to your enquiry.</small>
    </form>
  );
}

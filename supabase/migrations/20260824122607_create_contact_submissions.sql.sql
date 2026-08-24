-- /*
-- # Create contact_submissions table (single-tenant, no auth)

-- 1. New Tables
-- - `contact_submissions`
--   - `id` (uuid, primary key)
--   - `name` (text, parent/guardian name)
--   - `email` (text, contact email)
--   - `phone` (text, phone number)
--   - `level` (text, school level of interest: Crèche, Nursery, Primary)
--   - `message` (text, optional additional message)
--   - `status` (text, default 'new' — for school admin to track enquiries)
--   - `created_at` (timestamp, when the enquiry was submitted)
-- 2. Security
-- - Enable RLS on `contact_submissions`.
-- - INSERT only for anon+authenticated (public can submit forms, but cannot read submissions).
-- - SELECT/UPDATE/DELETE disabled — school admin accesses data through Supabase dashboard, not the frontend.
-- - Important: No SELECT policy for anon role, so submitted data is not readable from the frontend.
-- 3. Notes
-- - This is a single-tenant app with no sign-in. The public can submit enquiries but cannot read them back.
-- - School staff will view and manage submissions through the Supabase dashboard.
-- */

-- CREATE TABLE IF NOT EXISTS contact_submissions (
--   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
--   name text NOT NULL,
--   email text NOT NULL,
--   phone text NOT NULL,
--   level text NOT NULL,
--   message text,
--   status text NOT NULL DEFAULT 'new',
--   created_at timestamptz DEFAULT now()
-- );

-- ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- -- Allow public (anon) to INSERT submissions — parents filling out the contact form
-- DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
-- CREATE POLICY "anon_insert_contact_submissions"
-- ON contact_submissions FOR INSERT
-- TO anon, authenticated
-- WITH CHECK (true);

-- -- No SELECT/UPDATE/DELETE policies for anon — submissions are private to school admin

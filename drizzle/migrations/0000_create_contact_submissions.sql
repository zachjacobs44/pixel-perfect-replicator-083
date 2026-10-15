CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 1 AND 200),
  phone_e164 text NOT NULL CHECK (phone_e164 ~ '^\+1[2-9][0-9]{2}[2-9][0-9]{6}$'),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 4000),
  consent_service boolean NOT NULL,
  consent_marketing boolean NOT NULL,
  accept_terms boolean NOT NULL CHECK (accept_terms = true),
  consent_text_version text NOT NULL,
  user_agent text,
  ip text,
  source text NOT NULL
);
GRANT ALL ON public.contact_submissions TO service_role;
REVOKE ALL ON public.contact_submissions FROM anon, authenticated;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.contact_submissions IS 'Private contact and SMS consent records. No client policies: writes only through validated contact server function using service role.';
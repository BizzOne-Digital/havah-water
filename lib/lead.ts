export const CONTACT_METHODS = ['email', 'phone', 'text'] as const

export type Lead = {
  name: string
  email: string
  phone: string
  address: string
  preferred: (typeof CONTACT_METHODS)[number]
  message: string
}

/** Server-side validation for the contact form. Returns the clean lead or a user-facing error. */
export function parseLead(input: unknown): { lead: Lead } | { error: string } | { spam: true } {
  const data = input && typeof input === 'object' ? (input as Record<string, unknown>) : {}
  const s = (k: string, max: number) => (typeof data[k] === 'string' ? (data[k] as string).trim().slice(0, max) : '')

  if (s('company', 200)) return { spam: true } // honeypot field, invisible to people

  const preferred = CONTACT_METHODS.find((m) => m === s('preferred', 10)) ?? 'email'
  const lead: Lead = {
    name: s('name', 120),
    email: s('email', 200),
    phone: s('phone', 40),
    address: s('address', 240),
    preferred,
    message: s('message', 4000),
  }

  if (!lead.name) return { error: 'Please share your name.' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return { error: 'Please enter a valid email address.' }
  if (preferred !== 'email' && lead.phone.replace(/\D/g, '').length < 10) return { error: 'Please add a phone number so we can reach you that way.' }
  return { lead }
}

import { NextResponse } from 'next/server'
import { parseLead } from '@/lib/lead'

/**
 * Contact form endpoint. Validates, then forwards the lead as JSON to CONTACT_WEBHOOK_URL
 * (Zapier / Make / GoHighLevel / CRM inbound webhook, or your own email function).
 * Without a webhook it returns 503 so the form tells visitors to call — it never fakes success.
 */
// ponytail: no rate limiting; add one (e.g. Vercel firewall rule or Upstash) if spam gets past the honeypot.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  const result = parseLead(body)
  if ('spam' in result) return NextResponse.json({ ok: true })
  if ('error' in result) return NextResponse.json({ error: result.error }, { status: 422 })

  const hook = process.env.CONTACT_WEBHOOK_URL
  if (!hook) {
    return NextResponse.json({ error: 'Online requests are not connected yet.' }, { status: 503 })
  }

  const res = await fetch(hook, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ ...result.lead, source: 'Havahwater website', receivedAt: new Date().toISOString() }),
    signal: AbortSignal.timeout(10_000),
  }).catch(() => null)

  if (!res?.ok) return NextResponse.json({ error: 'We couldn’t send your request just now.' }, { status: 502 })
  return NextResponse.json({ ok: true })
}

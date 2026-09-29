// `node lib/lead.check.ts`
import assert from 'node:assert/strict'
import { parseLead } from './lead.ts'

const ok = { name: 'Test Person', email: 'test@example.com', preferred: 'email' }

assert.ok('lead' in parseLead(ok))
assert.ok('spam' in parseLead({ ...ok, company: 'bot' }))
assert.ok('error' in parseLead({ ...ok, name: '  ' }))
assert.ok('error' in parseLead({ ...ok, email: 'not-an-email' }))
assert.ok('error' in parseLead({ ...ok, preferred: 'phone', phone: '123' }))
assert.ok('lead' in parseLead({ ...ok, preferred: 'text', phone: '(801) 555-0100' }))
const r = parseLead({ ...ok, preferred: 'carrier-pigeon', name: 'x'.repeat(500) })
assert.ok('lead' in r && r.lead.preferred === 'email' && r.lead.name.length === 120)
assert.ok('error' in parseLead(null))

console.log('lead check passed')

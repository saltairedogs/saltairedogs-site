// src/app/api/newsletter/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json().catch(() => ({}))
    const { name, phone } = data || {}
    if (!name || !phone) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })
    }

    // TODO: integrate with your CRM/Mail tool. For now, log to server.
    console.log('[newsletter] signup', { name, phone, ts: new Date().toISOString() })

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

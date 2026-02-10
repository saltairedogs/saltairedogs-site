// app/(site)/whatsapp/page.tsx
// Permanent redirect — all contact now goes through /contact
import { redirect } from 'next/navigation'

export default function WhatsappPage() {
  redirect('/contact')
}

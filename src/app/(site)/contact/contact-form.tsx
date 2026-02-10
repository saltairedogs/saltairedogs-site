"use client";

import * as React from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Mail, Sparkles } from "lucide-react";

const EMAIL = "saltairedogs@proton.me";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; delivered?: boolean }
  | { state: "error"; message: string };

export default function ContactForm() {
  const [status, setStatus] = React.useState<Status>({ state: "idle" });
  const [message, setMessage] = React.useState("");
  const formRef = React.useRef<HTMLFormElement | null>(null);

  // Tiny helper to insert a friendly template
  const templates = [
    "Hi, I’m on [your street] in Saltaire. Looking for short, steady dog walks.",
    "Hello—cat visits needed while I’m away. Key handover & quick photo updates please.",
    "Hi! Puppy pop-ins around lunchtime, 2–3 days a week.",
    "Small pet check-ins (bearded dragon / rabbit) while I’m away.",
  ];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      contact: (form.elements.namedItem("contact") as HTMLInputElement).value.trim(), // email or phone
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
      company: (form.elements.namedItem("company") as HTMLInputElement)?.value, // honeypot
      consent: (form.elements.namedItem("consent") as HTMLInputElement)?.checked ?? true,
    };

    try {
      setStatus({ state: "submitting" });
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        setStatus({
          state: "error",
          message: payload?.message || "Hmm, that didn't send. Please try again or email us.",
        });
        return;
      }

      const payload = (await res.json()) as { ok: boolean; delivered?: boolean };
      setStatus({ state: "success", delivered: payload.delivered });
      form.reset();
      setMessage("");
    } catch {
      setStatus({ state: "error", message: "Network error—please try again or email us." });
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Friendly intro */}
      <p className="text-sm text-[#7B828A]">
        You can keep it simple—just say where you live and what you need. We’ll reply quickly.
      </p>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#131415]">Your name</label>
        <Input id="name" name="name" placeholder="Jane Smith" className="mt-1" />
      </div>

      {/* Contact (email or phone, single field) */}
      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-[#131415]">
          Email or phone (whichever you prefer)
        </label>
        <Input
          id="contact"
          name="contact"
          placeholder="you@example.com or 07…"
          className="mt-1"
          autoComplete="email tel"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#131415]">Message</label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Hi, I’m on [street]. Looking for [walks/visits] for my [dog/cat/small pet]. Usual times are […]."
          className="mt-1"
        />
        {/* Quick templates */}
        <div className="mt-2 flex flex-wrap gap-2">
          {templates.map((t, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setMessage((m) => (m ? `${m}\n${t}` : t))}
              className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs text-[#131415] hover:bg-[#EFEEE9]"
            >
              <Sparkles className="h-3.5 w-3.5" /> Use template
            </button>
          ))}
        </div>
      </div>

      {/* Honeypot (hidden) */}
      <div className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" autoComplete="organization" />
      </div>

      {/* Consent (pre-checked, not required) */}
      <label className="flex items-start gap-3 rounded-xl border p-3 text-sm">
        <input type="checkbox" name="consent" defaultChecked className="mt-1" />
        <span className="text-[#7B828A]">
          It’s okay to contact me about this enquiry. We only use your details to reply and plan visits.
        </span>
      </label>

      {/* Submit + alt channels */}
      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" size="lg" disabled={status.state === "submitting"} className="text-[#131415]" style={{ backgroundColor: "#C89B3C" }}>
          {status.state === "submitting" ? "Sending…" : "Send message"}
        </Button>

        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-[#EFEEE9]"
        >
          <Mail className="h-4 w-4" /> Email us
        </a>
{/* Additional contact options removed */}
      </div>

      {/* Status messages */}
      {status.state === "error" && (
        <div role="alert" className="mt-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          {status.message}
        </div>
      )}

      {status.state === "success" && (
        <div role="status" className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Thanks—message received. We’ll reply shortly during our hours (Mon–Sat 08:00–18:00).
        </div>
      )}

      {/* Tiny reassurance */}
      <p className="mt-4 text-xs text-[#7B828A]">
        Rather talk first? Email us any time during hours.
      </p>
    </form>
  );
}

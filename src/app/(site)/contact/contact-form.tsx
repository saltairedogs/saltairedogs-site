"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import {
  Camera,
  CheckCircle2,
  Phone,
  Umbrella,
  Users,
} from "lucide-react";

const PHONE_DISPLAY = "07305 367941";
const PHONE_TEL = "07305367941"; // tel: format (no spaces)
const EMAIL = "saltairedogs@proton.me";

const AREAS = ["Saltaire", "Shipley", "Baildon"];
const SERVICES = [
  "60-minute dog walk",
  "30-minute dog walk",
  "Puppy drop-in",
  "Overnight sitting",
  "Pet taxi",
  "Something else",
];

// Calendly removed; point users to email

// A tiny helper to manage async form submit state
type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; delivered?: boolean }
  | { state: "error"; message: string; fieldErrors?: Record<string, string[]> };

type FormDataShape = {
  name: string;
  email: string;
  phone?: string;
  area?: string;
  service?: string;
  message: string;
  company?: string; // honeypot
  consent?: boolean;
};

export default function ContactForm() {
  const [status, setStatus] = React.useState<Status>({ state: "idle" });
  const formRef = React.useRef<HTMLFormElement | null>(null);

  // Pre-fill plan from query string if present (?plan=60-minute-walk)
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    if (plan && formRef.current) {
      const el = formRef.current.querySelector<HTMLSelectElement>('select[name="service"]');
      if (el) el.value = planToLabel(plan);
    }
  }, []);

  function planToLabel(plan: string) {
    const mapping: Record<string, string> = {
      "60-minute-walk": "60-minute dog walk",
      "30-minute-walk": "30-minute dog walk",
      "puppy-drop-in": "Puppy drop-in",
      "overnight-sitting": "Overnight sitting",
      "pet-taxi": "Pet taxi",
    };
    return mapping[plan] ?? "Something else";
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const data: FormDataShape = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      area: (form.elements.namedItem("area") as HTMLInputElement).value.trim(),
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
      company: (form.elements.namedItem("company") as HTMLInputElement)?.value, // honeypot
      consent: (form.elements.namedItem("consent") as HTMLInputElement)?.checked,
    };

    // Basic client validation (server will validate again)
    const errors: Record<string, string[]> = {};
    if (!data.name || data.name.length < 2) errors.name = ["Please enter your name."];
    if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) errors.email = ["Enter a valid email address."];
    if (!data.message || data.message.length < 5) errors.message = ["Tell us a little about your dog and routine."];

    if (Object.keys(errors).length > 0) {
      setStatus({ state: "error", message: "Please fix the highlighted fields.", fieldErrors: errors });
      return;
    }

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
          message: payload?.message || "Something went wrong. Please try again.",
          fieldErrors: payload?.errors,
        });
        return;
      }

      const payload = (await res.json()) as { ok: boolean; delivered?: boolean };
      setStatus({ state: "success", delivered: payload.delivered });
      form.reset();
    } catch (err) {
      setStatus({ state: "error", message: "Network error—please try again." });
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="contact-helper" className="space-y-6">
      {/* Row 1: name + email */}
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Your name" required name="name" error={getFieldError(status, "name")}>
          <Input name="name" id="name" autoComplete="name" placeholder="Jane Smith" aria-invalid={!!getFieldError(status, "name")} />
        </FormField>

        <FormField label="Email" required name="email" error={getFieldError(status, "email")}>
          <Input name="email" id="email" type="email" autoComplete="email" placeholder="you@example.com" aria-invalid={!!getFieldError(status, "email")} />
        </FormField>
      </div>

      {/* Row 2: phone + area */}
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Phone (optional)" name="phone" hint="We only use this to coordinate walks.">
          <Input name="phone" id="phone" type="tel" autoComplete="tel" placeholder={PHONE_DISPLAY} />
        </FormField>

        <FormField label="Area or postcode (optional)" name="area" hint="We cover Saltaire, Shipley & Baildon.">
          <Input name="area" id="area" autoComplete="postal-code" placeholder="BD18…" />
        </FormField>
      </div>

      {/* Row 3: service */}
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Service" name="service" required>
          <select
            name="service"
            id="service"
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue={SERVICES[0]}
            aria-describedby="service-help"
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <p id="service-help" className="mt-1 text-xs text-slate-500">
            Pick the closest option—details welcome below.
          </p>
        </FormField>

        <FormField label="Preferred days/times (optional)" name="times">
          <Input name="times" id="times" placeholder="e.g., Mon/Wed at lunchtime" />
        </FormField>
      </div>

      {/* Row 4: message */}
      <FormField label="Tell us about your dog & routine" name="message" required error={getFieldError(status, "message")}>
        <Textarea
          name="message"
          id="message"
          rows={6}
          placeholder="Age, energy level, on-lead/off-lead preferences, any behaviours or medical notes, and what help you need."
          aria-invalid={!!getFieldError(status, "message")}
        />
      </FormField>

      {/* Honeypot (hidden) */}
      <div className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" autoComplete="organization" />
      </div>

      {/* Consent */}
      <div className="rounded-xl border p-4">
        <label className="flex items-start gap-3 text-sm text-slate-700">
          <input type="checkbox" name="consent" className="mt-1" defaultChecked />
          <span>
            I'm happy for you to contact me about my enquiry. We'll only use your details to reply to your message and plan your walks.
          </span>
        </label>
      </div>

      <p id="contact-helper" className="text-xs text-slate-500">
  We reply quickly during hours. Prefer email? Write to saltairedogs@proton.me.
      </p>

      {/* Submit */}
      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" size="lg" disabled={status.state === "submitting"} className="text-black">
          {status.state === "submitting" ? "Sending…" : "Send enquiry"}
        </Button>
        <Button asChild variant="outline" size="lg" className="text-black">
            <a href={`mailto:saltairedogs@proton.me`}>
              Email us
            </a>
        </Button>
        <Button asChild variant="ghost" size="lg">
          <a href={`tel:${PHONE_TEL}`}>
            <Phone className="mr-2 h-4 w-4" />
            Call {PHONE_DISPLAY}
          </a>
        </Button>
      </div>

      {/* Status messages */}
      {status.state === "error" ? (
        <div role="alert" className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          <p className="font-medium">Please check the form</p>
          <p className="mt-1">{status.message}</p>
        </div>
      ) : null}

      {status.state === "success" ? (
        <div role="status" className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          <p className="font-medium">Thanks—message received!</p>
          <p className="mt-1">
            {status.delivered
              ? "We've also sent a copy to your email."
              : "We'll reply shortly during our hours (Mon–Sat 08:00–18:00)."}
          </p>
        </div>
      ) : null}

      {/* Micro FAQs next to submit for reassurance */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <MiniFaq
          icon={<CheckCircle2 className="h-4 w-4 text-emerald-600" />}
          q="Do you do solo walks?"
          a="Yes—add £3. Ideal for shy, senior, or reactive dogs."
        />
        <MiniFaq
          icon={<Camera className="h-4 w-4 text-sky-600" />}
          q="Do you send updates?"
          a="Yes—GPS & photo updates after every walk."
        />
        <MiniFaq
          icon={<Users className="h-4 w-4 text-rose-600" />}
          q="How many dogs per group?"
          a="Maximum three, carefully matched by temperament & pace."
        />
        <MiniFaq
          icon={<Umbrella className="h-4 w-4 text-violet-600" />}
          q="What if it rains or snows?"
          a="We walk in most weather and wipe paws on return. Severe weather → enrichment or reschedule."
        />
      </div>
    </form>
  );
}

function getFieldError(status: Status, field: string): string | undefined {
  if (status.state !== "error" || !status.fieldErrors) return undefined;
  const errs = status.fieldErrors[field];
  return errs?.[0];
}

function FormField({
  label,
  name,
  children,
  required,
  error,
  hint,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
  required?: boolean;
  error?: string;
  hint?: string;
}) {
  const id = (children as any)?.props?.id ?? name;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label} {required ? <span className="text-rose-600" aria-hidden="true">*</span> : null}
      </label>
      <div className="mt-1">{children}</div>
      {hint ? <p className="mt-1 text-xs text-slate-500">{hint}</p> : null}
      {error ? (
        <p role="alert" className="mt-1 text-xs text-rose-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function MiniFaq({ icon, q, a }: { icon: React.ReactNode; q: string; a: string }) {
  return (
    <div className="rounded-xl border p-4">
      <p className="flex items-center gap-2 text-sm font-medium">
        <span>{icon}</span>
        {q}
      </p>
      <p className="mt-1 text-sm text-slate-600">{a}</p>
    </div>
  );
}
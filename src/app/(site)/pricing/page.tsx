// src/app/(site)/pricing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Separator } from "../../../components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion";
import { PRICING } from "../../../lib/pricing";
import { formatPrice } from "../../../lib/utils";

import { 
  Dog, 
  Clock, 
  Baby, 
  Home, 
  Car, 
  PawPrint, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  Mail,
  MapPin,
  Camera,
  ShieldCheck,
  Plus,
  Minus,
  Star,
  Calculator
} from "lucide-react";

// ----------------------------------------------------------------------------
// Metadata
// ----------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Pricing — Saltaire Dog Walks",
  description:
    "Transparent pricing for solo dog walks, puppy visits and overnight care in Saltaire. From £9 puppy visits, £14.95 for 30 mins, £24.95 for 60 mins.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — Saltaire Dog Walks",
    description:
      "Clear, honest pricing for solo dog walks and puppy care. From £9 puppy visits, £14.95 for 30 mins, £24.95 for 60 mins.",
    type: "website",
    images: [{ url: "/og-default.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Saltaire Dog Walks",
    description:
      "Clear, honest pricing for solo dog walks and puppy care. From £9 puppy visits, £14.95 for 30 mins, £24.95 for 60 mins.",
    images: ["/og-default.jpg"],
  },
};

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------

const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";
const PHONE_DISPLAY = "07305 367941";
const PHONE_TEL = "07305367941";
const EMAIL = "saltairedogs@proton.me";

const AREAS = ["Saltaire", "Shipley", "Baildon"];

// Pricing data
const CORE_SERVICES = [
  {
    icon: <Dog className="h-6 w-6" />,
  title: "60-minute solo walk",
  price: formatPrice(PRICING.WALK_60),
    originalPrice: null,
    description: "Our most popular service for proper exercise and enrichment.",
    features: [
      "Small, calm groups (max 3 dogs)",
      "GPS tracking & photo updates",
      "Paws wiped & water topped up",
      "Route tailored to your dog's needs",
      "Weather-appropriate gear included",
    ],
    popular: true,
  },
  {
    icon: <Clock className="h-6 w-6" />,
  title: "30-minute solo walk",
  price: formatPrice(PRICING.WALK_30),
    originalPrice: null,
    description: "Perfect for quick exercise and toilet breaks.",
    features: [
      "Gentle local loop",
      "GPS tracking & photos",
      "Paws wiped on return",
      "Ideal for older or less active dogs",
      "Quick check-in text updates",
    ],
    popular: false,
  },
  {
    icon: <Baby className="h-6 w-6" />,
    title: "Puppy drop-ins",
  price: formatPrice(PRICING.PUPPY_VISIT),
    originalPrice: null,
    description: "House training support and companionship for young dogs.",
    features: [
      "15-20 minute home visits",
      "Toilet breaks & basic commands",
      "Fresh water & quick play",
      "Perfect for under 6 months",
      "Helps with separation anxiety",
    ],
    popular: false,
  },
  {
    icon: <Home className="h-6 w-6" />,
    title: "Overnight sitting",
  price: "£45",
    originalPrice: null,
    description: "Your dog stays comfortable at home while you're away.",
    features: [
      "Stay overnight at your home",
      "Maintain normal routine",
      "Walks, feeds & companionship",
      "Home security & plant watering",
      "Photo updates & daily notes",
    ],
    popular: false,
  },
  {
    icon: <Car className="h-6 w-6" />,
  title: "Pet taxi",
  price: "£15",
    originalPrice: null,
    description: "Safe transport to vet appointments and grooming.",
    features: [
      "Within 5-mile radius",
      "Secure harnesses & carriers",
      "Wait time included (up to 1 hour)",
      "Gentle handling for anxious pets",
      "Text updates on arrival",
    ],
    popular: false,
  },
];

const ADD_ONS = [
  {
    name: "Solo walk",
    price: "+£3",
    description: "Perfect for shy, reactive, or senior dogs needing individual attention.",
  },
  {
    name: "Multi-dog discount",
    price: "−£2",
    description: "Per additional dog from the same household (2+ dogs).",
  },
  {
    name: "Bank holiday service",
    price: "+£5",
    description: "Available on most bank holidays with advance booking.",
  },
  {
    name: "Emergency visit",
    price: "+£10",
    description: "Same-day bookings when schedule allows (subject to availability).",
  },
];

const PACKAGES = [
  {
    title: "5× 60-min bundle",
    subtitle: "5 × 60-minute walks",
    price: formatPrice(PRICING.BUNDLE5_60),
    originalPrice: formatPrice(PRICING.WALK_60 * 5),
    savings: "≈10% off",
    description: "Perfect for regular weekly exercise routine.",
    validity: "Use within 4 weeks",
    popular: true,
  },
  {
    title: "10× 60-min bundle",
    subtitle: "10 × 60-minute walks",
    price: formatPrice(PRICING.BUNDLE10_60),
    originalPrice: formatPrice(PRICING.WALK_60 * 10),
    savings: "≈15% off",
    description: "Great value for house training support.",
    validity: "Use within 6 weeks",
    popular: false,
  },
  {
    title: "Holiday Care",
    subtitle: "7 nights overnight sitting",
    price: "£300",
    originalPrice: "£315",
    savings: "Save £15",
    description: "Week-long care while you're away.",
    validity: "Consecutive nights only",
    popular: false,
  },
];

// ----------------------------------------------------------------------------
// Page Component
// ----------------------------------------------------------------------------

export default function PricingPage() {
  return (
    <main>
      {/* JSON-LD structured data */}
      <StructuredData />

      {/* Hero section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Simple, honest pricing
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              No hidden fees, no contracts, no surprises. Just transparent rates for quality pet care across Saltaire, Shipley & Baildon.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="text-black">
                <a href={`mailto:${EMAIL}`}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Free Meet & Greet
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${PHONE_TEL}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call {PHONE_DISPLAY}
                </a>
              </Button>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Free meet & greet for all new customers
            </p>
          </div>
        </div>
      </section>

      {/* Core services pricing */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Our services
            </h2>
            <p className="mt-3 max-w-prose mx-auto text-slate-600">
              Professional pet care services with GPS tracking, photo updates, and a friendly, positive service.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.map((service, index) => (
              <Card 
                key={service.title} 
                className={`relative ${service.popular ? 'ring-2 ring-sky-500' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-sky-500 text-white">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-sky-100 p-2 text-sky-600">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-slate-900">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-sm text-slate-500 line-through">{service.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="mt-6 w-full" variant={service.popular ? "default" : "outline"}>
                    <a href={`mailto:${EMAIL}`}>Book This Service</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons section */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Add-ons & adjustments
            </h2>
            <p className="mt-3 text-slate-600">
              Customize our services to perfectly match your dog's needs.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {ADD_ONS.map((addon, index) => (
              <Card key={addon.name}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{addon.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{addon.description}</p>
                  </div>
                  <div className="ml-4">
                    <span className={`text-lg font-bold ${addon.price.startsWith('+') ? 'text-slate-900' : 'text-emerald-600'}`}>
                      {addon.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages section */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Value packages
            </h2>
            <p className="mt-3 text-slate-600">
              Save money with our pre-paid packages for regular customers.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PACKAGES.map((pkg, index) => (
              <Card 
                key={pkg.title}
                className={`relative ${pkg.popular ? 'ring-2 ring-emerald-500' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-emerald-500 text-white">Best Value</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle>{pkg.title}</CardTitle>
                  <CardDescription>{pkg.subtitle}</CardDescription>
                  
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-3xl font-bold text-slate-900">{pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-slate-500 line-through">{pkg.originalPrice}</span>
                      )}
                    </div>
                    {pkg.savings && (
                      <p className="mt-1 text-sm text-emerald-600 font-medium">{pkg.savings}</p>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-slate-600">{pkg.description}</p>
                  <p className="mt-2 text-xs text-slate-500">{pkg.validity}</p>
                  
                  <Button asChild className="mt-6 w-full" variant={pkg.popular ? "default" : "outline"}>
                    <a href={`mailto:${EMAIL}`}>Purchase Package</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas and coverage */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-sky-600" />
                Service Areas
              </CardTitle>
              <CardDescription>We cover these areas with no additional travel charges</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                {AREAS.map((area) => (
                  <div key={area} className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
                      <PawPrint className="h-8 w-8 text-sky-600" />
                    </div>
                    <h3 className="mt-3 font-semibold text-slate-900">{area}</h3>
                    <p className="mt-1 text-sm text-slate-600">0.5–2 mile radius</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 rounded-lg bg-slate-50 p-4 text-center">
                <p className="text-sm text-slate-600">
                  <strong>Outside these areas?</strong> We may still be able to help. 
                  <Link href="/contact" className="ml-1 text-sky-600 hover:text-sky-700">
                    Get in touch
                  </Link> to discuss.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ section */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Pricing questions
            </h2>
            <p className="mt-3 text-slate-600">
              Everything you need to know about our rates and payment options.
            </p>
          </div>

          <div className="mt-10">
            <Accordion type="single" collapsible>
              <AccordionItem value="payment">
                <AccordionTrigger>How and when do I pay?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    We send invoices weekly via email for all services completed. You can pay by bank transfer, 
                    card payment, or cash. Payment is due within 7 days of invoice date. We also accept 
                    pre-payment for packages with a small discount.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="cancellation">
                <AccordionTrigger>What's your cancellation policy?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    Cancel up to 2 hours before the scheduled visit with no charge. Less than 2 hours notice 
                    incurs a 50% cancellation fee. Emergency cancellations (illness, family emergency) are 
                    always waived. We understand life happens!
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="packages">
                <AccordionTrigger>Do packages expire?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    Yes, packages have validity periods to ensure regular use: 4 weeks for weekly packages, 
                    6 weeks for puppy bundles. Overnight sitting packages must be used for consecutive nights. 
                    Extensions available in exceptional circumstances.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="emergency">
                <AccordionTrigger>Do you charge extra for weekends?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    No weekend surcharges! Our standard rates apply Monday through Sunday. Bank holidays 
                    have a small £5 surcharge, but we try to accommodate most requests. 
                    Same-day emergency bookings carry a £10 fee when available.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="discounts">
                <AccordionTrigger>Any discounts for multiple dogs?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    Yes! We offer £2 off per additional dog from the same household. So if you have 2 dogs, 
                    the second dog's walk is £2 less. This applies to all our walking services but not 
                    overnight sitting (which covers unlimited pets at the same rate).
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="included">
                <AccordionTrigger>What's included in the price?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    All our prices include GPS tracking, photo updates, paw cleaning, water top-ups, 
                    and a friendly, positive service. Weather gear, leads, and waste bags are provided. 
                    The only extras are the add-ons listed above (solo walks, multi-dog discounts, etc.).
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4">
          <Card className="bg-gradient-to-r from-sky-600 to-sky-700 text-white">
            <CardContent className="p-8 text-center md:p-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-3 text-sky-100">
                Book a free meet & greet to discuss your dog's needs and confirm our service fits your routine.
              </p>
              
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg" className="bg-white text-sky-700 hover:bg-white/90">
                  <a href={`mailto:${EMAIL}`}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Free Consultation
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                  <a href={`tel:${PHONE_TEL}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {PHONE_DISPLAY}
                  </a>
                </Button>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-sky-100">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  <span>DBS checked</span>
                </div>
                <div className="flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  <span>GPS & photos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  <span>5-star rated</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

// ----------------------------------------------------------------------------
// Structured Data (JSON-LD)
// ----------------------------------------------------------------------------

function StructuredData() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Pricing", item: `${siteUrl}/pricing` },
    ],
  };

  const priceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Saltaire Dog Walking Services",
    provider: {
      "@type": "LocalBusiness",
      name: "Saltaire Dog Walks",
      url: siteUrl,
    },
    areaServed: AREAS.map(area => ({
      "@type": "Place",
      name: area
    })),
    offers: CORE_SERVICES.map(service => ({
      "@type": "Offer",
      name: service.title,
      price: service.price.replace('£', ''),
      priceCurrency: "GBP",
      description: service.description,
    })),
  };

  return (
    <Fragment>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(priceData) }} />
    </Fragment>
  );
}
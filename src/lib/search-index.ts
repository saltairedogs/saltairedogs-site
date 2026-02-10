// src/lib/search-index.ts
export type SearchDoc = {
  url: string
  title: string
  blurb: string
  tags: string[] // include synonyms for recall
}

// Only index URLs that actually exist in your repo.
// Add new entries here whenever you create a new page.
export const SEARCH_INDEX: SearchDoc[] = [
  /* ----------------------------- Contact & About ---------------------------- */
  {
    url: '/contact',
    title: 'Contact',
    blurb: 'Get in touch about dog walks, cat sitting, animal feeding or home visits.',
    tags: ['contact', 'email', 'message', 'chat', 'book', 'quote'],
  },
  {
    url: '/contact',
    title: 'Contact',
    blurb: 'Contact form, phone and email for Saltaire Dogs + Pets.',
    tags: ['contact', 'email', 'phone', 'form'],
  },
  {
    url: '/about',
    title: 'About',
    blurb: 'Who we are and how we work in Saltaire & Shipley.',
    tags: ['about', 'info', 'who we are'],
  },

  /* -------------------------------- Services -------------------------------- */
  {
    url: '/dog-walking',
    title: 'Dog Walking',
    blurb: 'Quiet local routes and simple photo notes after each walk. Owner-led preferences.',
    tags: ['dog', 'walking', 'walks', 'lead', 'exercise', 'towpath', 'park'],
  },
  {
    url: '/dog-walking/saltaire',
    title: 'Dog Walking — Saltaire',
    blurb: 'Roberts Park, towpath to Hirst Wood (on-lead), quieter connectors. Local routes and clear updates.',
    tags: ['dog', 'walking', 'saltaire', 'roberts park', 'hirst wood', 'towpath'],
  },
  {
    url: '/dog-walking/shipley',
    title: 'Dog Walking — Shipley',
    blurb: 'Northcliffe woods, Shipley Glen, towpath entries near the station. Owner preferences followed.',
    tags: ['dog', 'walking', 'shipley', 'northcliffe', 'shipley glen', 'towpath'],
  },
  {
    url: '/cat-sitting',
    title: 'Cat Sitting & Home Drop-ins',
    blurb: 'Feeding, fresh water, litter, and a quick photo note each visit. AM/PM options.',
    tags: ['cat', 'sitting', 'drop-ins', 'litter', 'feeding', 'home visits'],
  },
  {
    url: '/animal-feeding',
    title: 'Animal Feeding Visits',
    blurb: 'Any-animal feeding at home — birds, rabbits, chickens, fish, reptiles, small mammals.',
    tags: ['feeding', 'birds', 'rabbits', 'chickens', 'fish', 'reptiles', 'small pets', 'drop-ins'],
  },
  {
    url: '/small-pets-exotics',
    title: 'Small Pets & Exotics',
    blurb: 'Visits for birds, small mammals and reptiles — feeding, water, tidy, photo note.',
    tags: ['exotics', 'parrots', 'cockatiel', 'hamsters', 'gecko', 'bearded dragon', 'snake', 'visits'],
  },
  {
    url: '/parrots-visits',
    title: 'Parrot & Cockatiel Visits',
    blurb: 'Water/food refresh, bottom-of-cage clean, calm, unhurried check-ins.',
    tags: ['parrot', 'cockatiel', 'bird', 'avian', 'cage clean', 'seed', 'water'],
  },
  {
    url: '/rabbits-sitting',
    title: 'Rabbits Sitting',
    blurb: 'Hay/water refresh, pellets/greens as instructed, quick tidy and a brief welfare check.',
    tags: ['rabbit', 'rabbits', 'hay', 'litter', 'feeding', 'welfare check'],
  },
  {
    url: '/medication-visits',
    title: 'Medication Visits',
    blurb: 'Pills/drops and simple insulin as per your vet plan. Timed windows and a short photo note.',
    tags: ['medication', 'pills', 'drops', 'insulin', 'timed', 'vet plan', 'health'],
  },
  {
    url: '/long-shift-support',
    title: 'Long-Shift Support',
    blurb: 'Home visits during long work days — any animal. Feeding, water, checks.',
    tags: ['work', 'shift', 'long shift', 'day visit', 'check-in', 'support'],
  },
  {
    url: '/new-baby-help',
    title: 'New Baby Help',
    blurb: 'Kind, flexible pet visits while you settle in. Walks or drop-ins to your routine.',
    tags: ['newborn', 'baby', 'support', 'calm', 'family'],
  },

  /* --------------------------- Trust & How it works -------------------------- */
  {
    url: '/how-it-works',
    title: 'How It Works',
    blurb: 'Message → meet & greet → trial visit → your routine set. Easy to contact, easy to pay.',
    tags: ['process', 'steps', 'what to expect', 'onboarding', 'meet and greet'],
  },
  {
    url: '/areas',
    title: 'Areas We Cover',
    blurb: 'Saltaire & Shipley. Nearby? Message and we’ll see if we can help.',
    tags: ['areas', 'coverage', 'saltaire', 'shipley', 'service area'],
  },

  /* ---------------------------------- Blog ---------------------------------- */
  {
    url: '/blog',
    title: 'Blog',
    blurb: 'Local pet care guides, routes, and practical tips around Saltaire & Shipley.',
    tags: ['blog', 'guides', 'tips', 'routes'],
  },

  /* --------------------------------- Utility -------------------------------- */
  {
    url: '/search',
    title: 'Search',
    blurb: 'Search the site for services and info.',
    tags: ['search', 'find', 'lookup'],
  },
]

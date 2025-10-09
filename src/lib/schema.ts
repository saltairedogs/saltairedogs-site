type LocalBusinessOptions = {
  name: string
  url: string
  telephone?: string
  areaServed: string[]
  image?: string[]
  openingHours?: string[]
  address: {
    streetAddress?: string
    addressLocality: string
    addressRegion: string
    postalCode?: string
    addressCountry: string
  }
  sameAs?: string[]
  priceRange?: string
  description?: string
}

type FaqItem = {
  question: string
  answer: string
}

type BreadcrumbItem = {
  name: string
  url: string
}

const CONTEXT = 'https://schema.org'

export function localBusinessSchema(options: LocalBusinessOptions) {
  const {
    name,
    url,
    telephone,
    areaServed,
    image,
    openingHours,
    address,
    sameAs,
    priceRange,
    description,
  } = options

  return {
    '@context': CONTEXT,
    '@type': 'LocalBusiness',
    name,
    url,
    telephone,
    areaServed,
    image,
    openingHours,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    sameAs,
    priceRange,
    description,
  }
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': CONTEXT,
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

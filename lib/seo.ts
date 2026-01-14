type Address = {
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: string
}

export function localBusinessJsonLd(params: {
  name: string
  url: string
  telephone: string
  address: Address
  areaServed?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: params.name,
    url: params.url,
    telephone: params.telephone,
    address: {
      '@type': 'PostalAddress',
      ...params.address,
    },
    areaServed: params.areaServed || 'Local',
  }
}

export function astrologerPersonJsonLd(params: {
  name: string
  url: string
  telephone?: string
  sameAs?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: params.name,
    jobTitle: 'Astrologer',
    url: params.url,
    telephone: params.telephone,
    sameAs: params.sameAs || [],
  }
}

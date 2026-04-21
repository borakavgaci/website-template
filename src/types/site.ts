export interface SiteConfig {
  business: {
    name: string;
    sector: string;
    logoText: string;
    tagline: string;
    description: string;
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    mapsUrl: string;
    instagram: string;
    hours: string;
  };
  seo: {
    title: string;
    description: string;
  };
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    muted: string;
  };
  navigation: Array<{
    label: string;
    href: string;
    enabled: boolean;
  }>;
  sections: {
    hero: {
      enabled: boolean;
      eyebrow: string;
      image: string;
      primaryCta: string;
      secondaryCta: string;
    };
    trust: {
      enabled: boolean;
      items: Array<{
        value: string;
        label: string;
      }>;
    };
    about: {
      enabled: boolean;
      eyebrow: string;
      title: string;
      body: string;
      highlights: string[];
      image: string;
    };
    services: {
      enabled: boolean;
      eyebrow: string;
      title: string;
      intro: string;
      items: Array<{
        title: string;
        description: string;
        price?: string;
      }>;
    };
    gallery: {
      enabled: boolean;
      eyebrow: string;
      title: string;
      images: Array<{
        src: string;
        alt: string;
      }>;
    };
    testimonials: {
      enabled: boolean;
      eyebrow: string;
      title: string;
      items: Array<{
        quote: string;
        name: string;
      }>;
    };
    faq: {
      enabled: boolean;
      eyebrow: string;
      title: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    };
    contact: {
      enabled: boolean;
      eyebrow: string;
      title: string;
      note: string;
    };
  };
}

import type { Metadata } from "next";
import { site, packages } from "@/content";
import { faqs } from "@/faq";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://business-portraits.vercel.app").replace(/\/$/, "");
export const OG_IMAGE = { url: "/img/hero.jpg", width: 1280, height: 720, alt: "Black and white business portrait of a woman in a dark blazer" };

export function pageMeta(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", url: path, title, description, siteName: `${site.name} ${site.title}`, locale: "en_US", images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

const ORG_ID = `${SITE_URL}/#business`;
const PERSON_ID = `${SITE_URL}/#mantas`;

export const services = [
  { name: "Business headshots", description: "Individual headshot sessions for LinkedIn, company bios and professional profiles in Washington, DC." },
  { name: "Executive portraits", description: "Longer portrait sessions with several looks for leaders who need images for press, boards and speaking." },
  { name: "Corporate team headshots", description: "Consistent headshots for a whole team, photographed in one session." },
];

export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${site.name} ${site.title}`,
        inLanguage: "en-US",
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": ORG_ID,
        name: `${site.name} ${site.title}`,
        url: SITE_URL,
        image: `${SITE_URL}${OG_IMAGE.url}`,
        description: "Business headshots, corporate headshots, LinkedIn headshots and executive portraits in Washington, DC.",
        areaServed: { "@type": "City", name: "Washington, DC" },
        address: { "@type": "PostalAddress", addressLocality: "Washington", addressRegion: "DC", addressCountry: "US" },
        founder: { "@id": PERSON_ID },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Business portrait services",
          itemListElement: packages.map((p) => ({
            "@type": "Offer",
            name: p.name,
            url: `${SITE_URL}/book?package=${p.slug}`,
            priceSpecification: { "@type": "PriceSpecification", price: p.price, priceCurrency: "USD", ...(p.from ? { minPrice: p.price } : {}) },
            itemOffered: { "@id": `${SITE_URL}/#package-${p.slug}` },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: site.name,
        jobTitle: "Photographer",
        description: "Photographer in Washington, DC with 15 years of experience.",
        worksFor: { "@id": ORG_ID },
        homeLocation: { "@type": "Place", name: "Washington, DC" },
      },
      ...services.map((s) => ({
        "@type": "Service",
        "@id": `${SITE_URL}/#service-${s.name.toLowerCase().replace(/\s+/g, "-")}`,
        name: s.name,
        serviceType: s.name,
        description: s.description,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "City", name: "Washington, DC" },
      })),
      ...packages.map((p) => ({
        "@type": "Service",
        "@id": `${SITE_URL}/#package-${p.slug}`,
        name: p.name,
        serviceType: p.slug === "team-day" ? "Corporate team headshots" : "Business headshots",
        description: p.details.join(". "),
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "City", name: "Washington, DC" },
        offers: { "@type": "Offer", price: p.price, priceCurrency: "USD", url: `${SITE_URL}/book?package=${p.slug}` },
      })),
    ],
  };
}

export const faqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const breadcrumb = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE_URL}${it.path === "/" ? "" : it.path}` || SITE_URL })),
});

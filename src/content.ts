export type Photo = { src: string; alt: string; width: number; height: number };
export type Package = { slug: string; name: string; price: number; from?: boolean; popular?: boolean; note?: string; details: string[] };

export const site = {
  name: "Mantas Kubilinskas",
  title: "Business Portraits",
  city: "Washington, DC",
  years: "15 years",
};

const p = (n: string, alt: string): Photo => ({ src: `/img/${n}.jpg`, alt, width: 864, height: 1152 });

export const photos: Photo[] = [
  p("g2", "Studio portrait of a creative director in a black turtleneck on white"),
  p("g1", "Corporate headshot of a man in a suit on a gray backdrop"),
  p("g6", "Executive headshot of a woman with silver hair on white"),
  p("g3", "Environmental portrait of a senior leader in a modern office"),
  p("g4", "Professional headshot of a woman in a gray jacket"),
  p("g5", "Seated portrait of a young entrepreneur on black"),
];

export const packages: Package[] = [
  { slug: "essential", name: "Essential Headshot", price: 350, details: ["30 minutes", "1 to 2 looks", "2 retouched images", "Extra images $75 each"] },
  { slug: "signature", name: "Signature", price: 650, popular: true, details: ["About 60 minutes", "Up to 3 looks", "5 retouched images", "Studio or on location in DC", "Extra images $75 each"] },
  { slug: "executive", name: "Executive", price: 1200, details: ["90 to 120 minutes", "Studio plus on location in DC", "Up to 3 looks", "8 retouched images", "Commercial use", "Priority delivery"] },
  { slug: "team-day", name: "Team Day", price: 1900, from: true, note: "About $95 per person for a team of 20", details: ["Half day on site in DC, up to 4 hours", "About 15 to 25 people", "1 retouched image per person", "Consistent lighting and backdrop", "Labeled gallery", "Full day $3400", "Extra retouched images $50"] },
];
export const formatPrice = (n: number) => `$${n}`;

import type { QA } from "@/components/Faq";

export type ServiceInfo = {
  slug: string;
  path: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  short: string;
  packageSlugs: string[];
  cta: string;
  ctaPackage: string;
  image: { bw: string; color: string; alt: string };
  forTitle: string;
  forList: { t: string; d: string }[];
  steps: { t: string; d: string }[];
  faqs: QA[];
};

export const serviceList: ServiceInfo[] = [
  {
    slug: "linkedin-headshots",
    path: "/services/linkedin-headshots",
    title: "LinkedIn headshots",
    h1: "LinkedIn headshots in Washington, DC.",
    metaTitle: "LinkedIn Headshots in Washington, DC",
    metaDescription: "LinkedIn and business headshots in Washington, DC from $350. A 30 minute session with 2 retouched images, or about 60 minutes with 5. Book with Mantas Kubilinskas.",
    lead: "A clear, current photo for your profile, bio or company page. Sessions start at $350 and take 30 minutes.",
    short: "A sharp profile photo in a short session.",
    packageSlugs: ["essential", "signature"],
    cta: "Book your headshot",
    ctaPackage: "essential",
    image: { bw: "/img/g1.jpg", color: "/img/g1-color.jpg", alt: "Corporate headshot of a man in a suit on a gray backdrop" },
    forTitle: "Who it's for.",
    forList: [
      { t: "People changing jobs", d: "A fresh photo before you update your profile and start applying." },
      { t: "Consultants and advisors", d: "A photo that looks like you, for clients who check your profile before they call." },
      { t: "Lawyers, doctors and other professionals", d: "Clear, trustworthy headshots for firm and practice pages." },
    ],
    steps: [
      { t: "Request a time", d: "Send your date and what the photo is for." },
      { t: "Plan the look", d: "We agree on background and wardrobe before the day." },
      { t: "Shoot and choose", d: "I guide you through it, then you pick your favorites." },
    ],
    faqs: [
      { q: "How many photos do I get?", a: "Essential includes 2 retouched images and Signature includes 5. Extra images are $75 each." },
      { q: "How long is the session?", a: "Essential takes 30 minutes with 1 to 2 looks. Signature takes about 60 minutes with up to 3 looks." },
      { q: "Can we shoot at my office?", a: "Signature sessions can be in a studio or on location in Washington, DC. Tell me where you'd like to shoot when you book." },
      { q: "What should I wear?", a: "Solid colors and clothes you feel good in usually work best. Bring a second option if you're not sure." },
    ],
  },
  {
    slug: "executive-portraits",
    path: "/services/executive-portraits",
    title: "Executive portraits",
    h1: "Executive portraits in Washington, DC.",
    metaTitle: "Executive Portraits in Washington, DC",
    metaDescription: "Executive portraits in Washington, DC for bios, boards, press and speaking. 90 to 120 minutes, up to 3 looks, 8 retouched images, $1200. Mantas Kubilinskas.",
    lead: "A longer session with room for several looks, so you leave with images for your bio, board page, press kit and speaking events.",
    short: "Several looks, studio and on location, for leaders.",
    packageSlugs: ["executive"],
    cta: "Book your portraits",
    ctaPackage: "executive",
    image: { bw: "/img/g6.jpg", color: "/img/g6-color.jpg", alt: "Executive headshot of a woman with silver hair on white" },
    forTitle: "Where you'll use them.",
    forList: [
      { t: "Bios and boards", d: "Leadership pages, board listings and annual materials." },
      { t: "Press and speaking", d: "Images for media requests, event pages and conference programs." },
      { t: "Your own site and profiles", d: "One set of portraits you can use everywhere." },
    ],
    steps: [
      { t: "Request a time", d: "Tell me where the portraits will be used." },
      { t: "Plan the look", d: "We choose looks, background and locations together." },
      { t: "Shoot and choose", d: "A relaxed 90 to 120 minutes, then you choose your favorites." },
    ],
    faqs: [
      { q: "What is included?", a: "A 90 to 120 minute session in the studio and on location in Washington, DC, up to 3 looks, 8 retouched images, commercial use and priority delivery." },
      { q: "What does commercial use cover?", a: "The Executive package includes commercial use. Tell me where you plan to use the images when you book and I'll confirm the details with you." },
      { q: "Can we shoot at our office?", a: "Yes, the session includes time on location in Washington, DC. Tell me the address when you book." },
      { q: "What should I wear?", a: "Bring two or three outfits you feel good in. Solid colors work best. We can go through them before the day." },
    ],
  },
  {
    slug: "team-headshots",
    path: "/services/team-headshots",
    title: "Team and company headshots",
    h1: "Team and company headshots in Washington, DC.",
    metaTitle: "Team and Company Headshots in Washington, DC",
    metaDescription: "On-site team headshots in Washington, DC from $1900 for a half day, about $95 per person for a team of 20. Same lighting and backdrop for everyone. Mantas Kubilinskas.",
    lead: "I come to your office with lighting and a backdrop, and photograph everyone on one day. Every photo matches, so your team page looks consistent.",
    short: "One day on site, a matching look for everyone.",
    packageSlugs: ["team-day"],
    cta: "Request a team quote",
    ctaPackage: "team-day",
    image: { bw: "/img/team.jpg", color: "/img/team-color.jpg", alt: "Portrait of a business team in a white studio" },
    forTitle: "Good for.",
    forList: [
      { t: "Team and About pages", d: "Matching photos for everyone on your site." },
      { t: "New hires and growing teams", d: "One scheduled day instead of chasing individual photos." },
      { t: "Firms and practices", d: "Consistent headshots for client-facing profiles." },
    ],
    steps: [
      { t: "Tell me about your team", d: "How many people, and where you'd like to shoot." },
      { t: "I plan the day", d: "We agree on the schedule, setup and backdrop." },
      { t: "Everyone gets photographed", d: "You get a labeled gallery, with 1 retouched image per person." },
    ],
    faqs: [
      { q: "How much does a team day cost?", a: "A half day starts at $1900. For a team of 20 that is about $95 per person. A full day is $3400." },
      { q: "How many people fit in a half day?", a: "A half day is up to 4 hours on site in Washington, DC, for about 15 to 25 people." },
      { q: "What do we receive?", a: "1 retouched image per person, delivered in a labeled gallery so each person finds theirs. Extra retouched images are $50 each." },
      { q: "Will everyone's photo match?", a: "Yes. Everyone is photographed with the same lighting and backdrop." },
    ],
  },
];

export const getService = (slug: string) => serviceList.find((s) => s.slug === slug)!;

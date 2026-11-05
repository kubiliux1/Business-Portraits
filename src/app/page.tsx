import { pageMeta, breadcrumb, faqSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { site, photos } from "@/content";
import { CtaRow, CtaBand, Primary } from "@/components/Cta";
import Faq from "@/components/Faq";
import { faqs } from "@/faq";
import HoverColorImage from "@/components/HoverColorImage";

const steps = [
  { n: "01", t: "Request a time", d: "Send a short request with your date, the number of people and what the photos are for." },
  { n: "02", t: "Plan the look", d: "We agree on background, wardrobe and the feel you want, so nothing is left to guess on the day." },
  { n: "03", t: "Shoot and choose", d: "I guide you through the session. Then you pick your favorites and I finish them." },
];
const audiences = [
  { t: "Executives and leaders", d: "Portraits for bios, boards, press and speaking events." },
  { t: "Teams and companies", d: "A consistent look across your whole team page." },
  { t: "Lawyers, doctors and advisors", d: "Clear, trustworthy headshots for client-facing profiles." },
  { t: "Founders and creatives", d: "Something with more character for your site and socials." },
];

export const metadata = { ...pageMeta("/", "Business Headshots in Washington, DC | Mantas Kubilinskas", "Business, LinkedIn and executive headshots in Washington, DC by Mantas Kubilinskas, a photographer with 15 years behind the camera. Book a session."), title: { absolute: "Business Headshots in Washington, DC | Mantas Kubilinskas" } };

export default function Home() {
  return (
    <>
      <JsonLd data={breadcrumb([])} /><JsonLd data={faqSchema()} />
      <section className="relative overflow-hidden bg-neutral-200">
        <div className="relative aspect-[2442/1326] w-full md:absolute md:inset-0 md:aspect-auto">
          <HoverColorImage
            bwSrc="/img/hero-woman.jpg"
            colorSrc="/img/hero-woman-color.jpg"
            alt="Business portrait of a woman in a dark blazer against a light gray backdrop"
            priority
            sizes="100vw"
            imageClassName="object-cover object-[80%_center]"
          />
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-white/60 via-white/10 to-transparent md:block" />
        </div>
        <div className="pointer-events-none relative mx-auto max-w-6xl bg-white px-6 py-12 md:bg-transparent md:py-32 lg:py-40">
          <div className="pointer-events-auto md:max-w-[55%] lg:max-w-[50%]">
            <h1 className="rise text-sm font-medium text-neutral-600">Business headshots in {site.city}</h1>
            <p className="rise rise-2 mt-4 text-5xl font-semibold leading-[1.05] tracking-tight text-black sm:text-6xl lg:text-7xl">Look like yourself. Only sharper.</p>
            <p className="rise rise-3 mt-6 text-xl text-neutral-700">Corporate headshots, LinkedIn headshots and executive portraits by {site.name}. {site.years} behind the camera, now focused on people who need to look their best at work.</p>
            <p className="rise rise-3 mt-4 text-base font-medium text-black">Headshots from $350. Team days from $1900.</p>
            <div className="rise rise-3 [&_a:not(:first-child)]:border-black/20 [&_a:not(:first-child)]:bg-white"><CtaRow /></div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-16 hidden max-w-[1600px] px-0 sm:px-6">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <HoverColorImage
            bwSrc="/img/hero.jpg"
            colorSrc="/img/hero-color.jpg"
            alt="Studio portrait of a businesswoman in a dark blazer"
            sizes="100vw"
          />
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Simple from start to finish.</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className=" bg-neutral-100 p-8">
              <p className="text-sm font-medium text-neutral-500">{s.n}</p>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{s.t}</h3>
              <p className="mt-3 text-neutral-600">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10"><Primary /></div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">Clean light. Real expressions.</h2>
            <Link href="/work" className="text-lg text-neutral-300 hover:text-white">View work →</Link>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {photos.slice(0, 6).map((p) => (
              <div key={p.src} className="relative aspect-[3/4] overflow-hidden">
                <HoverColorImage
                  bwSrc={p.src}
                  colorSrc={p.colorSrc}
                  alt={p.alt}
                  sizes="(min-width:768px) 33vw, 50vw"
                  imageClassName="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/book" className="inline-flex bg-white px-6 py-3 text-[15px] font-medium text-black hover:bg-neutral-200">Book your headshot</Link>
            <Link href="/work" className="inline-flex border border-neutral-600 px-6 py-3 text-[15px] font-medium hover:border-white">View work</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Who it&apos;s for.</h2>
          <ul className="mt-10 space-y-6">
            {audiences.map((a) => (
              <li key={a.t}><h3 className="text-xl font-semibold">{a.t}</h3><p className="mt-1 text-neutral-600">{a.d}</p></li>
            ))}
          </ul>
          <div className="mt-10"><Primary /></div>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <HoverColorImage
            bwSrc="/img/team.jpg"
            colorSrc="/img/team-color.jpg"
            alt="Portrait of a business team in a white studio"
            sizes="(min-width:768px) 50vw, 100vw"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[21/9]">
          <HoverColorImage
            bwSrc="/img/studio.jpg"
            colorSrc="/img/studio-color.jpg"
            alt="Portrait studio with a camera, softbox light and gray backdrop"
            sizes="100vw"
          />
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          <div><h3 className="text-xl font-semibold">Guidance the whole way</h3><p className="mt-2 text-neutral-600">Help with posture, angles and expression, so you never wonder what to do with your hands.</p></div>
          <div><h3 className="text-xl font-semibold">A look that fits you</h3><p className="mt-2 text-neutral-600">Background and lighting chosen for where the photo will live, from LinkedIn to a press kit.</p></div>
          <div><h3 className="text-xl font-semibold">Finished images</h3><p className="mt-2 text-neutral-600">You choose your favorites and get polished, ready-to-use files.</p></div>
        </div>
        <CtaRow work={false} />
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-28 lg:grid-cols-3 lg:gap-16">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Questions.</h2>
        <div className="lg:col-span-2"><Faq items={faqs} /></div>
      </section>

      <CtaBand />
    </>
  );
}

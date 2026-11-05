import { pageMeta, breadcrumb } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { site } from "@/content";
import { Primary, Secondary, CtaBand } from "@/components/Cta";
import HoverColorImage from "@/components/HoverColorImage";

export const metadata = pageMeta("/about", "About Mantas Kubilinskas, Business Headshot Photographer in Washington, DC", "Mantas Kubilinskas is a Washington, DC photographer with 15 years behind the camera, focused on business headshots and executive portraits.");

const points = [
  { t: "I guide you.", d: "Most people feel awkward in front of a camera. I talk you through posture, angles and expression the whole time, so you never wonder what to do with your hands." },
  { t: "We plan the look first.", d: "Before the session we agree on background, wardrobe and the feel you want, so nothing is left to guess on the day." },
  { t: "You get finished images.", d: "You choose your favorites and I retouch them. You receive polished, ready-to-use files." },
];

export default function About() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "About", path: "/about" }])} />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-20 sm:pt-28 lg:grid-cols-2">
        <div>
          <h1 className="rise text-5xl font-semibold tracking-tight sm:text-6xl">About.</h1>
          <p className="rise rise-2 mt-6 max-w-lg text-xl text-neutral-600">I'm {site.name}, a photographer in {site.city}. I've spent {site.years} behind the camera, and today I focus on business headshots and portraits for people who need to look their best at work.</p>
          <div className="rise rise-3 mt-8 flex flex-wrap gap-3"><Primary /><Secondary href="/work">View work</Secondary></div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <HoverColorImage bwSrc="/img/studio.jpg" colorSrc="/img/studio-color.jpg" alt="Portrait studio with a camera, softbox light and gray backdrop" priority sizes="(min-width:1024px) 50vw, 100vw" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">How I work.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.t} className="bg-neutral-100 p-8">
              <h3 className="text-2xl font-semibold tracking-tight">{p.t}</h3>
              <p className="mt-3 text-neutral-600">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <dl className="grid gap-8 border-t border-neutral-200 pt-12 sm:grid-cols-3">
          <div><dt className="text-sm font-medium text-neutral-500">Based in</dt><dd className="mt-1 text-2xl font-semibold tracking-tight">{site.city}</dd></div>
          <div><dt className="text-sm font-medium text-neutral-500">Experience</dt><dd className="mt-1 text-2xl font-semibold tracking-tight">{site.years} behind the camera</dd></div>
          <div><dt className="text-sm font-medium text-neutral-500">Where we shoot</dt><dd className="mt-1 text-2xl font-semibold tracking-tight">Studio or on location in DC</dd></div>
        </dl>
      </section>
      <CtaBand title="Ready to book?" text="Tell me what the photos are for and when you need them." />
    </>
  );
}

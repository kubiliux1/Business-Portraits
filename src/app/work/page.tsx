import { pageMeta, breadcrumb } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { photos } from "@/content";
import { CtaBand, CtaRow } from "@/components/Cta";
import HoverColorImage from "@/components/HoverColorImage";
import Gallery from "@/components/Gallery";

export const metadata = pageMeta("/work", "Work: Corporate Headshots and Executive Portraits", "Examples of studio headshots, executive portraits, team photos and creative business portraits by Mantas Kubilinskas in Washington, DC.");

export default function Work() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Work", path: "/work" }])} />
      <section className="mx-auto max-w-6xl px-6 pt-20 sm:pt-28">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem]">
          <HoverColorImage
            bwSrc="/img/team.jpg"
            colorSrc="/img/team-color.jpg"
            alt="Portrait of a business team in a white studio"
            sizes="100vw"
            priority
          />
        </div>
        <h1 className="rise mt-10 text-center text-5xl font-semibold tracking-tight sm:text-7xl sm:mt-12">Work.</h1>
        <p className="rise rise-2 mx-auto mt-6 max-w-2xl text-center text-xl text-neutral-600">Studio headshots, executive portraits, team photos and something a little more personal for creatives.</p>
        <div className="rise rise-3"><CtaRow work={false} className="justify-center" /></div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Gallery photos={photos.map((p) => ({ src: p.src, colorSrc: p.colorSrc, alt: p.alt }))} />
      </section>
      <CtaBand title="Like what you see?" />
    </>
  );
}

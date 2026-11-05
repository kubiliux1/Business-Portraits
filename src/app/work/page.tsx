import { pageMeta, breadcrumb } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Image from "next/image";
import { photos } from "@/content";
import { CtaBand, CtaRow } from "@/components/Cta";


export const metadata = pageMeta("/work", "Work: Corporate Headshots and Executive Portraits", "Examples of studio headshots, executive portraits, team photos and creative business portraits by Mantas Kubilinskas in Washington, DC.");

export default function Work() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Work", path: "/work" }])} />
      <section className="mx-auto max-w-6xl px-6 pt-20 sm:pt-28">
        <h1 className="rise text-5xl font-semibold tracking-tight sm:text-7xl">Work.</h1>
        <p className="rise rise-2 mt-6 max-w-2xl text-xl text-neutral-600">Studio headshots, executive portraits, team photos and something a little more personal for creatives.</p>
        <div className="rise rise-3"><CtaRow work={false} /></div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-[2rem]">
          <Image src="/img/team.jpg" alt="Black and white portrait of a business team in a white studio" fill sizes="100vw" className="object-cover" />
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p) => (
            <li key={p.src} className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-100">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-700 hover:scale-[1.03]" />
            </li>
          ))}
        </ul>
      </section>
      <CtaBand title="Like what you see?" />
    </>
  );
}

import Link from "next/link";
import { pageMeta, breadcrumb } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { Primary, Secondary, CtaBand } from "@/components/Cta";
import HoverColorImage from "@/components/HoverColorImage";
import { serviceList } from "@/services";
import { packages, formatPrice } from "@/content";

export const metadata = pageMeta("/services", "Business Headshot Services in Washington, DC", "LinkedIn headshots from $350, executive portraits at $1200 and on-site team headshots from $1900 in Washington, DC with Mantas Kubilinskas.");

export default function Services() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Services", path: "/services" }])} />
      <section className="mx-auto max-w-6xl px-6 pt-20 text-center sm:pt-28">
        <h1 className="rise text-5xl font-semibold tracking-tight sm:text-7xl">Services.</h1>
        <p className="rise rise-2 mx-auto mt-6 max-w-2xl text-xl text-neutral-600">Choose the session that fits what the photo is for, from one profile photo to a whole team.</p>
        <div className="rise rise-3 mt-10 flex flex-wrap justify-center gap-3"><Primary /><Secondary href="/pricing">See pricing</Secondary></div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {serviceList.map((s) => {
            const first = packages.find((p) => p.slug === s.packageSlugs[0])!;
            return (
              <Link key={s.slug} href={s.path} className={`group flex flex-col bg-neutral-100 transition hover:bg-neutral-200 ${s.image.wide ? "md:col-span-2 md:flex-row" : ""}`}>
                <div className={`relative w-full shrink-0 overflow-hidden ${s.image.wide ? "aspect-video md:w-3/5" : "aspect-[3/4]"}`}>
                  <HoverColorImage bwSrc={s.image.bw} colorSrc={s.image.color} alt={s.image.alt} sizes="(min-width:768px) 50vw, 100vw" imageClassName="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h2 className="text-2xl font-semibold tracking-tight">{s.title}</h2>
                  <p className="mt-3 flex-1 text-neutral-600">{s.short}</p>
                  <p className="mt-6 text-[15px] font-medium">From {formatPrice(first.price)}<span className="ml-2 text-neutral-500">Learn more →</span></p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <CtaBand title="Not sure which fits?" text="Tell me what the photos are for and I'll suggest a session." />
    </>
  );
}

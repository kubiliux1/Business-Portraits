import Link from "next/link";
import { pageMeta, breadcrumb } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { packages, formatPrice } from "@/content";
import { Primary, Secondary, CtaBand } from "@/components/Cta";
import Faq from "@/components/Faq";
import HoverColorImage from "@/components/HoverColorImage";
import { getService } from "@/services";

export function serviceMeta(slug: string) {
  const s = getService(slug);
  return pageMeta(s.path, s.metaTitle, s.metaDescription);
}

export default function ServicePage({ slug }: { slug: string }) {
  const s = getService(slug);
  const pkgs = packages.filter((p) => s.packageSlugs.includes(p.slug));
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Services", path: "/services" }, { name: s.title, path: s.path }])} />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-20 sm:pt-28 lg:grid-cols-2">
        <div>
          <h1 className="rise text-5xl font-semibold tracking-tight sm:text-6xl">{s.h1}</h1>
          <p className="rise rise-2 mt-6 max-w-lg text-xl text-neutral-600">{s.lead}</p>
          <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
            <Primary href={`/book?package=${s.ctaPackage}`}>{s.cta}</Primary>
            <Secondary href="/pricing">See pricing</Secondary>
          </div>
        </div>
        <div className={`relative w-full overflow-hidden ${s.image.wide ? "aspect-video" : "aspect-[3/4] max-w-md lg:ml-auto"}`}>
          <HoverColorImage bwSrc={s.image.bw} colorSrc={s.image.color} alt={s.image.alt} priority sizes="(min-width:1024px) 50vw, 100vw" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">What's included.</h2>
        <div className={`mt-12 grid gap-6 ${pkgs.length > 1 ? "md:grid-cols-2" : "max-w-xl"}`}>
          {pkgs.map((p) => (
            <article key={p.slug} className="flex flex-col bg-neutral-100 p-8">
              <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-4 text-4xl font-semibold tracking-tight">
                {p.from && <span className="mr-1 text-lg font-medium text-neutral-500">from</span>}
                {formatPrice(p.price)}
              </p>
              {p.note && <p className="mt-2 text-sm text-neutral-600">{p.note}</p>}
              <ul className="mt-6 flex-1 space-y-2 text-[15px] text-neutral-700">
                {p.details.map((d) => <li key={d} className="flex gap-2"><span aria-hidden>·</span>{d}</li>)}
              </ul>
              <Link href={`/book?package=${p.slug}`} aria-label={`Book the ${p.name} package`} className="mt-8 inline-flex justify-center bg-black px-6 py-3 text-[15px] font-medium text-white transition hover:bg-neutral-800">{s.slug === "team-headshots" ? "Request a team quote" : "Book this package"}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-neutral-100">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{s.forTitle}</h2>
            <ul className="mt-10 space-y-6">
              {s.forList.map((a) => <li key={a.t}><h3 className="text-xl font-semibold">{a.t}</h3><p className="mt-1 text-neutral-600">{a.d}</p></li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">How it works.</h2>
            <ol className="mt-10 space-y-6">
              {s.steps.map((st, i) => (
                <li key={st.t} className="flex gap-4"><span className="pt-1 text-sm font-medium text-neutral-500">0{i + 1}</span><div><h3 className="text-xl font-semibold">{st.t}</h3><p className="mt-1 text-neutral-600">{st.d}</p></div></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-3 lg:gap-16">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Questions.</h2>
        <div className="lg:col-span-2"><Faq items={s.faqs} /></div>
      </section>
      <CtaBand title="Ready to book?" text="Send a short request and I'll reply with a time and a price." />
    </>
  );
}

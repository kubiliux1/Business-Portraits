import Link from "next/link";
import { pageMeta, breadcrumb } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { packages, formatPrice } from "@/content";
import { Primary, Secondary, CtaBand } from "@/components/Cta";
import Faq from "@/components/Faq";
import { faqs } from "@/faq";

export const metadata = pageMeta(
  "/pricing",
  "Headshot Pricing in Washington, DC",
  "Business headshot packages in Washington, DC starting at $350. Signature $650, Executive $1200 and on-site Team Days from $1900 with Mantas Kubilinskas."
);

export default function Pricing() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Pricing", path: "/pricing" }])} />
      <section className="mx-auto max-w-6xl px-6 pt-20 text-center sm:pt-28">
        <h1 className="rise text-5xl font-semibold tracking-tight sm:text-7xl">Pricing.</h1>
        <p className="rise rise-2 mx-auto mt-6 max-w-2xl text-xl text-neutral-600">Clear packages, from a quick headshot to a full team day. Pick the one that fits and book it in a minute.</p>
        <div className="rise rise-3 mt-10 flex flex-wrap justify-center gap-3"><Primary /><Secondary href="/work">View work</Secondary></div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((p) => {
            const hi = p.popular;
            return (
              <article key={p.slug} className={`relative flex flex-col rounded-3xl p-8 ${hi ? "bg-black text-white" : "bg-neutral-100"}`}>
                {hi && <p className="mb-4 inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-medium text-black">Most popular</p>}
                <h2 className="text-2xl font-semibold tracking-tight">{p.name}</h2>
                <p className="mt-4 text-4xl font-semibold tracking-tight">
                  {p.from && <span className={`mr-1 text-lg font-medium ${hi ? "text-neutral-300" : "text-neutral-500"}`}>from</span>}
                  {formatPrice(p.price)}
                </p>
                {p.note && <p className={`mt-2 text-sm ${hi ? "text-neutral-300" : "text-neutral-600"}`}>{p.note}</p>}
                <ul className={`mt-6 flex-1 space-y-2 text-[15px] ${hi ? "text-neutral-200" : "text-neutral-700"}`}>
                  {p.details.map((d) => <li key={d} className="flex gap-2"><span aria-hidden>·</span>{d}</li>)}
                </ul>
                <Link
                  href={`/book?package=${p.slug}`}
                  aria-label={`Book the ${p.name} package`}
                  className={`mt-8 inline-flex justify-center rounded-full px-6 py-3 text-[15px] font-medium transition ${hi ? "bg-white text-black hover:bg-neutral-200" : "bg-black text-white hover:bg-neutral-800"}`}
                >
                  Book this package
                </Link>
              </article>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-neutral-500">Not sure which one fits? Book a session and tell me what the photos are for.</p>
      </section>
      <section className="mx-auto max-w-3xl px-6 pb-28">
        <h2 className="text-4xl font-semibold tracking-tight">Questions.</h2>
        <div className="mt-10"><Faq items={faqs} /></div>
      </section>
      <CtaBand title="Ready to book?" text="Choose a package and a date that works for you." />
    </>
  );
}

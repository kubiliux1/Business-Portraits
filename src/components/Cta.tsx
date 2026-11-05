import Link from "next/link";
export function Primary({ href = "/book", children = "Book a session" }: { href?: string; children?: React.ReactNode }) {
  return <Link href={href} className="inline-flex items-center bg-black px-6 py-3 text-[15px] font-medium text-white transition hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">{children}</Link>;
}
export function Secondary({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="inline-flex items-center border border-neutral-300 px-6 py-3 text-[15px] font-medium text-black transition hover:border-black">{children}</Link>;
}
export function CtaRow({ work = true, pricing = true, className = "" }: { work?: boolean; pricing?: boolean; className?: string }) {
  return (
    <div className={`mt-10 flex flex-wrap gap-3 ${className}`.trim()}>
      <Primary />
      {pricing && <Secondary href="/pricing">See pricing</Secondary>}
      {work && <Secondary href="/work">View work</Secondary>}
    </div>
  );
}
export function CtaBand({ title = "Ready when you are.", text = "Pick a date that works and tell me what the photos are for." }: { title?: string; text?: string }) {
  return (
    <section className="bg-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-600">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><Primary /><Secondary href="/pricing">See pricing</Secondary></div>
      </div>
    </section>
  );
}

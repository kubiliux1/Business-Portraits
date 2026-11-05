import Link from "next/link";
import { site } from "@/content";
export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-neutral-500 sm:flex-row sm:justify-between">
        <p>© {site.name}. {site.title} in {site.city}.</p>
        <div className="flex gap-5"><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/pricing">Pricing</Link><Link href="/about">About</Link><Link href="/book">Book a session</Link></div>
      </div>
    </footer>
  );
}

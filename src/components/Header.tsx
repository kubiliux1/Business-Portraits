import Link from "next/link";
import { site } from "@/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/80 backdrop-blur-xl backdrop-saturate-150">
      <nav aria-label="Main" className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="text-[15px] font-semibold tracking-tight">{site.name}</Link>
        <div className="flex items-center gap-5 text-[14px]">
          <Link href="/work" className="hidden text-neutral-700 hover:text-black sm:inline">Work</Link>
          <Link href="/pricing" className="hidden text-neutral-700 hover:text-black sm:inline">Pricing</Link>
          <Link href="/book" className=" bg-black px-4 py-1.5 font-medium text-white hover:bg-neutral-800">Book a session</Link>
        </div>
      </nav>
      <div className="flex justify-center gap-6 border-t border-neutral-200/70 py-2 text-[14px] sm:hidden">
        <Link href="/work" className="text-neutral-700">Work</Link>
        <Link href="/pricing" className="text-neutral-700">Pricing</Link>
      </div>
    </header>
  );
}

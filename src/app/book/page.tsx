import { pageMeta, breadcrumb } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { Suspense } from "react";
import BookingForm, { BookingFromUrl } from "@/components/BookingForm";
import { Secondary } from "@/components/Cta";
import HoverColorImage from "@/components/HoverColorImage";

export const metadata = pageMeta("/book", "Book a Headshot Session in Washington, DC", "Request a business headshot, LinkedIn headshot or team portrait session in Washington, DC with Mantas Kubilinskas. Get a reply with a time and a price.");

export default function Book() {
  return (
    <><JsonLd data={breadcrumb([{ name: "Book a session", path: "/book" }])} /><section className="mx-auto grid max-w-6xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-2">
      <div>
        <h1 className="rise text-5xl font-semibold tracking-tight sm:text-6xl">Book a session.</h1>
        <p className="rise rise-2 mt-6 max-w-lg text-xl text-neutral-600">Tell me a little about what you need and when. I&apos;ll reply to confirm a time and a price.</p>
        <div className="rise rise-3 mt-8 flex flex-wrap gap-3"><Secondary href="/pricing">See pricing</Secondary><Secondary href="/work">View work</Secondary></div>
        <div className="relative mt-12 hidden aspect-[3/4] max-w-md overflow-hidden lg:block">
          <HoverColorImage
            bwSrc="/img/g6.jpg"
            colorSrc="/img/g6-color.jpg"
            alt="Executive headshot of a woman with silver hair on white"
            sizes="40vw"
          />
        </div>
      </div>
      <div className=" bg-neutral-100 p-6 sm:p-10"><p className="mb-6 text-[15px] text-neutral-700">No payment now. I reply with a time and a price.</p><Suspense fallback={<BookingForm />}><BookingFromUrl /></Suspense></div>
    </section>
    </>
  );
}

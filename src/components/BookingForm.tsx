"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { packages, formatPrice } from "@/content";

const field = "mt-1 block w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-base focus:border-black focus:outline-none focus:ring-1 focus:ring-black";

export default function BookingForm({ defaultPackage = "" }: { defaultPackage?: string }) {
  const initial = packages.some((p) => p.slug === defaultPackage) ? defaultPackage : "";
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/book", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setState("sent");
    } catch (err) {
      setMsg(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "sent") {
    return <p role="status" className="text-lg">Thanks. Your request is in, and I&apos;ll get back to you soon.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div>
        <label htmlFor="package" className="text-sm font-medium">Package</label>
        <select id="package" name="package" defaultValue={initial} className={field}>
          <option value="">Not sure yet</option>
          {packages.map((p) => <option key={p.slug} value={p.slug}>{p.name} ({p.from ? "from " : ""}{formatPrice(p.price)})</option>)}
        </select>
      </div>
      <div><label htmlFor="name" className="text-sm font-medium">Name</label><input id="name" name="name" required autoComplete="name" className={field} /></div>
      <div><label htmlFor="email" className="text-sm font-medium">Email</label><input id="email" name="email" type="email" required autoComplete="email" className={field} /></div>
      <div><label htmlFor="company" className="text-sm font-medium">Company (optional)</label><input id="company" name="company" autoComplete="organization" className={field} /></div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="people" className="text-sm font-medium">Number of people</label><input id="people" name="people" type="number" min={1} defaultValue={1} required className={field} /></div>
        <div><label htmlFor="date" className="text-sm font-medium">Preferred date</label><input id="date" name="date" type="date" className={field} /></div>
      </div>
      <div><label htmlFor="message" className="text-sm font-medium">What do you need the photos for?</label><textarea id="message" name="message" rows={5} className={field} /></div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {state === "error" && <p role="alert" className="text-sm text-black underline">{msg}</p>}
      <button type="submit" disabled={state === "sending"} className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 disabled:bg-neutral-500">
        {state === "sending" ? "Sending..." : "Send request"}
      </button>
    </form>
  );
}

export function BookingFromUrl() {
  const pkg = useSearchParams().get("package") ?? "";
  return <BookingForm key={pkg} defaultPackage={pkg} />;
}

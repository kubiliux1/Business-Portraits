import { NextResponse } from "next/server";
import { packages, formatPrice } from "@/content";

/*
  Booking delivery. Configure in Vercel environment variables (never in code):
    RESEND_API_KEY  Resend API key (https://resend.com). Enables email delivery.
    BOOKING_FROM    Verified sender, e.g. "Mantas Kubilinskas <bookings@your-domain>".
    BOOKING_TO      Where requests go. Intended: mantas.kubilinskas@mail.grokbot.com
    BOOKING_WEBHOOK_URL  Optional alternative: POST the request as JSON to this URL.
  With neither configured, visitors are told online booking is not open yet.
*/

const RESEND_URL = process.env.RESEND_API_URL || "https://api.resend.com/emails";

type Booking = { package: string; name: string; email: string; company: string; people: string; date: string; message: string; receivedAt: string };

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function sendEmail(key: string, payload: Record<string, unknown>) {
  const res = await fetch(RESEND_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.ok;
}

function ownerText(b: Booking) {
  return [
    `New business portrait booking request`,
    ``,
    `Package: ${b.package}`,
    `Name: ${b.name}`,
    `Email: ${b.email}`,
    `Company: ${b.company || "-"}`,
    `People: ${b.people || "-"}`,
    `Preferred date: ${b.date || "-"}`,
    ``,
    `Message:`,
    b.message || "-",
    ``,
    `Received: ${b.receivedAt}`,
  ].join("\n");
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  if (body.website) return NextResponse.json({ ok: true }); // honeypot
  const s = (k: string, max = 2000) => String(body[k] ?? "").replace(/[\r\n]+/g, k === "message" ? "\n" : " ").trim().slice(0, max);
  const slug = s("package", 40);
  const pk = packages.find((p) => p.slug === slug);
  const b: Booking = { package: pk ? `${pk.name} (${pk.from ? "from " : ""}${formatPrice(pk.price)})` : "Not sure yet", name: s("name", 200), email: s("email", 200), company: s("company", 200), people: s("people", 10), date: s("date", 20), message: s("message"), receivedAt: new Date().toISOString() };
  if (!b.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email)) {
    return NextResponse.json({ error: "Please add your name and a valid email." }, { status: 400 });
  }
  if (b.people && !/^\d{1,4}$/.test(b.people)) return NextResponse.json({ error: "Please enter the number of people as a number." }, { status: 400 });

  const key = process.env.RESEND_API_KEY;
  const from = process.env.BOOKING_FROM;
  const to = process.env.BOOKING_TO;
  const hook = process.env.BOOKING_WEBHOOK_URL;

  if (key && from && to) {
    const ok = await sendEmail(key, {
      from, to: [to], reply_to: b.email,
      subject: `Booking request from ${b.name}: ${b.package}`,
      text: ownerText(b),
      html: `<pre style="font-family:-apple-system,Helvetica,Arial,sans-serif;white-space:pre-wrap">${esc(ownerText(b))}</pre>`,
    });
    if (!ok) return NextResponse.json({ error: "Could not send your request. Please try again." }, { status: 502 });
    // Confirmation to the visitor. A failure here does not undo the delivered request.
    await sendEmail(key, {
      from, to: [b.email], reply_to: to,
      subject: "Your session request is in",
      text: `Hi ${b.name},\n\nThanks for your request for the ${b.package} package. I'll get back to you soon to confirm a time and a price.\n\nMantas Kubilinskas\nBusiness Portraits, Washington, DC`,
    }).catch(() => false);
    return NextResponse.json({ ok: true });
  }

  if (hook) {
    const res = await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(b) });
    if (!res.ok) return NextResponse.json({ error: "Could not send your request. Please try again." }, { status: 502 });
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Online booking is not open yet. Please try again soon." }, { status: 503 });
}

export type QA = { q: string; a: string };
export default function Faq({ items }: { items: QA[] }) {
  return (
    <div className="divide-y divide-neutral-200 rounded-3xl border border-neutral-200">
      {items.map((i) => (
        <details key={i.q} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
            {i.q}<span aria-hidden className="ml-4 text-neutral-400 transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-neutral-600">{i.a}</p>
        </details>
      ))}
    </div>
  );
}

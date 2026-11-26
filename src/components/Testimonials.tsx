import { testimonials } from "@/content/data";

const notes = [
  { bg: "bg-gold-soft", tilt: "-rotate-2", offset: "" },
  { bg: "bg-sage-soft", tilt: "rotate-[1.5deg]", offset: "md:mt-6" },
  { bg: "bg-tangerine-soft", tilt: "-rotate-1", offset: "" },
];

/** Testimonials as taped sticky notes, full quotes, no truncation. */
export default function Testimonials() {
  return (
    <div className="grid items-start gap-10 md:grid-cols-3 md:gap-8">
      {testimonials.map((t, i) => {
        const n = notes[i % notes.length];
        const quote = t.quote.replace(/\.{3}$/, ".");
        return (
          <figure key={t.name} className={`note ${n.bg} ${n.tilt} ${n.offset}`}>
            <span className="tape" aria-hidden="true" />
            <blockquote className="mb-5 font-display text-xl leading-snug">“{quote}”</blockquote>
            <figcaption className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.avatar} alt="" className="h-12 w-12 rounded-full object-cover" />
              <span className="text-[15px] leading-tight">
                <strong className="block">{t.name.trim()}</strong>
                {t.role}
              </span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

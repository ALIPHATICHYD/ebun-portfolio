import { stack } from "@/content/data";
import { Sparkle } from "./Icons";

/** Tilted tangerine ribbon that scrolls her stack. Stops under reduced motion. */
export default function StackTicker() {
  const items = [...stack, ...stack];
  return (
    <div className="overflow-x-clip py-10">
    <section
      aria-label="Tools I work with"
      className="-mx-5 -rotate-[1.6deg] overflow-hidden bg-tangerine py-4 text-on-tangerine"
    >
      <p className="sr-only">{stack.join(", ")}</p>
      <div aria-hidden="true" className="ticker flex items-center gap-10 pr-10 font-display text-2xl font-[650] sm:text-[34px]">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
            {item}
            <Sparkle size={22} color="var(--forest)" />
          </span>
        ))}
      </div>
    </section>
    </div>
  );
}

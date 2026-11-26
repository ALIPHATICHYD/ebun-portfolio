import { about, profile } from "@/content/data";
import CTA from "@/components/cta";
import PhotoSlider from "@/components/PhotoSlider";
import { ArrowUpRight } from "@/components/Icons";

export const metadata = { title: "About — Ebunoluwa Amoo" };

const collage = [
  { src: "/about/pic-1.jpg", caption: "Class demo", className: "-rotate-3 md:mt-10" },
  { src: "/about/pic-3.jpg", caption: "Award night", className: "rotate-2" },
  { src: "/about/pic-4.jpg", caption: "Community day", className: "-rotate-1 md:mt-16" },
];

const offClock = [
  { label: "Volunteering", tone: "bg-gold text-forest" },
  { label: "Reading fiction", tone: "bg-sage-soft" },
  { label: "Good music", tone: "bg-tangerine-soft" },
  { label: "K-dramas", tone: "bg-forest text-paper" },
  { label: "Writing on Medium", tone: "bg-paper border border-line" },
  { label: "“Corporate Ebun” on Substack", tone: "bg-gold-soft" },
];

const road = [
  { year: "2022", text: "Dean’s List at Kibo School of Technology." },
  { year: "2023", text: "Joined Flexie as an intern in July, then as a software engineer in September. Most Improved Team Member." },
  { year: "2024", text: "Higher Diploma in Computer Science from Kibo. Kibo Legacy Award. 500+ students taught Python." },
  { year: "Now", text: "Engineering at Flexie, studying Systems Engineering at UNILAG, and building Kàwé." },
  { year: "2027", text: "BSc in Systems Engineering, University of Lagos (expected)." },
];

export default function AboutPage() {
  const [whatIDo, ...rest] = about.sections;
  return (
    <>
      <section className="wrap grid items-center gap-10 pt-10 sm:pt-16 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="font-hand text-3xl text-tangerine-deep">nice to meet you</p>
          <h1 className="text-[clamp(3rem,7vw,6rem)] leading-[0.95]">I build with intention.</h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">{whatIDo.body}</p>
          <a href={profile.medium} target="_blank" rel="noreferrer" className="btn btn-outline mt-7">
            Read my writing <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {collage.map((c) => (
            <figure key={c.src} className={`polaroid ${c.className}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={c.caption} className="aspect-[3/4]" />
              <figcaption className="!text-lg sm:!text-2xl">{c.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-forest py-16 text-paper sm:py-24">
        <div className="wrap grid gap-10 md:grid-cols-3">
          {rest.map((s) => (
            <article key={s.heading}>
              <h2 className="mb-4 text-3xl text-gold">{s.heading}</h2>
              <p className="leading-relaxed text-paper/85">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap py-16">
        <p className="font-hand text-2xl text-tangerine-deep">when the laptop closes</p>
        <h2 className="mb-8 text-4xl sm:text-[56px]">Off the clock</h2>
        <div className="flex flex-wrap gap-3">
          {offClock.map((o, i) => (
            <span key={o.label} className={`sticker ${o.tone} ${i % 2 ? "rotate-2" : "-rotate-2"}`}>
              {o.label}
            </span>
          ))}
        </div>
      </section>

      <section className="py-6">
        <PhotoSlider />
      </section>

      <section className="wrap py-16">
        <p className="font-hand text-2xl text-tangerine-deep">how I got here</p>
        <h2 className="mb-10 text-4xl sm:text-[56px]">The road so far</h2>
        <ol className="grid gap-4 md:grid-cols-5">
          {road.map((r, i) => (
            <li
              key={r.year}
              className={`rounded-3xl p-6 ${r.year === "Now" ? "bg-tangerine text-on-tangerine" : i % 2 ? "bg-sage-soft" : "bg-gold-soft"}`}
            >
              <span className="mb-3 block font-display text-4xl font-[700]">{r.year}</span>
              <span className="text-[15px] leading-snug">{r.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <CTA title="Let’s make learning and work feel better." />
    </>
  );
}

import Link from "next/link";
import { highlights, profile, projects, strengths } from "@/content/data";
import CTA from "@/components/cta";
import CircleBadge from "@/components/CircleBadge";
import ProjectCard from "@/components/ProjectCard";
import SectionHead from "@/components/SectionHead";
import StackTicker from "@/components/StackTicker";
import Testimonials from "@/components/Testimonials";
import { ArrowRight, ArrowUpRight, Cap, Database, Screen } from "@/components/Icons";

const strengthIcon = { database: Database, screen: Screen, cap: Cap };
const strengthTone = {
  forest: "bg-forest text-paper",
  gold: "bg-gold text-forest",
  paper: "bg-paper text-ink border border-line",
};

const moments = [
  { src: "/about/pic-3.jpg", caption: "Award night", tilt: "-rotate-3" },
  { src: "/about/pic-10.jpg", caption: "Demo day", tilt: "rotate-2" },
  { src: "/about/pic-5.jpg", caption: "Teaching", tilt: "-rotate-1" },
  { src: "/about/pic-6.jpg", caption: "Show and tell", tilt: "rotate-3" },
];

export default function Home() {
  const kawe = projects.find((p) => p.slug === "kawe");
  const featured = kawe ? [kawe, ...projects.filter((p) => p !== kawe)] : projects;

  return (
    <>
      {/* ---- Bento hero ---- */}
      <section className="wrap pt-6 sm:pt-10">
        <div className="grid gap-4 md:grid-cols-6 md:grid-rows-[auto_auto]">
          <div className="tile flex flex-col justify-between gap-10 bg-forest text-paper md:col-span-4 md:row-span-2 sm:p-12">
            <p className="font-hand text-3xl text-gold">{highlights.greeting}</p>
            <div>
              <h1 className="text-[clamp(3.25rem,8vw,6.75rem)] leading-[0.92] text-paper">
                {highlights.headline}
                <br />
                I build things <span className="text-gold">people use.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-paper/80">{highlights.subline}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects" className="btn btn-accent">
                See my work <ArrowRight size={18} />
              </Link>
              <a href={profile.resumeFile} className="btn btn-outline-light">
                Résumé <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="tile relative min-h-80 bg-sage-soft p-0 md:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about/pic-2.jpg"
              alt="Ebun presenting a coding project on a projector screen"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <CircleBadge text="SOFTWARE ENGINEER · TEACHER · BUILDER · " className="absolute right-4 bottom-4" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:col-span-2 md:grid-cols-1">
            <Link href="/projects/kawe" className="tile group flex flex-col gap-2 bg-gold text-forest">
              <span className="text-sm font-bold opacity-80">Building now</span>
              <span className="flex items-center justify-between font-display text-3xl font-[650]">
                Kàwé
                <ArrowUpRight size={26} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
              <span className="text-[15px]">Learning that feels like play, for kids.</span>
            </Link>
            <div className="grid grid-cols-2 gap-4">
              <div className="tile bg-tangerine-soft p-6">
                <span className="block font-display text-4xl font-[700] text-tangerine-deep">{highlights.studentsTaught}</span>
                <span className="text-sm font-semibold">students taught Python</span>
              </div>
              <div className="tile bg-sage-soft p-6">
                <span className="block font-display text-2xl font-[700]">Flexie</span>
                <span className="text-sm font-semibold">engineer since {highlights.roleSince}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StackTicker />

      {/* ---- Work ---- */}
      <section className="wrap py-14">
        <SectionHead note="a few favourites" title="Things I’ve made" href="/projects" linkLabel={`All ${projects.length} projects`} />
        <div className="grid gap-5 md:grid-cols-2">
          {featured.slice(0, 3).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} featured={i === 0} />
          ))}
        </div>
      </section>

      {/* ---- Strengths ---- */}
      <section className="wrap py-14">
        <SectionHead note="how I help a team" title="What I bring" />
        <div className="grid gap-5 md:grid-cols-3">
          {strengths.map((s) => {
            const Icon = strengthIcon[s.icon];
            return (
              <article key={s.title} className={`tile flex flex-col gap-4 ${strengthTone[s.tone]}`}>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-current/10">
                  <Icon size={28} />
                </span>
                <h3 className="text-3xl">{s.title}</h3>
                <p className="opacity-85">{s.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ---- Testimonials ---- */}
      <section className="wrap py-14">
        <SectionHead note="from people I’ve worked with" title="Kind words" />
        <Testimonials />
      </section>

      {/* ---- Moments ---- */}
      <section className="wrap py-14">
        <SectionHead note="not just code" title="Out in the world" href="/about" linkLabel="More about me" />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {moments.map((m) => (
            <figure key={m.src} className={`polaroid ${m.tilt}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.src} alt={m.caption} className="aspect-[4/5]" loading="lazy" />
              <figcaption>{m.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}

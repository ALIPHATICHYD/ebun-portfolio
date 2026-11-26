import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/data";
import CTA from "@/components/cta";
import { statusDot } from "@/components/ProjectCard";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/Icons";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.name} — Ebunoluwa Amoo` : "Project not found",
    description: project?.summary,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <article className="wrap pt-6 sm:pt-10">
        <Link href="/projects" className="mb-6 inline-flex min-h-11 items-center gap-2 font-semibold text-ink-soft hover:text-ink">
          <ArrowLeft size={18} /> All projects
        </Link>

        <header className="tile flex flex-col gap-6 bg-gold text-forest sm:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="status">
              <span className={`h-2 w-2 rounded-full ${statusDot[project.status]}`} />
              {project.status}
            </span>
            <span className="text-sm font-bold opacity-80">{project.org === "Flexie" ? "At Flexie" : "Side project"}</span>
          </div>
          <h1 className="max-w-4xl text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.95]">{project.name}</h1>
          <p className="max-w-2xl text-lg">{project.summary}</p>
          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn btn-primary">
                  {l.label} <ArrowUpRight size={18} />
                </a>
              ))}
            </div>
          )}
        </header>

        <div className="mt-5 rounded-[2rem] bg-sage-soft p-3 sm:p-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            className="w-full rounded-[1.25rem] border border-line object-cover object-top shadow-[var(--shadow-lift)]"
          />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_20rem]">
          <div>
            <p className="font-hand text-2xl text-tangerine-deep">the story</p>
            <h2 className="mb-5 text-4xl">What I did</h2>
            <p className="max-w-[65ch] text-lg leading-relaxed text-ink-soft">{project.description}</p>
          </div>
          <aside className="flex flex-col gap-4">
            <div className="rounded-3xl border border-line bg-paper p-6">
              <h3 className="mb-3 text-xl">Built with</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="chip bg-cream">{s}</span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-forest p-6 text-paper">
              <h3 className="mb-1 text-xl text-paper">Where</h3>
              <p className="opacity-85">{project.org === "Flexie" ? "Flexie Inc (Techstars ’22)" : "Personal project"}</p>
            </div>
          </aside>
        </div>

        <Link
          href={`/projects/${next.slug}`}
          className="group mt-14 flex items-center justify-between gap-6 rounded-[2rem] border border-line bg-paper p-6 transition-colors hover:bg-gold-soft sm:p-8"
        >
          <span>
            <span className="block font-hand text-2xl text-tangerine-deep">up next</span>
            <span className="font-display text-3xl font-[650] sm:text-4xl">{next.name}</span>
          </span>
          <ArrowRight size={32} className="shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>
      </article>
      <CTA title="Want something like this built?" />
    </>
  );
}

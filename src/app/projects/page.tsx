import { projects } from "@/content/data";
import CTA from "@/components/cta";
import ProjectFilter from "@/components/ProjectFilter";

export const metadata = {
  title: "Projects — Ebunoluwa Amoo",
  description: "Products Ebun has built at Flexie and on her own.",
};

export default function ProjectsPage() {
  const flexie = projects.filter((p) => p.org === "Flexie").length;
  return (
    <>
      <section className="wrap pt-10 pb-6 sm:pt-16">
        <p className="font-hand text-3xl text-tangerine-deep">the work shelf</p>
        <h1 className="max-w-4xl text-[clamp(3rem,7vw,6rem)] leading-[0.95]">
          Things I’ve built, <span className="text-tangerine-deep">and am building.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          {flexie} products shipped with the team at Flexie, plus side projects I build for fun and for kids who deserve
          better learning tools.
        </p>
      </section>
      <section className="wrap py-8">
        <ProjectFilter projects={projects} />
      </section>
      <CTA title="Have a project in mind?" />
    </>
  );
}

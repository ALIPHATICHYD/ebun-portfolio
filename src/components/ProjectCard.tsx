import Link from "next/link";
import type { Project } from "@/content/data";

// Each project sits on its own colour "mat" from Ebun's palette.
const mats = [
  "bg-gold text-forest",
  "bg-sage-soft text-ink",
  "bg-tangerine-soft text-ink",
  "bg-forest text-paper",
  "bg-tangerine text-on-tangerine",
  "bg-paper text-ink border border-line",
  "bg-gold-soft text-ink",
];

export const statusDot: Record<Project["status"], string> = {
  Ongoing: "bg-sage",
  "In progress": "bg-tangerine",
  Completed: "bg-pine/50",
};

export default function ProjectCard({
  project,
  index = 0,
  featured = false,
}: {
  project: Project;
  index?: number;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`mat group ${mats[index % mats.length]} ${featured ? "md:col-span-2" : ""}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-bold opacity-80">{project.org === "Flexie" ? "At Flexie" : "Side project"}</span>
        <span className="status">
          <span className={`h-2 w-2 rounded-full ${statusDot[project.status]}`} />
          {project.status}
        </span>
      </div>
      <h3 className={`leading-[1.02] ${featured ? "text-4xl sm:text-[44px]" : "text-3xl sm:text-[34px]"}`}>
        {project.name}
      </h3>
      <p className="max-w-2xl opacity-85">{project.summary}</p>
      <p className="text-sm font-semibold opacity-75">{project.stack.join(" · ")}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.image}
        alt={`Screenshot of ${project.name}`}
        className={`mat-shot ${featured ? "h-64 sm:h-[26rem]" : "h-56 sm:h-72"}`}
        loading="lazy"
      />
    </Link>
  );
}

"use client";

import { useState } from "react";
import type { Project } from "@/content/data";
import ProjectCard from "./ProjectCard";

const filters = [
  { id: "all", label: "Everything", test: () => true },
  { id: "flexie", label: "At Flexie", test: (p: Project) => p.org === "Flexie" },
  { id: "side", label: "Side projects", test: (p: Project) => p.org === "Personal" },
  { id: "wip", label: "In progress", test: (p: Project) => p.status !== "Completed" },
] as const;

/** Filter chips over the project mats. Counts come straight from the data. */
export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]["id"]>("all");
  const current = filters.find((f) => f.id === active)!;
  const shown = projects.filter(current.test);

  return (
    <>
      <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => {
          const on = f.id === active;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(f.id)}
              className={`chip min-h-11 cursor-pointer transition-colors ${on ? "bg-forest text-paper" : "bg-paper hover:bg-gold-soft"}`}
            >
              {f.label}
              <span className="opacity-60">{projects.filter(f.test).length}</span>
            </button>
          );
        })}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {shown.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={projects.indexOf(p)} featured={active === "all" && i === 0} />
        ))}
      </div>
    </>
  );
}

import { awards, education, experience, profile, skills } from "@/content/data";
import CTA from "@/components/cta";
import { Cap, Download, Trophy } from "@/components/Icons";

export const metadata = { title: "Experience — Ebunoluwa Amoo" };

// Group roles by company so Flexie reads as one story (intern, then engineer).
function byCompany() {
  const groups: { company: string; roles: typeof experience }[] = [];
  for (const role of experience) {
    const key = role.company.replace(/\.? \(.*\)$/, "").replace(/\.$/, "");
    const group = groups.find((g) => g.company === key);
    if (group) group.roles.push(role);
    else groups.push({ company: key, roles: [role] });
  }
  return groups;
}

const companyTone = ["bg-forest text-paper", "bg-sage-soft text-ink"];
const skillTone: Record<string, string> = {
  "I Build": "bg-tangerine-soft",
  "Core Technologies": "bg-gold text-forest",
  "Engineering Practices": "bg-sage-soft",
  "Developer Toolkit": "bg-paper border border-line",
};

// Awards carry the year inside the org line; pull it out for the shelf.
const awardYear = (org: string) => org.match(/\b(20\d{2})\)?\s*$/)?.[1];
const trophies = awards.filter((a) => awardYear(a.org));
const roles = awards.filter((a) => !awardYear(a.org));

export default function ExperiencePage() {
  return (
    <>
      <section className="wrap grid items-end gap-8 pt-10 sm:pt-16 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-hand text-3xl text-tangerine-deep">the long version</p>
          <h1 className="max-w-3xl text-[clamp(3rem,7vw,6rem)] leading-[0.95]">Where I’ve worked and grown.</h1>
        </div>
        <a href={profile.resumeFile} className="tile flex items-center gap-4 bg-gold p-6 text-forest transition-transform hover:-translate-y-1">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-paper">
            <Download size={26} />
          </span>
          <span>
            <span className="block font-display text-2xl font-[650]">Download résumé</span>
            <span className="text-sm font-semibold opacity-80">PDF, one page</span>
          </span>
        </a>
      </section>

      <section className="wrap grid gap-5 py-14">
        {byCompany().map((g, gi) => (
          <article key={g.company} className={`tile sm:p-12 ${companyTone[gi % companyTone.length]}`}>
            <h2 className="mb-8 text-4xl sm:text-5xl">{g.company}</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {g.roles.map((r) => (
                <div key={r.role + r.period}>
                  <p className="text-sm font-bold opacity-75">{r.period}</p>
                  <h3 className="mb-3 text-2xl">{r.role}</h3>
                  <ul className="grid gap-2">
                    {r.impact.map((line) => (
                      <li key={line} className="flex gap-3 leading-snug opacity-90">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="wrap py-14">
        <p className="font-hand text-2xl text-tangerine-deep">what’s in the bag</p>
        <h2 className="mb-8 text-4xl sm:text-[56px]">Toolbox</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((s) => (
            <div key={s.category}>
              <h3 className="mb-3 text-xl">{s.category}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className={`chip ${skillTone[s.category] ?? "bg-paper"}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap py-14">
        <p className="font-hand text-2xl text-tangerine-deep">a few shiny things</p>
        <h2 className="mb-8 text-4xl sm:text-[56px]">Trophy shelf</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trophies.map((a, i) => (
            <div key={a.title} className={`rounded-3xl p-6 ${i % 2 ? "bg-tangerine-soft" : "bg-gold-soft"}`}>
              <Trophy size={28} className="mb-4 text-tangerine-deep" />
              <p className="font-display text-xl font-[650] leading-tight">{a.title}</p>
              <p className="mt-1 text-sm text-ink-soft">{a.org}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-10 mb-4 text-2xl">Leading and giving back</h3>
        <ul className="flex flex-wrap gap-2">
          {roles.map((a) => (
            <li key={a.title} className="chip border border-line bg-paper">
              <strong>{a.title}</strong>
              <span className="text-ink-soft">{a.org}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap py-14">
        <p className="font-hand text-2xl text-tangerine-deep">still learning</p>
        <h2 className="mb-8 text-4xl sm:text-[56px]">Education</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <article key={e.degree} className={`tile flex gap-5 ${i ? "bg-sage-soft" : "bg-paper border border-line"}`}>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold text-forest">
                <Cap size={26} />
              </span>
              <div>
                <p className="text-sm font-bold text-ink-soft">{e.period}</p>
                <h3 className="text-2xl leading-tight">{e.degree}</h3>
                <p className="mt-1">{e.school}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA title="Need an engineer who also teaches?" />
    </>
  );
}

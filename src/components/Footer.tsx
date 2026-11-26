import Link from "next/link";
import { profile } from "@/content/data";

const site = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
];

export default function Footer() {
  const social = [
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
    { label: "Medium", href: profile.medium },
    { label: "Email", href: `mailto:${profile.email}` },
  ];

  return (
    <footer className="overflow-hidden bg-forest text-cream/80">
      <div className="wrap flex flex-col gap-10 pt-16 pb-8">
        <div className="flex flex-wrap justify-between gap-8 font-semibold">
          <div className="flex flex-wrap gap-7">
            {site.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-gold">
                {l.label}
              </Link>
            ))}
            <a href={profile.resumeFile} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              Résumé
            </a>
          </div>
          <div className="flex flex-wrap gap-7">
            {social.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <p
          aria-hidden="true"
          className="font-display font-extrabold leading-[0.8] pb-[0.14em] tracking-[-0.04em] text-gold text-[clamp(6.5rem,22vw,20rem)]"
        >
          Ẹbun.
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} {profile.name} · Made in Lagos
        </p>
      </div>
    </footer>
  );
}

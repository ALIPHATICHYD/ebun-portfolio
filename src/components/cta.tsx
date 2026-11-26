import { profile } from "@/content/data";
import CopyEmail from "./CopyEmail";
import { Sparkle } from "./Icons";

/** Big tangerine contact block used at the end of every page. */
export default function CTA({ title = "Let’s build something people love." }: { title?: string }) {
  return (
    <section className="wrap pt-10 pb-24">
      <div className="tile flex flex-col gap-7 bg-tangerine px-7 py-14 text-on-tangerine sm:px-16 sm:py-20">
        <Sparkle size={160} color="var(--gold)" className="spin-slow absolute -top-5 -right-5" />
        <h2 className="relative max-w-4xl text-5xl leading-[0.95] sm:text-[84px]">{title}</h2>
        <div className="relative flex flex-wrap items-center gap-3">
          <a href={profile.calendly} className="btn btn-primary">
            Book a 15-min call
          </a>
          <CopyEmail email={profile.email} />
        </div>
      </div>
    </section>
  );
}

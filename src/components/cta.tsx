import { profile } from "@/content/data";
import CopyEmail from "./CopyEmail";
import { Sparkle } from "./Icons";

/** Big tangerine contact block used at the end of every page. */
export default function CTA({ title = "Let’s build something people love." }: { title?: string }) {
  return (
    <section className="wrap pt-10 pb-24">
      <div className="tile mx-auto flex max-w-4xl flex-col gap-6 bg-tangerine px-7 py-12 text-on-tangerine sm:px-12 sm:py-14">
        <Sparkle size={120} color="var(--gold)" className="spin-slow absolute -top-5 -right-5" />
        <h2 className="relative max-w-4xl text-4xl leading-[0.95] sm:text-[56px]">{title}</h2>
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

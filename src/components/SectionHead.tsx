import Link from "next/link";
import { ArrowRight } from "./Icons";

/** Heading row for a page section: a Caveat note above a Fraunces title, optional link on the right. */
export default function SectionHead({
  note,
  title,
  href,
  linkLabel,
}: {
  note?: string;
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        {note && <p className="font-hand text-2xl text-tangerine-deep">{note}</p>}
        <h2 className="text-4xl leading-none sm:text-[56px]">{title}</h2>
      </div>
      {href && linkLabel && (
        <Link href={href} className="btn btn-outline">
          {linkLabel} <ArrowRight size={18} />
        </Link>
      )}
    </div>
  );
}

/** Spinning circular text badge used on the home portrait. Static under reduced motion. */
export default function CircleBadge({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`grid h-32 w-32 place-items-center rounded-full bg-gold text-forest ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="spin-slow absolute h-32 w-32">
        <defs>
          <path id="badge-circle" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
        </defs>
        <text fontSize="10.5" fontWeight="700" letterSpacing="2.2" fill="currentColor">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="font-display text-3xl font-[700]">Ẹ</span>
    </div>
  );
}

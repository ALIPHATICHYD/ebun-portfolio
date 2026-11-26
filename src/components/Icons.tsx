import type { SVGProps } from "react";

// Small stroke icon set. Stroke width 1.8 matches the 600-700 weight of nearby text.
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Base {...p}><path d="M5 12h14m-5-5 5 5-5 5" /></Base>
);
export const ArrowLeft = (p: IconProps) => (
  <Base {...p}><path d="M19 12H5m5 5-5-5 5-5" /></Base>
);
export const ArrowUpRight = (p: IconProps) => (
  <Base {...p}><path d="M7 17 17 7M9 7h8v8" /></Base>
);
export const Download = (p: IconProps) => (
  <Base {...p}><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14" /></Base>
);
export const Check = (p: IconProps) => (
  <Base {...p}><path d="M5 12.5l4.5 4.5L19 7.5" /></Base>
);
export const Menu = (p: IconProps) => (
  <Base {...p}><path d="M5 9h14M5 15h9" /></Base>
);
export const Close = (p: IconProps) => (
  <Base {...p}><path d="M6 6l12 12M18 6 6 18" /></Base>
);
export const Database = (p: IconProps) => (
  <Base {...p}>
    <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
    <path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
  </Base>
);
export const Screen = (p: IconProps) => (
  <Base {...p}><rect x="3" y="4" width="18" height="14" rx="3" /><path d="M3 9h18M8 21h8" /></Base>
);
export const Cap = (p: IconProps) => (
  <Base {...p}><path d="M3 9l9-5 9 5-9 5z" /><path d="M7 11.5V16c1.5 1.5 3 2 5 2s3.5-.5 5-2v-4.5M21 9v5" /></Base>
);
export const Trophy = (p: IconProps) => (
  <Base {...p}><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" /></Base>
);
export const Star = (p: IconProps) => (
  <Base {...p}><path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.6 7.1 18.2 8 12.7 4 8.8 9.5 8z" /></Base>
);
export const Rising = (p: IconProps) => (
  <Base {...p}><path d="M4 17l6-6 4 4 6-7" /><path d="M15 8h5v5" /></Base>
);

/** Solid four-point sparkle used as a decoration. */
export function Sparkle({ size = 24, color = "currentColor", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <path d="M50 4l10 34 36 12-36 12-10 34-10-34L4 50l36-12z" fill={color} />
    </svg>
  );
}

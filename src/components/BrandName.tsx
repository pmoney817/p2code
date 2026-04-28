/**
 * BrandName — renders "P²Code" with solid-color P² mark.
 *
 * Uses solid primary-light (#8B5CF6) instead of CSS gradient to ensure
 * the superscript ² is always visible (gradient + background-clip: text
 * breaks on nested <sup> elements).
 *
 * Usage:
 *   <BrandName />                    — purple P² + muted Code (default, for dark bg)
 *   <BrandName variant="inline" />   — same colors but inline with surrounding text
 *   <BrandName variant="plain" />    — plain text P²Code (for copyright, meta, etc.)
 */

interface BrandNameProps {
  variant?: "default" | "inline" | "plain";
  className?: string;
}

export default function BrandName({ variant = "default", className = "" }: BrandNameProps) {
  if (variant === "plain") {
    return <span className={className}>P&#178;Code</span>;
  }

  return (
    <span className={`inline-flex items-baseline font-bold ${className}`}>
      <span className="text-primary-light">P</span>
      <sup className="text-primary-light text-[0.6em] -ml-px">2</sup>
      <span className={`${variant === "inline" ? "" : "text-text-muted"} font-semibold ml-0.5`}>Code</span>
    </span>
  );
}

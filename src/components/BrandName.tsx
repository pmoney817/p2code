/**
 * BrandName — renders "P²Code" with the unified gradient P² mark.
 *
 * Usage:
 *   <BrandName />                    — gradient P² + muted Code (default, for dark bg)
 *   <BrandName variant="inline" />   — same colors but inline with surrounding text
 *   <BrandName variant="plain" />    — plain text P²Code (for titles, meta fallback)
 */

interface BrandNameProps {
  variant?: "default" | "inline" | "plain";
  className?: string;
}

export default function BrandName({ variant = "default", className = "" }: BrandNameProps) {
  if (variant === "plain") {
    return <span className={className}>P²Code</span>;
  }

  return (
    <span className={`inline-flex items-baseline font-bold ${className}`}>
      <span className="gradient-text">P</span>
      <sup className="gradient-text text-[0.6em] -ml-px">2</sup>
      <span className={`${variant === "inline" ? "" : "text-text-muted"} font-semibold ml-0.5`}>Code</span>
    </span>
  );
}

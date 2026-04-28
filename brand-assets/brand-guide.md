# P²Code Brand Guide

## Name
- **Full name:** P²Code (with superscript 2)
- **Pronunciation:** "P-squared Code"
- **Plain text fallback:** P2Code (when superscript isn't available)
- **HTML entity:** `P&#178;Code` or `P&sup2;Code`
- **Domain:** p2code.com

## Logo Text Treatment

```
P²Code
││  │
││  └── "Code" — text-muted (#94A3B8) — semibold weight
│└──── "²" — primary-light (#8B5CF6) — superscript, same color as P
└───── "P" — primary-light (#8B5CF6) — bold
```

**"P²" is a unified solid purple unit.** Both P and ² are the same color (#8B5CF6).
"Code" is always muted gray (#94A3B8) in standalone contexts, or inherits parent color when inline.

**Important:** Do NOT use CSS `gradient-text` (background-clip: text) on the brand name —
it breaks the superscript ² on nested `<sup>` elements. Use solid `text-primary-light` instead.

### Variants (BrandName component)

| Variant | Usage | P² Color | Code Color |
|---------|-------|----------|------------|
| **default** | Navbar, footer logo, headings | `#8B5CF6` (primary-light) | `#94A3B8` (text-muted) |
| **inline** | Body text, quotes, paragraphs | `#8B5CF6` (primary-light) | Inherits parent |
| **plain** | Copyright, meta tags, emails | No color (inherits) | No color (inherits) |

### On Light Backgrounds
| Element | Color |
|---------|-------|
| P² | `#6C3AED` (primary, darker) |
| Code | `#64748B` (text-dim, darker) |

## Colors

### Primary Palette
| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Primary | `#6C3AED` | `--color-primary` | Buttons, links, interactive elements |
| Primary Dark | `#5B21B6` | `--color-primary-dark` | Hover states, active states |
| Primary Light | `#8B5CF6` | `--color-primary-light` | **Brand mark (P²)**, highlights |
| Accent | `#06B6D4` | `--color-accent` | Secondary CTAs, accent elements |
| Accent Dark | `#0891B2` | `--color-accent-dark` | Accent hover state |

### Brand Gradient (for decorative use only, NOT on brand name)
```css
background: linear-gradient(135deg, #8B5CF6, #06B6D4);
```
Used for: section headings, CTA buttons, decorative elements, hover effects.
**NOT used on the P²Code brand name** (breaks superscript rendering).

### Surface Colors (Dark Theme)
| Name | Hex | Usage |
|------|-----|-------|
| Surface (bg) | `#0F172A` | Page background |
| Surface Light | `#1E293B` | Cards, elevated surfaces |
| Surface Lighter | `#334155` | Borders, dividers |

### Text Colors
| Name | Hex | Usage |
|------|-----|-------|
| Text | `#F8FAFC` | Primary text (white) |
| Text Muted | `#94A3B8` | Secondary text, "Code" in logo |
| Text Dim | `#64748B` | Tertiary text, timestamps |

### Utility Colors
| Name | Hex | Usage |
|------|-----|-------|
| Success | `#10B981` | Success states, confirmations |
| Selection | `#6C3AED` | Text selection highlight |

## Typography
- **Font:** Inter (Google Fonts)
- **Weights:** 400 (body), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- **Logo weight:** 700 (bold) for P², 600 (semibold) for Code

## Favicon
- **P²** in a rounded square
- "P²" in primary-light (#8B5CF6)
- Background: Surface (#0F172A)
- Border: Surface Lighter (#334155)

## React Component
```tsx
import BrandName from "../components/BrandName";

<BrandName />                    // Navbar, footer, headings
<BrandName variant="inline" />   // Inside paragraphs, quotes
<BrandName variant="plain" />    // Copyright, meta tags
<BrandName className="text-5xl" /> // Custom size
```

## Email Addresses
- **General inquiries:** info@p2code.com
- **Billing:** billing@p2code.com
- **Support:** support@p2code.com

## Social
- GitHub: github.com/p2code
- LinkedIn: linkedin.com/company/p2code
- Twitter/X: twitter.com/p2code

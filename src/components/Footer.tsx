import Link from "next/link";
import { Code, Globe, MessageSquare } from "lucide-react";
import BrandName from "./BrandName";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/ai-learning", label: "AI Learning" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

const socialLinks = [
  { href: "https://github.com/p2code", icon: Code, label: "GitHub" },
  { href: "https://linkedin.com/company/p2code", icon: Globe, label: "LinkedIn" },
  { href: "https://twitter.com/p2code", icon: MessageSquare, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="border-t border-transparent bg-surface">
      {/* Gradient border top */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-baseline text-xl font-bold">
              <BrandName />
            </Link>
            <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-xs">
              Web development and AI learning for the modern era. Build smarter, ship faster.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a
                  href="mailto:info@p2code.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@p2code.com
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 text-text-muted hover:text-white hover:bg-surface-lighter rounded-lg transition-all duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-surface-lighter text-center">
          <p className="text-xs text-text-dim">
            &copy; 2026 <BrandName variant="plain" />. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

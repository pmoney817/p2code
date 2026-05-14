import Head from "next/head";
import Link from "next/link";
import BrandName from "../components/BrandName";
import {
  ArrowRight,
  Lightbulb,
  Award,
  Handshake,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay on the cutting edge of web technology and AI so our clients always get modern, future-proof solutions.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Every project gets our full attention. We write clean code, follow best practices, and sweat the details that matter.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We treat every client relationship as a partnership. Your success is our success, and we are in it for the long run.",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — P&#178;Code</title>
        <meta
          name="description"
          content="Meet the team behind P²Code. 20+ years of IT experience dedicated to helping small businesses succeed online."
        />
      </Head>
      <div className="min-h-screen bg-surface">
        {/* Hero */}
      <section className="px-6 pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-white">
          About <BrandName className="text-5xl sm:text-6xl" />
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">
          We help small businesses thrive in the digital age through custom web
          solutions and AI education.
        </p>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="gradient-text text-center text-3xl font-bold sm:text-4xl">
          Our Values
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-surface-lighter bg-surface-light p-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary-light">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-text">{title}</h3>
              <p className="mt-3 text-sm text-text-muted">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-surface-light px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="gradient-text text-3xl font-bold sm:text-4xl">
            Our Approach
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            <BrandName variant="inline" /> is a boutique digital agency focused exclusively on small
            businesses. We believe every business deserves a great web presence
            and access to the latest AI tools — without enterprise-level pricing.
            We keep our client list intentionally small so we can give each
            project the time and care it deserves. From a one-page site to a
            full-stack application, we bring the same level of craftsmanship and
            communication to every engagement.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface-light px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="gradient-text text-center text-3xl font-bold sm:text-4xl">
            Meet the Founder
          </h2>
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-surface-lighter bg-surface p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
              <div className="flex-shrink-0">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-3xl font-bold text-white">
                  PP
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text">Phatmany Phyathep</h3>
                <p className="mt-1 text-sm font-semibold text-accent">
                  Owner &amp; Lead Engineer
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  With over 20 years of experience in the IT industry, I&apos;ve worked
                  across software development, quality assurance, and business analysis.
                  That background taught me how to build things right — and how to make
                  technology work for people, not against them.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  I started <BrandName variant="inline" /> because I saw small businesses struggling to get online
                  while big agencies charged big-agency prices. I believe every business
                  deserves a professional web presence and access to AI tools — without
                  the complexity or the markup. I handle everything personally so you get
                  the quality and attention your business deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-32 pt-24 text-center">
        <div className="mx-auto max-w-2xl rounded-2xl border border-surface-lighter bg-surface-light p-12">
          <h2 className="text-3xl font-bold text-text">
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-text-muted">
            Have a project in mind? We would love to hear about it.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Let&apos;s Work Together
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}

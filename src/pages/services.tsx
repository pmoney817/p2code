import Head from "next/head";
import Link from "next/link";
import {
  Check,
  Search,
  Palette,
  Code2,
  Rocket,
  ArrowRight,
  Globe,
  MapPin,
  Monitor,
  Phone,
  Shield,
  Image,
  Star,
  Clock,
  Wrench,
  MessageSquare,
  RefreshCw,
  Headphones,
  Bot,
} from "lucide-react";

const sharedFeatures = [
  "Custom WordPress website (up to 5 pages: Home, About, Services/Menu, Contact, Gallery)",
  "Domain purchase or transfer assistance",
  "Hosting setup on WordPress",
  "Built with Elementor — easy for you to edit yourself",
  "Mobile responsive design",
  "Contact form + click-to-call button",
  "SSL certificate (secure site)",
  "Google Business Profile setup (create, optimize, verify)",
  "2 rounds of revisions",
  "Handoff with training so you can manage your own site",
];

const aiReadyFeatures = [
  "Everything in the Basic package",
  "One AI integration of your choice: chatbot, smart contact form, automated FAQ, or AI appointment assistant",
  "Site architecture built for future AI integrations",
  "Consultation on AI tools that could help your specific business",
  "Future-proof: easy to add more AI features down the line",
];

const retainerFeatures = [
  "Up to 6 hours per month of dedicated support",
  "Content updates (menu changes, new photos, hours, etc.)",
  "Help with any website questions or issues",
  "Google Business Profile management",
  "First month free when you sign up",
  "Cancel anytime — no long-term contracts",
];

const processSteps = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "We hop on a quick call to learn about your business, what you need, and what you want your customers to see.",
    icon: Phone,
  },
  {
    step: 2,
    title: "Design & Build",
    description:
      "We design and build your WordPress site with Elementor so it looks great and is easy for you to update later.",
    icon: Palette,
  },
  {
    step: 3,
    title: "Google Setup",
    description:
      "We set up your Google Business Profile so customers can find you when they search locally.",
    icon: MapPin,
  },
  {
    step: 4,
    title: "Launch & Handoff",
    description:
      "We launch your site, walk you through how everything works, and make sure you're comfortable managing it on your own.",
    icon: Rocket,
  },
];

const audiences = [
  {
    icon: "🍽️",
    title: "Restaurants & Cafes",
    description: "Menu pages, hours, location, and a way for customers to find you online.",
  },
  {
    icon: "🔧",
    title: "Home Service Contractors",
    description: "Plumbers, electricians, HVAC, landscapers — show your services and get calls.",
  },
  {
    icon: "💇",
    title: "Salons & Spas",
    description: "Showcase your work, list your services, and make it easy to book.",
  },
  {
    icon: "🏪",
    title: "Any Small Business",
    description: "If you need a professional online presence, we've got you covered.",
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — P&#178;Code</title>
        <meta
          name="description"
          content="Web development, AI integration, and AI learning services for small businesses. Custom solutions starting at $1,500."
        />
      </Head>
      <div className="min-h-screen bg-surface">
        {/* Hero */}
        <section className="px-6 pt-32 pb-20 text-center">
        <h1 className="gradient-text text-5xl font-bold tracking-tight sm:text-6xl">
          Get Your Business Online
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">
          A professional website and Google Business Profile — everything a small
          business needs to be found online. No tech skills required.
        </p>
      </section>

      {/* Who We Help */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-center text-2xl font-bold text-text sm:text-3xl">
          Who We Help
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="rounded-xl border border-surface-lighter bg-surface-light p-6 text-center"
            >
              <span className="text-4xl">{a.icon}</span>
              <h3 className="mt-3 text-lg font-semibold text-text">{a.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{a.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages — Side by Side */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-center text-2xl font-bold text-text sm:text-3xl mb-4">
          Choose Your Package
        </h2>
        <p className="text-center text-text-muted mb-12">
          Both packages include a complete website and Google Business Profile setup.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Basic Package */}
          <div className="flex flex-col rounded-2xl border border-surface-lighter bg-surface-light p-8">
            <div className="flex items-center gap-3 mb-1">
              <Globe className="h-7 w-7 text-primary-light" />
              <h3 className="text-2xl font-bold text-text">Basic</h3>
            </div>
            <p className="text-sm text-text-muted mb-6">
              Everything you need to get your business online with a professional website and Google presence.
            </p>
            <p className="text-4xl font-bold text-text mb-1">$1,500</p>
            <p className="text-sm text-text-dim mb-6">One-time flat rate</p>
            <ul className="flex-1 space-y-3">
              {sharedFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-text-muted"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 block rounded-xl border border-surface-lighter bg-surface px-6 py-3.5 text-center font-semibold text-text transition-all hover:border-primary hover:text-primary-light"
            >
              Get Started
            </Link>
          </div>

          {/* AI-Ready Package — Coming Soon */}
          <div className="relative flex flex-col rounded-2xl border border-surface-lighter bg-surface-light p-8 opacity-60 pointer-events-none">
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <span className="rounded-full bg-surface border border-surface-lighter px-6 py-3 text-lg font-bold text-text-muted shadow-lg">
                Coming Soon
              </span>
            </div>
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-surface-lighter px-4 py-1 text-xs font-bold uppercase tracking-widest text-text-muted">
              Recommended
            </span>
            <div className="flex items-center gap-3 mb-1">
              <Bot className="h-7 w-7 text-accent" />
              <h3 className="text-2xl font-bold text-text">AI-Ready</h3>
            </div>
            <p className="text-sm text-text-muted mb-6">
              A future-proof website with AI built in — chatbot, smart features, and room to grow.
            </p>
            <p className="text-2xl font-bold text-text-muted mb-1">Pricing TBD</p>
            <p className="text-sm text-text-dim mb-6">One-time flat rate</p>
            <ul className="flex-1 space-y-3">
              {aiReadyFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-text-muted"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <span className="mt-8 block rounded-xl border border-surface-lighter bg-surface px-6 py-3.5 text-center font-semibold text-text-dim cursor-not-allowed">
              Coming Soon
            </span>
          </div>
        </div>
      </section>

      {/* Site Care */}
      <section className="border-t border-surface-lighter bg-surface-light/50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              Need Ongoing <span className="gradient-text">Support?</span>
            </h2>
            <p className="mt-4 text-text-muted">
              Don&apos;t want to deal with updates yourself? We&apos;ll handle it for you.
              You can also <Link href="/contact" className="text-accent hover:underline">contact us anytime</Link> for one-off help at an hourly rate.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-surface-lighter bg-surface-light p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3">
                  <Headphones className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-bold text-text">Site Care</h3>
                </div>
                <p className="mt-1 text-sm text-text-muted">Optional — add anytime, cancel anytime</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-accent">$500<span className="text-lg text-text-muted font-normal">/month</span></p>
                <p className="text-sm text-success font-medium">First month free</p>
              </div>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {retainerFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-text-muted"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-accent px-8 py-3 font-semibold text-accent transition-all hover:bg-accent hover:text-white"
              >
                Ask About Site Care
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="gradient-text text-center text-3xl font-bold sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-text-muted">
            Simple, straightforward, and stress-free. We handle the tech so you
            can focus on your business.
          </p>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(({ step, title, description, icon: Icon }) => (
              <div key={step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary-light">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="mt-4 block text-sm font-bold text-accent">
                  Step {step}
                </span>
                <h3 className="mt-1 text-xl font-semibold text-text">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="border-t border-surface-lighter bg-surface-light/50 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            What Makes Us Different
          </h2>
          <p className="mt-4 text-text-muted">
            We don&apos;t just build your site and disappear.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl border border-surface-lighter bg-surface-light p-6">
              <Monitor className="mx-auto h-8 w-8 text-primary-light" />
              <h3 className="mt-4 text-lg font-semibold text-text">You Own It</h3>
              <p className="mt-2 text-sm text-text-muted">
                Built on WordPress with Elementor. You can edit your own site — no
                coding needed, no dependency on us.
              </p>
            </div>
            <div className="rounded-xl border border-surface-lighter bg-surface-light p-6">
              <Wrench className="mx-auto h-8 w-8 text-accent" />
              <h3 className="mt-4 text-lg font-semibold text-text">We Train You</h3>
              <p className="mt-2 text-sm text-text-muted">
                We walk you through everything before handoff. You&apos;ll know how
                to update content, add photos, and manage your site.
              </p>
            </div>
            <div className="rounded-xl border border-surface-lighter bg-surface-light p-6">
              <Shield className="mx-auto h-8 w-8 text-success" />
              <h3 className="mt-4 text-lg font-semibold text-text">No Hidden Fees</h3>
              <p className="mt-2 text-sm text-text-muted">
                $1,500 flat rate. No surprise charges, no monthly lock-in. The
                retainer is optional and you can cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-32 pt-16 text-center">
        <div className="mx-auto max-w-2xl rounded-2xl border border-surface-lighter bg-surface-light p-12">
          <h2 className="text-3xl font-bold text-text">
            Ready to get your business online?
          </h2>
          <p className="mt-4 text-text-muted">
            Tell us about your business and we&apos;ll get you set up.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-8 py-4 font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25 hover:brightness-110"
          >
            Get a Free Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}

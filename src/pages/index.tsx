import Link from "next/link";
import Head from "next/head";
import { Code2, Bot, GraduationCap, Zap, Brain, Users, HeartHandshake, ArrowRight, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Build",
    description: "Professional WordPress websites for small businesses — restaurants, contractors, salons. $1,500 flat rate, fully yours to manage.",
    href: "/services",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Chatbots, workflow automation, and AI-powered features that give your business a competitive edge.",
    href: "/services",
  },
  {
    icon: GraduationCap,
    title: "AI Learning",
    description: "Hands-on workshops, structured courses, and team training to future-proof your workforce.",
    href: "/ai-learning",
  },
];

const features = [
  {
    icon: Zap,
    title: "Modern Tech Stack",
    description: "Next.js, React, Tailwind CSS, and TypeScript for fast, reliable, and maintainable applications.",
  },
  {
    icon: Brain,
    title: "AI-First Approach",
    description: "Built-in AI capabilities from day one so your business stays ahead of the curve.",
  },
  {
    icon: Users,
    title: "Small Business Focus",
    description: "Affordable, personalized service tailored to the needs and budgets of growing businesses.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "We don't disappear after launch. Continuous maintenance, updates, and support when you need it.",
  },
];

export default function Home() {
  return (
    <>
    <Head>
      <title>P²Code — Web Development &amp; AI Learning for Small Businesses</title>
      <meta name="description" content="Custom websites and AI solutions for small businesses. Professional web development, AI integration, and AI learning — built to grow your business." />
    </Head>
    <div className="min-h-screen bg-surface text-text">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" />

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-[10%] h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-[10%] h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-40 right-[20%] h-px w-32 rotate-45 bg-gradient-to-r from-primary/40 to-transparent" />
        <div className="absolute bottom-60 left-[15%] h-px w-24 -rotate-12 bg-gradient-to-r from-accent/30 to-transparent" />

        {/* Floating code brackets */}
        <div className="absolute top-32 right-[25%] font-mono text-5xl font-bold text-primary/10 select-none">
          {"{ }"}
        </div>
        <div className="absolute bottom-40 left-[8%] font-mono text-4xl font-bold text-accent/10 select-none">
          {"< />"}
        </div>
        <div className="absolute top-52 left-[30%] font-mono text-3xl font-bold text-primary/8 select-none">
          {"=>"}
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-32 sm:py-40 lg:py-48">
          <div className="animate-fade-in-up max-w-3xl">
            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              We Build{" "}
              <span className="gradient-text">Digital</span>
              <br />
              Experiences
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted sm:text-xl">
              Custom websites for small businesses and AI learning solutions
              that future-proof your team.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-light px-7 py-3.5 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25 hover:brightness-110"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ai-learning"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-surface-lighter px-7 py-3.5 text-base font-semibold text-text transition-all hover:border-accent hover:text-accent"
              >
                Explore AI Learning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="animate-fade-in-up text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What We Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            From concept to launch, we deliver end-to-end digital solutions
            powered by the latest technology.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative rounded-xl border border-surface-lighter bg-surface-light p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3">
                <service.icon className="h-6 w-6 text-primary-light" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-text-muted">
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary-light transition-colors group-hover:text-accent">
                Learn more
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why P2Code */}
      <section className="border-y border-surface-lighter bg-surface-light/50 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="animate-fade-in-up text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Businesses Choose <span className="gradient-text">Us</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              We combine technical excellence with a genuine commitment to your
              success.
            </p>
          </div>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex rounded-full bg-accent/10 p-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-surface to-accent/5" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
            Let&apos;s build something amazing together.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-light px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25 hover:brightness-110"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}

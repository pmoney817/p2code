import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  Wrench,
  Bot,
  Workflow,
  BarChart3,
  ShieldCheck,
  Clock,
  Users,
  Code2,
  Quote,
  GraduationCap,
  Search,
  CheckCircle,
  Monitor,
  MapPin,
  Video,
} from "lucide-react";

const learningTopics = [
  {
    icon: MessageSquare,
    title: "Prompt Engineering",
    description: "Craft effective prompts to get the best results from AI tools like ChatGPT.",
  },
  {
    icon: Wrench,
    title: "AI Tools for Business",
    description: "Learn which AI tools can save you time on writing, scheduling, and customer service.",
  },
  {
    icon: Bot,
    title: "Building AI Agents",
    description: "Create simple AI agents that handle tasks automatically for your business.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Identify repetitive tasks and set up AI to handle them for you.",
  },
  {
    icon: BarChart3,
    title: "AI in Your Existing Tools",
    description: "Discover AI features already built into the tools you use every day.",
  },
  {
    icon: ShieldCheck,
    title: "AI Best Practices",
    description: "Use AI responsibly — understand what it's good at and where to be careful.",
  },
];

export default function AILearning() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="px-6 pt-32 pb-20 text-center">
        <h1 className="gradient-text text-5xl font-bold tracking-tight sm:text-6xl">
          AI Learning &amp; Consulting
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">
          Practical AI training and hands-on consulting for small businesses.
          No jargon, no fluff — just real tools you can use tomorrow.
        </p>
      </section>

      {/* Two Offerings — Side by Side */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-center text-2xl font-bold text-text sm:text-3xl mb-4">
          Two Ways We Can Help
        </h2>
        <p className="text-center text-text-muted mb-12">
          Learn AI skills or let us find the AI opportunities in your business.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* AI Fundamentals */}
          <div className="flex flex-col rounded-2xl border border-surface-lighter bg-surface-light p-8">
            <div className="flex items-center gap-3 mb-1">
              <GraduationCap className="h-7 w-7 text-primary-light" />
              <h3 className="text-2xl font-bold text-text">AI Fundamentals</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">
                <Video className="h-3 w-3" /> Virtual
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <MapPin className="h-3 w-3" /> In-Person
              </span>
            </div>
            <p className="text-sm text-text-muted mb-6">
              A hands-on training session that teaches you and your team how to
              use AI tools effectively in your day-to-day business. You&apos;ll leave
              with practical skills you can apply immediately.
            </p>
            <p className="text-4xl font-bold text-text mb-1">$500</p>
            <p className="text-sm text-text-dim mb-6">Flat rate — includes training plan &amp; documentation</p>

            <ul className="flex-1 space-y-3">
              {[
                "Introduction to AI — what it is and what it can do for your business",
                "Hands-on with ChatGPT and other AI tools",
                "Prompt engineering — how to get the best results",
                "Building simple AI agents for your workflows",
                "Finding AI features in tools you already use",
                "Training plan and documentation included",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-8 block rounded-xl border border-surface-lighter bg-surface px-6 py-3.5 text-center font-semibold text-text transition-all hover:border-primary hover:text-primary-light"
            >
              Book a Training Session
            </Link>
          </div>

          {/* AI Business Audit */}
          <div className="relative flex flex-col rounded-2xl border border-accent bg-surface-light p-8 glow-accent">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
              Most Popular
            </span>
            <div className="flex items-center gap-3 mb-1">
              <Search className="h-7 w-7 text-accent" />
              <h3 className="text-2xl font-bold text-text">AI Business Audit</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <MapPin className="h-3 w-3" /> In-Person Only
              </span>
            </div>
            <p className="text-sm text-text-muted mb-6">
              We come to your business, observe your processes, talk to your team,
              and map your end-to-end workflow. Then we show you exactly where AI
              can save you time and money — and help you set it up.
            </p>
            <p className="text-4xl font-bold text-text mb-1">$1,200</p>
            <p className="text-sm text-text-dim mb-6">Flat rate — includes report, setup &amp; documentation</p>

            <ul className="flex-1 space-y-3">
              {[
                "On-site observation of your business processes",
                "Employee interviews to understand daily workflows",
                "End-to-end business flow mapping",
                "Audit of your current tools for AI integration opportunities",
                "Recommendations report — where AI fits in your business",
                "Hands-on setup of identified AI integrations",
                "Training on how to use and maintain the AI tools",
                "Documentation and training plan included",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-text-muted">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-8 block rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-center font-semibold text-white transition-all hover:shadow-lg hover:shadow-accent/25 hover:brightness-110"
            >
              Schedule an Audit
            </Link>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="bg-surface-light px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="gradient-text text-center text-3xl font-bold sm:text-4xl">
            Skills You&apos;ll Walk Away With
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-text-muted">
            Practical knowledge you can apply to your business immediately.
          </p>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {learningTopics.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary-light">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="gradient-text text-center text-3xl font-bold sm:text-4xl">
            How It Works
          </h2>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 1, title: "Contact Us", description: "Tell us about your business and what you're looking to accomplish with AI.", icon: MessageSquare },
              { step: 2, title: "We Plan", description: "We create a customized training plan or audit scope based on your needs.", icon: Code2 },
              { step: 3, title: "We Deliver", description: "Training session or on-site audit — hands-on, practical, and tailored to you.", icon: Monitor },
              { step: 4, title: "You Grow", description: "Walk away with documentation, new skills, and AI tools working for your business.", icon: BarChart3 },
            ].map(({ step, title, description, icon: Icon }) => (
              <div key={step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary-light">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="mt-4 block text-sm font-bold text-accent">
                  Step {step}
                </span>
                <h3 className="mt-1 text-xl font-semibold text-text">{title}</h3>
                <p className="mt-2 text-sm text-text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t border-surface-lighter bg-surface-light/50 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto h-10 w-10 text-primary/40" />
          <blockquote className="mt-6 text-2xl font-medium italic text-text">
            &ldquo;We had no idea how much time we were wasting until P2Code
            showed us. The AI tools they set up save us hours every week.&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
              <Users className="h-5 w-5 text-primary-light" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-text">
                Small Business Owner
              </p>
              <p className="text-xs text-text-dim">AI Business Audit Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-32 pt-16 text-center">
        <div className="mx-auto max-w-2xl rounded-2xl border border-surface-lighter bg-surface-light p-12">
          <h2 className="text-3xl font-bold text-text">
            Ready to bring AI into your business?
          </h2>
          <p className="mt-4 text-text-muted">
            Whether you want to learn the basics or find where AI fits in your
            workflow, we&apos;re here to help.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25 hover:brightness-110"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

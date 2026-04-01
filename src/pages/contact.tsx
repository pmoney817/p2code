import { useState, FormEvent } from "react";
import Head from "next/head";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
      setFormData(initialFormData);
    } catch {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-surface-lighter bg-surface-light px-4 py-3 text-text placeholder-text-dim focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors";

  return (
    <>
      <Head>
        <title>Contact — CodePulse</title>
        <meta
          name="description"
          content="Get in touch with CodePulse for web development, AI learning, and AI integration services."
        />
      </Head>

      <div className="min-h-screen bg-surface grid-bg">
        {/* Hero */}
        <section className="pt-24 pb-12 text-center px-6">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl animate-fade-in-up">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Ready to start your project or learn about AI? Let&apos;s talk.
          </p>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form — left (3 cols) */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-surface-lighter bg-surface-light/50 p-6 sm:p-8 backdrop-blur">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-muted">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-muted">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text-muted">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-text-muted">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Select a service...</option>
                      <option value="Web Development">Web Development</option>
                      <option value="AI Learning">AI Learning</option>
                      <option value="AI Integration">AI Integration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-text-muted">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select a range...</option>
                    <option value="Under $2k">Under $2k</option>
                    <option value="$2k-$5k">$2k-$5k</option>
                    <option value="$5k-$10k">$5k-$10k</option>
                    <option value="$10k+">$10k+</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-muted">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or what you'd like to learn..."
                    className={inputClasses + " resize-y"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-60 disabled:cursor-not-allowed animate-pulse-glow"
                >
                  {loading ? (
                    <>
                      <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success message */}
                {success && (
                  <div className="flex items-center gap-2 rounded-lg border border-success/30 bg-success/10 px-4 py-3 text-success">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span>Message sent successfully! We&apos;ll get back to you soon.</span>
                  </div>
                )}

                {/* Error message */}
                {error && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-400">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Contact info — right (2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-2xl border border-surface-lighter bg-surface-light/50 p-6 sm:p-8 backdrop-blur space-y-6">
                <h2 className="text-xl font-semibold text-text">Contact Information</h2>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted">Email</p>
                    <a href="mailto:hello@codepulse.dev" className="text-text hover:text-accent transition-colors">
                      hello@codepulse.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted">Phone</p>
                    <a href="tel:+15551234567" className="text-text hover:text-accent transition-colors">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted">Location</p>
                    <p className="text-text">Remote — Serving businesses nationwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted">Business Hours</p>
                    <p className="text-text">Mon–Fri, 9am–6pm CST</p>
                  </div>
                </div>
              </div>

              {/* CTA card */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 text-center">
                <h3 className="text-lg font-semibold text-text">Prefer email?</h3>
                <p className="mt-2 text-sm text-text-muted">
                  Drop us a line anytime at{" "}
                  <a href="mailto:hello@codepulse.dev" className="text-accent hover:underline">
                    hello@codepulse.dev
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer link to privacy */}
        <footer className="border-t border-surface-lighter py-8 text-center text-sm text-text-dim">
          <Link href="/privacy" className="hover:text-accent transition-colors">
            Privacy Policy
          </Link>
        </footer>
      </div>
    </>
  );
}

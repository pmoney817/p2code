import Head from "next/head";
import Link from "next/link";
import BrandName from "../components/BrandName";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — P&#178;Code</title>
        <meta name="description" content="P&#178;Code privacy policy — how we collect, use, and protect your data." />
      </Head>

      <div className="min-h-screen bg-surface grid-bg">
        <article className="mx-auto max-w-3xl px-6 py-24">
          <h1 className="text-4xl font-bold">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="mt-2 text-sm text-text-dim">Last updated: April 28, 2026</p>

          <div className="mt-10 space-y-8 text-text-muted leading-relaxed">
            {/* Intro */}
            <section>
              <p>
                <BrandName variant="plain" /> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operated out of the State of Texas, United States,
                respects your privacy. This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website (p2code.com) or use our services.
              </p>
            </section>

            {/* What We Collect */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">1. Information We Collect</h2>
              <p className="mb-2 font-semibold text-text">Information you provide directly:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>Service interest and budget range</li>
                <li>Message content</li>
              </ul>
              <p className="mt-3 mb-2 font-semibold text-text">Information collected automatically:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>IP address (for rate limiting and security)</li>
                <li>Browser type and operating system</li>
                <li>Pages visited, time spent, and referring URL (via Vercel Analytics)</li>
              </ul>
            </section>

            {/* Legal Basis */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">2. Legal Basis for Processing (GDPR)</h2>
              <p>If you are located in the European Economic Area (EEA), we process your personal data based on:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li><strong className="text-text">Consent</strong> — When you voluntarily submit our contact form, you consent to us processing your data to respond to your inquiry.</li>
                <li><strong className="text-text">Legitimate interest</strong> — We collect basic analytics data (via Vercel Analytics) to improve our website. This data is aggregated and privacy-friendly (no cookies, no personal identifiers).</li>
              </ul>
            </section>

            {/* How We Use It */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">3. How We Use Your Information</h2>
              <ul className="list-disc space-y-1 pl-6">
                <li>To respond to your inquiries and provide requested services</li>
                <li>To send follow-up communications related to your inquiry</li>
                <li>To improve our website and services (analytics)</li>
                <li>To prevent abuse and enforce rate limits on form submissions</li>
              </ul>
              <p className="mt-3">
                We do <strong className="text-text">not</strong> sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </section>

            {/* Cookies & Analytics */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">4. Cookies &amp; Analytics</h2>
              <p>
                We use <strong className="text-text">Vercel Analytics</strong>, a privacy-friendly analytics service that does
                not use cookies and does not track individual users across websites. It collects aggregated,
                anonymized data about page views and web performance. No personal data is stored in cookies.
              </p>
              <p className="mt-3">
                Our website does not use advertising cookies, tracking pixels, or third-party marketing tools.
                If this changes in the future, we will update this policy and implement a cookie consent mechanism.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">5. Third-Party Services</h2>
              <p>We use the following third-party services to operate our website:</p>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-text">Resend</strong> — Processes contact form submissions and delivers emails on our behalf.
                  Resend may temporarily process your name and email address. See{" "}
                  <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Resend&apos;s Privacy Policy</a>.
                </li>
                <li>
                  <strong className="text-text">Vercel</strong> — Hosts our website and provides anonymized analytics.
                  See{" "}
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Vercel&apos;s Privacy Policy</a>.
                </li>
                <li>
                  <strong className="text-text">Cloudflare</strong> — Provides DNS services for our domain.
                  See{" "}
                  <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Cloudflare&apos;s Privacy Policy</a>.
                </li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">6. Data Retention</h2>
              <p>
                Contact form submissions are retained only as long as necessary to respond to your inquiry
                and provide services, typically no longer than 12 months. Analytics data collected by
                Vercel Analytics is aggregated and anonymized. You may request deletion of your personal
                data at any time by contacting us.
              </p>
            </section>

            {/* Your Rights (GDPR) */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">7. Your Rights Under GDPR</h2>
              <p>If you are located in the EEA, you have the right to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li><strong className="text-text">Access</strong> — Request a copy of the personal data we hold about you</li>
                <li><strong className="text-text">Rectification</strong> — Request correction of inaccurate personal data</li>
                <li><strong className="text-text">Erasure</strong> — Request deletion of your personal data</li>
                <li><strong className="text-text">Restriction</strong> — Request that we limit how we use your data</li>
                <li><strong className="text-text">Portability</strong> — Request your data in a portable format</li>
                <li><strong className="text-text">Objection</strong> — Object to our processing of your personal data</li>
                <li><strong className="text-text">Withdraw consent</strong> — Withdraw your consent at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:hello@p2code.com" className="text-accent hover:underline">hello@p2code.com</a>.
                We will respond within 30 days.
              </p>
            </section>

            {/* California Privacy Rights (CCPA) */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">8. California Privacy Rights (CCPA)</h2>
              <p>If you are a California resident, you have the right to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>Know what personal information we collect and how it is used</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of the sale of your personal information</li>
                <li>Non-discrimination for exercising your privacy rights</li>
              </ul>
              <p className="mt-3">
                <strong className="text-text">We do not sell your personal information.</strong> To make a request,
                contact us at <a href="mailto:hello@p2code.com" className="text-accent hover:underline">hello@p2code.com</a>.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">9. International Data Transfers</h2>
              <p>
                Our website is hosted in the United States via Vercel. If you access our website from
                outside the United States, your data may be transferred to and processed in the United States.
                By using our website and submitting information through our contact form, you consent to
                this transfer. Our third-party providers (Vercel, Resend) maintain appropriate data protection
                measures for international transfers.
              </p>
            </section>

            {/* Security */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">10. Security</h2>
              <p>
                We implement reasonable technical and organizational measures to protect your personal
                information, including HTTPS encryption, rate limiting on form submissions, and input
                validation. However, no method of transmission over the internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            {/* Children */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">11. Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to individuals under 13. We do not knowingly collect
                personal information from children under 13. If we learn we have collected data from
                a child under 13, we will delete it promptly.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page
                with a revised &quot;Last updated&quot; date. Your continued use of our website after changes
                are posted constitutes your acceptance of the revised policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">13. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your data rights, contact us at:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>Email: <a href="mailto:hello@p2code.com" className="text-accent hover:underline">hello@p2code.com</a></li>
                <li>Website: <a href="https://p2code.com" className="text-accent hover:underline">p2code.com</a></li>
              </ul>
            </section>
          </div>

          {/* Back link */}
          <div className="mt-12 border-t border-surface-lighter pt-8">
            <Link href="/" className="text-sm text-accent hover:underline">
              &larr; Back to Home
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}

import Head from "next/head";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — P&sup2;Code</title>
        <meta name="description" content="P&sup2;Code privacy policy — how we collect, use, and protect your data." />
      </Head>

      <div className="min-h-screen bg-surface grid-bg">
        <article className="mx-auto max-w-3xl px-6 py-24">
          <h1 className="text-4xl font-bold">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="mt-2 text-sm text-text-dim">Last updated: April 1, 2026</p>

          <div className="mt-10 space-y-8 text-text-muted leading-relaxed">
            {/* Intro */}
            <section>
              <p>
                P&sup2;Code (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">Information We Collect</h2>
              <p className="mb-2">
                We collect information you voluntarily provide through our contact form, including:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (if provided)</li>
                <li>Service interest and budget range</li>
                <li>Message content</li>
              </ul>
              <p className="mt-3">
                We may also automatically collect certain technical information such as your IP address,
                browser type, and referring URL when you visit our site. This data is used solely for
                analytics and rate-limiting purposes.
              </p>
            </section>

            {/* How We Use Info */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">How We Use Your Information</h2>
              <ul className="list-disc space-y-1 pl-6">
                <li>To respond to your inquiries and provide requested services</li>
                <li>To send follow-up communications related to your inquiry</li>
                <li>To improve our website and services</li>
                <li>To prevent abuse and enforce rate limits on form submissions</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or trade your personal information to third parties for marketing
                purposes.
              </p>
            </section>

            {/* Email */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">Email Communications</h2>
              <p>
                When you submit our contact form, your information is sent via email using Resend, a
                third-party email delivery service. We use this solely to deliver your message to our
                team. We will not add you to any marketing lists without your explicit consent.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">Cookies &amp; Tracking</h2>
              <p>
                Our website may use cookies or similar technologies to enhance your browsing experience
                and gather analytics data. You can control cookie preferences through your browser
                settings. Disabling cookies may affect certain site functionality.
              </p>
            </section>

            {/* Third-party Services */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">Third-Party Services</h2>
              <p>We may use the following third-party services:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  <strong className="text-text">Resend</strong> — email delivery for contact form
                  submissions
                </li>
                <li>
                  <strong className="text-text">Vercel</strong> — website hosting and analytics
                </li>
              </ul>
              <p className="mt-3">
                These providers have their own privacy policies governing data they process on our
                behalf.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">Data Retention</h2>
              <p>
                We retain contact form submissions only as long as necessary to respond to your inquiry
                and provide services. You may request deletion of your data at any time by contacting us.
              </p>
            </section>

            {/* Security */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">Security</h2>
              <p>
                We implement reasonable technical and organizational measures to protect your personal
                information. However, no method of transmission over the internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            {/* Children */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to individuals under 13. We do not knowingly collect
                personal information from children under 13.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page
                with a revised &quot;Last updated&quot; date.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:info@p2code.com" className="text-accent hover:underline">
                  info@p2code.com
                </a>
                .
              </p>
            </section>
          </div>

          {/* Back link */}
          <div className="mt-12 border-t border-surface-lighter pt-8">
            <Link href="/contact" className="text-sm text-accent hover:underline">
              &larr; Back to Contact
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}

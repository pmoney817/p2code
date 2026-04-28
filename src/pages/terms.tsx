import Head from "next/head";
import Link from "next/link";
import BrandName from "../components/BrandName";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service — P&#178;Code</title>
        <meta name="description" content="P&#178;Code terms of service — the rules and guidelines for using our website and services." />
      </Head>

      <div className="min-h-screen bg-surface grid-bg">
        <article className="mx-auto max-w-3xl px-6 py-24">
          <h1 className="text-4xl font-bold">
            <span className="gradient-text">Terms of Service</span>
          </h1>
          <p className="mt-2 text-sm text-text-dim">Last updated: April 28, 2026</p>

          <div className="mt-10 space-y-8 text-text-muted leading-relaxed">
            {/* Intro */}
            <section>
              <p>
                Welcome to <BrandName variant="plain" />. By accessing or using our website and services,
                you agree to be bound by these Terms of Service. If you do not agree to these terms,
                please do not use our services.
              </p>
            </section>

            {/* Services */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">1. Services</h2>
              <p>
                <BrandName variant="plain" /> provides web development, AI integration, and AI learning
                services for small businesses. Our services include but are not limited to website design
                and development, AI tool implementation, consulting, and educational content.
              </p>
            </section>

            {/* Use of Services */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">2. Use of Services</h2>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms.
                You agree not to:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Use our services in any way that violates any applicable law or regulation</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the integrity or performance of our services</li>
                <li>Use our services to transmit harmful, offensive, or illegal content</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">3. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, and software, is the
                property of <BrandName variant="plain" /> or its content suppliers and is protected by
                intellectual property laws. You may not reproduce, distribute, or create derivative
                works from our content without express written permission.
              </p>
              <p className="mt-3">
                Work product created for clients under a service agreement is governed by the terms
                of that specific agreement. Unless otherwise stated, clients receive full ownership
                of custom code and designs upon final payment.
              </p>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">4. Payment Terms</h2>
              <p>
                Payment terms for our services are outlined in individual project proposals and
                agreements. Unless otherwise specified:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>A deposit may be required before work begins</li>
                <li>Final payment is due upon project completion and delivery</li>
                <li>Late payments may incur additional fees as specified in the project agreement</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, <BrandName variant="plain" /> shall not be
                liable for any indirect, incidental, special, consequential, or punitive damages,
                including but not limited to loss of profits, data, or business opportunities,
                arising from or related to your use of our services.
              </p>
              <p className="mt-3">
                Our total liability for any claim arising from our services shall not exceed the
                total amount paid by you for the specific service giving rise to the claim.
              </p>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">6. Disclaimer of Warranties</h2>
              <p>
                Our services are provided &quot;as is&quot; and &quot;as available&quot; without
                warranties of any kind, either express or implied. We do not warrant that our
                services will be uninterrupted, error-free, or completely secure. We make no
                warranties regarding the results that may be obtained from the use of our services.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">7. Termination</h2>
              <p>
                Either party may terminate a service engagement as outlined in the specific project
                agreement. We reserve the right to refuse or discontinue service to anyone at any
                time for any reason. Upon termination, any completed work and deliverables paid
                for in full shall remain the property of the client.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">8. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless <BrandName variant="plain" />, its
                officers, directors, employees, and agents from and against any claims, liabilities,
                damages, losses, or expenses arising from your use of our services, your violation
                of these Terms, or your violation of any rights of a third party.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                State of Texas, United States, without regard to its conflict of law provisions.
                Any legal action or proceeding arising under these Terms shall be brought exclusively
                in the federal or state courts located in the State of Texas, and the parties hereby
                consent to the personal jurisdiction of such courts.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">10. Dispute Resolution</h2>
              <p>
                In the event of any dispute arising from these Terms or our services, both parties
                agree to first attempt to resolve the matter informally by contacting us at{" "}
                <a href="mailto:info@p2code.com" className="text-accent hover:underline">info@p2code.com</a>.
                If the dispute cannot be resolved informally within 30 days, either party may pursue
                mediation or binding arbitration in the State of Texas. This does not prevent either
                party from seeking injunctive relief in court where necessary.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">11. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. Changes will be posted on this page
                with an updated revision date. Your continued use of our services after changes
                are posted constitutes your acceptance of the revised Terms.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-text">12. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:info@p2code.com" className="text-accent hover:underline">
                  info@p2code.com
                </a>.
              </p>
            </section>
          </div>

          {/* Back link */}
          <div className="mt-12 pt-6 border-t border-surface-lighter">
            <Link href="/" className="text-sm text-accent hover:underline">
              &larr; Back to Home
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}

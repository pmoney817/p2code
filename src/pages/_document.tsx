import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts: Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Meta */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0F172A" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="P²Code - Web Development & AI Learning" />
        <meta
          property="og:description"
          content="Modern web development and AI learning. Build smarter, ship faster with P²Code."
        />
        <meta property="og:site_name" content="P²Code" />
        <meta property="og:url" content="https://p2code.com" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// "use client";

import "@/styles/mixins.scss";
import "@/styles/globals.scss";
import "@/styles/shared.scss";
import Script from "next/script";
import { ReduxProvider } from "@/store/provider";
import { Metadata } from "next";
import AnimationWrapper from "@/components/Reusable/App/AnimationWrapper";

const titleDefault = "Oleksii Reznichenko — Software Engineer";
const titleTemplate = "%s — Oleksii Reznichenko";
const description = `Software engineer with strong frontend experience (React, Next.js, TypeScript) expanding 
into full-stack and cloud. Currently studying BSc IT at OsloMet in Oslo. 15+ shipped projects with focus 
on performance, accessibility, and reliable delivery. Available for internships and student developer roles.`;

export const metadata: Metadata = {
  title: {
    default: titleDefault,
    template: titleTemplate,
  },
  description: description,
  keywords: `software engineer, frontend engineer, full-stack developer, TypeScript, React, Next.js, Node.js, 
  REST APIs, GraphQL, Java, SQL, web performance, accessibility, Oslo, Norway, OsloMet, BSc IT, internship, student developer`,
  icons: {
    icon: {
      type: "image/png",
      sizes: "32x32",
      url: "/faviconBlack.png",
    },
  },
  openGraph: {
    type: "website",
    url: "https://oleksiireznichenko.com",
    images: "/seoImage.png",
    title: {
      default: titleDefault,
      template: titleTemplate,
    },
    description: description,
  },
  twitter: {
    card: "summary_large_image",
    images: "/seoImage.png",
    title: {
      default: titleDefault,
      template: titleTemplate,
    },
    description: description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="page">
        <AnimationWrapper key={"base"}>
          <ReduxProvider>{children}</ReduxProvider>
        </AnimationWrapper>
      </body>
      <Script defer={false} src="/SmoothScroll.min.js" />
      <Script defer={false} src="/librariesInit.js" />
      {/* <link rel="icon" type="image/png" sizes='32x32' href="/faviconBlack.png" />
      <meta name="keywords" content="frontend development, web developer, HTML, CSS, JavaScript, React, Vue.js, responsive design, web applications, Git, TypeScript, Sass, Nuxt.js, Next.js, user experience, portfolio showcase" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://oleksiireznichenko.com" />

      <meta property="og:image" content="/seoImage.png" />

      <meta property="twitter:card" content="summary_large_image" />

      <meta property="twitter:image" content="/seoImage.png" /> */}
    </html>
  );
}

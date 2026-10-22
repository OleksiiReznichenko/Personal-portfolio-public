// "use client";

import "@/styles/mixins.scss";
import "@/styles/globals.scss";
import "@/styles/shared.scss";
import Script from "next/script";
import { ReduxProvider } from "@/store/provider";
import { Metadata } from "next";
import AnimationWrapper from "@/components/Reusable/App/AnimationWrapper";

const titleDefault = "Oleksii Reznichenko | Software Engineer";
const titleTemplate = "%s - Oleksii Reznichenko";

const description = `Software developer with experience from 15+ client projects using TypeScript, 
React and Vue. Explore my web applications, API integrations and frontend work.`;
const descriptionOpenGraph = `Explore my software development projects, from interactive websites to 
complex web applications with business logic, data management and backend API integrations.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://oleksiireznichenko.com"),

  title: {
    default: titleDefault,
    template: titleTemplate,
  },

  description: description,

  keywords: [
    "Oleksii Reznichenko",
    "software engineer",
    "software developer",
    "frontend developer",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Vue",
    "Nuxt",
    "Java",
    "REST APIs",
    "OsloMet",
    "Oslo",
    "Norway",
  ],

  alternates: {
    canonical: "/",
  },

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
    siteName: "Oleksii Reznichenko",
    locale: "en_US",
    title: "Oleksii Reznichenko - Software Engineer",
    description: descriptionOpenGraph,
    images: [
      {
        url: "/seoImage.jpg",
        width: 1200,
        height: 630,
        alt: "Oleksii Reznichenko - Software Engineer",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: description,
    images: [
      {
        url: "/seoImage.jpg",
        alt: "Oleksii Reznichenko - Software Engineer",
      },
    ],
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

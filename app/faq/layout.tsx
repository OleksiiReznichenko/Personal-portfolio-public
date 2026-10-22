// "use client"

import AnimationWrapper from '@/components/Reusable/App/AnimationWrapper';
import { Metadata } from 'next';

const title = "FAQ";
const socialTitle = "FAQ - Oleksii Reznichenko";

const description = `Answers to common questions about my software development experience, projects, 
technologies and studies at OsloMet.`;

export const metadata: Metadata = {
    title: title,
    description: description,

    alternates: {
        canonical: "/faq",
    },

    openGraph: {
        type: "website",
        url: "/faq",
        siteName: "Oleksii Reznichenko",
        title: socialTitle,
        description,
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
        title: socialTitle,
        description,
        images: ["/seoImage.jpg"],
    },

    robots: {
        index: false,
        follow: true,
    }
};

export default function FaqLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
            <AnimationWrapper key={'faq'}>
                {children}
            </AnimationWrapper>
        </div>
    )
}
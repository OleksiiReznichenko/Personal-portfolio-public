// "use client"

import AnimationWrapper from '@/components/Reusable/App/AnimationWrapper';
import { Metadata } from 'next';

const title = 'FAQ';
const description = `Discover answers to frequently asked questions on Oleksii Reznichenko's portfolio website, 
showcasing his expertise as a front-end web developer.`;

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description
    },
    twitter: {
        title: title,
        description: description
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
// "use client"

import AnimationWrapper from '@/components/Reusable/App/AnimationWrapper';
import { Metadata } from 'next';

const title = 'TOS';
const description = `Review the Terms of Service for Oleksii Reznichenko's portfolio website, detailing the 
guidelines and policies governing the use of his services.`;

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
            <AnimationWrapper key={'tos'}>
                {children}
            </AnimationWrapper>
        </div>
    )
}
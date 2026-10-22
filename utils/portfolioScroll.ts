import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { PROJECTS } from '@/data/projects';

// Jump to a project or the skills section in the pinned portfolio animation.
// No pixel/percentage offsets are tied to an individual project's position.
export const scrollToPortfolioTarget = (target: string): boolean => {
    if (typeof window === 'undefined') return false;

    const scrollTrigger = ScrollTrigger.getAll().find(trigger => {
        const animation = trigger.animation as gsap.core.Timeline | undefined;
        return animation && 'labels' in animation &&
            animation.labels['section-4-animation'] !== undefined;
    });

    if (!scrollTrigger) return false;

    const timeline = scrollTrigger.animation as gsap.core.Timeline;
    const projectId = target === 'portfolio'
        ? PROJECTS[0]?.id
        : target === 'sms' ? 'quicksms' : target;

    const label = target === 'about'
        ? 'section-2-animation-2'
        : `project-${projectId}`;

    if (timeline.labels[label] === undefined) return false;

    // GSAP maps timeline labels to the correct scroll positions even when
    // the project count or the pinned animation duration changes.
    window.scrollTo({ top: scrollTrigger.labelToScroll(label), behavior: 'auto' });
    return true;
};

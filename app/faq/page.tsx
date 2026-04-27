"use client";

import classes from '@/styles/pagesStyles/faq.module.scss'
import Header from '@/components/Singular/App/Header';
import { slideDown, slideUp } from '@/utils/slideFunctions';
import Question from '@/components/Reusable/Faq/Question';

interface Question {
    id: number | string;
    question: string;
    answer?: string;
    answerList?: string[];
    answerListSkills?: string[];
    answerListSkillsType?: string[];
}

const QUESTIONS: Question[] = [
    {
        id: 1,
        question: `What is your background as an engineer?`,
        answer: `3+ years of professional frontend experience (Apr 2021 – Feb 2024) building 
        production applications in React, Next.js, TypeScript, with 15+ shipped projects across 
        SaaS dashboards, e-commerce, and marketing sites. Currently studying BSc IT at OsloMet 
        (Aug 2025 – Jun 2028) and expanding into backend, databases, and cloud development.`
    },
    {
        id: 2,
        question: `What is your current technical stack?`,
        answerListSkillsType: [
            'Languages',
            'Frontend',
            'Backend / data (in progress)',
            'Tooling',
            'Testing',
            'Engineering practices',
        ],
        answerListSkills: [
            'TypeScript, JavaScript (ES6+), Java, Python, SQL',
            'React, Next.js, HTML5, CSS, Sass/SCSS, Tailwind CSS',
            'Node.js, REST APIs, GraphQL, PostgreSQL, Java APIs',
            'Git, Vite, Docker, CI/CD pipelines (GitHub Actions, Vercel)',
            'Playwright, Vitest',
            'Performance optimization, accessibility (WCAG), responsive design',
            ''
        ],
    },
    {
        id: 3,
        question: `What are you doing now?`,
        answer: `Studying BSc IT at OsloMet in Oslo (Aug 2025 – Jun 2028), with current coursework 
        in Java APIs, Python, Databases, and Web Programming. Strong grades in foundational programming 
        (A in Programming, A in Web Development & Inclusive Design). Working part-time at ASKO alongside 
        studies and building independent projects to deepen backend and cloud skills.`
    },
    {
        id: 4,
        question: `What kind of role are you looking for?`,
        answer: `Open to summer 2026 internships, part-time student developer roles in Oslo (or remote), 
        and summer 2027 internships at Norwegian tech companies. Targeting full-stack and backend-leaning 
        positions while staying open to strong frontend opportunities. Norwegian and English working 
        proficiency, plus native Russian and Ukrainian.`
    },
    {
        id: 5,
        question: `How do you approach performance and accessibility?`,
        answer: `Performance and accessibility are part of how I build, not afterthoughts. Across my client 
        work, I drove measurable results: reduced page load times by up to 40% via code-splitting, image 
        optimization, and caching strategies. I work to WCAG accessibility standards using semantic HTML, 
        keyboard/ARIA support, and structured headings. Testing with Playwright and Vitest catches regressions 
        before they ship.`
    },
    {
        id: 6,
        question: `What are you currently building or learning?`,
        answer: `Studying for upcoming exams in Python, Web Programming, and Databases (June 2026). Building a 
        flagship full-stack project this summer combining ASP.NET Core (C#), PostgreSQL, and Azure deployment 
        with a Next.js frontend — extending my engineering range from frontend into backend and cloud. Long-term 
        focus areas: .NET ecosystem, cloud-native development, and algorithmic depth.`
    },
];

export default function Faq() {

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // TOGGLE SLIDES DONW AND UP
    const slideToggle = (target: HTMLElement, duration = 500) => {
        if (window.getComputedStyle(target).display === 'none') {
            slideDown(target, duration);
        } else {
            slideUp(target, duration);
        }
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // TOGGLE EVENT FOR ANSWERS FOR QUESTIONS
    const toggleEvent = (event: React.MouseEvent): void => {
        const target = event.target as HTMLElement;
        const parent = target?.closest(`.question`);
        const toggleContainer = parent?.querySelector('.toggle-container') as HTMLElement;

        if (parent && toggleContainer && !parent.classList.contains('animating')) {
            const arrow = parent?.querySelector(`.arrow`);
            const headerLine = parent.querySelector(`.header-line`)!;

            let timeoutTime = 700;

            slideToggle(toggleContainer);

            if (arrow) {
                arrow.classList.toggle(`arrow-active`);
            }

            headerLine.classList.toggle('padding');
            parent.classList.add('animating');

            setTimeout(() => {
                parent.classList.remove('animating');
            }, timeoutTime);
        }
    };

    return (
        <div className={classes['page-faq']}>
            <Header />
            <div className={classes['inner-container']}>
                <div onClick={toggleEvent} className={classes.questions}>
                    {QUESTIONS.map((el, i) => {
                        return (
                            <Question
                                key={el.id}
                                question={el.question}
                                answer={el.answer}
                                answerList={el.answerList}
                                answerListSkills={el.answerListSkills}
                                answerListSkillsType={el.answerListSkillsType}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={`${classes['orange-stick-3']} ${classes.stick}`}>
                <img src="/static/img/Landing/orangeStick.png" alt="" />
            </div>
            <div className={`${classes['orange-stick-5']} ${classes.stick} desktop`}>
                <img src="/static/img/Landing/orangeStick.png" alt="" />
            </div>
            <div className={`${classes['green-stick-1']} ${classes.stick}`}>
                <img src="/static/img/Landing/greenStick.png" alt="" />
            </div>
            <div className={`${classes['green-stick-2']} ${classes.stick}`}>
                <img src="/static/img/Landing/greenStick.png" alt="" />
            </div>
        </div>
    )
}

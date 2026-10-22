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
        question: `How did you get into software development?`,
        answer: `I started making websites when I was around 15. At first I was mostly just curious about 
        how websites worked and wanted to try building things myself. Then in 2021 I started getting actual 
        client projects, and what started as a hobby slowly became real work. I ended up working on quite 
        a few different projects and with different developers, and later decided to study IT at OsloMet to 
        learn more about software development beyond just web.`
    },
    {
        id: 2,
        question: `What technologies do you work with?`,
        answerListSkillsType: [
            'Languages',
            'Frontend',
            'Backend and data',
            'Tools and testing'
        ],
        answerListSkills: [
            'TypeScript, JavaScript, Java, Python, SQL',
            'Vue, Nuxt, React, Next.js, HTML, CSS/SCSS',
            'REST APIs, FastAPI, PostgreSQL, JSON',
            'Git, Docker, Docker Compose, pytest'
        ],
        answer: `I've worked the most with TypeScript, JavaScript and frontend frameworks, especially Vue 
        and React. That's where most of my professional experience comes from. At university I've also been 
        working more with Java, Python, databases and backend development, which I'm trying to get better at.`
    },
    {
        id: 3,
        question: `What kinds of projects have you worked on?`,
        answer: `Quite a few different ones actually. Some were smaller websites and portfolios with lots of 
        animations and interactive stuff, while others were more complicated applications with admin panels, 
        user accounts and backend APIs. On some projects I handled the whole frontend myself, and on others 
        I worked with other developers and designers. I've also had quite a bit of direct contact with clients, 
        so I was often involved in discussing what they wanted and figuring out how to build it.`
    },
    {
        id: 4,
        question: `Do you focus more on frontend or backend?`,
        answer: `Definitely more frontend so far, since that's what I've been doing for the longest time. 
        I've worked a lot with Vue, React and TypeScript, but lately I've been getting more interested in 
        backend too. Especially how the different parts of an application work together, databases, APIs and 
        things like that. I'd like to become a full-stack developer eventually, so right now I'm trying to get 
        more experience with that side of development as well.`
    },
    {
        id: 5,
        question: `What's a project you're particularly proud of?`,
        answer: `Probably QuickSMS. I was the main frontend developer and worked on quite a big part of the 
        application, especially the admin panel and the landing page. The admin panel had functionality for 
        managing users, transactions, coupons, statistics and other stuff through backend APIs. I also worked 
        with another frontend developer and helped coordinate some of his work. We had quite a tight deadline 
        on that project, so there was a lot going on, but I learned quite a bit from it. It was also one of 
        the projects where I had more responsibility than just building the frontend.`
    },
    {
        id: 6,
        question: `What kind of opportunities are you looking for?`,
        answer: `Right now I'm mainly looking for part-time developer jobs and summer internships in Oslo 
        while I'm studying at OsloMet. I'd really like to get more experience with backend, full-stack and 
        cloud development, since that's the direction I'm trying to move towards. But I'm also very open to 
        frontend roles, especially if I get to work on more complicated applications and learn from other 
        developers.`
    }
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

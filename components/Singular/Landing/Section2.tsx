import classes from '@/styles/componentsStyles/Landing/section2.module.scss';

export default function Section2() {

    return (
        <section className={`${classes['section-2']} section`}>
            <div className={classes['inner-container']}>
                <div className={classes.content}>
                    <strong className={classes['big-description']}>
                        Skills and Experience
                    </strong>
                    <span className={classes.word}>My portfolio</span>
                    <div className={classes['info-blocks']}>
                        <div className={`${classes['info-block']} ${classes['info-block-1']}`}>
                            <strong className={classes.subtitle}>Frontend Engineering</strong>
                            <p className={classes.description}>
                                Production frontend in TypeScript, React, and Next.js — built across 15+ shipped 
                                projects with focus on performance, accessibility, and reliable delivery. 
                                Comfortable across the full Next.js ecosystem (App Router, SSR/ISR), 
                                API integrations (REST/GraphQL), and modern testing (Playwright, Vitest).
                            </p>
                        </div>
                        <div className={`${classes['info-block']} ${classes['info-block-2']}`}>
                            <strong className={classes.subtitle}>Full-stack & cloud</strong>
                            <p className={classes.description}>
                                Currently expanding from frontend into backend and cloud through BSc IT studies 
                                at OsloMet. Working with Java, Python, SQL, and database design in coursework — 
                                building toward a full-stack profile with C#/.NET, PostgreSQL, and Azure 
                                as next focus areas.
                            </p>
                        </div>
                    </div>
                    <div className={classes.timeline}>
                        <div className={`${classes.block} ${classes['block-1']}`}>
                            <div className={classes.inner}></div>
                        </div>
                        <div className={`${classes.line} ${classes['line-1']}`}>
                            <div className={classes.inner}></div>
                        </div>
                        <div className={`${classes.block} ${classes['block-2']}`}>
                            <div className={classes.inner}></div>
                        </div>
                        <div className={`${classes.line} ${classes['line-2']}`}>
                            <div className={classes.inner}></div>
                        </div>
                        <div className={`${classes.block} ${classes['block-3']}`}>
                            <div className={classes.inner}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes['orange-stick-1']} ${classes.stick}`}>
                <img src="/static/img/Landing/orangeStick.png" alt="" />
            </div>
            <div className={`${classes['green-stick-1']} ${classes.stick}`}>
                <img src="/static/img/Landing/greenStick.png" alt="" />
            </div>
        </section>
    )
}
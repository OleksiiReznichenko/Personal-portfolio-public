import classes from '@/styles/componentsStyles/Landing/section3.module.scss';

export default function Section3() {

    return (
        <section className={`${classes['section-3']} section`}>
            <div className={classes['inner-container']}>
                <div className={classes.watch}>
                    <div className={classes.inner}>
                        <div className={classes['inner-2']}>
                            <img src="/static/img/Landing/watch.png" alt="" />
                            <img src="/static/svg/Landing/watchArrow.svg" alt="" className={`${classes.arrow} ${classes['arrow-minutes']}`} />
                            <img src="/static/svg/Landing/watchArrow.svg" alt="" className={`${classes.arrow} ${classes['arrow-hours']}`} />
                        </div>
                    </div>
                </div>
                <div className={classes.info}>
                    <strong className={classes['big-description']}>
                        Delivering Results
                    </strong>
                    <p className={classes.description}>
                        15+ shipped projects across SaaS dashboards, e-commerce, and marketing sites — owning 
                        the frontend in TypeScript, React, and Next.js. The work behind the visuals: measurable 
                        performance gains (40% faster page loads via code-splitting and caching), accessibility 
                        compliance (WCAG, semantic HTML, ARIA), and reliable delivery through testing and CI/CD 
                        pipelines. Now expanding the same engineering mindset into backend, databases, and cloud 
                        through BSc IT studies at OsloMet.
                    </p>
                </div>
            </div>
            <div className={`${classes['orange-stick-1']} ${classes.stick}`}>
                <img src="/static/img/Landing/orangeStick.png" alt="" />
            </div>
            <div className={`${classes['orange-stick-2']} ${classes.stick}`}>
                <img src="/static/img/Landing/orangeStick.png" alt="" />
            </div>
            <div className={`${classes['green-stick-1']} ${classes.stick} desktop`}>
                <img src="/static/img/Landing/greenStick.png" alt="" />
            </div>
            <div className={`${classes['green-stick-2']} ${classes.stick} desktop`}>
                <img src="/static/img/Landing/greenStick.png" alt="" />
            </div>
            <div className={`${classes['green-stick-3']} ${classes.stick}`}>
                <img src="/static/img/Landing/greenStick.png" alt="" />
            </div>
        </section>
    )
}
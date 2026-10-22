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
                                Most of my professional experience is with JavaScript, TypeScript, Vue, Nuxt, 
                                React and Next.js. I've developed responsive websites, admin panels and 
                                applications with shared state, user management and REST API integrations. 
                                I enjoy working on the more complex functionality behind an interface, not just 
                                the visual side.
                            </p>
                        </div>
                        <div className={`${classes['info-block']} ${classes['info-block-2']}`}>
                            <strong className={classes.subtitle}>Backend Development</strong>
                            <p className={classes.description}>
                                At OsloMet, I've been working with Java, Python, SQL and databases. I've also 
                                built REST APIs with FastAPI, written automated tests and worked with Docker. 
                                I'm currently developing a stronger understanding of backend systems, software 
                                architecture and how applications work beyond the frontend.
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
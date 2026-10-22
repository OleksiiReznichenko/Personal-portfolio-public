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
                        Beyond the Interface
                    </strong>
                    <p className={classes.description}>
                        Working on client projects taught me a lot beyond programming. I've worked directly with 
                        clients, designers and developers, dealing with deadlines, changing requirements and 
                        technical challenges. On some projects I handled the frontend independently, while on 
                        others I worked in teams and helped coordinate development. These experiences taught me 
                        to take responsibility, solve problems independently and communicate effectively with 
                        others.
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
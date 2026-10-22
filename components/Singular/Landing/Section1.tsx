import { selectIsMobile } from '@/store/baseSlice';
import classes from '@/styles/componentsStyles/Landing/section1.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Section1() {
    const isMobile = useSelector(selectIsMobile);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, 100);
    }, []);

    return (
        <section className={`${classes['section-1']} section`}>
            <div className={classes['inner-container']}>
                <div className={classes.content}>
                    <div className={classes.stands}>
                        <div className={classes.inner}>
                            {isMounted && 
                            <Image 
                             quality={95} 
                             src={!isMobile ? 
                              '/static/img/Landing/Section1/stand.png' : 
                              '/static/img/Landing/Section1/standInitial.png'} 
                             alt="" fill />
                            }
                        </div>
                    </div>
                    <div className={classes.dollar}>
                        {isMounted && !isMobile && 
                        <Image 
                         quality={90} 
                         src="/static/img/Landing/Section1/dollar.png" 
                         alt="" fill />
                        }
                    </div>
                    <div className={classes.info}>
                        <h1 className={classes.title}>
                            <span className={classes.white}>Oleksii </span> 
                            <span className={classes.yellow}> Reznichenko </span> 
                            {/* <span className={classes.white}> W<span className={classes.font}>eb</span> </span>  */}
                            <span className={classes.white}> Soft- </span> 
                            <span className={classes.white}> ware </span> 
                            <span className={classes.white}> engineer </span> 
                            {/* <span className={classes.white}> lo<span className={classes.font}>per</span> </span>  */}
                            {/* <span className={classes.white}> neer </span>  */}
                        </h1>
                        <p className={`${classes.description} mobile`}>
                            Software developer with experience from 15+ client projects, mainly using 
                            TypeScript, Vue and React. Currently studying at OsloMet and expanding into 
                            backend development.
                        </p>
                    </div>
                    <p className={`${classes.description} desktop`}>
                        Software developer with experience from 15+ client projects, mainly using 
                        TypeScript, Vue and React. I've worked on everything from interactive websites to 
                        complex applications with API integrations. Currently studying at OsloMet and expanding 
                        into backend development and cloud.
                    </p>
                </div>
            </div>
            <div className={`${classes['orange-stick-1']} ${classes.stick}`}>
                <img src="/static/img/Landing/orangeStick.png" alt="" />
            </div>
            <div className={`${classes['orange-stick-2']} ${classes.stick} desktop`}>
                <img src="/static/img/Landing/orangeStick.png" alt="" />
            </div>
            <div className={`${classes['orange-stick-3']} ${classes.stick}`}>
                <img src="/static/img/Landing/orangeStick.png" alt="" />
            </div>
            <div className={`${classes['orange-stick-4']} ${classes.stick} desktop`}>
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
        </section>
    )
}
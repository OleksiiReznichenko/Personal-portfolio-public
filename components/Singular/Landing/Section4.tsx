import ButtonProject from '@/components/Reusable/Landing/ButtonProject';
import ProjectComp from '@/components/Reusable/Landing/Project';
import classes from '@/styles/componentsStyles/Landing/section4.module.scss';
import Project from '@/types/project';
import { PROJECTS } from '@/data/projects';

export default function Section4() {

    return (
        <section className={`${classes['section-4']} section`}>
            <div className={classes['inner-container']}>
                <div className={classes.projects}>
                    <div className={classes['flex-container']}>
                        <div className={classes['index-container']}>
                            {PROJECTS.map((_, index, arr) => {
                                return (
                                    <span 
                                     key={index + 'index'}
                                     className={`
                                      ${classes.index} 
                                      ${index + 1 !== arr.length ? classes['index-to-top'] : ''} 
                                      ${index !== 0 ? classes['index-from-bottom'] : ''}
                                    `}>
                                        {index + 1}
                                    </span>
                                )
                            })}
                        </div>
                        <div className={classes['title-container']}>
                            <div className={classes.inner}>
                                {PROJECTS.map((el, index, arr) => {
                                    return (
                                        <h2 
                                         key={index + 'title'}
                                         className={`
                                          ${classes.title} 
                                          ${index + 1 !== arr.length ? classes['title-to-top'] : ''}  
                                          ${index !== 0 ? classes['title-from-bottom'] : ''}
                                        `}>
                                            {el.name}
                                        </h2>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={`${classes.lines} desktop`}>
                            {PROJECTS.map((el, index, arr) => {
                                return (
                                    <ButtonProject 
                                        key={el.id + 'button'}
                                        projectId={el.id}
                                        projectName={el.name}
                                        index={index}
                                        projectsAmount={arr.length}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    {PROJECTS.map((el, index, arr) => {
                        return (
                            <ProjectComp 
                                key={el.id}
                                id={el.id}
                                name={el.name}
                                cover={el.cover}
                                link={el.link}
                                description={el.description}
                                technologies={el.technologies}
                                staff={el.staff}
                                timeSpent={el.timeSpent}
                                index={index}
                                projectsAmount={arr.length}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
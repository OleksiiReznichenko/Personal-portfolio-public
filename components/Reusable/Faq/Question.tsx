import classes from '@/styles/componentsStyles/Faq/question.module.scss';

interface Props {
    question: string;
    answer?: string;
    answerList?: string[];
    answerListSkills?: string[];
    answerListSkillsType?: string[];
}

export default function Question({ question, answer, answerListSkills, answerListSkillsType }: Props) {

    return (
        <div className={`${classes.question} question`}>
            <div className={`${classes['header-line']} header-line`}>
                <h3 className={classes.title}>{question}</h3>
                <img src="/static/svg/arrowFaq.svg" alt="" className={`${classes.arrow} arrow`} />
            </div>
            <div className={`${classes['toggle-container']} toggle-container`}>
                {answer && <p className={classes.answer}>{answer}</p>}
                {answerListSkills && answerListSkillsType && <div className={`${classes.answer} ${classes['flex-container']}`}>
                    {answerListSkillsType && <ul className={`${classes.list} ${classes.skills}`}>
                        {answerListSkillsType.map((type, index) => {
                            return answerListSkills.map((skills, index2) => {
                                if (index2 !== index) return;
                                return (
                                    <li 
                                     key={index + 'skills'}
                                     className={classes.item}>
                                        ✅ <span className={classes.type}>{type}{skills ? ':' : ''} </span> 
                                        {skills} 
                                    </li>
                                )
                            })
                        })}
                    </ul>}
                    {/* {answerListSkills && <ul className={`${classes.list}`}>
                        {answerListSkills.map((el, index) => {
                            return (
                                <li 
                                 key={index + 'years'}
                                 className={classes.item}>
                                    {el}
                                </li>
                            )
                        })}
                    </ul>} */}
                </div>}
            </div>
        </div>
    )
}
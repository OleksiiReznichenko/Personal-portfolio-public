import { scrollToPortfolioTarget } from '@/utils/portfolioScroll';
import classes from '@/styles/componentsStyles/Landing/buttonProject.module.scss';

interface Props {
    projectId: string | number;
    projectName: string;
    index: number;
    projectsAmount: number;
}

export default function ButtonProject({ projectId, projectName, index, projectsAmount }: Props) {
    return (
        <button
            type="button"
            aria-label={`Jump to ${projectName}`}
            onClick={() => scrollToPortfolioTarget(String(projectId))}
            className={`
                ${classes['button-project']}
                ${index + 1 !== projectsAmount ? classes['button-project-to-top'] : ''}
            `}
        />
    );
}

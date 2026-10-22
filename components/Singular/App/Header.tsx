import { baseActions, selectIsNavigationLinkAboutClicked, selectIsNavigationLinkEarngamesClicked, selectIsNavigationLinkInvictaClicked, selectIsNavigationLinkPortfolioClicked, selectIsNavigationLinkQuickSmsClicked, selectIsNavigationLinkTonmainersClicked, selectIsPreloaderFinished, selectMobileNavOpenedIndicator } from '@/store/baseSlice';
import classes from '@/styles/componentsStyles/App/header.module.scss';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavigationMenu from './NavigationMenu';
import Navigation from './Navigation';
import { scrollToPortfolioTarget } from '@/utils/portfolioScroll';

export default function Header() {
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    const isPreloaderFinished = useSelector(selectIsPreloaderFinished);
    const mobileNavOpenedIndicator = useSelector(selectMobileNavOpenedIndicator);
    const isNavigationLinkPortfolioClicked = useSelector(selectIsNavigationLinkPortfolioClicked);
    const isNavigationLinkAboutClicked = useSelector(selectIsNavigationLinkAboutClicked);
    const isNavigationLinkQuickSmsClicked = useSelector(selectIsNavigationLinkQuickSmsClicked);
    const isNavigationLinkInvictaClicked = useSelector(selectIsNavigationLinkInvictaClicked);
    const isNavigationLinkTonmainersClicked = useSelector(selectIsNavigationLinkTonmainersClicked);
    const isNavigationLinkEarngamesClicked = useSelector(selectIsNavigationLinkEarngamesClicked);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // DISABLE PAGE SCROLLING IF NAVIGATION MENU IS OPENED
    useEffect(() => {
        const lockPaddingValue = window.innerWidth - document.body.offsetWidth + 'px';
        if (mobileNavOpenedIndicator) {
            document.getElementsByTagName('html')[0].style.overflow = 'hidden';
            document.body.style.paddingRight = lockPaddingValue;
        } else {
            document.getElementsByTagName('html')[0].style.overflow = 'auto';
            document.body.style.paddingRight = '0';
        }
    }, [mobileNavOpenedIndicator]);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // TOGGLE MOBILE MENU
    const toggleNavMenu = (): void => {
        dispatch(baseActions.toggleMobileNavOpenedIndicator());
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SCROLL TO THE NEEDED SECTION FUNCTIONS
    const scrollToSection = (type: string): void => {
        dispatch(baseActions.closeMobileNavOpenedIndicator());

        if (pathname === '/') {
            scrollToPortfolioTarget(type);
        } else {
            let timeoutTime = 3000;

            if (isPreloaderFinished) {
                timeoutTime = 2000;
            }

            router.push('/');
            setTimeout(() => {
                dispatch(baseActions.isNavigationLinkClicked({type, value: true}));
            }, timeoutTime);
        }
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHECK IF LINKS OF THE LANDING PAGE WERE CLICKED FROM A DIFFERENT PAGE
    useEffect(() => {
        
        setTimeout(() => {
            if (isNavigationLinkPortfolioClicked) {
                scrollToSection('portfolio');
                dispatch(baseActions.isNavigationLinkClicked({type: 'portfolio', value: false}));
            }
    
            if (isNavigationLinkAboutClicked) {
                scrollToSection('about');
                dispatch(baseActions.isNavigationLinkClicked({type: 'about', value: false}));
            }
    
            if (isNavigationLinkQuickSmsClicked) {
                scrollToSection('sms');
                dispatch(baseActions.isNavigationLinkClicked({type: 'sms', value: false}));
            }
    
            if (isNavigationLinkInvictaClicked) {
                scrollToSection('invicta');
                dispatch(baseActions.isNavigationLinkClicked({type: 'invicta', value: false}));
            }
    
            if (isNavigationLinkEarngamesClicked) {
                scrollToSection('earngames');
                dispatch(baseActions.isNavigationLinkClicked({type: 'earngames', value: false}));
            }

            if (isNavigationLinkTonmainersClicked) {
                scrollToSection('tonmainers');
                dispatch(baseActions.isNavigationLinkClicked({type: 'tonmainers', value: false}));
            }
        }, 200);
    }, [isNavigationLinkPortfolioClicked, isNavigationLinkAboutClicked, 
        isNavigationLinkQuickSmsClicked, isNavigationLinkInvictaClicked, 
        isNavigationLinkTonmainersClicked, isNavigationLinkEarngamesClicked]);

    return (
        <header className={`${classes.header} ${(pathname !== '/' ? classes['header-not-fixed'] : '')}`}>
            <NavigationMenu 
             scrollToSection={scrollToSection}
            />
            <div className={classes['inner-container']}>
                <div className={classes.left}>
                    <Link href='/' className={classes.logo}>Oleksii</Link>
                    <Navigation
                     scrollToSection={scrollToSection}
                    />
                </div>
                <div className={classes.right}>
                    <a href='https://www.linkedin.com/in/oleksiireznichenko' target='_blank' className={classes.button}>
                        <div className={classes.inner}>LinkedIn</div>
                    </a>
                    <button onClick={toggleNavMenu} className={`${classes['mobile-menu-button']} mobile`}>
                        <img src="/static/svg/mobileMenuLines.svg" alt="" />
                    </button>
                </div>
            </div>
        </header>
    )
}
import { useEffect, useState } from "react"
import {
    Link,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styles from '../../styles/NavBar.module.scss'
import { ReactComponent as Close } from '../../assets/close_black_24dp.svg'

const NavItem = (props) => {
    return (
        <Link to={props.to} className={props.active} onClick={props.click}>
            <div className={props.classes}>
                {props.ItemText}
            </div>
        </Link>
    )
}
const HamBurger = (props) => {
    return (
        <div className={styles.hamburger} onClick={props.click}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
        </div>
    )
}
const NavBar = (props) => {
    const [isMobile, setMobileNavBar] = useState(false);
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const handleClick = () => {
        setMenuVisible(!isMenuVisible)
        document.body.classList.add(styles.noscroll)
    }
    const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
        if (width <= 780) {
            setMobileNavBar(true);
            setMenuVisible(true)
        }
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            if (width <= 780) {
                setMobileNavBar(true);
                setMenuVisible(true)
            }
            else {
                setMobileNavBar(false);
                setMenuVisible(false)
            }
        })
    }, [width])
    const links = props.links
    function getClass() {
        if (!isMobile) {
            return styles.mainMenu
        }
        else {
            if (isMenuVisible) return styles.mobileMainMenu;
            else return `${styles.mobileMainMenu} ${styles.activeMenu}`
        }
    }
    return (
        <>
            {!isMobile && <div className={styles.navBar}>
                <div className={styles.sub}>
                    <div className={styles.logo}>projectVerse</div>
                </div>
                <div className={getClass()}>
                    {links.map(link => (
                        <NavItem
                            to={link.to}
                            key={link.key}
                            ItemText={link.title}
                            classes={styles.menuItem}
                            click={handleClick} />
                    ))}
                    {!isAuthenticated && <div onClick={() => loginWithRedirect()} className={styles.menuItem}>Login</div>}
                    {isAuthenticated && <>
                        <div className={styles.profile}>
                            <img src={user.picture} alt={user.name} className={styles.picture} />
                        </div>
                    </>}
                </div>
            </div>
            }
            {isMobile &&
                <div className={`${styles.navBar} ${styles.mobileNavBar}`}>
                    <div className={styles.sub}>
                        <div className={styles.logo}>projectVerse</div>
                        <HamBurger isMenuVisible={isMenuVisible} click={handleClick} />
                    </div>
                    {!isMenuVisible && <div className={styles.overlay}></div>}
                    <div className={getClass()}>
                        <div className={styles.logo}>projectVerse</div>
                        <div onClick={handleClick} className={styles.close}><Close /></div>
                        {links.map(link => (
                            <NavItem
                                to={link.to}
                                key={link.key}
                                ItemText={link.title}
                                classes={styles.menuItem}
                                click={handleClick} />
                        ))}
                        {!isAuthenticated && <div onClick={() => loginWithRedirect()} className={styles.menuItem}>Login</div>}
                        {isAuthenticated && <>
                            <div className={styles.profile}>
                                <img src={user.picture} alt={user.name} className={styles.picture} />
                            </div>
                        </>}
                    </div>
                </div>
            }
        </>
    )
}

export default NavBar;
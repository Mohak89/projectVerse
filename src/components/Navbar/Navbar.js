import { useEffect, useState } from "react"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
// import PlayGround from "../Dashboard/PlayGround/PlayGround";
// import Features from "../Features/Feature";
import styles from '../../styles/NavBar.module.scss'
import Projects from "../Projetcs/Project";
import CreateProject from "../Projetcs/createProject";
// import LoginSignup from "../LoginSignup/AuthPage";
// import Signup from '../LoginSignup/Signup'
// import Login from "../LoginSignup/Login";
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
const NavBar = () => {
    const [isMobile, setMobileNavBar] = useState(false);
    const [isBurger, setBurger] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const handleClick = () => {
        setBurger(!isBurger)
    }
    useEffect(() => {
        if (width <= 780) {
            setMobileNavBar(true);
            setBurger(true)
        }
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            if (width <= 780) {
                setMobileNavBar(true);
                setBurger(true)
            }
            else {
                setMobileNavBar(false);
                setBurger(false)
            }
        })
    }, [width])
    const links = [
        { to: '/', title: 'Home', component: '', key: uuidv4() },
        { to: '/explore', title: 'Explore', component: <Projects />, key: uuidv4() },
        { to: '/profile', title: 'Profile', component: '', key: uuidv4() },
        { to: '/create', title: 'Create', component: <CreateProject />, key: uuidv4() }
    ]
    function getClass() {
        if (!isMobile) {
            return styles.mainMenu
        }
        else {
            if (isBurger) return styles.mobileMainMenu;
            else return `${styles.mobileMainMenu} ${styles.activeMenu}`
        }
    }
    return (
        <Router>
            <div className={isMobile ? `${styles.navBar} ${styles.mobileNavBar}` : styles.navBar}>
                <div className={styles.sub}>
                    <div className={styles.logo}>projectVerse</div>
                    {isMobile ? <HamBurger isBurger={isBurger} click={handleClick} /> : ''}
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
                </div>

            </div>
            <Routes>
                {links.map(link => {
                    return <Route exact path={link.to} key={link.key} element={link.component} />
                })}
            </Routes>
        </Router>
    )
}

export default NavBar;
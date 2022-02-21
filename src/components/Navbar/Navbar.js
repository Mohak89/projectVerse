import { useEffect, useState } from "react"
// import 
//     Link,
// } from "react-router-dom";
import { Close, NavbarSub, Overlay, Profile, Picture, Hamburger, MobileMenuItem, MobileMenu, MobileNavbar, Menu, MenuItem, BrandLogo, StyledLink, Navbar } from '../../styles/NavbarStyles'
import { ReactComponent as Ham } from 'assets/3_dots.svg'
import { useAuth0 } from "@auth0/auth0-react";
import styles from '../../styles/GeneralStyles.module.scss'
import { ReactComponent as CloseIcon } from 'assets/close_black_24dp.svg'

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
            setMenuVisible(false)
        }
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            if (width <= 780) {
                setMobileNavBar(true);
                setMenuVisible(false)
            }
            else {
                setMobileNavBar(false);
                setMenuVisible(false)
            }
        })
    }, [width])
    const links = props.links
    return (
        <>
            {!isMobile && <Navbar>
                <NavbarSub>
                    <BrandLogo> projectVerse </BrandLogo>
                </NavbarSub>
                <Menu>
                    {links.map(link => (
                        <StyledLink to={link.to} onClick={handleClick}>
                            <MenuItem>
                                {link.title}
                            </MenuItem>
                        </StyledLink>
                    ))}
                    {!isAuthenticated && <MenuItem onClick={() => loginWithRedirect()}>Login</MenuItem>}
                    {isAuthenticated && <>
                        <Profile>
                            <Picture src={user.picture} alt={user.name} className={styles.picture} />
                        </Profile>
                    </>}
                </Menu>
            </Navbar>
            }



            {isMobile &&
                <MobileNavbar>
                    <NavbarSub>
                        <BrandLogo> projectVerse </BrandLogo>
                        <Hamburger onClick={handleClick} >
                            <Ham />
                        </Hamburger>
                    </NavbarSub>
                    {!isMenuVisible && <Overlay />}
                    <MobileMenu isActive={isMenuVisible}>
                        <BrandLogo> projectVerse </BrandLogo>
                        <Close onClick={handleClick}>
                            <CloseIcon />
                        </Close>
                        {links.map(link => (
                            <StyledLink to={link.to} onClick={handleClick}>
                                <MobileMenuItem>
                                    {link.title}
                                </MobileMenuItem>
                            </StyledLink>
                        ))}
                        {!isAuthenticated && <MobileMenuItem onClick={() => loginWithRedirect()}>Login</MobileMenuItem>}
                        {isAuthenticated && 
                            <Profile>
                                <Picture src={user.picture} alt={user.name} />
                            </Profile>
                        }
                    </MobileMenu>
                </MobileNavbar>
            }
        </>
    )
}

export default NavBar;
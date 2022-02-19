import styled from "styled-components";
import { Link } from 'react-router-dom'
const Navbar = styled.div`
     display: flex;
    flex-direction: row;
    width: 100%;
    height: 5rem;
    left: 0;
    right: 0;
    font-size: 1.2rem;
    justify-content: space-between;
    // background: linear-gradient(290deg, #e6b2ff, #58fff2);
    border-radius: 20px;
    box-sizing: border-box;
    z-index: 1000;
`
const NavbarSub = styled.div`
display: flex;
        border-radius: 20px;
        justify-content: space-between;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:visited{
        color: black;
    }
`
const BrandLogo = styled.div`
    padding: 0.4rem;
    margin: 0.5rem;
    height: max-content;
    top: 0;
    font-size: 1.7rem;
    bottom: 0;
`

const Menu = styled.div`
    display: flex;
        height: max-content;
        margin-top: auto;
        margin-bottom: auto;
`
const MobileNavbar = styled(Navbar)`
    flex-direction: column;
    overflow: hidden;
`

const Hamburger = styled.div`
    height: 2rem;
    width: 2rem;
    margin: 1rem;
    padding: 0.4rem;
`
const MenuItem = styled.div`
    place-items: center;
    padding: 0.4rem;
    margin: 0.5rem;
    cursor: pointer;
`
const MobileMenu = styled.div`
    display: ${props => props.isActive ? 'none' : 'flex'};
    position: absolute;
    flex-direction: column;
    background: white;
    width: 100%;
    max-width: 480px;
    height: 100%;
    z-index: 100000;
`
const MobileMenuItem = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;
    border-bottom: 1px solid rgb(194, 194, 194);
`
const Close = styled.div`
    position: absolute;
    right: 1rem;
    top:28px;
`
const Profile = styled.div`
    padding-right: 1rem;
`
const Picture = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`
const Overlay = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: inherit;
    background-color: rgba(189, 187, 187, 0.295);
`


export { Close, NavbarSub,Hamburger,Profile,Overlay,Picture, MobileMenuItem, MobileMenu, MobileNavbar, Menu, MenuItem, BrandLogo, StyledLink, Navbar }
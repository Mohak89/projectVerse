import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// a,
// :visited = styled.div`
//     color: black;
//     text-decoration: none;
// }

const Card = styled.div`
    position: relative;
    min-width: 10rem;
    width: 100%;
    transition: 0.4s all ease-in-out;
    @media (min-width:480px){
            width: 50%;
    }
    @media (min-width:768px){
            width: 33.33%;
        }

    @media (min-width:1024px) {
            width: 25%;
    }
`

const Share = styled.div`
    position: absolute;
    width: 26px;
    height: 26px;
    background-color: white;
    padding: 2px;
    border-radius: 50%;
    top: 10px;
    right: 50px;
    z-index: 1;
    &:hover{
        path {
        fill: white;
        }
    }
`

const CardWrapper = styled.div`
    display: flex;
    max-height: 28rem;
    flex-direction: column;
    margin: 1rem;
    padding:0.5rem;
    justify-content: space-between;
    box-sizing: border-box;
    box-shadow: 4px 4px 10px #d8f1ff, -4px -4px 10px #e1f2ff;
    border-radius: 20px;
    overflow: hidden;
    transition: 0.4s all ease-in-out;

    &:hover {
        transform: rotate(-1deg);
    }
`

const ImageContainer = styled(Link)`
    position: relative;
    width: 100%;
`

const Image = styled.img`
    background-color: black;
    height: auto;
    border-radius: 8px;
    width: 100%;
`
const CardBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
    padding-left: 10px;
    box-sizing: border-box;
`

const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    padding-bottom:1rem;
`
const CardText = styled.div`
    font-size: 12px;
    max-height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
const ProjectMoreInfo = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #d8d8d8;
    place-items: center;
    width: 100%;
    padding: 4px;
    box-sizing: border-box;
`

const ProjectStats = styled.div`
    display: flex;
    place-self: self-start;
    padding: 4px;
`

const Stat = styled.div`
    padding: 4px 8px;
    display: flex;
    place-items: center;
    svg{
        height: 16px;
        width:16px;
    }
    span{
        font-size: 14px;
        padding-right: 0.2rem;
    }
`

const Bookmark = styled.div`
    padding: 4px;
    path {
        stroke: rgb(192, 192, 192);
        stroke-width: 100;
        stroke-linecap: round;
        stroke-dasharray: 0;
        fill: none;
    }
`

const Marked = styled.div`
    path{
        fill: silver;
    }
`
const pulse = keyframes`
      0% {
        background: hsl(200, 20%, 70%);
        }

    100% {
        background: hsl(200, 20%, 95%);
    }
    `
const wave = keyframes`
    to {
        background-position: 315px 0, 0 0, 0 190px, 50px 195px;
    }
    `

const animationID =(animation)=> animation === 'wave' ? wave : (animation === 'disabled' ? '' : pulse)
const Rectangle = styled.div`
    height:${props=>props.height} ;
    max-width:100%;
    width:${props=>props.width} ;
    border-radius:8px;
    margin-bottom:10px; 
    ${props=>props.animation === 'disabled' ?
    'background: hsl(200, 20%, 95%);' :
    'background:linear-gradient(0.25turn, transparent, silver, transparent);'
    }
    background-repeat: no-repeat;
    background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px; 
    background-position: -315px 0, 0 0, 0px 190px, 50px 195px; 
    animation: ${animationID(props=>props.animation)} 1s linear infinite ${animationID(props=>props.animation) === pulse && 'alternate'};
`

const Circle = styled(Rectangle)`
        border-radius: 50%;
    `
const Text = styled(Rectangle)`
        max-height: 1rem;
    `
export { ProjectMoreInfo, ProjectStats, Marked, Bookmark, Stat, Card, CardBody, CardText, CardWrapper, Image, ImageContainer, Title, Share,Rectangle,Circle,Text }



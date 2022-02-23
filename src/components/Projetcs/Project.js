import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios'
import useDocumentTitle from "../useDocumentTitle";
import { ProjectCard, SkeletonCard } from "./Cards";
// import {useInView} from 'react-intersection-observer'
const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    position: relative;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 2rem;
`
//Project Card Component



const Projects = ({ url }) => {
    useDocumentTitle('Projects')
    const [projectData, setData] = useState(null)
    const [nextURL,setNextURL] = useState(null)
    const projectAPI = async (dataURL) => {
        try {
            const data = await axios({
                method: "GET",
                url: dataURL,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            })
            setData((prevState)=>{
                if(prevState===null) return data.data.results
                return [...prevState,...data.data.results]
            })
            setNextURL(data.data.next)
        } catch (error) {
            console.error(error);
            return error
        }
    }
    useEffect(()=>{
        if(!projectData) projectAPI(url)
    },[projectData,url])
    useEffect(() => {
        if(nextURL===null) return
        projectAPI(nextURL)
    }, [nextURL])

    // const projectData = [
    //     {
    //         _id: '1',
    //         title: 'Some shit',
    //         author: 'Steve',
    //         discription: 'Steve made apple inc we make pineapple',
    //         status: 'Fucked up',
    //         link: 'https://www.linkedin.com/in/manik-singhal/',
    //         thumbnail: img,
    //         likes: 111,
    //         views: 1111,
    //         createdAt: '1 eternity ago'
    //     },
    //     {
    //         _id: '2',
    //         title: 'Some shit',
    //         author: 'a',
    //         discription: 'lorem',
    //         status: 'lorem',
    //         link: 'adsdas',
    //         thumbnail: img,
    //         createdAt: 'asdasdasd'

    //     },
    //     {
    //         _id: '3',
    //         title: 'Some shit',
    //         author: 'sadasdas',
    //         discription: 'asdasda',
    //         status: 'asdasdasd',
    //         link: 'dasdasda',
    //         thumbnail: img,
    //         createdAt: 'dasdasd'
    //     },
    //     {
    //         _id: '4',
    //         title: 'Some shit',
    //         author: 'sadasdas',
    //         discription: 'asdasda',
    //         status: 'asdasdasd',
    //         link: 'dasdasda',
    //         thumbnail: img,
    //         createdAt: 'dasdasd'
    //     },
    //     {
    //         _id: '4',
    //         title: 'Some shit',
    //         author: 'sadasdas',
    //         discription: 'asdasda',
    //         status: 'asdasdasd',
    //         link: 'dasdasda',
    //         thumbnail: img,
    //         createdAt: 'dasdasd'
    //     },
    //     {
    //         _id: '4',
    //         title: 'Some shit',
    //         author: 'sadasdas',
    //         discription: 'asdasda',
    //         status: 'asdasdasd',
    //         link: 'dasdasda',
    //         thumbnail: img,
    //         createdAt: 'dasdasd'
    //     },
    //     {
    //         _id: '4',
    //         title: 'Some shit',
    //         author: 'sadasdas',
    //         discription: 'asdasda',
    //         status: 'asdasdasd',
    //         link: 'dasdasda',
    //         thumbnail: img,
    //         createdAt: 'dasdasd'
    //     },
    //     {
    //         _id: '4',
    //         title: 'Some shit',
    //         author: 'sadasdas',
    //         discription: 'asdasda',
    //         status: 'asdasdasd',
    //         link: 'dasdasda',
    //         thumbnail: img,
    //         createdAt: 'dasdasd'
    //     }
    // ]
    return (
        <ProjectsContainer>
            {projectData ? projectData.map((element) => (
                <ProjectCard
                    key={element.id}
                    link={element.id}
                    image={"https://hackster.imgix.net/uploads/attachments/1315695/_uFAv7dW5nX.blob?auto=compress%2Cformat&w=350&h=262.5&fit=min&dpr=1.3020833730697632"}
                    likes={0}
                    views={0}
                    author={element.owner}
                    createdAt={new Date(element.created).toDateString()}
                    title={element.project_title}
                    status={element.project_status}
                    discription={element.discription} />
            )) :
                <>
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </>}
        </ProjectsContainer>
    )
}
export { ProjectCard }
export default Projects;
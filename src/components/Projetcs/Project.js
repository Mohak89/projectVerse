import styles from '../../styles/projects.module.scss'

import { useEffect, useState } from "react";
import axios from 'axios'
import useDocumentTitle from "../useDocumentTitle";
import { ReactComponent as Share } from 'assets/share.svg'
import { Link } from 'react-router-dom';
import { ReactComponent as Bookmark } from 'assets/bookmark_border_black_24dp.svg'
import { ReactComponent as Like } from 'assets/thumb_up_alt_black_24dp.svg'
import { ReactComponent as View } from 'assets/visibility_black_24dp.svg'
//Project Card Component
const ProjectCard = (props) => {
    return (
        <div className={styles.card}>
            {/* <div className={styles.share}> <Share fill="black" width="100%" height="100%" /></div> */}
            <div className={styles.cardWrapper}>
                <Link className={styles.imageContainer} to={`/project/${props.link}`} target={'_blank'} >
                    <img src={props.image} alt="" className={styles.image} />
                </Link>
                <div className={styles.cardBody}>
                    <div className={styles.cardText}>{props.author}</div>
                    <div className={styles.cardText}>{props.createdAt}</div>
                    <div className={styles.title}>{props.title}</div>
                    <div className={styles.cardText}>{props.discription}</div>
                </div>
                <div className={styles.projectMoreInfo}>
                    <div className={styles.projectStats}>
                        <div className={styles.likes}>
                            <Like />
                            {props.likes}
                        </div>
                        <div className={styles.views}>
                            <View />
                            {props.views}
                        </div>
                    </div>
                    <div className={styles.bookmark}>
                        <Bookmark />
                    </div>
                </div>

            </div>
        </div>
    )
}


const Projects = () => {
    useDocumentTitle('Projects')
    const [projectData, setData] = useState([])
    const projectAPI = async() => {
        try {
            const data = await axios({
                method: "GET",
                url: "http://127.0.0.1:8000/api/projects/?format=json",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            })
            setData(data.data.results)
        } catch (error) {
            console.error(error);
            return error
        }
    }
    useEffect(() => {
        projectAPI();
        console.log(projectData)
    }, [])

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
        <div className={styles.projects} >
            {projectData.map((element) => (
                <ProjectCard 
                    key={element.id} 
                    link={element.id} 
                    image={"https://hackster.imgix.net/uploads/attachments/1315695/_uFAv7dW5nX.blob?auto=compress%2Cformat&w=350&h=262.5&fit=min&dpr=1.3020833730697632"} 
                    likes={0} 
                    views={0} 
                    author={element.owner} 
                    created={new Date(element.created).toDateString()} 
                    title={element.project_title} 
                    status={element.project_status}
                    discription={element.discription} />
            ))}
        </div>
    )
}

export default Projects;
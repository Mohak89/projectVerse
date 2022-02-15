import styles from '../../styles/projects.module.scss'

import { useEffect, useState } from "react";
import img from '../../logo.svg'
import useDocumentTitle from "../useDocumentTitle";
import { ReactComponent as Share } from '../../assets/share.svg'
import { Link } from 'react-router-dom';
import { ReactComponent as Bookmark } from '../../assets/bookmark_border_black_24dp.svg'
import { ReactComponent as Like } from '../../assets/thumb_up_alt_black_24dp.svg'
import { ReactComponent as View } from '../../assets/visibility_black_24dp.svg'
//Project Card Component
const ProjectCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.share}> <Share fill="black" width="100%" height="100%" /></div>
            <div className={styles.cardWrapper}>
                <Link className={styles.imageContainer} to={`/project/${props.link}`} target={'_blank'} >
                    <img src={props.image} alt="" className={styles.image} />
                </Link>
                <div className={styles.cardBody}>
                    <div className={styles.cardText}>{props.author}</div>
                    <div className={styles.cardText}>{props.createdAt}</div>
                    <div className={styles.title}>{props.title}</div>
                    <div className={styles.cardText}>{props.cardText}</div>
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
    // const [projectData, setData] = useState([])
    // const projectAPI = () => {
    //     try {
    //         axios({
    //             method: "GET",
    //             url: "http://localhost:5000/api/projects",
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json;charset=UTF-8',
    //             }
    //         }).then((res) => { setData(res.data) })
    //     } catch (error) {
    //         console.error(error);
    //         return error
    //     }
    // }
    // useEffect(() => {
    //     projectAPI();
    // }, [])

    const projectData = [
        {
            _id: '1',
            title: 'Some shit',
            author: 'Steve',
            discription: 'Steve made apple inc we make pineapple',
            status: 'Fucked up',
            link: 'https://www.linkedin.com/in/manik-singhal/',
            thumbnail: img,
            likes: 111,
            views: 1111,
            createdAt: '1 eternity ago'
        },
        {
            _id: '2',
            title: 'Some shit',
            author: 'a',
            discription: 'lorem',
            status: 'lorem',
            link: 'adsdas',
            thumbnail: img,
            createdAt: 'asdasdasd'

        },
        {
            _id: '3',
            title: 'Some shit',
            author: 'sadasdas',
            discription: 'asdasda',
            status: 'asdasdasd',
            link: 'dasdasda',
            thumbnail: img,
            createdAt: 'dasdasd'
        },
        {
            _id: '4',
            title: 'Some shit',
            author: 'sadasdas',
            discription: 'asdasda',
            status: 'asdasdasd',
            link: 'dasdasda',
            thumbnail: img,
            createdAt: 'dasdasd'
        },
        {
            _id: '4',
            title: 'Some shit',
            author: 'sadasdas',
            discription: 'asdasda',
            status: 'asdasdasd',
            link: 'dasdasda',
            thumbnail: img,
            createdAt: 'dasdasd'
        },
        {
            _id: '4',
            title: 'Some shit',
            author: 'sadasdas',
            discription: 'asdasda',
            status: 'asdasdasd',
            link: 'dasdasda',
            thumbnail: img,
            createdAt: 'dasdasd'
        },
        {
            _id: '4',
            title: 'Some shit',
            author: 'sadasdas',
            discription: 'asdasda',
            status: 'asdasdasd',
            link: 'dasdasda',
            thumbnail: img,
            createdAt: 'dasdasd'
        },
        {
            _id: '4',
            title: 'Some shit',
            author: 'sadasdas',
            discription: 'asdasda',
            status: 'asdasdasd',
            link: 'dasdasda',
            thumbnail: img,
            createdAt: 'dasdasd'
        }
    ]
    return (
        <div className={styles.projects} >
            {projectData.map((element) => (
                <ProjectCard key={element._id} link={element._id} image={element.thumbnail} likes={element.likes} views={element.views} author={element.author} created={element.createdAt} title={element.title} cardText={element.discription} />
            ))}
        </div>
    )
}

export default Projects;
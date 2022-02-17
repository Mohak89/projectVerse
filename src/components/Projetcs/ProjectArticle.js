import styles from './projectArticle.module.scss'
import logo from '../../assets/share.svg'
import useDocumentTitle from '../useDocumentTitle';
import { useEffect, useState } from 'react';
import axios from 'axios';
const ProjectArticle = (props) => {
    const [projectData, setData] = useState([])
    const projectID = window.location.pathname.replace('/project/','')
    console.log(projectID)
    const projectAPI = async() => {
        try {
            const data = await axios({
                method: "GET",
                url: `http://127.0.0.1:8000/api/projects/${projectID}/?format=json`,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            })
            setData(data.data)
            
        } catch (error) {
            console.error(error);
            return error
        }
    }
    useEffect(() => {
        projectAPI();
        console.log(projectData)
    }, [projectID])
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    {projectData.project_title}
                </div>
                <div className={styles.image}>
                    <img src={logo} alt="" srcset="" />
                </div>
                <div className={styles.articleWrapper}>
                    <div className={styles.authorWrapper}>
                        <div className={styles.articleInfo}>
                            <div className={styles.authorImage}>
                                <img src={logo} alt="" srcset="" />
                            </div>
                            <div className={styles.authorName}>
                                {projectData.owner}
                            </div>
                            <div className={styles.startedAt}>{new Date(projectData.created).toDateString()}</div>
                        </div>
                        <div className={styles.authorSocialMedia}>
                            <div className={styles.media}>F</div>
                            <div className={styles.media}>F</div>
                            <div className={styles.media}>F</div>
                            <div className={styles.media}>F</div>
                            <div className={styles.media}>F</div>
                        </div>
                    </div>
                </div>
                {projectData.project_desc}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut saepe pariatur nisi provident, recusandae explicabo natus id error obcaecati laborum qui accusamus at vel ipsa rem eaque ducimus iure.
            </div>
        </>
    )
}
export default ProjectArticle
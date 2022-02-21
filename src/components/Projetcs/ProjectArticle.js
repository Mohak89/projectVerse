import logo from 'assets/share.svg'
import useDocumentTitle from '../useDocumentTitle';
import { AuthorImage, AuthorName, AuthorWrapper, ArticleInfo, ArticleWrapper, Image, Title, ImageWrapper, Container } from './ProjectArticleStyles'
import { useEffect, useState } from 'react';
import NotFound from '../NotFound'
import axios from 'axios';
const ProjectArticle = (props) => {
    const [projectData, setData] = useState([])
    const [exist, setExist] = useState(false)
    const projectID = window.location.pathname.replace('/project/', '')
    console.log(projectID)
    const projectAPI = async () => {
        try {
            const data = await axios({
                method: "GET",
                url: `http://127.0.0.1:8000/api/projects/${projectID}/?format=json`,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            })
            if (!data || data.status !== 200) {
                setExist(false)
            }
            else setData(data.data)

        } catch (error) {
            console.error(error);
            return error
        }
    }
    useEffect(() => {
        projectAPI();
        console.log(projectData)
    }, [projectID,exist])
    return (
        <>
            {exist && <Container>
                <Title>
                    {projectData.project_title}
                </Title>
                <ImageWrapper>
                    <Image src={logo} alt="" srcset="" />
                </ImageWrapper>
                <ArticleWrapper>
                    <AuthorWrapper>
                        <ArticleInfo>
                            <AuthorImage>
                                <img src={logo} alt="" srcset="" />
                            </AuthorImage>
                            <AuthorName>
                                {projectData.owner}
                            </AuthorName>
                            <div>{new Date(projectData.created).toDateString()}</div>
                        </ArticleInfo>
                    </AuthorWrapper>
                </ArticleWrapper>
                {projectData.project_desc}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut saepe pariatur nisi provident, recusandae explicabo natus id error obcaecati laborum qui accusamus at vel ipsa rem eaque ducimus iure.
            </Container>
            }
            {!exist && <NotFound/>}
        </>
    )
}
export default ProjectArticle
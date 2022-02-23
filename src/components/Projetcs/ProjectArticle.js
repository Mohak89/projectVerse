// import useDocumentTitle from '../useDocumentTitle';
import { AuthorImage, AuthorName, AuthorWrapper, ArticleInfo, ArticleWrapper, Image, Title, ImageWrapper, Container } from './ProjectArticleStyles'
import NotFound from '../NotFound'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Editor from './Editor';
import 'styles/GeneralStyles.scss'
const ProjectArticle = (props) => {
    const [projectData, setData] = useState()
    const { projectID } = useParams();
    const projectAPI = async () => {
        try {
            const response = await axios({
                method: "GET",
                url: `http://127.0.0.1:8000/api/projects/${projectID}/?format=json`,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            })
            setData(response.data)
            console.log(response.data)
        } catch (error) {
            console.error(error);
            return error
        }
    }
    useEffect(() => {
        projectAPI();
        // projectData && useDocumentTitle(projectData.project_title)
        // window.history.replaceState('My new page title',`http://localhost:3000/${projectData.owner}/${projectID}`)
    }, [projectID])
    return (
        <>
            {projectData && <Container>
                <Title>
                    {projectData.project_title}
                </Title>
                <ImageWrapper>
                    {/* <Image src={logo} alt="" srcset="" /> */}
                </ImageWrapper>
                <ArticleWrapper>
                    <AuthorWrapper>
                        <ArticleInfo>
                            <AuthorImage>
                                {/* <img src={logo} alt="" srcset="" /> */}
                            </AuthorImage>
                            <AuthorName>
                                {projectData.owner}
                            </AuthorName>
                            <div>{new Date(projectData.created).toDateString()}</div>
                        </ArticleInfo>
                    </AuthorWrapper>
                </ArticleWrapper>
                <Editor readOnly initialData={JSON.parse(projectData.project_desc)} />
            </Container>
            }
            {!projectData && <NotFound />}
        </>
    )
}
export default ProjectArticle
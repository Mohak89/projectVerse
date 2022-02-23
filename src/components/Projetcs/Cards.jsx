import { ReactComponent as BookmarkIcon } from 'assets/bookmark_border_black_24dp.svg'
import { ReactComponent as LikeIcon } from 'assets/like-icon.svg'
import { ReactComponent as ViewIcon } from 'assets/visibility_black_24dp.svg'
import {ProjectMoreInfo,ProjectStats,Marked,Rectangle,Circle,Text,Bookmark,Stat,Card,CardBody,CardText,CardWrapper,Image,ImageContainer,Title} from 'styles/ProjectCardStyles'

const Skeleton = ({height,width,animation,variant}) => {
    
    return (
        <>
            {variant === 'Circle' && <Circle  height={height} width={width} animation={animation}/>}
            {variant === 'Text' && <Text  height={height} width={width} animation={animation} />}
            {variant === 'Rectangle' && <Rectangle  height={height} width={width} animation={animation}/>}
        </>
    )
}
const ProjectCard = (props) => {
    return (
        <Card>
            {/* <div className={styles.share}> <Share fill="black" width="100%" height="100%" /></div> */}
            <CardWrapper>
                <ImageContainer to={`/project/${props.link}`} target={'_blank'} >
                    <Image src={props.image} alt="" />
                </ImageContainer>
                <CardBody>
                    <Title>{props.title}</Title>
                    <CardText>{props.discription}</CardText>
                    <CardText>{props.author}</CardText>
                    {/* <CardText>{props.createdAt}</CardText> */}
                </CardBody>
                <ProjectMoreInfo>
                    <ProjectStats>
                        <Stat>
                            <span>{props.likes} </span>
                            <LikeIcon />
                        </Stat>
                        <Stat>
                            <span>{props.views}</span>
                            <ViewIcon />
                        </Stat>
                    </ProjectStats>
                    <Bookmark>
                        <BookmarkIcon />
                    </Bookmark>
                </ProjectMoreInfo>
            </CardWrapper>
        </Card>
    )
}
const SkeletonCard = () => {
    return (
        <Card>
            <CardWrapper>
                <Skeleton variant={'Rectangle'} height={'10rem'} width={'100%'} animation={'disabled'}/>
                <Skeleton variant={'Text'} height={'8px'} width={'70%'} />
                <Skeleton variant={'Text'} height={'8px'} width={'85%'} />
                <Skeleton variant={'Text'} height={'8px'} width={'65%'} />
                <hr />
                <Skeleton variant={'Rectangle'} height={'2rem'} width={'100%'} />
            </CardWrapper>
        </Card>
    )
}

export {SkeletonCard,ProjectCard}
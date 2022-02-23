import { SkeletonCard } from "./Cards"
import { ProjectCard } from "./Project"

const ExploreProjects = () => {
    const element = {
        _id: '4',
        title: 'Some shit',
        author: 'sadasdas',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non tenetur sapiente. Impedit incidunt delectus veniam. Officia eos dolorem dignissimos?',
        status: 'asdasdasd',
        link: 'dasdasda',
        thumbnail: 'img',
        createdAt: 'dasdasd'
    }
    return (
        <>
            <ProjectCard
                key={element._id}
                link={element._id}
                image={"https://hackster.imgix.net/uploads/attachments/1315695/_uFAv7dW5nX.blob?auto=compress%2Cformat&w=350&h=262.5&fit=min&dpr=1.3020833730697632"}
                likes={0}
                views={0}
                author={element.author}
                createdAt={new Date(element.createdAt).toDateString()}
                title={element.title}
                status={element.status}
                discription={element.discription} />
                <SkeletonCard/>
        </>
    )
}
export default ExploreProjects
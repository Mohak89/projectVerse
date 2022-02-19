import styled from "styled-components"
const Container = styled.div`
    position: relative;
    width: 100%;
    top: 1rem;
    margin-left: auto;
    margin-right: auto;

    @media (min-width:768px){
        max-width: 70%;
    }
`

const Title = styled.div`
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: bold;
`

const ImageWrapper = styled.div`
    height: 40vh;
    width: auto;
    padding: 1rem;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    place-items: center;
`

const Image = styled.img`
    width: inherit;
    height: inherit;
`

const ArticleWrapper = styled.div``

const AuthorWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const ArticleInfo = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
`

const AuthorName = styled.div`
    display: grid;
    place-items: center;
`

const AuthorImage = styled.div`
    grid-row: 1 / span 2;
`

// const startedAt =styled.div`}


// const authorSocialMedia = styled.div`
//     display: flex;
// `
// const media = styled.div`
//     height: 30px;
//     width: 30px;
//     margin: 4px;
//     display: grid;
//     place-items: center;
//     border-radius: 50%;
//     background-color: red;
// `

export {AuthorImage,AuthorName,AuthorWrapper,ArticleInfo,ArticleWrapper,Image,Title,ImageWrapper,Container}
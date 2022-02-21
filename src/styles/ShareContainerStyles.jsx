import styled from 'styled-components'
const Container = styled.div`
    height: auto;
    width:inherit;
    display: flex;
    flex-direction: column;
    padding:1rem;
    margin-left: auto;
    margin-right: auto;
`
const ShareText = styled.div`
    padding:0.4rem;
`
const SocialMediaWrapper = styled.div`
    display: flex;
`
const MediaBox = styled.a`
    height: 3.2rem;
    width: 3.2rem;
    margin:0.6rem 0.6rem 0.6rem 0;
    border-radius: 12px;
    display: grid;
    place-items: center;
    transition: 0.1s ease-in;
    svg{
        height: 2.5rem;
        width: 2.5rem;
    }
    &:hover{
        box-shadow: 4px 4px 12px silver,-4px -4px 12px silver;
    }
`

const ClipBoardWrapper = styled.div`
    max-width: 100%;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    place-items: center;
    @media (max-width:480px){
        flex-direction:column;
        place-items: flex-start;
    }
`
const LinkText=styled.input`
    width: 100%;
    padding: 0 16px;
    font-size: 1rem;
    height: 34px;
    border: 1px solid #ebf0f5;
    border-radius: 5px;
    cursor: pointer;
    @media (max-width:480px){
        font-size: .875rem;
    }
`
const CopyToClipBoard = styled.div`
    width: max-content;
    height: 34px;
    font-size: 1rem;
    padding: 0 16px;
    display: flex;
    cursor: pointer;
    align-items: center;
    border: 1px solid #ebf0f5;
    border-radius: 5px;
    border-bottom-left-radius: auto;
    border-top-left-radius: auto;
    @media (max-width:480px){
        font-size: .875rem;
        margin-top: 10px;
    }
`
export { Container, SocialMediaWrapper, MediaBox,LinkText, ClipBoardWrapper, CopyToClipBoard, ShareText }
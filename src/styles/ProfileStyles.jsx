import styled from "styled-components";

const WrapperContainer = styled.div`
    padding-top: 1rem;
`
const BannerWrapper = styled.div`
    height: 230px;  
`
const BannerContainer = styled.div`
    display: flex;
    min-height: 120px;
    height: inherit;
    overflow: hidden;
    position: relative;
    background-color: rgb(229, 232, 235);
`
const Banner = styled.div`
    background-color: grey;
`

const BannerImageWrapper = styled.div`
    height: 600px;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    position: relative;
`
const BannerImage = styled.img`
    object-fit: cover;
    height: 100%;
    transition: opacity 400ms ease 0s;
    width: 100%;
`

const UserInfo = styled.div`
    max-width: 500px;
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 200px;
    margin: 0px auto;
`
const UserImageWrapper = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    transform: translateY(-50%);
`
const UserImage = styled.img`
    height: inherit;
    width: inherit;
    border-radius: inherit;
`
const UserName = styled.div`
    font-size: 60px;
`
const MediaWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    column-gap: 24px;
`
const Media = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    font-size: 30px;
    justify-content: flex-end;
`
const VerticalSeprator = styled.div`
    height: 100%;
    width: 1px;
    background-color: rgb(229, 232, 235);
`

const ShareWrapper = styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
padding: 0px 8px;
justify-content: end;
width: 100%;
position: sticky;
box-sizing: border-box;
top: 72px;
z-index: 50;
left: 0px;
height: 72px;
margin-bottom: calc(-72px);
transition: opacity 0.2s ease-in 0s;
`
const ShareButton = styled.div`
    display: flex;
    justify-content: flex-end;
`
export {VerticalSeprator,Media,MediaWrapper,UserImage,UserImageWrapper,UserInfo,UserName,Banner,BannerContainer,BannerImage,BannerWrapper,BannerImageWrapper,WrapperContainer,ShareButton,ShareWrapper}
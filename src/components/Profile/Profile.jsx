import { ReactComponent as Share } from './../../assets/share_black_24dp.svg';
import image from './../../assets/DSC02799.JPG'
import { useAuth0 } from "@auth0/auth0-react";
import Projects from '../Projetcs/Project';
import { VerticalSeprator, Media, MediaWrapper, UserImage, UserImageWrapper, UserInfo, UserName, Banner, BannerContainer, BannerImage, BannerWrapper, BannerImageWrapper, WrapperContainer,ShareButton,ShareWrapper } from '../../styles/ProfileStyles';


const AboutInnovator = () => {
  return (
    <WrapperContainer>
      <BannerWrapper>
        <BannerContainer>
          <Banner />
          <BannerImageWrapper>
            <BannerImage src={image} alt="" />
          </BannerImageWrapper>
        </BannerContainer>
      </BannerWrapper>
      <ShareWrapper>
        <ShareButton>
          <Share/>
        </ShareButton>
      </ShareWrapper>
      <UserInfo>
        <UserImageWrapper>
          <UserImage src={'https://cdn.vox-cdn.com/thumbor/dOZfqr8j2NcSa8Vjn0pPzg2gm2s=/0x0:2012x1341/1220x813/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'} alt="" />
        </UserImageWrapper>
        <UserName>Cyborg</UserName>
        <MediaWrapper>
          <Media>Tyitter</Media>
          <VerticalSeprator />
          <Media>Github</Media>
        </MediaWrapper>
      </UserInfo>
      <Projects />
    </WrapperContainer>
  )
}

export default AboutInnovator
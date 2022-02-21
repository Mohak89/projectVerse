import { ReactComponent as Share } from 'assets/share_black_24dp.svg';
import image from 'assets/DSC02799.JPG'
import { useAuth0 } from "@auth0/auth0-react";
import Projects from '../Projetcs/Project';
import { VerticalSeprator, Media, MediaWrapper, UserImage, UserImageWrapper, UserInfo, UserName, Banner, BannerContainer, BannerImage, BannerWrapper, BannerImageWrapper, WrapperContainer, ShareButton, ShareWrapper } from '../../styles/ProfileStyles';
import axios from 'axios';
import Modal from 'components/Modal/Modal';
import ShareContainer from 'components/ShareContainer/ShareContainer';
import { useState } from 'react';


const AboutInnovator = () => {
  const InnovatorUserName = window.location.pathname.split('/')[2]
  const [isModalOpen, setModal] = useState(false)
  console.log(InnovatorUserName)
  const getInnovatorInfo = async () => {
    const response = await axios({
      method: 'GET',
      url: `http://127.0.0.1:8000/api/users/${InnovatorUserName}/?format=json`
    })
    console.log(response)
  }
  // getInnovatorInfo()
  return (
    <>
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
          <ShareButton onClick={()=>setModal(true)}>
            <Share />
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
      <Modal isMobile={true} isOpen={isModalOpen} setModalState={() => setModal(false)}>
        <ShareContainer />
      </Modal>
    </>
  )
}

export default AboutInnovator
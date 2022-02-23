import { ReactComponent as Share } from 'assets/share_black_24dp.svg';
import image from 'assets/DSC02799.JPG'
import { useAuth0 } from "@auth0/auth0-react";
import { ReactComponent as GithubIcon } from 'assets/GithubIcon.svg'
import { ReactComponent as TwitterIcon } from 'assets/twitter.svg'
import Projects from '../Projetcs/Project';
import { VerticalSeprator, Media, MediaWrapper, UserImage, UserImageWrapper, UserInfo, UserName, Banner, BannerContainer, BannerImage, BannerWrapper, BannerImageWrapper, WrapperContainer, ShareButton, ShareWrapper } from '../../styles/ProfileStyles';
import axios from 'axios';
import Modal from 'components/Modal/Modal';
import ShareContainer from 'components/ShareContainer/ShareContainer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from 'components/Dropdown/Dropdown';


const AboutInnovator = () => {
  const { username } = useParams()
  const [isModalOpen, setModal] = useState(false)
  const [userData, setUserData] = useState();
  const [exist, setExist] = useState(false)

  const getInnovatorInfo = async () => {
    const response = await axios({
      method: 'GET',
      url: `http://127.0.0.1:8000/api/users/${username}/?format=json`
    })
    if (!response || response.status !== 200) {
      setExist(false)
    }
    else {
      setUserData(response.data)
      setExist(true)
    }
  }
  useEffect(() => {
    getInnovatorInfo()
    console.log("calllllll")
    console.log(userData)
  }, [username])
  var preset = [
    { presetName: "Code Explainer", presetId: 'code_completetion', key: 1 },
    { presetName: "Text Completion", presetId: 'text_completetion1',  key: 2 },
    { presetName: "Text Completion", presetId: 'text_completetion2',  key: 3 },
    { presetName: "Text Completion", presetId: 'text_completetion3',  key: 4 },
]
  return (
    exist && <>
      <Dropdown dataList={preset}
        itemKey={"key"}
        title={"presetName"}
        // callBack={setPreset}
        searchBox={true}
        searchBoxInitial={{ presetName: 'Select Preset'}} />
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
          <ShareButton onClick={() => setModal(true)}>
            <Share />
          </ShareButton>
        </ShareWrapper>
        <UserInfo>
          <UserImageWrapper>
            <UserImage src={'https://cdn.vox-cdn.com/thumbor/dOZfqr8j2NcSa8Vjn0pPzg2gm2s=/0x0:2012x1341/1220x813/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'} alt="" />
          </UserImageWrapper>
          <UserName>{userData.username}</UserName>
          <MediaWrapper>
            <Media href={'https://twitter.com'} target={'_blank'}><TwitterIcon /></Media>
            <VerticalSeprator />
            <Media href={'https://github.com'} target={'_blank'}><GithubIcon /></Media>
          </MediaWrapper>
        </UserInfo>
        <Projects url={`http://127.0.0.1:8000/api/users/${username}/projects/?format=json`} />
      </WrapperContainer>
      <Modal isMobile={true} isOpen={isModalOpen} setModalState={() => setModal(false)}>
        <ShareContainer />
      </Modal>
    </>
  )
}

export default AboutInnovator
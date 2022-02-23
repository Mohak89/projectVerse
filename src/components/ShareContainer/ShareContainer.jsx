import { Container, MediaBox, SocialMediaWrapper,LinkText, ClipBoardWrapper,  CopyToClipBoard, ShareText } from 'styles/ShareContainerStyles'
import { ReactComponent as CopyIcon } from 'assets/copy.svg'
import { ReactComponent as Linkedin } from 'assets/linkedin.svg'
import { ReactComponent as Whatsapp } from 'assets/whatsapp-logo.svg'
import { ReactComponent as Twitter } from 'assets/twitter.svg'
import copy from 'copy-to-clipboard'
import { useState } from 'react'
const ShareContainer = () => {
    const [isCopied,setCopied] = useState(false)
    const URL = 'https://projectverse.com/Sanitheway'
    const Text='This is a good world'
    return (
        <Container>
            <ShareText>
                Share with your friends
            </ShareText>
            <ClipBoardWrapper >
                <LinkText value={URL} disabled onClick={() => { copy(URL); setCopied(true) }}/>
                < CopyToClipBoard onClick={() => { copy(URL); setCopied(true) }}>
                    <CopyIcon />
                    {isCopied? 'Copied':'Copy'}
                </ CopyToClipBoard>
            </ClipBoardWrapper>
            <SocialMediaWrapper>
                <MediaBox href={`https://www.linkedin.com/sharing/share-offsite/?url=${URL}`} rel={'noopener noreferrer'} target={'_blank'}>
                    <Linkedin />
                </MediaBox>
                <MediaBox href={`https://api.whatsapp.com/send?text=${Text}&${URL}`} rel={'noopener noreferrer'} target={'_blank'}>
                    <Whatsapp />
                </MediaBox>
                <MediaBox href={`https://twitter.com/intent/tweet?text=${Text}&url=${URL}`} rel={'noopener noreferrer'} target={'_blank'}>
                    <Twitter />
                </MediaBox>
            </SocialMediaWrapper>
        </Container>
    )
}
export default ShareContainer
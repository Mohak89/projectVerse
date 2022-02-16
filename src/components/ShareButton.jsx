import { ReactComponent as Share } from './../assets/share_black_24dp.svg';
import { FacebookIcon, FacebookShareButton, TwitterShareButton } from 'react-share';

const ShareButton = () => {
    const getCurrentURL = () =>{
        return window.location.href
    }
    return (
        <div onClick={getCurrentURL}>
            {/* <Share/> */}
            <TwitterShareButton url='github.com'>
                <FacebookIcon size={32} round={true}/>
            </TwitterShareButton>
        </div>
    )
}

export default ShareButton;
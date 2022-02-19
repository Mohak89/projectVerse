import styles from '../../styles/AboutInnovator.module.scss'
import { ReactComponent as Share } from './../../assets/share_black_24dp.svg';
import image from './../../assets/DSC02799.JPG'
import { useAuth0 } from "@auth0/auth0-react";
import Projects from '../Projetcs/Project';

const AboutInnovator = () => {
    return (
        <div className={styles.containerWrapper}>
            <div className={styles.bannerWrapper}>
                <div className={styles.bannerContainer}>
                    <div className={styles.bannerImage}>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.shareContainer}>
                <div className={styles.share}>
                    <Share />
                </div>
            </div>
            <div className={styles.userInfo}>
                <div className={styles.userImage}>
                    <img src={'https://cdn.vox-cdn.com/thumbor/dOZfqr8j2NcSa8Vjn0pPzg2gm2s=/0x0:2012x1341/1220x813/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'} alt="" />
                        </div>
                <div className={styles.userName}>Cyborg86</div>
                <div className={styles.socialMedia}>
                    <div className={styles.media}>Twitter</div>
                    <div className={styles.verticalSeprator} />
                    <div className={styles.media}>Github</div>
                </div>
            </div>
        <Projects/>
        </div>
    )
}

export default AboutInnovator
import styles from './projectArticle.module.scss'
import logo from '../../assets/share.svg'

const projectArticle = (props) => {
    console.log("Some shit happened")
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, culpa.
                </div>
                <div className={styles.image}>
                    <img src={logo} alt="" srcset="" />
                </div>
                <div className={styles.articleWrapper}>
                    <div className={styles.authorWrapper}>
                        <div className={styles.articleInfo}>
                            <div className={styles.authorImage}>
                                <img src={logo} alt="" srcset="" />
                            </div>
                            <div className={styles.authorName}>
                                Mark zuther
                            </div>
                            <div className={styles.startedAt}>{new Date().toDateString()}</div>
                        </div>
                        <div className={styles.authorSocialMedia}>
                            <div className={styles.media}>F</div>
                            <div className={styles.media}>F</div>
                            <div className={styles.media}>F</div>
                            <div className={styles.media}>F</div>
                            <div className={styles.media}>F</div>
                        </div>
                    </div>
                </div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut saepe pariatur nisi provident, recusandae explicabo natus id error obcaecati laborum qui accusamus at vel ipsa rem eaque ducimus iure.
            </div>
        </>
    )
}
export default projectArticle
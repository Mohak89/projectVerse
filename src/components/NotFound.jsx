import { Link } from "react-router-dom"
import styles from '../styles/NotFound.module.scss'
const NotFound = () => {
    return ( 
        <div className={styles.notFound}>
            <span>Page Not Found</span>
            <span className={styles.errorCode}>404 Error</span>
            <p>We cannot find that page!</p>
            <Link to='/'>Take me back to Home</Link>
        </div>
     );
}

export default NotFound;
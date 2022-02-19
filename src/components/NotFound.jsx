import { Link } from "react-router-dom"
import {NotFoundDiv,ErrorCode} from '../styles/NotFoundStyle'
const NotFound = () => {
    return ( 
        <NotFoundDiv>
            <span>Page Not Found</span>
            <ErrorCode>404 Error</ErrorCode>
            <p>We cannot find that page!</p>
            <Link to='/'>Take me back to Home</Link>
        </NotFoundDiv>
     );
}

export default NotFound;
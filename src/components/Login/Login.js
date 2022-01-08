import styles from '../../styles/LoginSignup.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const NavItem = (props) => {
    return (
        <Link to={props.to} className={props.active} onClick={props.click}>
            <div className={props.classes}>
                {props.ItemText}
            </div>
        </Link>
    )
}
const Login = () => {
    const [keepSigned, setKeepSigned] = useState(false)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const handleClick = (e) => console.log(keepSigned, username, password);
    return (
        <div className={`${styles.container} ${styles.mxAuto}`}>
            <div className={styles.form}>
                <div className={`${styles.avatar} ${styles.mxAuto}`}>
                    <img src={avatar} alt="" />
                </div>
                <div className={styles.text}><h1>Login</h1></div>
                <div className={styles.text}>Login to existing Account</div>
                <div className={`${styles.formContainer} ${styles.mxAuto}`}>
                    <div className={styles.credentials}>
                        <input type="text" placeholder="Username/Email" onChange={e => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        <div className={`${styles.mxAuto} ${styles.flexContainer}`}>
                            <input type="checkbox" className={styles.checkbox} name="" id="" onChange={e => setKeepSigned(!e.target.value)} />
                            <span className={`${styles.checkBoxText} ${styles.myAuto}`}> Keep me signed in</span>
                        </div>
                    </div>
                    <button type="submit" onClick={handleClick}>Login</button>
                </div>
                <hr />
                <div className={styles.text}> <NavItem ItemText="Don't have a acoount? Create One" to="/signup" /> </div>
            </div>
        </div>
    );

}

export default Login
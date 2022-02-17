import { useCallback, useEffect } from 'react';
import ReactDom from 'react-dom'
import {ReactComponent as Close} from '../../assets/close_black_24dp.svg'
import styles from './Modal.module.scss'

const Modal = ({ isOpen, setModalState, children }) => {
    if (!isOpen) return null;
    
    return ReactDom.createPortal(
        <>
            <div className={styles.ModalWrapper}>
                <div className={styles.ModalBox}>
                    <button className={styles.close} onClick={()=>setModalState(false)}>
                        <Close/>
                    </button>
                    {children}
                </div>
            </div>
        </>,
        document.getElementById("modal")
    )
}

export default Modal
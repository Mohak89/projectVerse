import { useCallback, useEffect } from 'react';
import ReactDom from 'react-dom'
import {ReactComponent as CloseIcon} from '../../assets/close_black_24dp.svg'
import {ModalBox,ModalWrapper,Close} from './ModalStyle'

const Modal = ({ isOpen, setModalState, children }) => {
    if (!isOpen) return null;
    
    return ReactDom.createPortal(
        <>
            <ModalWrapper>
                <ModalBox>
                    <Close onClick={()=>setModalState(false)}>
                        <CloseIcon/>
                    </Close>
                    {children}
                </ModalBox>
            </ModalWrapper>
        </>,
        document.getElementById("modal")
    )
}

export default Modal
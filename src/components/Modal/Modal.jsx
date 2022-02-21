import ReactDom from 'react-dom'
import {ReactComponent as CloseIcon} from 'assets/close_black_24dp.svg'
import {ModalBox,ModalWrapper,Close} from './ModalStyle'

const Modal = ({ isOpen, setModalState, children,isMobile }) => {
    if (!isOpen) return null;
    
    return ReactDom.createPortal(
        <>
            <ModalWrapper >
                <ModalBox isMobile={false}>
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
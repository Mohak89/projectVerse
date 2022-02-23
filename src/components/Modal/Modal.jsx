import ReactDom from 'react-dom'
import { ReactComponent as CloseIcon } from 'assets/close_black_24dp.svg'
import { ModalBox, ModalWrapper, Close, Overlay } from './ModalStyle'
import { useEffect } from 'react';
import 'styles/GeneralStyles.scss'

const Modal = ({ isOpen, setModalState, children, isMobile }) => {

    if (!isOpen) {
        document.body.classList.remove('noscroll')
        return null;
    }
    document.body.classList.add('noscroll')
    const handleKeyDown = (e) => {
        const key = e.key;
        if (key === 'Escape') setModalState(false)
    }
    useEffect(() => {
        window.addEventListener('keydown', (e) => handleKeyDown(e))
        return window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen])
    return ReactDom.createPortal(
        <>
            <ModalWrapper>
                <Overlay onClick={() => setModalState(false)} />
                <ModalBox isMobile={false}>
                    <Close onClick={() => setModalState(false)}>
                        <CloseIcon />
                    </Close>
                    {children}
                </ModalBox>
            </ModalWrapper>
        </>,
        document.getElementById("modal")
    )
}

export default Modal
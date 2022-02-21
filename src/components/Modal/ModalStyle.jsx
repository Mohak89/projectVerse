import styled, { keyframes } from 'styled-components'
const ModalWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.548);
    position: fixed;
    top:0;
`

const ModalBox = styled.div`
    position:absolute;
    top:${props=>props.isMobile? 'auto' : '50%'};
    bottom:${props=>props.isMobile?'0':''};
    left: 50%;
    ${props=>props.isMobile?'transform: translatex(-50%)':'transform: translate(-50%,-50%)'};
    width:${props=>props.isMobile ? '100%' : '80%'};
    height: max-content;
    display: flex;
    flex-direction: column;
    border-radius: ${props=>props.isMobile?'20px 20px 0px 0px':'20px'};
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.295),-2px -2px 20px rgba(0, 0, 0, 0.295);
    background:white;
`
const MobileModalBox = styled(ModalBox)`
    top:auto;
    bottom:0;
    left: 50%;
    transform: translatex(-50%);
`
const Close = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    height: max-content;
    display: flex;
    justify-content: end;
    padding: 1rem;
`
export {ModalWrapper,ModalBox,Close,MobileModalBox}

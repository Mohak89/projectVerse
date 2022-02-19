import styled, { keyframes } from 'styled-components'
const ModalWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.548);
    position: fixed;
    top:0;
`
const grow = keyframes`
0%{
    width:0;
    height: 0;
}
100%{
    width:60%;
    height: 60%;
}
`
const ModalBox = styled.div`
    position:absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width:60%;
    height: 60%;
    display: flex;
    flex-direction: column;
    border-radius: 80px 0px 80px 0px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.295),-2px -2px 20px rgba(0, 0, 0, 0.295);
    background:linear-gradient(145deg,cyan,purple);
    animation: ${grow} 0.2s ;
`
const Close = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    height: max-content;
    display: flex;
    justify-content: end;
`
export {ModalWrapper,ModalBox,Close}

import styled, { keyframes } from 'styled-components'
const DropdownContainer = styled.div`
    position: relative;
    width: 15rem;
`

const DropdownWrapper = styled.div`
    height: 2.4rem;
    width: 100%;
    `

const InputBox = styled.div`
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    border: 1px solid grey;
    box-shadow: none;
    cursor: default;
    -webkit-box-pack: justify;
    position: relative;
    transition: all 100ms ease 0s;
    box-sizing: border-box;
    outline: 0px !important;
    flex-direction: row;
    height: 100%;
    justify-content: space-between;
    display: flex;
    width: inherit;
`

const SearchBoxWrapper = styled.div`
    display: flex;
    place-items: center;
    padding-left: 0.4rem;
    cursor: text;
    height: inherit;
`

const SearchBox = styled.input`
    box-sizing: content-box;
    background: 0px center;
    border: 0px;
    font-size: inherit;
    opacity: 1;
    outline: 0px;
    padding: 0px;
    color: inherit;
    height: inherit;
    display: grid;
    place-items: center;
`

const ArrowDown = styled.div`
    right: 0;
    margin-left: auto;
    height: inherit;

    img{
        height: 100%;
        width: auto;
    }
`
const DropdownItemsBox = styled.div`
    max-height: 300px;
    overflow-y: auto;
    padding-bottom: 4px;
    padding-top: 4px;
    position: relative;
    box-sizing: border-box;
`

const DropdownItemsWrapper = styled.div`
    top: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 11px;
    margin-bottom: 8px;
    margin-top: 8px;
    position: absolute;
    width: 100%;
    z-index: 3;
    box-sizing: border-box;

`

const TopToBottom = keyframes`
    0%{
        height: 0;
    }

    100%{
        height: 14rem;
    }
`
const DropdownItems = styled.div`
    padding: 8px;
    box-sizing: border-box;
    `

const example = styled.div`
    padding: 0.4rem;
    color: rgb(201, 201, 201);
    cursor: default;
`

const Item = styled.div`
    padding: 0.4rem;
    cursor: pointer;
    &:focus{
        outline: none;
        background-color: rgb(226, 226, 226);
    }
`

export { Item, DropdownItemsWrapper, DropdownItemsBox, DropdownItems, DropdownWrapper, DropdownContainer, ArrowDown, SearchBox, SearchBoxWrapper, InputBox }
import styled from "styled-components";

const TagsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid silver;
    border-radius: 4px;
    padding: 0.3rem;
    margin: 0.5rem 0;
    flex-wrap: wrap;
`
const StyledInput = styled.input`
        min-width: 40%;
        max-width: 100%;
        padding: 0.1rem 0.4rem;
        margin: 0.3rem;
        border-radius: 4px;
        border: none;
        outline: none;
`
const Tag = styled.div`
        width: max-content;
        padding: 0.1rem 0.4rem;
        margin: 0.3rem;
        border-radius: 4px;
        background-color: orange;
        display: flex;
        place-items: center;
`
const Close = styled.div`
            height: 18px;
            width: 18px;
            cursor: pointer;
            svg {
                height:inherit;
                width: inherit;
            }
`

export {Close,TagsWrapper,Tag,StyledInput}
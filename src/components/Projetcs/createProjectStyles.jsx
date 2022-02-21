import styled from 'styled-components';
const EditorContainer = styled.div`
    position: relative;
    width: 80%;
    max-width: 1000px;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 4px 4px 20px rgb(202, 202, 202), -4px -4px 20px rgb(240, 240, 240);
    border-radius: 20px;
    padding: 1rem;
`
const Title = styled.div`
    width: 100%;
    max-width: 650px;
    left: 0;
    right: 0;
    margin: auto;
    outline:none;
    box-sizing: border-box;
`
const Input = styled.input`
    border-radius: 4px;
    border: none;
    width: 100%;
    font-size: 32px;
    font-weight: bold;
`

const Editor = styled.div`
    width: 100%;
`

const Options = styled.div`
    margin-top: 1rem;
`

const Label = styled.label`
    margin-right: 4px;
`

const Select = styled.select`
    margin-right: 4px;
`
export { EditorContainer,Editor,Title,Input,Label,Options,Select }
import 'styles/GeneralStyles.scss'
import TagsInput from '../TagsInput/TagsInput';
import { EditorContainer, Title, Input, Options, Select, EditorWrapper, Label } from './createProjectStyles';
// import ImageTool from '@editorjs/image';

import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Editor from './Editor';
const DEFAULT_INITIAL_DATA = () => {
    return { "time": 1645548005322, "blocks": [{ "id": "gqMrLUhadQ", "type": "paragraph", "data": { "text": "This is my first test create project" } }], "version": "2.23.2" }
}
const CreateProject = () => {
    const [editorData, setEditorData] = useState(DEFAULT_INITIAL_DATA);
    const [tags, setTags] = useState([])
    const inputRef = useRef();
    const handleUpdate = () => {

    }
    const CreateAPI = async () => {
        const response = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/projects/',
            headers: {
                'Authorization': `Basic ${btoa('randomuser:rand1234')}`
            },
            data: {
                "project_title": inputRef.current.value
                ,
                "project_desc": JSON.stringify(editorData)

            }
        })
        console.log(response)
    }
    return (
        <EditorContainer>
            <Title>
                <Input placeholder={"Title"} ref={inputRef} />
            </Title>
            <EditorWrapper>
                <Editor updateData={setEditorData} initialData={DEFAULT_INITIAL_DATA} />
            </EditorWrapper>
            <Options>
                <Label htmlFor="category">Category</Label>
                <Select name="" id="category">
                    <option value="Entertainment"> Entertainment</option>
                    <option value="Coding">Coding</option>
                    <option value="Hardware">Hardware</option>
                    <option value="I dont know why im doing">I dont know why im doing</option>
                </Select>
            </Options>
            <TagsInput tags={tags} setTags={setTags} />
            <button onClick={() => {
                CreateAPI()
            }}>click me</button>
        </EditorContainer>

    )
}
export default CreateProject
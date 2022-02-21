import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed'
import SimpleImage from '@editorjs/simple-image'
import Table from '@editorjs/table'
import CodeTool from '@editorjs/code'
import Underline from '@editorjs/underline';
import FontSize from 'editorjs-inline-font-size-tool'
import TagsInput from '../TagsInput/TagsInput';
import { EditorContainer, Title, Input, Options, Select, Editor, Label } from './createProjectStyles';
// import ImageTool from '@editorjs/image';

import { useEffect, useRef, useState } from 'react';
const DEFAULT_INITIAL_DATA = () => {
    return {
        "time": new Date().getTime(),
        "blocks": [
        ]
    }
}
const CreateProject = () => {
    const ejInstance = useRef();
    const [editorData, setEditorData] = useState(DEFAULT_INITIAL_DATA);
    const [tags, setTags] = useState([])

    useEffect(() => {
        if (!ejInstance.current) {
            initEditor();
        }
        return () => {
            ejInstance.current.destroy();
            ejInstance.current = null;
        }
    }, []);
    const initEditor = () => {
        const editor = new EditorJS({
            data: editorData,
            holder: 'editorjs',
            tools: {
                image: {
                    class: SimpleImage,
                    inlineToolbar: true
                },
                header: {
                    class: Header,
                    inlineToolbar: ['link'],
                    config: {
                        placeholder: 'Enter a header',
                        levels: [1, 2, 3, 4, 5, 6],
                        defaultLevel: 3
                    }
                },
                underline: Underline,
                fontSize: FontSize,
                list: {
                    class: List,
                    inlineToolbar: true
                },
                code: {
                    class: CodeTool,
                    inlineToolbar: true
                },
                table: {
                    class: Table,
                    inlineToolbar: true,
                    config: {
                        rows: 2,
                        cols: 3,
                    },
                },
                embed: {
                    class: Embed,
                    inlineToolbar: false,
                    config: {
                        services: {
                            youtube: true,
                            coub: true,
                            facebook: true,
                            github: true
                        }
                    }
                },
            },
            onReady: () => {
                ejInstance.current = editor;
            },
            onChange: async () => {
                let content = await ejInstance.current.save();
                // Put your logic here to save this data to your DB
                setEditorData(content);
            },
        })
    }
    return (
        <EditorContainer>
            <Title>
                <Input placeholder={"Title"} />
            </Title>
            <Editor id="editorjs" />
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
                console.log(editorData);
            }}>click me</button>
        </EditorContainer>

    )
}
export default CreateProject
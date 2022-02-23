import logo from 'assets/share.svg'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed'
import SimpleImage from '@editorjs/simple-image'
import Table from '@editorjs/table'
import CodeTool from '@editorjs/code'
import Underline from '@editorjs/underline';
import FontSize from 'editorjs-inline-font-size-tool'
import { useEffect, useRef, useState } from 'react';
const DEFAULT_INITIAL_DATA = () => {
    return {
        "time": new Date().getTime(),
        "blocks": [
        ]
    }
}
const Editor = ({initialData,readOnly,updateData})=>{
    const ejInstance = useRef();
    const [editorData, setEditorData] = useState(initialData);
    useEffect(() => {
        if (!ejInstance.current) {
            initEditor();
        }
        return () => {
            ejInstance.current.destroy();
            ejInstance.current = null;
        }
    }, []);
    const editorID = 'editorjs'
    const initEditor = () => {
        console.log(editorID)
        const editor = new EditorJS({
            data: editorData,
            holder: editorID,
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
            readOnly:readOnly?true:false,
            onReady: () => {
                ejInstance.current = editor;
            },
            onChange: async () => {
                let content = await ejInstance.current.save();
                setEditorData(content);
                updateData && updateData(content);
            },
        })
    }
    return <div id={editorID}/>
}

export default Editor
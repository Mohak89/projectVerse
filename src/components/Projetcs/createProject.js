import styles from './createProject.module.scss'
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState, useRef } from 'react';
const CreateProject = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const onChange = (state) => {
        setEditorState(state)
    }
    const editor = useRef(null);
    function focusEditor() {
        editor.current.focus();
    }
    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    const styleMap = {
        'STRIKETHROUGH': {
          textDecoration: 'line-through',
        },
      };
    return (
        <div className={styles.createContainer}>
            <input className={styles.title} placeholder={"Title"} />
            <Editor
                
                editorState={editorState}
                onChange={setEditorState}
                handleKeyCommand={handleKeyCommand}
                customStyleMap={styleMap}
                 />
                 <div contentEditable={true} className={styles.editor}></div>
            <div className={styles.options}>
                <label htmlFor="category">Category</label>
                <select name="" id="category">
                    <option value="Entertainment"> Entertainment</option>
                    <option value="Coding">Coding</option>
                    <option value="Hardware">Hardware</option>
                    <option value="I dont know why im doing">I dont know why im doing</option>
                </select>
            </div>
        </div>
    )
}
export default CreateProject
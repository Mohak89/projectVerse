import styles from './createProject.module.scss'
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState,useRef } from 'react';

const CreateProject = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const editor = useRef(null);
    function focusEditor() {
        editor.current.focus();
    }
    return (
        <div className={styles.createContainer}>
            <div className={styles.title} contentEditable={true} />
            <div
                style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
                onClick={focusEditor}
            >
                <Editor
                    ref={editor}
                    editorState={editorState}
                    onChange={setEditorState}
                    placeholder="Write something!"
                />
            </div>
            <div className={styles.editor} contentEditable={true} />
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
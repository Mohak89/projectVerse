import { ReactComponent as Close } from '../../assets/close_black_24dp.svg'
import { useState } from 'react';
import styles from './TagsInput.module.scss'

const TagsInput = ({tags,setTags}) => {

    const [input, setInput] = useState('')
    const deleteTag = (index) => {
        setTags(prevState => prevState.filter((tag, i) => i !== index))
    }
    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
      };
    const onKeyDown = (e) => {
        const key = e.key
        if (key === 'Backspace' && input.length === 0) {
            const tagsCopy = [...tags]
            const removedTag = tagsCopy.pop()
            setInput(removedTag)
            setTags(tagsCopy)
        }
        if(key==='Enter'){
            setTags([...tags,input])
            setInput('')
        }
    }
    return (
        <div className={styles.tagsWrapper}>
            {tags.map((tag, index) =>
                <div className={styles.tag} key={index}>
                    {tag}
                    <div className={styles.close} onClick={() => deleteTag(index)}>
                        <Close />
                    </div>
                </div>)}
            <input type="text" 
                value={input} 
                onChange={(e)=>onChange(e)}
                onKeyDown={(e) => onKeyDown(e)}
                placeholder="Add Tags" />
        </div>
    )
}

export default TagsInput
import { ReactComponent as CloseIcon } from 'assets/close_black_24dp.svg'
import { useState } from 'react';
import { Close, TagsWrapper, Tag, StyledInput } from './TagsInputStyles'

const TagsInput = ({ tags, setTags }) => {

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
        if (key === 'Enter') {
            setTags([...tags, input])
            setInput('')
        }
    }
    return (
        <TagsWrapper>
            {tags.map((tag, index) =>
                <Tag key={index}>
                    {tag}
                    <Close onClick={() => deleteTag(index)}>
                        <CloseIcon />
                    </Close>
                </Tag>
            )}
            <StyledInput type="text"
                value={input}
                onChange={(e) => onChange(e)}
                onKeyDown={(e) => onKeyDown(e)}
                placeholder="Add Tags" />
        </TagsWrapper>
    )
}

export default TagsInput
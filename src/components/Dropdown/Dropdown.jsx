import { useState,useEffect,useRef } from 'react'


import { Item, DropdownItemsWrapper, DropdownItemsBox, DropdownItems, DropdownWrapper, DropdownContainer, ArrowDown, SearchBox, SearchBoxWrapper, InputBox } from 'styles/DropdownStyles'

const Dropdown = ({ dataList, itemKey, title, callBack, searchBox = true, searchBoxInitial }) => {
    // const { dataList, itemKey, title, callBack, searchBox = true, searchBoxText } = props //Destructuring of the props
    const [isMenuOpen, setIsMenuOpen] = useState(false) //Store the state of the Dropdown
    const [selectedSearchItem, setSelectedSearchItem] = useState(searchBoxInitial) //Store the selected search item
    const [searchText, setSearchText] = useState('') //Store the value from the search box
    const [activeItem, setActiveItem] = useState()
    const inputRef = useRef() //Used to refrence the input box or the only display div
    const dropDownRef = useRef() //used to reference the dropDown component
    const myRef = useRef() //Used to reference the dropDownItems container


    /**
     * Closes the Dropdown when the focus shifts from dropdown to any other element clicked outside of it.
     * 
     * It works when the myRef.current is not same as the e.relatedTarget and the dropDown wrapper does not contains the e.relatedTarget
     * @param {e} Event  
     */
    const handleBlur = (e) => {
        if (myRef.current !== e.relatedTarget && !dropDownRef.current.contains(e.relatedTarget)) {
            setIsMenuOpen(false)
        }
    }

    /**
     * Closes the dropdown whenever a dropdown element is selected and the selected element is updated to the state 
     * @param {string} presetId 
     */
    const handleSelected = (presetId) => {
        setIsMenuOpen(!isMenuOpen)
        const filtered = dataList.find(item => (item[itemKey] === presetId));
        setSelectedSearchItem(filtered)
        // setActiveItem(myRef)
        setSearchText('')
        setIsMenuOpen(false)
    }
    const moveFocus = (e) => {
        // console.log(activeItem);
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            /** 
             * Checks if the activeItem.current is not undefined 
             * 
             * if true then sets the node as activeItem.current.children[0].
             * This is the first Child of the DropdownItems container.  
             * 
             * else the node is set to be activeItem
            */
            const node = (typeof activeItem.current !== 'undefined') ? activeItem.current.children[0] : activeItem
            setIsMenuOpen(true)
            if (e.key === 'ArrowDown' && node.nextSibling) {
                setActiveItem(node.nextSibling)
                node.nextSibling.focus();
            }
            else if (e.key === 'ArrowUp' && node.previousSibling) {
                setActiveItem(node.previousSibling)
                node.previousSibling.focus();
            }
        }
    }
    useEffect(() => {
        setActiveItem(myRef)
        callBack && callBack(selectedSearchItem)
    }, [selectedSearchItem, callBack])


    const getFilteredSearch = () => dataList.filter(item => item[title].match(new RegExp(searchText, 'i')))
    return (
        <DropdownContainer
            onKeyDown={(e) => moveFocus(e)}
            onClickCapture={() => {
                setActiveItem(myRef)
                setIsMenuOpen(!isMenuOpen);
                inputRef.current.focus()
            }}
            onBlurCapture={(e) => handleBlur(e)}
            ref={dropDownRef}>
            <DropdownWrapper
                tabIndex={0}>
                <InputBox>
                    <SearchBoxWrapper>
                        {searchBox ?
                            <SearchBox type="text"
                                ref={inputRef}
                                placeholder={selectedSearchItem[title]}
                                value={searchText}
                                onChange={e => setSearchText(e.target.value)} />
                            : <SearchBox ref={inputRef}>{selectedSearchItem[title]}</SearchBox>
                        }
                    </SearchBoxWrapper>
                    {/* <ArrowDown> <img src={arrowDown} alt="" /></ArrowDown> */}
                </InputBox>
            </DropdownWrapper>
            {isMenuOpen &&
                <DropdownItemsWrapper>
                    <DropdownItemsBox>
                        <DropdownItems ref={myRef}>
                            {/* <div className={style.example}>Example presets</div> */}
                            {
                                getFilteredSearch().map((element, index) => (
                                    <Item
                                        onClickCapture={() => {
                                            handleSelected(element[itemKey])
                                        }}
                                        tabIndex={index}
                                        onMouseOverCapture={(e) => {
                                            e.target.focus();
                                            setIsMenuOpen(true)
                                            setActiveItem(e.target);
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') handleSelected(element[itemKey])
                                        }}
                                        key={element[itemKey]}> {element[title]}</Item>
                                ))}
                        </DropdownItems>
                    </DropdownItemsBox>
                </DropdownItemsWrapper>
            }
        </DropdownContainer>

    )
}

export default Dropdown
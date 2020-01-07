import React, {useState, useRef} from 'react'

const TodoInput = () => {

    const inputRef = useRef()

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)

    }

    const handleClick = (e) => {
        console.log("click")
        setText('')
        inputRef.current.focus()
    }

    return (
        <div>
            <input type = 'text' value = {text} onChange = {handleChange} ref = {inputRef}></input>
            <button onClick = {handleClick}>SAVE</button>
        </div>
    )
}
export default TodoInput
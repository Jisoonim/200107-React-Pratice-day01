//출력용 컴포넌트
import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {

    const list = todos.map(t => <li key={t.tno}><Todo todo={t}></Todo></li>)



    return (
        <ul className = 'todoList'>
           {list}
        </ul>

    )
}

export default TodoList
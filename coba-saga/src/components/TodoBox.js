import React from 'react'
import TodoList from '../containers/TodoList'
import { Link } from 'react-router-dom'

export default function TodoBox(props) {
    return (
        < div >
            <h1>LIST TODO </h1>
            <Link to="/add" >Added</Link>
            <TodoList />
        </div >
    )
}

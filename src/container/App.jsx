import { useState } from 'react'

import { Button } from './button/Button'
import { TodoList } from './todoList/TodoList'

import { MdAddTask } from 'react-icons/md'
import './App.scss'

function App() {
    const [value, setValue] = useState('')
    const [list, setList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (value !== '') {
            setList((prev) => {
                return [...prev, { id: `${value}-${Date.now()}`, value }]
            })
            setValue('')
        }
    }

    const handleDelete = (id) => {
        const deletedList = list.filter((todo) => todo.id !== id)
        setList([...deletedList])
    }

    const setUpdate = (updatedTitle, id) => {
        setList(
            list.map((todo) => {
                if (todo.id === id) {
                    todo.value = updatedTitle
                }

                return todo
            }),
        )
    }

    return (
        <div className='App'>
            <div className='container'>
                <h1>Todo List App</h1>
                <form className='container__form' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <Button type='submit'>
                        <MdAddTask className='icon' />
                    </Button>
                </form>

                <ul>
                    {list.map((todo) => {
                        return (
                            <TodoList
                                {...todo}
                                key={todo.id}
                                handleDelete={handleDelete}
                                setUpdate={setUpdate}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default App

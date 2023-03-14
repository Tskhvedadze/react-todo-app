import { useState } from 'react'

import { Button } from '../button/Button'
import { TbBan } from 'react-icons/tb'
import { VscSymbolProperty, VscCheck } from 'react-icons/vsc'

import './TodoList.scss'

export const TodoList = ({ handleDelete, id, value, setUpdate }) => {
    const [taskIsDone, setTaskIsDone] = useState(false)
    const [editing, setEditing] = useState(false)

    const handleEditing = () => {
        if (!taskIsDone) {
            setEditing((prev) => !prev)
        }
    }

    const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
            setEditing(false)
        }
    }

    return (
        <li className='todoList'>
            <div>
                <span className={`${taskIsDone && 'done'}`}>
                    {editing ? '' : value}
                </span>
                <input
                    type='text'
                    value={value}
                    onChange={(e) => setUpdate(e.target.value, id)}
                    onKeyDown={handleUpdatedDone}
                    className={`${!editing ? 'viweMode' : 'textInput'}`}
                />
            </div>
            <div className='todoList__bnts'>
                <Button
                    onClick={() => handleDelete(id)}
                    disabled={taskIsDone || editing}
                >
                    <TbBan className='icon' />
                </Button>
                <Button onClick={handleEditing} disabled={taskIsDone}>
                    <VscSymbolProperty className='icon' />
                </Button>
                <Button
                    onClick={() => setTaskIsDone(!taskIsDone)}
                    disabled={editing}
                >
                    <VscCheck className='icon' />
                </Button>
            </div>
        </li>
    )
}

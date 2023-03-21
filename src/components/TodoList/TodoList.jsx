import { useState, useContext } from 'react'

import { Button, Input } from '..'
import { ListContext } from '../../context/list.Context'

import { TbBan } from 'react-icons/tb'
import { VscSymbolProperty, VscCheck } from 'react-icons/vsc'

import './TodoList.scss'

export const TodoList = ({ id, title, completed }) => {
    const [taskIsDone, setTaskIsDone] = useState(false)
    const [editing, setEditing] = useState(false)

    const { handleDelete, setUpdate } = useContext(ListContext)

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
                <span className={`${(completed || taskIsDone) && 'done'}`}>
                    {editing ? '' : title}
                </span>
                <Input
                    type='text'
                    value={title}
                    onChange={(e) => setUpdate(e.target.value, id)}
                    onKeyDown={handleUpdatedDone}
                    inputTypes={`${!editing ? 'hide' : 'edit'}`}
                />
            </div>
            <div className='todoList__bnts'>
                <Button
                    onClick={() => handleDelete(id)}
                    disabled={taskIsDone || editing || completed}
                >
                    <TbBan className='icon' />
                </Button>
                <Button
                    onClick={handleEditing}
                    disabled={taskIsDone || completed}
                >
                    <VscSymbolProperty className='icon' />
                </Button>
                <Button
                    onClick={() => setTaskIsDone(!taskIsDone)}
                    disabled={editing || completed}
                >
                    <VscCheck className='icon' />
                </Button>
            </div>
        </li>
    )
}

import React, { useState, useContext } from 'react'

import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

import { ListContext } from '../../context/listContext'

import { TbBan } from 'react-icons/tb'
import { VscSymbolProperty, VscCheck } from 'react-icons/vsc'

import './TodoList.scss'

type TodoListProps = {
    id: string
    title: string
    completed: boolean
}

export const TodoList = ({ id, title, completed }: TodoListProps) => {
    const [taskIsDone, setTaskIsDone] = useState(false)
    const [editing, setEditing] = useState(false)

    const { handleDelete, setUpdate } = useContext(ListContext)

    const handleEditing = () => {
        if (!taskIsDone) {
            setEditing((prev) => !prev)
        }
    }

    const handleUpdatedDone = (event: React.KeyboardEvent) => {
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
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setUpdate(event, id)
                    }
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

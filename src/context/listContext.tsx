import React, { createContext, useState } from 'react'

import { initContext, ListItem } from './initContext'

type ListProviderProps = {
    children: React.ReactNode
}

export const ListContext = createContext(initContext)

export const ListProvider = ({ children }: ListProviderProps) => {
    const [title, setTitle] = useState<string>('')
    const [list, setList] = useState<ListItem[]>([])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (title !== '') {
            setList((prev: ListItem[]) => {
                return [
                    { id: `${Date.now()}`, title, completed: false },
                    ...prev,
                ]
            })
            setTitle('')
        }
    }
    const handleDelete = (id: string) => {
        const deletedList = list?.filter((todo: ListItem) => todo.id !== id)
        setList([...deletedList])
    }
    const setUpdate = (
        event: React.ChangeEvent<HTMLInputElement>,
        id: string,
    ) => {
        setList(
            list.map((item: ListItem) => {
                if (item.id === id) {
                    item.title = event.target.value
                }
                return item
            }),
        )
    }

    return (
        <ListContext.Provider
            value={{
                title,
                setTitle,
                list,
                setList,
                handleSubmit,
                handleDelete,
                setUpdate,
            }}
        >
            {children}
        </ListContext.Provider>
    )
}

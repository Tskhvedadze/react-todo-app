import { createContext, useState, useEffect } from 'react'

export const ListContext = createContext({
    list: [],
    setList: () => {},
    title: '',
    setTitle: () => {},
    handleDelete: () => {},
    setUpdate: () => {},
    handleSubmit: () => {},
})

export const ListProvider = ({ children }) => {
    const [title, setTitle] = useState('')
    const [list, setList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title !== '') {
            setList((prev) => {
                return [{ id: `${Date.now()}`, title }, ...prev]
            })
            setTitle('')
        }
    }

    const handleDelete = (id) => {
        const deletedList = list.filter((todo) => todo.id !== id)
        setList([...deletedList])
    }

    const setUpdate = (updatedTitle, id) => {
        setList(
            list.map((item) => {
                if (item.id === id) {
                    item.title = updatedTitle
                }

                return item
            }),
        )
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((lists) => setList(lists))
    }, [])

    const values = {
        list,
        title,
        setTitle,
        handleSubmit,
        handleDelete,
        setUpdate,
    }
    return (
        <ListContext.Provider value={values}>{children}</ListContext.Provider>
    )
}

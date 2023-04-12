import { useContext } from 'react'

import { ListContext } from './context/listContext'

import { TodoList } from './components/TodoList/TodoList'
import { Button } from './components/Button/Button'
import { Input } from './components/Input/Input'

import { MdAddTask } from 'react-icons/md'

import './App.scss'

function App() {
    const { list, title, setTitle, handleSubmit } = useContext(ListContext)

    return (
        <div className='App'>
            <div className='container'>
                <h1>Todo List App</h1>
                <form className='container__form' onSubmit={handleSubmit}>
                    <Input
                        inputTypes='fill'
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <Button type='submit'>
                        <MdAddTask className='icon' />
                    </Button>
                </form>

                <ul className='lists'>
                    {list.map((item: any) => {
                        return <TodoList {...item} key={item.id} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default App

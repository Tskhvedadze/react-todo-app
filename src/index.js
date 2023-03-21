import React from 'react'
import ReactDOM from 'react-dom/client'

import { ListProvider } from './context/list.Context'
import App from './App'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ListProvider>
            <App />
        </ListProvider>
    </React.StrictMode>,
)

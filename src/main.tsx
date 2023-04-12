import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

import { ListProvider } from './context/listContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ListProvider>
            <App />
        </ListProvider>
    </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'

const $root = document.getElementById('root') as HTMLElement

$root.className = 'bg-light dark:bg-dark'

ReactDOM.createRoot($root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DynamicForm from './components/Q8/dynamicform.jsx'
import Button from './components/Q9/button.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button />
  </StrictMode>,
)

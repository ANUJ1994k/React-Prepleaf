import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FocusableInput from './components/Q7/Focusable-Input.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FocusableInput />
  </StrictMode>,
)

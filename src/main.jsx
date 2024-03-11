import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '../src/components/ThemeProvider';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
     <App />
    </ThemeProvider>
  </React.StrictMode>,
)

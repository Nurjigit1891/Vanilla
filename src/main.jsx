import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app/App.jsx'
import './index.css'
import './i18n'; // Подключение i18n
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

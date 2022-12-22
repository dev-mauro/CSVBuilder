import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { InfoProvider } from './context/InfoProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <InfoProvider>
      <App />
    </InfoProvider>
  // </React.StrictMode>,
)

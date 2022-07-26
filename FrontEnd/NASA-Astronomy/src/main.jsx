import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'

createRoot(document.getElementById('root')).render(
  <App />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
)

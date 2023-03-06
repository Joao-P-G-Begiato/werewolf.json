import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/header'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css'
import { Create } from './pages/create'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

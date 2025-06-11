import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Componen/Navbar'
import App from './App.jsx'
import FormContact from './FormContact.jsx'
import TentangKami from './TentangKami.jsx'
import CoffeeMenu from './Componen/CoffeeMenu'
import { BrowserRouter, Routes, Route } from 'react-router'

import Menu from './Menu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<FormContact />} />
        <Route path="/tentang" element={<TentangKami />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

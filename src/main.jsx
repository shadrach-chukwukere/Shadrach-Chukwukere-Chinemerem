import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-lazy-load-image-component/src/effects/blur.css';
import Portfolio from './pages/Portfolio'
import './stylesheet/Portfolio.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Portfolio}/>
    </Routes> 
    </BrowserRouter>
  </StrictMode>
)

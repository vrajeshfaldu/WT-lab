import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Home from './components/Home.jsx'
import Layout from './components/Layout.jsx'
import About from './components/About.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

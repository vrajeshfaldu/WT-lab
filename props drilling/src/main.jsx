import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { A } from './com/prop'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <A/>
  </StrictMode>,
)

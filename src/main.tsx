import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from "react-cookie";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <CookiesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CookiesProvider>)

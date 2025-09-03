
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Logo from './Logo.tsx';
import Login from './infrastructure/ui/Login.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Logo /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </>
  )
}

export default App

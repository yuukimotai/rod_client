
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Logo from './Logo.tsx';
import Login from './infrastructure/ui/Login.tsx';
import CreateAccount from './infrastructure/ui/CreateAccount.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Logo /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/create-account" element={ <CreateAccount /> } />
      </Routes>
    </>
  )
}

export default App

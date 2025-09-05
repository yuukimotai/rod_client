
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Logo from './Logo.tsx';
import Login from './infrastructure/ui/Login.tsx';
import CreateAccount from './infrastructure/ui/CreateAccount.tsx';
import Logout from './infrastructure/ui/Logout.tsx';
import CloseAccount from './infrastructure/ui/CloseAccount.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Logo /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/logout" element={ <Logout /> } />
        <Route path="/create-account" element={ <CreateAccount /> } />
        <Route path="/close-account" element={ <CloseAccount /> } />
      </Routes>
    </>
  )
}

export default App

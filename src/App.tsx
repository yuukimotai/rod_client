
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Logo from './Logo.tsx';
import Login from './infrastructure/ui/auth/Login.tsx';
import CreateAccount from './infrastructure/ui/auth/CreateAccount.tsx';
import Logout from './infrastructure/ui/auth/Logout.tsx';
import CloseAccount from './infrastructure/ui/auth/CloseAccount.tsx';
import CreatePost from './infrastructure/ui/post/CreatePost.tsx';
import ShowPosts from './infrastructure/ui/post/ShowPosts.tsx';
import ShowComments from './infrastructure/ui/comment/ShowComments.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Logo /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/logout" element={ <Logout /> } />
        <Route path="/create-account" element={ <CreateAccount /> } />
        <Route path="/close-account" element={ <CloseAccount /> } />
        <Route path="/show-posts" element={ <ShowPosts /> } />
        <Route path="/create-post" element={ <CreatePost /> } />
        <Route path="/show-comments" element={ <ShowComments /> } />
      </Routes>
    </>
  )
}

export default App

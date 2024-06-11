// App.js
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import CodeEditor from './pages/CodeEditor';
import Questions from './pages/Questions';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Room from './pages/Room'
import EditorPage from './pages/EditorPage';
import { Toaster } from 'react-hot-toast';
// import Profile from './Profile';

const App = () => {
  return (
    
    <Router>
      <div>
      <Toaster  position='top-center'></Toaster>
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path = '/Room' element ={<Room/>}/>  
        <Route path="/editor/:roomId" element={<EditorPage />}/>
        {/* <Route path="/code-editor" element={<CodeEditor />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

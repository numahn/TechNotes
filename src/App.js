import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Notes from './components/Notes';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
export default function App() {
  return (
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/notes" element={<Notes/>}/>
   </Routes>
  );
}
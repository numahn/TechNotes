import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Notes from './components/Notes';
import List from './components/List';
import ImageList from './components/ImageList';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [token, setToken] = useState("")
  

  return (
   <Routes>
      <Route path="/" element={<Home token={token} setToken={setToken}/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/notes" element={<Notes token={token} setToken={setToken}/>}/>
      <Route path="/list" element={<List token={token} setToken={setToken}/>}/>
      <Route path="/images" element={<ImageList token={token} setToken={setToken}/>}/>
   </Routes>
  );
}
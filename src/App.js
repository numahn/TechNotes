import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Notes from './components/Notes';
import List from './components/List';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/notes" element={<Notes/>}/>
      <Route path="/list" element={<List/>}/>
   </Routes>
  );
}
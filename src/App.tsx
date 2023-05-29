import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import About from "./pages/About";
import Secret from './secret/Secret';
import "./pages/styles/global.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/experiences" element={<Experiences/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Home/>}/>
      <Route path='/secret' element={<Secret/>}></Route>
    </Routes>
  )
}
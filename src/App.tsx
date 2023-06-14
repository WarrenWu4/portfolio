import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectInfo from './components/ProjectInfo';
import Experiences from "./pages/Experiences";
import ExpInfo from './components/ExpInfo';
import About from "./pages/About";
import Nav from './components/Nav';
import { useEffect } from 'react';

export default function App() {
  const loc = useLocation();

  // configure theme on initial load
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    // default theme
    if (theme === null) {
      document.documentElement.className = "light";
    }
    else {
      document.documentElement.className = localStorage.getItem("theme")!;
    }
  },[])

  return (

    <div className='w-screen flex flex-col justify-center items-center'>

      <Nav currLoc={loc.pathname}/>

      <AnimatePresence mode="wait">

        <Routes key={loc.pathname} location={loc}>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/projects/:id" element={<ProjectInfo/>}/>
          <Route path="/experiences" element={<Experiences/>}/>
          <Route path="/experiences/:id" element={<ExpInfo/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>

      </AnimatePresence>

    </div>
  )
}
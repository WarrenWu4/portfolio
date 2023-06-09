import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import About from "./pages/About";
import "./pages/styles/global.css";
import Nav from './components/Nav';

export default function App() {
  const loc = useLocation();

  return (

    <div className='page'>

      <Nav currLoc={loc.pathname}/>

      <AnimatePresence mode="wait">

        <Routes key={loc.pathname} location={loc}>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/experiences" element={<Experiences/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        
      </AnimatePresence>

    </div>
  )
}
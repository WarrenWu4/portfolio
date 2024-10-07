import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "./index.css"
import { Analytics } from '@vercel/analytics/react'

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from "./pages/HomePage";
import { ProjPage, ProjInfo } from "./pages/ProjPage";
import BlogPage, { BlogArticle } from './pages/BlogPage';
import MiscPage from './pages/MiscPage';
import Github from './components/github/Github';
import Spotify from './components/spotify/Spotify';
import ErrorPage from './pages/ErrorPage';
import MainLayout from "./layouts/MainLayout";
import Events from "./components/events/Events";
import TechStack from './components/misc/TechStack'
import Resume from './components/misc/Resume'
import Involvement from './components/misc/Involvement'
import Photos from './components/photos/Photos'
import Games from './components/games/Games'


export default function App() {

    const pathname:string = useLocation().pathname
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <MainLayout>

            <Routes>

                <Route path="/" element={<HomePage/>}/>
                <Route path="/techstack" element={<TechStack/>}/>
                <Route path="/involvements" element={<Involvement/>}/>
                <Route path="/resume" element={<Resume/>}/>

                <Route path='/proj' element={<ProjPage/>}/>
                <Route path='/proj/:proj_id' element={<ProjInfo/>}/>

                <Route path='/blog' element={<BlogPage/>}/>
                <Route path='/blog/:blog_id' element={<BlogArticle/>}/>

                <Route path='/misc' element={<MiscPage/>}/>
                <Route path='/misc/music' element={<Spotify/>}/>
                <Route path='/misc/github-stats' element={<Github/>}/>
                <Route path="/misc/timeline" element={<Events/>}/>
                <Route path="/misc/photos" element={<Photos/>}/>
                <Route path="/misc/games" element={<Games/>}/>

                <Route path='*' element={<ErrorPage/>}/>

            </Routes>

        </MainLayout>
    )
}  

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App /> 
            <Analytics/>
        </BrowserRouter>
    </React.StrictMode>,
)

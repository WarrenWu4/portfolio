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


export default function App() {

    const pathname:string = useLocation().pathname
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <MainLayout>

            <Routes>

                <Route path="/" element={<HomePage/>}/>

                <Route path='/proj' element={<ProjPage/>}></Route>
                <Route path='/proj/:proj_id' element={<ProjInfo/>}></Route>

                <Route path='/blog'>
                <Route path='/blog' element={<BlogPage/>}></Route>
                <Route path='/blog/:blog_id' element={<BlogArticle/>}></Route>
                </Route>

                <Route path='/misc'>
                <Route path='/misc' element={<MiscPage/>}></Route>
                <Route path='/misc/music' element={<Spotify/>}></Route>
                <Route path='/misc/github-stats' element={<Github/>}></Route>
                <Route path="/misc/timeline" element={<Events/>}></Route>
                </Route>

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

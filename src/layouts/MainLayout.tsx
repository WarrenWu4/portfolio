import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";

interface MainLayoutProps {
    children: string | JSX.Element | JSX.Element[];
}

export default function MainLayout({children}: MainLayoutProps) {
    return (
        <div className="max-w-3xl w-full flex flex-col items-center gap-y-12 px-4 sm:px-8 pt-8 pb-32">

            <Navbar/>

            {children}

            <Footer/>

        </div>
    )
}
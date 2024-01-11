import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";

interface MainLayoutProps {
    children: JSX.Element | JSX.Element[];
}

export default function MainLayout({children}: MainLayoutProps) {
    return (
        <div className="max-w-3xl w-full flex flex-col gap-y-8 items-center px-4 small:px-8 med:px-16">

            <Navbar/>

            {children}

            <Footer/>

        </div>
    )
}
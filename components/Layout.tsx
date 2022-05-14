//Components
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

interface LayoutProps {
    title?: string;
    className?: string;
    children: React.ReactNode;
}

const Layout = ({ title, className, children }: LayoutProps) => {
    const siteTitle: string = title || `Rijksstudio`;

    return (
        <>
            <Head>
                <title>
                    {title
                        ? siteTitle + " - Rijks Museum Mini App"
                        : "Rijks Museum Mini App"}
                </title>
                <meta name="description" content={"Rijks Museum Mini App"} />
            </Head>
            <div className="app">
                <nav className="nav-container">
                    <TopBar />
                    <Navbar />
                </nav>
                <main className={className}>{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;

//Components
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

interface LayoutProps {
  title?: string;
  parentClass?: string;
  children: React.ReactNode;
}

const Layout = ({ title, parentClass, children }: LayoutProps) => {
  const siteTitle: string = title || `Title`;

  return (
    <>
      <div className={parentClass}>
        <TopBar/>
        <Navbar />
        {children}
        <Footer/>
      </div>
    </>
  );
};

export default Layout;

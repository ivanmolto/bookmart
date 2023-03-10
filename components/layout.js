import Menu from "./menu";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-black">
      <Menu />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

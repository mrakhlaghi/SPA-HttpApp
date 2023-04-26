import Footer from "../component/Footer";
import Header from "../component/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section className="layout-content">{children}</section>
      <Footer />
    </>
  );
};

export default Layout;

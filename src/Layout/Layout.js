import Footer from "../component/Footer";
import Header from "../component/Header";

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <Header />
      <section className="layout-content">{children}</section>
      <Footer />
    </section>
  );
};

export default Layout;

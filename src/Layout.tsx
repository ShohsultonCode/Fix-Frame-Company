import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import FooterLast from "components/layouts/Lastfooter";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer/>
      <FooterLast/>
    </>
  );
};

export default Layout;

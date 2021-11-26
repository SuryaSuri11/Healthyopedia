import Footer from "./Footer";
import './Layout.css';
import NavbarResize from "./NavbarResize";
import { useLocation } from 'react-router-dom';

function Layout(props) {
  const location = useLocation();
  var clsName="";
  if (location.pathname == '/') {
    clsName = "main-homepage";
  }
  else {
    clsName = 'main';
  }
  return (
    <div >
      <NavbarResize />
      <main class={clsName}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

import './pages/HomePage';
import "./pages/ShopPage";
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/Contact';
import BlogPage from './pages/BlogPage';
import AboutUs from './pages/AboutUs';
import LoginPage from './pages/Login';
import Onlineappointment from './pages/OnlineAppointment';
import Dashboard from './pages/DashBoard';
import NavbarResize from './components/layout/NavbarResize';
import Footer from './components/layout/Footer';
import Layout from './components/layout/Layout';
function App() {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/shoppage'>
            <ShopPage />
          </Route>
          <Route path='/contactpage'>
            <ContactPage />
          </Route>
          <Route path='/blogpage'>
            <BlogPage />
          </Route>
          <Route path='/aboutus'>
            <AboutUs />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path="/onlineappointment">
            <Onlineappointment />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

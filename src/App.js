import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import './components/Css/style.css'
import Empower from './components/Empower/Empower';
import Evolve from './components/Evolve/Evolve';
import ExistingSystem from './components/ExistingSystem/ExistingSystem';
import Security from './components/Security/Security';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <div className="App">
      <Header/>
      <Empower/>
      <Evolve/>
      <ExistingSystem/>
      <Security/>
      <Footer/>
    </div>
  );
}

export default App;

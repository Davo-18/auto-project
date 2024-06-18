import Header from './components/Header';
import Navigation from './components/Navigation';
import Info from './components/Info';
import About from './components/About';
import Cars from './components/Cars';
import Buy from './components/Buy';
import Get from './components/Get';
import Reviews from './components/Reviews';
import Feedback from './components/Feedback';
import Feedback2 from './components/Feedback2';
import Footer from './components/Footer';
import Modal from './components/Modal';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Navigation/> */}
      <Info/>
      <About/>
      <Cars/>
      <Buy/>
      <Get/>
      <Reviews/>
      <Feedback/>
      <Feedback2/>
      <Footer/>
    </div>
  );
}

export default App;

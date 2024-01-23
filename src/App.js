import './App.css';
import WelcomeSeciton from './components/WelcomeSeciton';
import Footer from './components/Footer';
import Header from './components/Header';
import TransctionSteps from './components/TransctionSteps';
import BuySellSection from './components/BuySellSection';
import SliderMain from './components/SliderSection';
import AccordionSection from './components/AccordionSection';

function App() {
  return (
    <>
      <Header />
      <BuySellSection/>
      <TransctionSteps />
      <AccordionSection />
      <SliderMain />
      <Footer/>
    </>
  );
}

export default App;

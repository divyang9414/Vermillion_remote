import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Our_Doctors from './components/our_doctors/Our_Doctors';
import Testimonial from './components/testimonials/Testimonial';
import Contact_us from './components/contact_us/Contact_us';
import Help from './components/help/Help';
import Newsletter from './components/news_letter/Newsletter';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Our_Doctors />
      <Testimonial />
      <Contact_us />
      <Help />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;

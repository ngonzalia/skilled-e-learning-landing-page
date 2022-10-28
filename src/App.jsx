// components
import Nav from './components/Nav';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';

// styles
import './styles/main.css';


const App = () => {
  return (
    <div className='App'>
      <header className='header'>
        <Nav />
        <Hero />
        <Cards />
        <Footer />
      </header>
    </div>
  );
}

export default App;

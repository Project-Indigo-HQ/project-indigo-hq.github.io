import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Chainlit from './components/Chainlit';
import Footer from './components/Footer';

function App() {
  return (
    <div className='body'>
      <Header /> 
      <Navbar />
      <Chainlit />
      <Footer />
    </div>
  );
};

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './components/Home';  
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Category from './components/Category';
import Footer from './components/Footer';
import Newarrivals from './components/Newarrivals';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Category />
      <Newarrivals/>
      <Footer />
      
    </div>
  );
}


export default App;

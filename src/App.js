import logo from './logo.svg';
import './App.css';
import Home from './components/Home';  
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      
    </div>
  );
}


export default App;

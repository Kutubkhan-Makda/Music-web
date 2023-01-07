import './App.css';
import Download from './Components/Download';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Search from './Components/Search';

function App() {
  return (
    <div className="App text-white overflow-hidden">
      <Header/>
      <Hero/>
      <Experience/>
      <Search/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;

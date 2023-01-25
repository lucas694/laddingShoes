import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Group1 from "./Components/Group1";
import TrendingShoes from "./Components/TrendingShoes";
import TopCollection from "./Components/TopCollection";
import MostPopular from "./Components/MostPopular";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Group1/>
      <TrendingShoes/>
      <TopCollection/>
      <MostPopular/>
      <Footer/>
    </div>
  );
}

export default App;

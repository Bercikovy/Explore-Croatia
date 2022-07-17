import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Posts from "./Components/Posts";
import Map from "./Components/Map";
import MapHeader from "./Components/MapHeader";
import NavMobile from "./Components/NavMobile";
import Burger from "./Components/Burger";
import WeatherWidget from "./Components/WeatherWidget";
import SortFilterSearch from "./Components/SortFilterSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Posts />
        <Footer />
        <SortFilterSearch/>
      </header>
    </div>
  );
}

export default App;
